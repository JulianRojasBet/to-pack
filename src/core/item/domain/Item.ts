export default class Item {
  constructor(
    public id: UUID,
    public name: string,
    public packed: boolean,
    public createdAt: TimeStamp,
    public updatedAt: TimeStamp,
  ) {}
}
