// This file is automatically generated. Do not edit it directly.
import { createClient } from '@supabase/supabase-js';
import type { Database } from './types';

const SUPABASE_URL = "https://soafjckkxqmskaennxxq.supabase.co";
const SUPABASE_PUBLISHABLE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNvYWZqY2treHFtc2thZW5ueHhxIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzQ0NjAzOTEsImV4cCI6MjA1MDAzNjM5MX0.IzHnsfm1piOyA2YqqT2LFnnDp3yHAeMZNjEljc9PPQw";

// Import the supabase client like this:
// import { supabase } from "@/integrations/supabase/client";

export const supabase = createClient<Database>(SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY);