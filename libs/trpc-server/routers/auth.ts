// #2. Defining the router

//import { isAuthed } from '../middleware'
import { privateProcedure, publicProcedure, router, t } from '../trpc'
import { formSchemaRegister } from '@fullstack-trello-clone/forms/src/schemas'
import { prisma } from '@fullstack-trello-clone/db'
import { TRPCError } from '@trpc/server'
import * as bcrypt from 'bcryptjs'
import { v4 as uuid } from 'uuid'
import { AuthProviderType } from '@fullstack-trello-clone/db/types'
import { sign } from 'jsonwebtoken'

export const authRoutes = router({
  users: privateProcedure.query(({ ctx }) => {
    return prisma.user.findMany()
  }),

  //register user
  registerwithCredentials: publicProcedure
    .input(formSchemaRegister)
    .mutation(async ({ input: { email, password, image, name } }) => {
      const existingUser = await prisma.credentials.findUnique({
        where: {
          email,
        },
      })
      if (existingUser) {
        throw new TRPCError({
          code: 'FORBIDDEN',
          message: 'User already exists',
        })
      }

      const salt = bcrypt.genSaltSync(10)
      const passwordHash = bcrypt.hashSync(password, salt)

      const uid = uuid()

      const user = await prisma.user.create({
        data: {
          uid,
          name,
          image,
          Credentials: { create: { email, passwordHash } },
          AuthProvider: { create: { type: AuthProviderType.CREDENTIALS } },
        },
      })

      const token = sign({ uid: user.uid }, process.env.NEXTAUTH_SECRET || '')
      return { user, token }
    }),
})
