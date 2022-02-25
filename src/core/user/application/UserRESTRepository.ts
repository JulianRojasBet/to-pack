import User from "../domain/User";
import UserRepository from "../domain/UserRepository";

export default class UserRESTRepository implements  UserRepository {
  async signup(): Promise<User> {
    console.log('sigup')
    return new User('id', 'username', 'example@mail.com')
  }
  async login(username: string, password: string): Promise<User> {
    console.log('login', username)
    return new User('id', 'username', 'example@mail.com')
  }
  async logout(): Promise<void> {
    console.log('logout')
    return
  }
}