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
      {/* Hello {JSON.stringify(data)} */}
      <div>
        {userData?.user ? (
          <div>
            <button onClick={() => signOut()}>signout</button>
            <Board />
          </div>
        ) : (
          <Link href="/signin">Sign in</Link>
        )}
      </div>

      {/* <Board /> */}
    </div>
  )
}
