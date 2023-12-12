'use client'

import { useState } from 'react'
import { signIn } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import { Formik, Form, Field, ErrorMessage } from 'formik'

import { INITIAL_VALUES } from './config/constants'
import { TSigninCredentials } from './model/types'
import { validationSchema } from './model/validation'

export function SigninForm() {
  const [authErrStatus, setAuthErrStatus] = useState<boolean>(false)
  const router = useRouter()

  async function onSubmit({ email, password }: TSigninCredentials) {
    setAuthErrStatus(false)

    const res = await signIn('credentials', {
      email,
      password,
      redirect: false,
    })

    if (res && !res.error) {
      router.push('/profile')
    } else {
      setAuthErrStatus(true)
    }
  }

  return (
    <Formik
      initialValues={INITIAL_VALUES}
      onSubmit={onSubmit}
      validationSchema={validationSchema}
    >
      <Form className="p-6">
        {authErrStatus && (
          <p className="mb-4 text-red-500">Неправильный email или пароль!</p>
        )}

        <div className="mb-4">
          <label htmlFor="email" className="block text-sm mb-2">
            Email:<span className="text-red-500">*</span>
          </label>
          <Field
            id="email"
            type="email"
            name="email"
            className="border border-black p-1 text-sm leading-none"
          />
          <ErrorMessage
            component="p"
            name="email"
            className="text-xs text-red-500"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="password" className="block text-sm mb-2">
            Пароль:<span className="text-red-500">*</span>
          </label>
          <Field
            id="password"
            type="password"
            name="password"
            className="border border-black p-1 text-sm leading-none"
          />
          <ErrorMessage
            component="p"
            name="password"
            className="text-xs text-red-500"
          />
        </div>

        <button type="submit" className="bg-slate-400 px-4 py-2">
          Login
        </button>
      </Form>
    </Formik>
  )
}
