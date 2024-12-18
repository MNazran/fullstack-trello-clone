// #2. Defining the router

import { publicProcedure, router } from '../trpc'

import { prisma } from '@fullstack-trello-clone/db'

export const authRoutes = router({
  users: publicProcedure.query(() => {
    return prisma.user.findMany()
  }),
})

// export const authRouter = router({
//     login: publicProcedure.mutation({
//         async resolve({ input }) {
//         const user = await prisma.user.findFirst({
//             where: {
//             email: input.email,
//             },
//         })

//         if (!user) {
//             throw new Error('User not found')
//         }

//         return { user }
//         },
//     }),
// })
