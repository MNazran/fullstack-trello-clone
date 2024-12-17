import { inferRouterOutputs } from '@trpc/server'
import { router } from '../trpc'
import { authRoutes } from './auth'

export const appRouter = router({
  auth: authRoutes,
})

export type AppRouter = typeof appRouter
export type AppRouterType = inferRouterOutputs<AppRouter> //client will know what type of data to expect from the server by AppRouterType

//This file is the entry point for all the routers in our application. We import all the routers we have created and export them as a single router. We also export the type of the router so we can use it in other parts of our application.
//both of these files are in the same directory, so we can import them directly

//trpc need both frontend and backend in Typsecript and in monorepo, because they will be sharing appRouter alot
