import { breakpoints } from "./breakpoints.js";

import postcssCustomMedia from "postcss-custom-media";
import postcssNesting from "postcss-nesting";
import postcssGlobalData from "@csstools/postcss-global-data";
import { defineConfig } from "vite";
import api from "./api-plugin";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react(), api()],
});
