import supabase from "@/utils/supabase";

import { Bag } from "../types";
import { TABLE_NAME } from "./constants";

const query = `*`;

async function retrieve(id: UUID) {
  const { data, error } = await supabase
    .from<Bag>(TABLE_NAME)
    .select(query)
    .eq("id", id)
    .single();

  if (error) throw error;

  return data;
}

export default retrieve;
