import type User from "./User";
import type UserRepository from "./UserRepository";

export default class UserService {
  constructor (
    private repo: UserRepository
  ) {}

  sigup(): Promise<User> {
    return this.repo.signup()
  }
  login(username: string, password: string): Promise<User> {
    return this.repo.login(username, password)
  }
  logout(): void {
    this.repo.logout()
  }
}