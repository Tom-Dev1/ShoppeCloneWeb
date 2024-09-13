import { User } from './user.type'
import { ResponseAPI } from './utils.type'

export type AuthResponse = ResponseAPI<{
  access_token: string
  refresh_token: string
  expires_refresh_token: number
  expires: number
  user: User
}>
