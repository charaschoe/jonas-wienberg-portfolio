import { mergeProps, useSSRContext } from 'vue';
import { ssrRenderAttrs } from 'vue/server-renderer';
import { _ as _export_sfc } from './server.mjs';
import '../nitro/nitro.mjs';
import 'node:http';
import 'node:https';
import 'node:events';
import 'node:buffer';
import 'node:fs';
import 'node:path';
import 'node:crypto';
import 'vue-router';
import '@vercel/analytics/vue';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'unhead/server';
import 'unhead/utils';
import 'devalue';
import 'unhead/plugins';

const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "max-w-4xl mx-auto" }, _attrs))}><section class="py-12"><h1 class="text-3xl font-bold mb-8">Contact Me</h1><div class="bg-white rounded-lg shadow-sm p-8"><p class="text-lg text-gray-700 mb-8"> I&#39;m always interested in connecting with fellow designers, potential collaborators, and those interested in innovative design solutions. Feel free to reach out! </p><div class="space-y-6"><div><h2 class="text-xl font-semibold mb-2">Email</h2><a href="mailto:jonas.wienberg@hfg.design" class="text-blue-600 hover:text-blue-800"> jonas.wienberg@hfg.design </a></div><div><h2 class="text-xl font-semibold mb-2">Location</h2><p class="text-gray-700">Schwäbisch Gmünd, Germany</p></div><div><h2 class="text-xl font-semibold mb-2"> Professional Networks </h2><div class="space-x-4"><a href="https://www.linkedin.com/in/jonas-wienberg/" target="_blank" rel="noopener noreferrer" class="text-blue-600 hover:text-blue-800"> LinkedIn </a><a href="https://www.xing.com/profile/Jonas_Wienberg/" target="_blank" rel="noopener noreferrer" class="text-blue-600 hover:text-blue-800"> Xing </a></div></div></div></div></section></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/contact.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const contact = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { contact as default };
//# sourceMappingURL=contact.vue.mjs.map
