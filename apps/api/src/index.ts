import cors from 'cors'
import express from 'express'

import { trpcExpress } from '@fullstack-trello-clone/trpc-server'

const app = express()
app.use(express.json())
app.use(cors())

app.get('/', (req, res) => {
  res.send('Hello World Again!')
})

// Here trpc and express are connected
app.use('/trpc', trpcExpress)

app.listen(8080, () => {
  console.log('Server is running on port 8080')
})
