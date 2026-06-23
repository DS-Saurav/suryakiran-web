import { defineConfig } from "astro/config";
import vercel from "@astrojs/vercel";

export default defineConfig({
  output: "static",
  adapter: vercel({
    webAnalytics: { enabled: true },
  }),
  i18n: {
    defaultLocale: "ne",
    locales: ["ne", "en"],
    routing: {
      prefixDefaultLocale: true,
      redirectToDefaultLocale: true,
    },
  },
  site: "https://suryakiran.vercel.app",
  trailingSlash: "always",
});
