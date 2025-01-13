import { createClient } from '@supabase/supabase-js';

const SUPABASE_URL = 'https://gqitcqfizrosubcpntdy.supabase.co';

const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImdxaXRjcWZpenJvc3ViY3BudGR5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzY3Mzc3OTgsImV4cCI6MjA1MjMxMzc5OH0.qH236IAxAn3i6aH8gEmAZu2AEeikKq9fTy6wEtRkwB8';

const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

export default supabase;