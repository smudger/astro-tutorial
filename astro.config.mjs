import preact from "@astrojs/preact";
import tailwind from "@astrojs/tailwind";
import storyblok from '@storyblok/astro';
import basicSsl from "@vitejs/plugin-basic-ssl";
import { defineConfig } from 'astro/config';
import { loadEnv } from 'vite';
import { remarkReadingTime } from "./remark-reading-time.mjs";

const env = loadEnv("", process.cwd(), 'STORYBLOK');

// https://astro.build/config
export default defineConfig({
  markdown: {
    remarkPlugins: [remarkReadingTime]
  },
  site: "https://profound-dasik-da3fa6.netlify.app/",
  integrations: [preact(), storyblok({
    accessToken: env.STORYBLOK_TOKEN,
    components: {
      blogPost: 'storyblok/BlogPost',
      blogPostList: 'storyblok/BlogPostList',
      page: 'storyblok/Page'
    }
  }), tailwind()],
  vite: {
    plugins: [basicSsl()],
    server: {
      https: true,
    }
  }
});