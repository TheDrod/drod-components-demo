import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],

  css: {
    preprocessorOptions: {
      scss: {
        api: "modern",
      },
    },
  },

  server: {
    // host: "0.0.0.0",
    port: 4563,
  },
});
