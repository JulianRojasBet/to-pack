import Item from "@/core/item/domain/Item";
import type List from "./List";
import type ListRepository from "./ListRepository";

export default class ListService {
  constructor (
    private repo: ListRepository
  ) {}

  create(list: List): Promise<List> {
    return this.repo.create(list)
  }
  retrieve(id: UUID): Promise<List> {
    return this.repo.retrieve(id)
  }
  addItem(list: List, item: Item): void {
    this.repo.addItem(list, item)
  }
}