export default class Bag {
  constructor(
    public id: UUID,
    public name: string,
    public createdAt: TimeStamp,
    public updatedAt: TimeStamp,
  ) {}
}

