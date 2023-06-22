import { defineConfig } from 'astro/config';
import mdx from "@astrojs/mdx";

import alpinejs from "@astrojs/alpinejs";
import Alpine from 'alpinejs'
import intersect from '@alpinejs/intersect'
 
Alpine.plugin(intersect)
 
// https://astro.build/config
export default defineConfig({
  integrations: [mdx(), alpinejs()]
});