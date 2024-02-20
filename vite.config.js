import { defineConfig } from "vite";
import { svelte } from "@sveltejs/vite-plugin-svelte";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [svelte()],
  base: "/render-model-dp",
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  // server: {
  //   host: "127.0.0.1", // replace with the IP address of the Homestead machine
  //   https: false,
  //   cors: false,
  //   hmr: {
  //     host: "127.0.0.1", // replace with the IP address of the Homestead machine
  //   },
  // },
  // server: {
  //   origin: "http://127.0.0.1:5173",
  // },
  // build: {
  //   outDir: "../dist", // Change 'custom-dist' to your desired output directory
  // },
});
