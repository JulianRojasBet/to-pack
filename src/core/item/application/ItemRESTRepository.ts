import Item from "../domain/Item";
import ItemRepository from "../domain/ItemRepository";

export default class ItemRESTRepository implements  ItemRepository {
  async create(item: Item): Promise<Item> {
    console.log('Item create')
    return item
  }
  async update(id: UUID, item: Item): Promise<Item> {
    console.log('Item update')
    return item
  }
  async delete(id: UUID): Promise<void> {
    console.log('Item delete')
    return
  }
  async toggle(item: Item): Promise<void> {
    console.log('Item toggle')
    return
  }
}