import fetcher from './fetcher'

export default {
  auth: {
    signin: (creds: any) =>
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
