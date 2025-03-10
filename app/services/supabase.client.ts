import { createClient } from "@supabase/supabase-js";

// Defina suas credenciais do Supabase
export const supabase = createClient(
  'https://mcawwtjkgvyxicxxcdfj.supabase.co',
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1jYXd3dGprZ3Z5eGljeHhjZGZqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDA1NzI3MjksImV4cCI6MjA1NjE0ODcyOX0.0JcACh2vbhZ9Pl8FqhgyURlhues5NcFDPuuagsjIc-A'
);
