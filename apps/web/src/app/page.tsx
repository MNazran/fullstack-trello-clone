'use client'

import { trpcClient } from '@fullstack-trello-clone/trpc-client/src/client'
import Board from '@/components/Board'

export default function Home() {
  //const { data, isLoading } = trpcClient.auth.users.useQuery()
  return (
    <div>
      <Board />
    </div>
  )
}
