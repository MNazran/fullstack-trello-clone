import { createTRPCProxyClient, httpBatchLink } from '@trpc/client'
import { AppRouter } from '@fullstack-trello-clone/trpc-server/routers'

export const trpc = createTRPCProxyClient<AppRouter>({
  links: [
    httpBatchLink({
      url: 'http://localhost:8080/trpc',
      async headers() {
        return {
          authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.qrnixtaueCvzXoX9ly2649b801RAkjyRlt9rfuKsdLc`,
        }
      },
    }),
  ],
})
