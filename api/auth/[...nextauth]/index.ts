import NextAuth, { type NextAuthOptions } from 'next-auth'
import { authOptions } from '@repo/lib/auth'

const handler = NextAuth(authOptions as NextAuthOptions)

export const dynamic = 'force-dynamic'

export { handler as GET, handler as POST }
