'use client'

import { userFormRegister } from '@fullstack-trello-clone/forms/src/register'
import { trpcClient } from '@fullstack-trello-clone/trpc-client/src/client'
import { signIn } from 'next-auth/react'
import { AuthLayout } from '../organisms/AuthLayout'
import { Label } from '../atoms/label'
import { Button } from '../atoms/button'
import Link from 'next/link'
import { Input } from '../atoms/input'

export function Register() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = userFormRegister()
  console.log('errors', errors)
  const { mutateAsync } = trpcClient.auth.registerwithCredentials.useMutation()
  return (
    <AuthLayout title="Register">
      <form
        onSubmit={handleSubmit(async (data) => {
          // console.log('data', data)
          // await mutateAsync(data) //trcp mutation and react hook form use same zod schema

          console.log('Submitted Data:', data)
          // const response = await mutateAsync(data)
          // console.log('Server Response:', response) // Log response here

          const user = await mutateAsync(data)
          if (user?.user) {
            signIn('credentials', {
              email: data.email,
              password: data.password,
              callbackUrl: '/',
            })
          }
        })}
      >
        <Label title="Email" error={errors.email?.message}>
          <Input {...register('email')} />
        </Label>
        <Label title="Password" error={errors.password?.message}>
          <Input {...register('password')} type="password" />
        </Label>
        <Label title="Name" error={errors.name?.message}>
          <Input {...register('name')} />
        </Label>
        <Button type="submit">Submit</Button>
      </form>
      <div className="mt-10">
        Sign in with {''}
        <button
          onClick={() => {
            signIn('google', { callbackUrl: '/' })
          }}
          className="underline underline-offset-8"
        >
          Google
        </button>
        <div className="mt-4">
          <Link href="/signin">Already have an account</Link>
        </div>
      </div>
    </AuthLayout>
  )
}
