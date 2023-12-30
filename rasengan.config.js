import { defineConfig } from 'rasengan';

export default defineConfig({
  reactStrictMode: true,

  // Defining the server port
  server: {
    development: {
      port: 3000
    }
  }
});