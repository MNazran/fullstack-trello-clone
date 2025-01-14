'use client'

import { userFormSignIn } from '@fullstack-trello-clone/forms/src/signin'
import { signIn } from 'next-auth/react'
import { AuthLayout } from '../organisms/AuthLayout'
import { Label } from '../atoms/label'
import { Button } from '../atoms/button'
import { Input } from '../atoms/input'
import Link from 'next/link'

export function SignIn() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = userFormSignIn()
  console.log('errors', errors)
  return (
    <AuthLayout title="Sign In">
      <form
        onSubmit={handleSubmit(async ({ email, password }) => {
          signIn('credentials', {
            email,
            password,
            callbackUrl: '/',
          })
        })}
      >
        <Label title="Email" error={errors.email?.message}>
          <Input placeholder="email" {...register('email')} />
        </Label>
        <Label title="Password" error={errors.password?.message}>
          <Input
            placeholder="password"
            {...register('password')}
            type="password"
          />
        </Label>
        <Button type="submit">Sign In</Button>
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
          <Link href="/register">Register</Link>
        </div>
      </div>
    </AuthLayout>
  )
}
