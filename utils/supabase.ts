import {
  createClient,
  SupabaseClient,
} from "https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm";

export const supabase: SupabaseClient = createClient(
  Deno.env.get("SUPABASE_URL") as string,
  Deno.env.get("SUPABASE_KEY") as string,
  {},
);
