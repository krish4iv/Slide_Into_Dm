// supabaseClient.js
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://your-project-id.supabase.co'; // Replace with your project URL
const supabaseKey = 'your-anon-public-api-key'; // Replace with your anon/public API key

export const supabase = createClient(supabaseUrl, supabaseKey);