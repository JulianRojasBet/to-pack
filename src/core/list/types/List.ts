import { Item } from "@/core/item/types";

export type List = {
  id: UUID;
  name: string;
  createdAt: TimeStamp;
  updatedAt: TimeStamp;
  items: Item[];
}
