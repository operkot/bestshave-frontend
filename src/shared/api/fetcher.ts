import axios from 'axios'

const axsinstance = axios.create({
  baseURL: `${process.env.STRAPI_URL}`,
  // headers: {
  //   Authorization: `Bearer ${import.meta.env.VITE_API_TOKEN}`,
  // },
})

export default function ({
  url = '/',
  method = 'GET',
  params = {},
  data = {},
  headers = {},
}) {
  return axsinstance({ url, method, headers, params, data }).then(
    res => res.data
  )
}
