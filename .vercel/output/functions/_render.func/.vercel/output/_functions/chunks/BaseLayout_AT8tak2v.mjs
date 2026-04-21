import { c as createComponent, m as maybeRenderHead, e as addAttribute, d as renderTemplate, r as renderComponent, k as createAstro, l as renderHead, n as renderSlot } from './astro/server_CZbmP_ed.mjs';
import 'kleur/colors';
/* empty css                              */
import 'clsx';

const $$Footer = createComponent(($$result, $$props, $$slots) => {
  const platforms = {
    github: {
      url: "https://github.com/ZahidGalea"
    },
    linkedin: {
      url: "https://www.linkedin.com/in/zahidgalea/"
    }
  };
  const iconClass = "h-5 w-5 dark:fill-theme-4 fill-theme-0";
  return renderTemplate`${maybeRenderHead()}<footer class="flex gap-12 mt-8 p-4 justify-center 
items-center fixed inset-x-0 bottom-0 bg-theme-4 dark:bg-theme-0 dark:border-t-theme-2 border-t-2"> ${renderTemplate`<a target="_blank"${addAttribute(`${platforms.linkedin.url}`, "href")}> <svg xmlns="http://www.w3.org/2000/svg"${addAttribute(iconClass, "class")} viewBox="0 0 24 24"> <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z"></path> </svg> </a>`} ${renderTemplate`<a target="_blank"${addAttribute(`${platforms.github.url}`, "href")}> <svg xmlns="http://www.w3.org/2000/svg"${addAttribute(iconClass, "class")} viewBox="0 0 24 24"> <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"></path> </svg> </a>`} </footer>`;
}, "/Users/zahidgaleajorge/Projects/personal/my-blog/src/components/Footer.astro", void 0);

const $$Hamburger = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div class="right-1 cursor-pointer hamburger md:hidden"> <span class="w-4 h-[3px] mb-[8px] bg-theme-1 block"></span> <span class="w-6 h-[3px] mb-[8px] bg-theme-1 block"></span> <span class="w-8 h-[3px] bg-theme-1 block"></span> </div> `;
}, "/Users/zahidgaleajorge/Projects/personal/my-blog/src/components/Hamburger.astro", void 0);

const $$Navigation = createComponent(($$result, $$props, $$slots) => {
  const listClass = "text-theme-0 md:inline-block px-5 py-3.5 font-bold decoration-0 align-middle";
  return renderTemplate`${maybeRenderHead()}<div class="flex flex-col nav-links md:block md:static md:w-auto md:bg-transparent hidden"> <a${addAttribute(listClass, "class")} href="/">Intro</a> <a${addAttribute(listClass, "class")} href="/curriculum">Curriculum</a> </div>`;
}, "/Users/zahidgaleajorge/Projects/personal/my-blog/src/components/Navigation.astro", void 0);

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$ThemeIcon = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate(_a || (_a = __template(["", `<button id="themeToggle" data-astro-cid-oemx5le4> <svg width="30px" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" data-astro-cid-oemx5le4> <path class="sun" fill-rule="evenodd" d="M12 17.5a5.5 5.5 0 1 0 0-11 5.5 5.5 0 0 0 0 11zm0 1.5a7 7 0 1 0 0-14 7 7 0 0 0 0 14zm12-7a.8.8 0 0 1-.8.8h-2.4a.8.8 0 0 1 0-1.6h2.4a.8.8 0 0 1 .8.8zM4 12a.8.8 0 0 1-.8.8H.8a.8.8 0 0 1 0-1.6h2.5a.8.8 0 0 1 .8.8zm16.5-8.5a.8.8 0 0 1 0 1l-1.8 1.8a.8.8 0 0 1-1-1l1.7-1.8a.8.8 0 0 1 1 0zM6.3 17.7a.8.8 0 0 1 0 1l-1.7 1.8a.8.8 0 1 1-1-1l1.7-1.8a.8.8 0 0 1 1 0zM12 0a.8.8 0 0 1 .8.8v2.5a.8.8 0 0 1-1.6 0V.8A.8.8 0 0 1 12 0zm0 20a.8.8 0 0 1 .8.8v2.4a.8.8 0 0 1-1.6 0v-2.4a.8.8 0 0 1 .8-.8zM3.5 3.5a.8.8 0 0 1 1 0l1.8 1.8a.8.8 0 1 1-1 1L3.5 4.6a.8.8 0 0 1 0-1zm14.2 14.2a.8.8 0 0 1 1 0l1.8 1.7a.8.8 0 0 1-1 1l-1.8-1.7a.8.8 0 0 1 0-1z" data-astro-cid-oemx5le4></path> <path class="moon" fill-rule="evenodd" d="M16.5 6A10.5 10.5 0 0 1 4.7 16.4 8.5 8.5 0 1 0 16.4 4.7l.1 1.3zm-1.7-2a9 9 0 0 1 .2 2 9 9 0 0 1-11 8.8 9.4 9.4 0 0 1-.8-.3c-.4 0-.8.3-.7.7a10 10 0 0 0 .3.8 10 10 0 0 0 9.2 6 10 10 0 0 0 4-19.2 9.7 9.7 0 0 0-.9-.3c-.3-.1-.7.3-.6.7a9 9 0 0 1 .3.8z" data-astro-cid-oemx5le4></path> </svg> </button>  <script>
    const theme = (() => {
        if (typeof localStorage !== 'undefined' && localStorage.getItem('theme')) {
            return localStorage.getItem('theme');
        }
        if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
            return 'dark';
        }
        return 'light';
    })();

    if (theme === 'light') {
        document.documentElement.classList.remove('dark');
    } else {
        document.documentElement.classList.add('dark');
    }

    window.localStorage.setItem('theme', theme);

    const handleToggleClick = () => {
        const element = document.documentElement;
        element.classList.toggle("dark");

        const isDark = element.classList.contains("dark");
        localStorage.setItem("theme", isDark ? "dark" : "light");
    }

    document.getElementById("themeToggle").addEventListener("click", handleToggleClick);
