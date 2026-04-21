import rss, { pagesGlobToRssItems } from '@astrojs/rss';
export { renderers } from '../renderers.mjs';

async function GET(context) {
  return rss({
    title: 'Zahid Galea | Blog',
    description: 'My journey in Software Engineering and Data Things.',
    site: context.site,
    items: await pagesGlobToRssItems(/* #__PURE__ */ Object.assign({})),
    customData: `<language>en-us</language>`,
  });
}

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  GET
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
