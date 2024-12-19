'use client'

import { trpcClient } from '@fullstack-trello-clone/trpc-client/src/client'
import Board from '@/components/Board'
import { signOut, useSession } from 'next-auth/react'
import Link from 'next/link'

export default function Home() {
  const { data, isLoading } = trpcClient.auth.users.useQuery()
  const { data: userData } = useSession()

  console.log('Session Data:', userData)
  return (
    <div>
      <main>
        Hello {JSON.stringify(data)}
        <div>
          {userData?.user ? (
            <button onClick={() => signOut()}>signout</button>
          ) : (
            <Link href="/signin">Sign in</Link>
          )}
        </div>
      </main>

      {/* <Board /> */}
    </div>
  )
}
