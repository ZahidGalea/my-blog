import { c as createComponent, r as renderComponent, d as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_CZbmP_ed.mjs';
import 'kleur/colors';
/* empty css                                      */
import { $ as $$Image } from '../chunks/_astro_assets_DOrG9ON_.mjs';
import { $ as $$BaseLayout } from '../chunks/BaseLayout_AT8tak2v.mjs';
export { renderers } from '../renderers.mjs';

const myImage = new Proxy({"src":"/_astro/me.DFK_HXX8.png","width":375,"height":452,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/zahidgaleajorge/Projects/personal/my-blog/src/images/me.png";
							}
							
							return target[name];
						}
					});

const $$Index = createComponent(($$result, $$props, $$slots) => {
  const pageTitle = "Zahid Galea - Welcome";
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "pageTitle": pageTitle }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="flex flex-col md:flex-row items-center max-w-3xl p-2 mb-20 mt-20 mx-auto"> <h1 class="text-5xl mb-4 md:mb-0 md:mr-4">Hi!, Welcome to my space.</h1> ${renderComponent($$result2, "Image", $$Image, { "src": myImage, "alt": "Zahid Galea", "class": "w-full h-auto rounded-full object-cover mx-auto max-w-36" })} </div> <h1 class="text-2xl">Hello! I'm Zahid Galea 👋</h1> <p> <br>
Born in Venezuela 🇻🇪, Moved to Santiago, Chile 🇨🇱 & Buenos Aires, Argentina 🇦🇷
<br><br>
My curiosity and passion
        for technology first led me to delve into the world of "FullStack" and later
        into the world of "machine learning". Since then,
        life has steered me primarily towards the paths of architecture , data engineering and AI Gen.
<br><br>
I've been fortunate to work in various sectors such as banking, telecommunications, and consulting, which has
        allowed me to face varied challenges and enrich my experience. I am an enthusiast of software
        engineering and am always looking to try out new technologies.
<br> <br>
My professional journey has led me to roles in DevOps, DataOps, data engineering, Fullstack development,
        and more. I love automating processes and exploring management and data architecture tools. I'm always ready for
        a new challenge!
<br> <br> </p> ` })}`;
}, "/Users/zahidgaleajorge/Projects/personal/my-blog/src/pages/index.astro", void 0);

const $$file = "/Users/zahidgaleajorge/Projects/personal/my-blog/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Index,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
