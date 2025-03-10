import { createClient } from "@supabase/supabase-js";
import type { Database } from "database.types";

const supabaseUrl = process.env.API_URL ?? "https://mcawwtjkgvyxicxxcdfj.supabase.co";
const supabaseKey = process.env.SERVICE_ROLE_KEY ?? "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1jYXd3dGprZ3Z5eGljeHhjZGZqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDA1NzI3MjksImV4cCI6MjA1NjE0ODcyOX0.0JcACh2vbhZ9Pl8FqhgyURlhues5NcFDPuuagsjIc-A";

export const supabase = createClient<Database>(supabaseUrl, supabaseKey);