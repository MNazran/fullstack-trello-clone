// #2. Defining the router

//import { isAuthed } from '../middleware'
import { privateProcedure, publicProcedure, router, t } from '../trpc'
import {
  formSchemaRegister,
  formSchemaSignIn,
  formSchemaUser,
  schemaRegisterWithProvider,
} from '@fullstack-trello-clone/forms/src/schemas'
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

  user: publicProcedure
    .input(formSchemaUser)
    .query(({ input: { uid }, ctx }) => {
      return prisma.user.findUnique({ where: { uid } })
    }),

  signin: publicProcedure
    .input(formSchemaSignIn)
    .mutation(async ({ ctx, input: { email, password } }) => {
      const credentials = await prisma.credentials.findUnique({
        where: {
          email,
        },
        include: { user: true },
      })

      if (!credentials) {
        throw new Error('Invalid email or password')
      }
      if (!bcrypt.compareSync(password, credentials.passwordHash)) {
        throw new Error('Invalid email or password')
      }
      const token = sign(
        { uid: credentials.uid },
        process.env.NEXTAUTH_SECRET || '',
      )
      return { user: credentials.user, token }
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

  //register user with provider
  registerWithProvider: publicProcedure
    .input(schemaRegisterWithProvider)
    .mutation(async ({ ctx, input }) => {
      const { type, uid, image, name } = input
      const user = await prisma.user.create({
        data: {
          uid,
          image,
          name,
          AuthProvider: {
            create: {
              type,
            },
          },
        },
      })
      const token = sign({ uid: user.uid }, process.env.NEXTAUTH_SECRET || '')
      return { user, token }
    }),
})