<\/script>`])), maybeRenderHead());
}, "/Users/zahidgaleajorge/Projects/personal/my-blog/src/components/ThemeIcon.astro", void 0);

const $$Header = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<header> <div class="flex w-full border-b-theme-0 border-b-[1px] justify-center"><h1 class="font-thin">Zahid Galea</h1></div> <nav class="flex justify-between items-center p-4 w-full bg-theme-4 theme-0 dark:border-b-theme-2 border-b-2"> <div class="flex items-start"> ${renderComponent($$result, "Hamburger", $$Hamburger, { "class": "mr-4 md:mr-0" })} <!-- Asegura espacio entre la hamburguesa y la navegación --> ${renderComponent($$result, "Navigation", $$Navigation, {})} </div> <div class="ml-auto align-middle items-center content-center"> ${renderComponent($$result, "ThemeIcon", $$ThemeIcon, {})} </div> <!-- Esto empuja el ThemeIcon al final del contenedor de nav --> </nav> </header>`;
}, "/Users/zahidgaleajorge/Projects/personal/my-blog/src/components/Header.astro", void 0);

const $$Astro$1 = createAstro("https://zahidgalea.com");
const $$Index = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Index;
  const propsStr = JSON.stringify(Astro2.props);
  const paramsStr = JSON.stringify(Astro2.params);
  return renderTemplate`${renderComponent($$result, "vercel-speed-insights", "vercel-speed-insights", { "data-props": propsStr, "data-params": paramsStr, "data-pathname": Astro2.url.pathname })} `;
}, "/Users/zahidgaleajorge/Projects/personal/my-blog/node_modules/@vercel/speed-insights/dist/astro/index.astro", void 0);

const $$Astro = createAstro("https://zahidgalea.com");
const $$BaseLayout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$BaseLayout;
  const { pageTitle } = Astro2.props;
  return renderTemplate`<html lang="en"> <head><meta charset="utf-8"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><meta name="viewport" content="width=device-width"><meta name="hreflang" content="es"><meta name="generator"${addAttribute(Astro2.generator, "content")}><title>${pageTitle}</title>${renderHead()}</head> <body> ${renderComponent($$result, "SpeedInsights", $$Index, {})} ${renderComponent($$result, "Header", $$Header, {})} <!-- Here will come the code inserted from the pages--> <div class="mb-10 max-w-[100ch] mx-auto"> ${renderSlot($$result, $$slots["default"])} </div> ${renderComponent($$result, "Footer", $$Footer, {})} </body></html>`;
}, "/Users/zahidgaleajorge/Projects/personal/my-blog/src/layouts/BaseLayout.astro", void 0);

export { $$BaseLayout as $ };
