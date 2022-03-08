import List from "@/core/list/domain/List";

export default class Bag {
  constructor(
    public id: UUID,
    public name: string,
    public createdAt: TimeStamp,
    public updatedAt: TimeStamp,
    public going: List,
    public comeback: List
  ) {}
}

