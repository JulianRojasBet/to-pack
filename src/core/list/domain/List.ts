import Item from "@/core/item/domain/Item";

export default class List {
    constructor(
      public id: UUID,
      public name: string,
      public createdAt: TimeStamp,
      public updatedAt: TimeStamp,
      public items: Item[],
    ) {}
  }
  