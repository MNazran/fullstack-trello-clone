import { Register } from '@fullstack-trello-clone/ui/src/components/templates/Register'

export default function RegisterPage() {
  return <Register />
}

// 'use client'

// import { userFormRegister } from '@fullstack-trello-clone/forms/src/register'
// import { trpcClient } from '@fullstack-trello-clone/trpc-client/src/client'
// import { sign } from 'crypto'
// import { signIn } from 'next-auth/react'
// import { callbackify } from 'util'

// export default function Register() {
//   const {
//     register,
//     handleSubmit,
//     formState: { errors },
//   } = userFormRegister()
//   console.log('errors', errors)
//   const { mutateAsync } = trpcClient.auth.registerwithCredentials.useMutation()
//   return (
//     <form
//       onSubmit={handleSubmit(async (data) => {
//         // console.log('data', data)
//         // await mutateAsync(data) //trcp mutation and react hook form use same zod schema

//         console.log('Submitted Data:', data)
//         // const response = await mutateAsync(data)
//         // console.log('Server Response:', response) // Log response here

//         const user = await mutateAsync(data)
//         if (user?.user) {
//           signIn('credentials', {
//             email: data.email,
//             password: data.password,
//             callbackUrl: '/',
//           })
//         }
//       })}
//     >
//       <input {...register('email')} />
//       <input {...register('password')} type="password" />
//       <input {...register('name')} />
//       <button type="submit">Register</button>
//     </form>
//   )
// }
