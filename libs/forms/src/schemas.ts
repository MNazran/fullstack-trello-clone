import { z } from 'zod'
import { AuthProviderType } from '../../db/types'

export const formSchemaRegister = z.object({
  email: z.string().email(),
  password: z.string().min(6),
  name: z.string().optional(),
  image: z.string().optional(),
})

export const formSchemaUser = z.object({
  uid: z.string(),
})

export const formSchemaSignIn = formSchemaRegister.pick({
  email: true,
  password: true,
})

export const schemaRegisterWithProvider = z.object({
  uid: z.string(),
  name: z.string().optional(),
  image: z.string().optional(),
  type: z.nativeEnum(AuthProviderType),
})

// New schemas for task management
export const schemaCreateList = z.object({
  name: z.string(),
})

export const schemaCreateTask = z.object({
  content: z.string(),
  taskListId: z.string(),
})

export const schemaUpdateTaskOrder = z.array(
  z.object({
    id: z.string(),
    index: z.number(),
    taskListId: z.string(),
  }),
)

export const schemaDeleteList = z.object({
  id: z.string(), // The ID of the task list to delete
})

export const schemaDeleteTask = z.string() // The ID of the task to delete
