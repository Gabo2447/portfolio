// @ts-check
import { defineConfig, fontProviders } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import icon from "astro-icon";
import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  integrations: [icon(), react()],
  vite: {
    plugins: [tailwindcss()],
  },
  fonts: [
    {
      name: "JetBrains Mono",
      provider: fontProviders.google(),
      cssVariable: "--font-jetbrains-mono",
    },
    {
      name: "Instrument Sans",
      provider: fontProviders.fontsource(),
      cssVariable: "--font-instrument-sans",
    },
  ],
});
