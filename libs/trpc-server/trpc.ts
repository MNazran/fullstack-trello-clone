// #1. Initialize tRPC exactly once per application. This is the only place where initTRPC.create() called.

import { initTRPC } from '@trpc/server'

export const t = initTRPC.create()

export const router = t.router
export const publicProcedure = t.procedure
