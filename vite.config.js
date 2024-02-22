import { defineConfig } from "vite";
import { svelte } from "@sveltejs/vite-plugin-svelte";
import path from "path";

console.log("path: ", path.resolve(__dirname, "./src"));
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [svelte()],
  base: "/render-model-dp/",
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
  //   origin: "localhost:5173",
  // },
  // build: {
  //   outDir: "../dist", // Change 'custom-dist' to your desired output directory
  // },
  // server: {
  //   // Listen on all addresses inside the container
  //   host: true,
  //   hmr: {
  //     // Force the Vite client to connect via SSL
  //     // This will also force a "https://" URL in the hot file
  //     protocol: "wss",
  //     // The host where the Vite dev server can be accessed
  //     // This will also force this host to be written to the hot file
  //     host: "https://hlvudat1206.github.io/",
  //   },
  // },
});
