import supabase from "@/utils/supabase";

import { Bag } from "../types";
import { TABLE_NAME } from "./constants";

const query = `
  *,
  going: goingListId (*),
  comeback: comebackListId (*)
`;

async function list() {
  const { data, error } = await supabase.from<Bag>(TABLE_NAME).select(query);

  if (error) throw error;

  return data;
}

export default list;
