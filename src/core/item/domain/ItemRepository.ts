import type Item from './Item'

export default interface ItemRepository {
  create(item: Item): Promise<Item>;
  update(id: UUID, item: Item): Promise<Item>;
  delete(id: UUID): Promise<void>;
  toggle(item: Item): Promise<void>;
}