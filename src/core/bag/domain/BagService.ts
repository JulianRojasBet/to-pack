import type Bag from "./Bag";
import type BagRepository from "./BagRepository";

export default class BagService {
  constructor (
    private repo: BagRepository
  ) {}

  create(bag: Bag): Promise<Bag> {
    return this.repo.create(bag)
  }
  retrieve(id: UUID): Promise<Bag> {
    return this.repo.retrieve(id)
  }
  list(): Promise<Bag[]> {
    return this.repo.list()
  }
  update(id: UUID, bag: Bag): Promise<Bag> {
    return this.repo.update(id, bag)
  }
  delete(id: UUID): void {
    this.repo.delete(id)
  }
  addList(): void {
    this.repo.addList()
  }
}