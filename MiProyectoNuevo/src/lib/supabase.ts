import "react-native-url-polyfill/auto";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://yaxziijivzdkyhasagbe.supabase.co";
const supabaseAnonKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InlheHppaWppdnpka3loYXNhZ2JlIiwicm9sZSI6ImFub24iLCJpYXQiOjE3OTAwMTg5ODEsImV4cCI6MjEwNTU5NDk4MX0.vxGpy8rtV5yKSV7-8UVYSHb91ABOB2HchCS_lbwUMkY";

export const supabase = createClient(
  supabaseUrl,
  supabaseAnonKey,
  {
    auth: {
      storage: AsyncStorage,
      persistSession: true,
      autoRefreshToken: true,
      detectSessionInUrl: false,
    },
  }
);
