import supabase from "@/utils/supabase";

import { Item } from "../types";
import { TABLE_NAME } from "./constants";

async function list() {
  const { data, error } = await supabase.from<Item>(TABLE_NAME).select("*");

  if (error) throw error;

  return data;
}

export default list;
