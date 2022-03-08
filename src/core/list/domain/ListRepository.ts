import Item from '@/core/item/domain/Item';
import type List from './List'

export default interface ListRepository {
  create(list: List): Promise<List>;
  retrieve(id: UUID): Promise<List>;
  addItem(list: List, item: Item): Promise<void>;
}