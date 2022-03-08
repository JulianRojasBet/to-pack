import type Item from "./Item";
import type ItemRepository from "./ItemRepository";

export default class ItemService {
  constructor (
    private repo: ItemRepository
  ) {}

  create(item: Item): Promise<Item> {
    return this.repo.create(item)
  }
  update(id: UUID, item: Item): Promise<Item> {
    return this.repo.update(id, item)
  }
  delete(id: UUID): void {
    this.repo.delete(id)
  }
  toggle(item: Item): void {
    this.repo.toggle(item)
  }
}