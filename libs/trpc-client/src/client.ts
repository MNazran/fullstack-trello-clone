import { createTRPCReact } from '@trpc/react-query'
import { AppRouter } from '@fullstack-trello-clone/trpc-server/routers'

export const trpcClient = createTRPCReact<AppRouter>()
