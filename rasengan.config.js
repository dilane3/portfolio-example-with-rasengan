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
      hosting: "netlify",
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
          find: "@app",
          replacement: "src/app",
        },
      ],
    },
  },
});
