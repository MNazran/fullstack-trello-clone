// #2. Defining the router

//import { isAuthed } from '../middleware'
import { privateProcedure, publicProcedure, router, t } from '../trpc'

import { prisma } from '@fullstack-trello-clone/db'

export const authRoutes = router({
  users: privateProcedure.query(({ ctx }) => {
    return prisma.user.findMany()
  }),
})
