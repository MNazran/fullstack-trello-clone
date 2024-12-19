import { TRPCError } from '@trpc/server'
import { t } from './trpc'
import { JwtPayload, verify } from 'jsonwebtoken'
//import { Role } from './types'
//import { authorizeUser } from './utils'

export const isAuthed = () =>
  t.middleware(async (opts) => {
    const { token } = opts.ctx
    if (!token) {
      throw new TRPCError({
        code: 'FORBIDDEN',
        message: 'Token not found',
      })
    }
    console.log('Token:', token)
    let uid

    try {
      const user = await verify(token, process.env.NEXTAUTH_SECRET || '')
      uid = (user as JwtPayload).uid
    } catch (error) {
      throw new TRPCError({
        code: 'FORBIDDEN',
        message: 'Invalid token',
      })
    }

    return opts.next({ ...opts, ctx: { ...opts.ctx, uid } })
  })
