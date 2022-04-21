import supabase from "@/utils/supabase";

import { List } from "@/core/list/types";
import { TABLE_NAME } from "@/core/list/services/constants";

async function list() {
  const { data, error } = await supabase.from<List>(TABLE_NAME).select("*");

  if (error) throw error;

  return data;
}

export default list;
