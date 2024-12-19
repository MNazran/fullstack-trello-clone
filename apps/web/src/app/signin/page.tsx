'use client'

import { userFormSignIn } from '@fullstack-trello-clone/forms/src/signin'
import { signIn } from 'next-auth/react'

export default function Register() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = userFormSignIn()
  console.log('errors', errors)
  return (
    <div>
      <form
        onSubmit={handleSubmit(async ({ email, password }) => {
          signIn('credentials', {
            email,
            password,
            callbackUrl: '/',
          })
        })}
      >
        <input {...register('email')} />
        <input {...register('password')} type="password" />
        <button type="submit">Sign In</button>
      </form>
      <div>
        <button
          onClick={() => {
            signIn('google', { callbackUrl: '/' })
          }}
        >
          Google
        </button>
      </div>
    </div>
  )
}
