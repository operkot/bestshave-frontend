import fetcher from './fetcher'
import { TSigninCredentials } from '@/components/signin-form/model/types'

export default {
  auth: {
    signin: (creds: TSigninCredentials) =>
      fetcher({
        url: '/auth/local',
        method: 'POST',
        data: {
          identifier: creds.email,
          password: creds.password,
        },
      }),
  },
  users: {
    me: (token: string) =>
      fetcher({
        url: '/users/me',
        headers: { Authorization: `Bearer ${token}` },
      }),
  },
}
