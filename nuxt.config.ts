// https://nuxt.com/docs/api/configuration/nuxt-config
import { profile } from "./config.json";

export default defineNuxtConfig({
  compatibilityDate: "2024-04-03",
  devtools: { enabled: true },
  modules: ["@nuxt/icon"],
  ssr: false,
  components: [
    {
      path: "~/components",
      pathPrefix: true,
    },
  ],
  app: {
    head: {
      title: `${profile.firstname} ${profile.lastname}`,
      meta: [
        {
          name: "description",
          content: `Carte de visite virtuelle de ${profile.firstname} ${profile.lastname}`,
        },
        {
          name: "robots",
          content: "noindex, nofollow",
        },
      ],
      link: [{ rel: "icon", type: "image/x-icon", href: "/icon.png" }],
      charset: "utf-8",
      viewport: "width=device-width, initial-scale=1",
    },
  },
  icon: {
    mode: "svg",
    serverBundle: {
      collections: ["uil", "simple-icons", "ri", "mdi"],
    },
    customCollections: [
      {
        prefix: "custom-icons",
        dir: "./assets/my-icons",
      },
    ],
  },
});
