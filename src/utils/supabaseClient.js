import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://tvdmztetyxgttwfxvfdq.supabase.co'
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InR2ZG16dGV0eXhndHR3Znh2ZmRxIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzM0NDk5MzUsImV4cCI6MjA4OTAyNTkzNX0.ImVbEFuI7LZDzvU1Sf8sRYu3GtvIvfP_c78hh56IObw'

export const supabase = createClient(supabaseUrl, supabaseAnonKey)