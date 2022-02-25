import type User from './User'

export default interface UserRepository {
  signup(): Promise<User>;
  login(username: string, password: string): Promise<User>;
  logout(): Promise<void>;
}