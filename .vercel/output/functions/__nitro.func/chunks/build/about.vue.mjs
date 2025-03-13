import { useSSRContext, mergeProps } from 'vue';
import { ssrRenderAttrs, ssrRenderAttr } from 'vue/server-renderer';
import { _ as _imports_0 } from './virtual_public.mjs';
import { _ as _export_sfc } from './server.mjs';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import '../nitro/nitro.mjs';
import 'node:http';
import 'node:https';
import 'node:events';
import 'node:buffer';
import 'node:fs';
import 'node:path';
import 'node:crypto';
import 'unhead/server';
import 'unhead/utils';
import 'devalue';
import 'unhead/plugins';
import 'vue-router';
import '@vercel/analytics/vue';

const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "max-w-5xl mx-auto px-6 py-16 md:py-24" }, _attrs))}><div class="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 mb-16"><div class="md:col-span-5"><div class="aspect-[3/4] overflow-hidden"><img${ssrRenderAttr("src", _imports_0)} alt="Jonas Wienberg" class="w-full h-full object-cover"></div></div><div class="md:col-span-7 flex flex-col justify-center"><h1 class="text-4xl font-light mb-8 tracking-tight"> About Me </h1><p class="text-base text-gray-800 leading-relaxed"> I&#39;m an Interaction Design student passionate about creating meaningful digital experiences that solve real-world problems. With a background in business administration and a focus on innovation, I bring a unique perspective to design challenges. </p></div></div><div class="grid grid-cols-1 md:grid-cols-12 gap-x-8 gap-y-16"><div class="md:col-span-6"><h2 class="text-2xl font-light mb-8 tracking-tight"> Education </h2><div class="space-y-10"><div><h3 class="text-lg font-medium mb-1"> Hochschule für Gestaltung Schwäbisch Gmünd </h3><p class="text-sm text-gray-600 mb-3"> B.A. Interaction Design | 2023 — ongoing </p><ul class="text-sm space-y-1"><li> Academic Assistant in Communications Department (Social Media &amp; Events of HfG) </li></ul></div><div><h3 class="text-lg font-medium mb-1"> Hochschule für Wirtschaft und Umwelt Nürtingen-Geislingen </h3><p class="text-sm text-gray-600 mb-3"> B.Sc. Business Administration | 2022 — 2023 </p></div></div></div><div class="md:col-span-6"><h2 class="text-2xl font-light mb-8 tracking-tight"> Professional Experience </h2><div class="space-y-10"><div><h3 class="text-lg font-medium mb-1"> STRABAG Innovation &amp; Digitalisation </h3><p class="text-sm text-gray-600 mb-3"> Stuttgart, Germany </p><div class="mb-4"><p class="text-sm font-medium"> Working Student - Governance, Reporting &amp; Data </p><p class="text-sm text-gray-600"> November 2023 — ongoing </p></div><div><p class="text-sm font-medium"> Working Student - Funding </p><p class="text-sm text-gray-600"> November 2022 — November 2023 </p></div></div><div><h3 class="text-lg font-medium mb-1"> Additional Experience </h3><ul class="text-sm space-y-1"><li>TIER Mobility</li><li>UID GmbH</li><li>Exyte</li></ul></div></div></div><div class="md:col-span-6"><h2 class="text-2xl font-light mb-8 tracking-tight"> Certifications &amp; Skills </h2><ul class="grid grid-cols-1 gap-y-2 text-sm"><li>Intercultural Conflict Management</li><li> Building Climate Resilience through Ecosystem-based Adaptation Planning </li><li>Business Compliance</li><li>Data Privacy</li><li>Business English (C1 Level)</li><li>UI/UX Design</li><li>Project Management (PMO)</li><li>Design Innovation</li></ul></div><div class="md:col-span-6"><h2 class="text-2xl font-light mb-8 tracking-tight"> Leadership </h2><div><h3 class="text-lg font-medium mb-1"> Chair of the General Students&#39; Committee (AStA) </h3><p class="text-sm"> Leading student advocacy initiatives, organizing institutional events, and fostering collaborative projects within the academic community. </p></div></div></div></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/about.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const about = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { about as default };
//# sourceMappingURL=about.vue.mjs.map
