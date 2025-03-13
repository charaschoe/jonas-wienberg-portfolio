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

const _imports_0 = publicAssetsURL("/images/projects/balineum/overview.jpg");

const _sfc_main = {
  __name: "balineum",
  __ssrInlineRender: true,
  setup(__props) {
    useHead({
      title: "BALINEUM Project | Jonas Wienberg Portfolio",
      meta: [
        {
          name: "description",
          content: "BALINEUM transforms bathroom interactions through a unified dial system integrating adaptive water control, NFC-powered user profiles, and gesture-based music management."
        }
      ]
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "max-w-5xl mx-auto px-6 py-16 md:py-24" }, _attrs))} data-v-6662231a><div class="grid grid-cols-1 md:grid-cols-12 gap-8 mb-20" data-v-6662231a><div class="md:col-span-8" data-v-6662231a><h1 class="text-4xl font-light mb-4 tracking-tight" data-v-6662231a> BALINEUM </h1><p class="text-base text-gray-600 mb-8" data-v-6662231a> Joint University Project / 2nd Semester </p></div></div><div class="grid grid-cols-1 md:grid-cols-12 gap-8 mb-20" data-v-6662231a><div class="md:col-span-12 mb-8" data-v-6662231a><img${ssrRenderAttr("src", _imports_0)} alt="BALINEUM Project Overview" class="w-full h-auto" data-v-6662231a></div><div class="md:col-span-8 md:col-start-3" data-v-6662231a><p class="text-base leading-relaxed mb-0" data-v-6662231a> BALINEUM transforms bathroom interactions through a unified dial system integrating adaptive water control, NFC-powered user profiles, and gesture-based music management. Developed with UX research and iterative prototyping, this solution addresses multi-user conflicts in households through regulatory-compliant hardware engineering and tangible interface design. </p></div></div><div class="grid grid-cols-1 md:grid-cols-12 gap-x-8 gap-y-20" data-v-6662231a><section class="md:col-span-6" data-v-6662231a><h2 class="text-2xl font-light mb-6 tracking-tight" data-v-6662231a> Research-Driven Development </h2><div class="space-y-4 text-sm leading-relaxed" data-v-6662231a><p data-v-6662231a> UX research across family homes and shared apartments uncovered three core challenges: inconsistent temperature recall between users, awkward music control mechanics, and temporal disorientation during showers. </p><p data-v-6662231a> Technical validation disproved capacitive touch reliability in humidity, driving adoption of hybrid physical interactions inspired by the Nest Thermostat&#39;s rotational paradigm. Six hardware iterations refined the 94 mm anodized aluminum dial, implementing IP68-rated seals and radial groove patterning validated through 3D-printed foam prototypes. </p></div></section><section class="md:col-span-6" data-v-6662231a><h2 class="text-2xl font-light mb-6 tracking-tight" data-v-6662231a> Core Interaction Architecture </h2><p class="text-sm leading-relaxed" data-v-6662231a> The dual-axis interface combines rotational precision (2-45°C temperature, 5-25 l/min flow control) with quad-directional tilt navigation. Circumferential RGB LEDs (#40798C cold → red warmth gradients) provide mode feedback through steam-resistant displays, complemented by haptic pulse confirmation for mode changes. Magnetic docking enables tool-free reconfiguration, while inductive charging maintains IP68 compliance. </p></section><section class="md:col-span-6" data-v-6662231a><h2 class="text-2xl font-light mb-6 tracking-tight" data-v-6662231a> Adaptive User Profiles </h2><p class="text-sm leading-relaxed mb-4" data-v-6662231a> NFC-paired wearables such as ŌURA or Apple Watch activate: </p><ul class="space-y-3 text-sm leading-relaxed" data-v-6662231a><li data-v-6662231a><span class="font-medium" data-v-6662231a>YOU Profile:</span> Custom water-music combinations (e.g., 25 °C massage jets + the favorite Travis Scott playlist) </li><li data-v-6662231a><span class="font-medium" data-v-6662231a>Scene Presets:</span> Preconfigured experiences like &quot;Arctic Ice&quot; (2 °C jets + Nordic ambient tracks) </li><li data-v-6662231a><span class="font-medium" data-v-6662231a>Guest Mode:</span> Safety-locked defaults with 40 °C thermal caps </li></ul></section><section class="md:col-span-6" data-v-6662231a><h2 class="text-2xl font-light mb-6 tracking-tight" data-v-6662231a> Key Insights </h2><div class="space-y-4 text-sm leading-relaxed" data-v-6662231a><p data-v-6662231a> Our exploratory design process yielded several conceptual findings through hands-on methods. Paper prototyping sessions utilizing Wizard of Oz techniques revealed user preferences for tactile feedback during mode transitions, suggesting haptic pulse cues as a potential design solution. </p><p data-v-6662231a> Final refinements introduced rotational momentum principles for intuitive menu navigation and ambient light patterns to address temporal awareness, all framed as speculative design recommendations rather than functional implementations. These insights remained strictly conceptual, focusing on interaction design exploration without engineering execution. </p></div></section><section class="md:col-span-12 md:col-start-3 md:col-end-11" data-v-6662231a><h2 class="text-2xl font-light mb-6 tracking-tight" data-v-6662231a> Technologies &amp; Methods </h2><div class="flex flex-wrap gap-x-4 gap-y-2" data-v-6662231a><span class="text-xs text-gray-600" data-v-6662231a>UX Research</span><span class="text-xs text-gray-600" data-v-6662231a>Iterative Prototyping</span><span class="text-xs text-gray-600" data-v-6662231a>Hardware Engineering</span><span class="text-xs text-gray-600" data-v-6662231a>Tangible Interface Design</span><span class="text-xs text-gray-600" data-v-6662231a>3D Printing</span><span class="text-xs text-gray-600" data-v-6662231a>NFC Technology</span><span class="text-xs text-gray-600" data-v-6662231a>Wizard of Oz Testing</span></div></section></div><div class="mt-20" data-v-6662231a>`);
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/projects/balineum.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const balineum = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-6662231a"]]);

export { balineum as default };
//# sourceMappingURL=balineum.vue.mjs.map
