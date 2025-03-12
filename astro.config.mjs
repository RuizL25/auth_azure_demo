import { defineConfig } from 'astro/config';
import dotenv from 'dotenv';

dotenv.config();

export default defineConfig({
  vite: {
    define: {
      'import.meta.env.VITE_CLIENT_ID': JSON.stringify(process.env.VITE_CLIENT_ID),
      'import.meta.env.VITE_AUTHORITY': JSON.stringify(process.env.VITE_AUTHORITY),
      'import.meta.env.VITE_REDIRECT_URI': JSON.stringify(process.env.VITE_REDIRECT_URI),
    }
  }
});
