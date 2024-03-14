import {defineConfig} from "astro/config";
import tailwind from "@astrojs/tailwind";
import {rehypeHeadingIds} from '@astrojs/markdown-remark';
import remarkGfm from 'remark-gfm';
import remarkFrontmatter from 'remark-frontmatter';
import rehypeSlug from 'rehype-slug';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import vercel from '@astrojs/vercel/serverless';

import react from "@astrojs/react";
import mdx from "@astrojs/mdx";
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
    site: "https://zahidgalea.com",
    integrations: [tailwind(), react(), mdx(), sitemap()],
    markdown: {
        remarkPlugins: [remarkGfm, remarkFrontmatter],
        rehypePlugins: [
            rehypeHeadingIds, rehypeSlug, rehypeAutolinkHeadings
        ],
    },
    output: 'server',
    adapter: vercel({
        webAnalytics: {enabled: true}
    }),
});