import { List } from "@/core/list/types";

export type Bag = {
  id: UUID;
  name: string;
  createdAt: TimeStamp;
  updatedAt: TimeStamp;
  going: List;
  comeback: List;
};
