import { defineConfig } from "rasengan";

export default defineConfig({
  reactStrictMode: true,

  // Defining the server port
  server: {
    development: {
      // port: 4000,
      // open: true // Open the browser when the server starts
    },

    production: {
      hosting: "vercel",
    },
  },

  vite: {
    plugins: [
      // babel({
      //   loader: (path) => {
      //     if (extname(path) === ".jsx" || extname(path) === ".tsx") {
      //       return "jsx";
      //     }
      //   },
      // }),
    ],
    resolve: {
      alias: [
        {
          find: "@pages",
          replacement: "src/pages",
        },
      ],
    },
  },
});