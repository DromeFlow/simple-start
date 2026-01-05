// filepath: services/supabaseClient.ts
import { createClient } from '@supabase/supabase-js';

// IMPORTANTE: neste projeto não usamos variáveis VITE_* no runtime da Lovable.
// Usamos diretamente a URL e a chave anônima do projeto Supabase `producaodrome`.
// Estes valores são PÚBLICOS (anon key), então é seguro usá-los no frontend.

const supabaseUrl = 'https://mtizbxyrhivrezhhzjrg.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im10aXpieHlyaGl2cmV6aGh6anJnIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Njc2NDA3MzksImV4cCI6MjA4MzIxNjczOX0.rkTI6ni9agdt91XHj9HyC4fiJS1RJlaOTi_XiSVAqLU';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);