import * as yup from 'yup'
import { VALIDATION_MESSAGES } from '../config/constants'

export const validationSchema = yup.object({
  email: yup
    .string()
    .email(VALIDATION_MESSAGES.email.type)
    .required(VALIDATION_MESSAGES.email.required),
  password: yup.string().required(VALIDATION_MESSAGES.password.required),
})
