import { User } from './user.type'
import { SuccessResponseAPI } from './utils.type'

export type AuthResponse = SuccessResponseAPI<{
  access_token: string
  refresh_token: string
  expires_refresh_token: number
  expires: number
  user: User
}>
