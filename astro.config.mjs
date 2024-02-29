import {defineConfig} from "astro/config";
import tailwind from "@astrojs/tailwind";
import {rehypeHeadingIds} from '@astrojs/markdown-remark';
import remarkGfm from 'remark-gfm';
import remarkFrontmatter from 'remark-frontmatter';
import rehypeSlug from 'rehype-slug';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';

import react from "@astrojs/react";
import mdx from "@astrojs/mdx";

// https://astro.build/config
export default defineConfig({
    site: "https://zahidgalea.netlify.app",
    integrations: [tailwind(), react(), mdx()],
    markdown: {
        remarkPlugins: [remarkGfm, remarkFrontmatter],
        rehypePlugins: [
            rehypeHeadingIds, rehypeSlug, rehypeAutolinkHeadings
        ],
    },
});