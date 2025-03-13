import { _ as _export_sfc, u as useHead, a as __nuxt_component_0 } from './server.mjs';
import { mergeProps, withCtx, createTextVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderAttr, ssrRenderComponent } from 'vue/server-renderer';
import { p as publicAssetsURL } from '../routes/renderer.mjs';
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
import 'vue-bundle-renderer/runtime';
import 'unhead/server';
import 'unhead/utils';
import 'devalue';
import 'unhead/plugins';

const _imports_0 = publicAssetsURL("/images/projects/influenza/visualization.svg");

const _sfc_main = {
  __name: "influenza",
  __ssrInlineRender: true,
  setup(__props) {
    useHead({
      title: "INFLUENZA Project | Jonas Wienberg Portfolio",
      meta: [
        {
          name: "description",
          content: "Interactive dashboard tracking WHO FluNet data (2009-2024) across six nations with radial visualizations of pandemic patterns."
        }
      ]
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "max-w-5xl mx-auto px-6 py-16 md:py-24" }, _attrs))} data-v-65b00717><div class="grid grid-cols-1 md:grid-cols-12 gap-8 mb-20" data-v-65b00717><div class="md:col-span-8" data-v-65b00717><h1 class="text-4xl font-light mb-4 tracking-tight" data-v-65b00717> INFLUENZA </h1><p class="text-base text-gray-600 mb-8" data-v-65b00717> Interactive Data Visualization / 2nd Semester </p></div></div><div class="grid grid-cols-1 md:grid-cols-12 gap-8 mb-20" data-v-65b00717><div class="md:col-span-12 mb-8" data-v-65b00717><img${ssrRenderAttr("src", _imports_0)} alt="INFLUENZA Data Visualization" class="w-full h-auto" data-v-65b00717></div><div class="md:col-span-8 md:col-start-3" data-v-65b00717><div class="space-y-6 text-base leading-relaxed" data-v-65b00717><p data-v-65b00717> Interactive dashboard tracking WHO FluNet data (2009-2024) across six nations: Germany, Iceland, Iran, Japan, North Korea, and UAE. </p><p data-v-65b00717> Developed through iterative coding in Programmiertes Entwerfen 2, with Git version control and Vercel deployment. Radial layouts mirror WHO surveillance protocols while maintaining national color identities. </p></div></div></div><div class="grid grid-cols-1 md:grid-cols-12 gap-x-8 gap-y-20" data-v-65b00717><section class="md:col-span-6" data-v-65b00717><h2 class="text-2xl font-light mb-6 tracking-tight" data-v-65b00717> Data Visualization Approach </h2><div class="space-y-4 text-sm leading-relaxed" data-v-65b00717><p data-v-65b00717> The visualization employs a radial layout where each circle represents a country&#39;s influenza data over time. The design prioritizes both aesthetic appeal and functional clarity, allowing users to identify patterns across different nations and time periods. </p><p data-v-65b00717> Each country&#39;s data is represented through a unique color scheme that maintains cultural relevance while ensuring sufficient contrast for accessibility. The radial format enables efficient comparison of seasonal patterns, with particular emphasis on pandemic years. </p></div></section><section class="md:col-span-6" data-v-65b00717><h2 class="text-2xl font-light mb-6 tracking-tight" data-v-65b00717> Technical Implementation </h2><p class="text-sm leading-relaxed" data-v-65b00717> The visualization was built using D3.js for data binding and SVG manipulation, with JavaScript ES6 features for data processing. WHO FluNet data was preprocessed using Python scripts to normalize reporting inconsistencies across different national health systems. </p><p class="text-sm leading-relaxed mt-4" data-v-65b00717> Interactive elements include time-period filtering, country isolation for detailed analysis, and tooltip information displaying specific data points. The responsive design adapts to various screen sizes while maintaining the integrity of the visualization. </p></section><section class="md:col-span-6" data-v-65b00717><h2 class="text-2xl font-light mb-6 tracking-tight" data-v-65b00717> Research Insights </h2><div class="space-y-4 text-sm leading-relaxed" data-v-65b00717><p data-v-65b00717> Analysis of the visualization revealed several key patterns: </p><ul class="space-y-3" data-v-65b00717><li data-v-65b00717><span class="font-medium" data-v-65b00717>Seasonal Variations:</span> Northern hemisphere countries (Germany, Japan) show consistent winter peaks, while equatorial nations display less pronounced seasonality </li><li data-v-65b00717><span class="font-medium" data-v-65b00717>Pandemic Impact:</span> The 2009 H1N1 and 2020 COVID-19 periods show distinctive disruptions to typical influenza patterns </li><li data-v-65b00717><span class="font-medium" data-v-65b00717>Reporting Disparities:</span> Significant differences in surveillance capacity are visible between nations, with data gaps particularly evident in North Korea </li></ul></div></section><section class="md:col-span-6" data-v-65b00717><h2 class="text-2xl font-light mb-6 tracking-tight" data-v-65b00717> Design Process </h2><div class="space-y-4 text-sm leading-relaxed" data-v-65b00717><p data-v-65b00717> The project followed an iterative design process, beginning with exploratory data analysis to identify meaningful patterns. Initial sketches explored various visualization approaches, including linear timelines, heatmaps, and radial layouts. </p><p data-v-65b00717> User testing with epidemiology students informed refinements to the visual encoding, interaction design, and color palette. The final design balances aesthetic considerations with scientific accuracy, creating a visualization that serves both analytical and communicative purposes. </p></div></section><section class="md:col-span-12 md:col-start-3 md:col-end-11" data-v-65b00717><h2 class="text-2xl font-light mb-6 tracking-tight" data-v-65b00717> Technologies &amp; Methods </h2><div class="flex flex-wrap gap-x-4 gap-y-2" data-v-65b00717><span class="text-xs text-gray-600" data-v-65b00717>D3.js</span><span class="text-xs text-gray-600" data-v-65b00717>JavaScript</span><span class="text-xs text-gray-600" data-v-65b00717>SVG</span><span class="text-xs text-gray-600" data-v-65b00717>WHO FluNet Data</span><span class="text-xs text-gray-600" data-v-65b00717>Python</span><span class="text-xs text-gray-600" data-v-65b00717>Git</span><span class="text-xs text-gray-600" data-v-65b00717>Vercel</span></div></section></div><div class="mt-20" data-v-65b00717>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/projects",
        class: "text-sm uppercase tracking-widest hover:underline"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Back to Projects `);
          } else {
            return [
              createTextVNode(" Back to Projects ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/projects/influenza.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const influenza = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-65b00717"]]);

export { influenza as default };
//# sourceMappingURL=influenza.vue.mjs.map
