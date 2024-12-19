import NextAuth from 'next-auth'
import { authOptions } from '@fullstack-trello-clone/networks/src/auth/authOptions'

const handler = NextAuth(authOptions)

export { handler as GET, handler as POST }
