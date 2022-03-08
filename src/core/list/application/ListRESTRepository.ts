import Item from "@/core/item/domain/Item";
import List from "../domain/List";
import ListRepository from "../domain/ListRepository";

export default class ListRESTRepository implements  ListRepository {
  async create(item: List): Promise<List> {
    console.log('List create')
    return item
  }
  async retrieve(id: string): Promise<List> {
    console.log('List update')
    return new List(id, 'name', 0, 0, [])
  }
  async addItem(list: List, item: Item): Promise<void> {
    console.log('List addItem')
    return
  }
}