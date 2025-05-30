/// <reference types="vitest" />

import { defineConfig, loadEnv } from 'vite';
import react from "@vitejs/plugin-react-swc";

export default defineConfig(({ mode }) => {
  // Load environment variables based on the current mode (e.g., 'development', 'production')
  const env = loadEnv(mode, process.cwd(), '');

  return {
    // Vite configuration
    plugins: [
      react()
    ],
    server: {
      port: Number(env.VITE_PORT || "3000"),
      host: env.VITE_HOST || "127.0.0.1"
    },
    define: {
      // Expose environment variables to your application code
      __APP_ENV__: JSON.stringify(env.APP_ENV),
    },
    test: {
      globals: true,
      environment: 'jsdom',
      setupFiles: 'src/tests/setupTests.ts'
    }
  };
});