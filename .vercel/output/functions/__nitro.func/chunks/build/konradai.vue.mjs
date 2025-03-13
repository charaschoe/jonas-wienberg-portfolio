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

const _imports_0 = publicAssetsURL("/images/projects/konradai/konradai_screenshot.jpg");

const _sfc_main = {
  __name: "konradai",
  __ssrInlineRender: true,
  setup(__props) {
    useHead({
      title: "KonradAI Project | Jonas Wienberg Portfolio",
      meta: [
        {
          name: "description",
          content: "KonradAI is a Chrome extension that streamlines the German visa application process with an AI-powered assistant."
        }
      ]
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "max-w-5xl mx-auto px-6 py-16 md:py-24" }, _attrs))} data-v-94483d55><div class="grid grid-cols-1 md:grid-cols-12 gap-8 mb-20" data-v-94483d55><div class="md:col-span-8" data-v-94483d55><h1 class="text-4xl font-light mb-4 tracking-tight" data-v-94483d55> KonradAI - Visa Application Helper </h1><p class="text-base text-gray-600 mb-8" data-v-94483d55> Joint University Project / 3rd Semester </p></div></div><div class="grid grid-cols-1 md:grid-cols-12 gap-8 mb-20" data-v-94483d55><div class="md:col-span-12 mb-8" data-v-94483d55><img${ssrRenderAttr("src", _imports_0)} alt="KonradAI Project Screenshot" class="w-full h-auto" data-v-94483d55></div><div class="md:col-span-8 md:col-start-3" data-v-94483d55><p class="text-base leading-relaxed mb-0" data-v-94483d55> This project aimed to redesign the German Federal Foreign Office&#39;s RKS Appointment platform, focusing on streamlining the visa application scheduling process for international users. The existing system suffered from fragmented navigation, cluttered information architecture, and inefficient appointment management, creating undue stress for applicants navigating complex bureaucratic requirements. </p></div></div><div class="grid grid-cols-1 md:grid-cols-12 gap-x-8 gap-y-20" data-v-94483d55><section class="md:col-span-6" data-v-94483d55><h2 class="text-2xl font-light mb-6 tracking-tight" data-v-94483d55> User-Centered Research </h2><div class="space-y-4 text-sm leading-relaxed" data-v-94483d55><p data-v-94483d55> Our team conducted extensive user research with international students and professionals who had navigated the German visa application process. Key findings revealed: </p><ul class="space-y-3" data-v-94483d55><li data-v-94483d55><span class="font-medium" data-v-94483d55>Language Barriers:</span> Non-German speakers struggled with technical terminology and inconsistent translations </li><li data-v-94483d55><span class="font-medium" data-v-94483d55>Information Overload:</span> Users reported feeling overwhelmed by dense, poorly organized content </li><li data-v-94483d55><span class="font-medium" data-v-94483d55>Appointment Anxiety:</span> Limited slot availability created significant stress and uncertainty </li></ul></div></section><section class="md:col-span-6" data-v-94483d55><h2 class="text-2xl font-light mb-6 tracking-tight" data-v-94483d55> Chrome Extension Solution </h2><p class="text-sm leading-relaxed" data-v-94483d55> Rather than proposing a complete platform redesign, we developed a Chrome extension that overlays the existing RKS system with an AI-powered assistant. This approach allowed for immediate implementation without requiring changes to the government infrastructure. </p><p class="text-sm leading-relaxed mt-4" data-v-94483d55> The extension features a contextual chatbot named KonradAI that guides users through each step of the application process, translating complex requirements, explaining documentation needs, and providing personalized assistance based on visa type and user circumstances. </p></section><section class="md:col-span-6" data-v-94483d55><h2 class="text-2xl font-light mb-6 tracking-tight" data-v-94483d55> Key Features </h2><ul class="space-y-3 text-sm leading-relaxed" data-v-94483d55><li data-v-94483d55><span class="font-medium" data-v-94483d55>Multilingual Support:</span> Real-time translation of interface elements and requirements in 8 languages </li><li data-v-94483d55><span class="font-medium" data-v-94483d55>Document Checklist:</span> Dynamic, visa-specific document preparation guides </li><li data-v-94483d55><span class="font-medium" data-v-94483d55>Appointment Alerts:</span> Notification system for newly available appointment slots </li><li data-v-94483d55><span class="font-medium" data-v-94483d55>Progress Tracking:</span> Visual indicators of application completion status </li><li data-v-94483d55><span class="font-medium" data-v-94483d55>FAQ Integration:</span> Contextual answers to common questions at each application stage </li></ul></section><section class="md:col-span-6" data-v-94483d55><h2 class="text-2xl font-light mb-6 tracking-tight" data-v-94483d55> Implementation &amp; Testing </h2><div class="space-y-4 text-sm leading-relaxed" data-v-94483d55><p data-v-94483d55> The extension was developed using JavaScript and the Chrome Extension API, with a React frontend for the chat interface. We integrated OpenAI&#39;s GPT-3.5 for natural language processing, fine-tuned on German visa application documentation and procedures. </p><p data-v-94483d55> User testing with 12 international participants demonstrated a 40% reduction in application completion time and a significant decrease in reported stress levels. Feedback highlighted the assistant&#39;s ability to provide clear, contextual guidance as particularly valuable. </p></div></section><section class="md:col-span-12 md:col-start-3 md:col-end-11" data-v-94483d55><h2 class="text-2xl font-light mb-6 tracking-tight" data-v-94483d55> Technologies &amp; Methods </h2><div class="flex flex-wrap gap-x-4 gap-y-2" data-v-94483d55><span class="text-xs text-gray-600" data-v-94483d55>UX Research</span><span class="text-xs text-gray-600" data-v-94483d55>Chrome Extension Development</span><span class="text-xs text-gray-600" data-v-94483d55>JavaScript</span><span class="text-xs text-gray-600" data-v-94483d55>React</span><span class="text-xs text-gray-600" data-v-94483d55>OpenAI API</span><span class="text-xs text-gray-600" data-v-94483d55>Information Architecture</span><span class="text-xs text-gray-600" data-v-94483d55>Usability Testing</span></div></section></div><div class="mt-20" data-v-94483d55>`);
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/projects/konradai.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const konradai = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-94483d55"]]);

export { konradai as default };
//# sourceMappingURL=konradai.vue.mjs.map
