import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://fyhvizwwbirdshumsfsg.supabase.co";
const supabaseAnonKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZ5aHZpend3YmlyZHNodW1zZnNnIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTMwOTIxOTEsImV4cCI6MjA2ODY2ODE5MX0.qVctu0Nt8J1MigJuVMx0vcQQncw2yG9t5Etc8Ghwp7k";

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
