import supabase from "@/utils/supabase";

import { Bag } from "../types";
import { TABLE_NAME } from "./constants";

async function list() {
  const { data, error } = await supabase.from<Bag>(TABLE_NAME).select("*");

  if (error) throw error;

  return data;
}

export default list;
