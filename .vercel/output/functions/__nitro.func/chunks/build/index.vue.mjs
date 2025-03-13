import { _ as _export_sfc, a as __nuxt_component_0 } from './server.mjs';
import { mergeProps, withCtx, createTextVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderAttr, ssrRenderComponent } from 'vue/server-renderer';
import { _ as _imports_0 } from './virtual_public.mjs';
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
  const _component_NuxtLink = __nuxt_component_0;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "max-w-5xl mx-auto px-6 py-16 md:py-24" }, _attrs))}><div class="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12"><div class="md:col-span-5"><div class="aspect-[3/4] overflow-hidden"><img${ssrRenderAttr("src", _imports_0)} alt="Jonas Wienberg" class="w-full h-full object-cover"></div></div><div class="md:col-span-7 flex flex-col justify-center"><h1 class="text-4xl font-light mb-8 tracking-tight"> Jonas Wienberg </h1><p class="text-xl font-light mb-10 text-gray-700"> Interaction Design Student &amp; Digital Innovation Specialist </p><div class="space-y-6 mb-12"><p class="text-base text-gray-800 leading-relaxed"> Currently studying Interaction Design at Hochschule für Gestaltung Schwäbisch Gmünd, focusing on interdisciplinary projects that combine design innovation, analytical leadership (PMO), and user-centered solutions (UI/UX). </p><p class="text-base text-gray-800 leading-relaxed"> As Chair of the General Students&#39; Committee (AStA), I actively advocate for student interests and lead collaborative initiatives within the academic community. </p></div><div class="flex flex-wrap gap-4">`);
  _push(ssrRenderComponent(_component_NuxtLink, {
    to: "/projects",
    class: "px-8 py-3 border border-black text-sm uppercase tracking-widest hover:bg-black hover:text-white transition-colors duration-300"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(` View Work `);
      } else {
        return [
          createTextVNode(" View Work ")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_NuxtLink, {
    to: "/about",
    class: "px-8 py-3 border border-black text-sm uppercase tracking-widest hover:bg-black hover:text-white transition-colors duration-300"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(` About `);
      } else {
        return [
          createTextVNode(" About ")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div></div></div></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { index as default };
//# sourceMappingURL=index.vue.mjs.map
