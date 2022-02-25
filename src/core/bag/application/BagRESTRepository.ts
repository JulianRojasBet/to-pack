import Bag from "../domain/Bag";
import BagRepository from "../domain/BagRepository";

export default class BagRESTRepository implements  BagRepository {
  async create(bag: Bag): Promise<Bag> {
    console.log('Bag create')
    return bag
  }
  async retrieve(id: UUID): Promise<Bag> {
    console.log('Bag retrieve')
    return new Bag(id, 'name', 0, 0)
  }
  async list(): Promise<Bag[]> {
    console.log('Bag list')
    return [new Bag('id', 'name', 0, 0)]
  }
  async update(id: UUID, bag: Bag): Promise<Bag> {
    console.log('Bag update')
    return bag
  }
  async delete(id: UUID): Promise<void> {
    console.log('Bag delete')
    return
  }
  async addList(): Promise<void> {
    console.log('Bag addList')
    return
  }
}