import type Bag from './Bag'

export default interface BagRepository {
  create(bag: Bag): Promise<Bag>;
  retrieve(id: UUID): Promise<Bag>;
  list(): Promise<Bag[]>;
  update(id: UUID, bag: Bag): Promise<Bag>;
  delete(id: UUID): Promise<void>;
  addList(): Promise<void>;
}