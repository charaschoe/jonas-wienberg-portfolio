import { _ as _export_sfc, a as __nuxt_component_0 } from './server.mjs';
import { ref, mergeProps, unref, withCtx, createTextVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderList, ssrRenderAttr, ssrInterpolate, ssrRenderComponent } from 'vue/server-renderer';
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

const _sfc_main = {
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    const projects = ref([
      {
        id: 1,
        title: "BALINEUM",
        description: "A unified dial system transforming bathroom interactions with adaptive water control and NFC-powered user profiles.",
        image: "/images/projects/balineum/overview.jpg",
        technologies: [
          "UX Research",
          "Hardware Engineering",
          "Tangible Interface Design"
        ],
        link: "/projects/balineum"
      },
      {
        id: 2,
        title: "KonradAI - Visa Application Helper",
        description: "Redesigning the German Federal Foreign Office's visa application platform to streamline the process for international users.",
        image: "/images/projects/konradai/konradai_screenshot.jpg",
        technologies: [
          "UX Research",
          "Information Architecture",
          "Chrome Extension"
        ],
        link: "/projects/konradai"
      },
      {
        id: 3,
        title: "INFLUENZA",
        description: "Interactive dashboard tracking WHO FluNet data (2009-2024) across six nations with radial visualizations of pandemic patterns.",
        image: "/images/projects/influenza/visualization.svg",
        technologies: ["Data Visualization", "JavaScript", "WHO FluNet Data"],
        link: "/projects/influenza"
      }
    ]);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "max-w-5xl mx-auto px-6 py-16 md:py-24" }, _attrs))} data-v-3214b87b><h1 class="text-4xl font-light mb-16 tracking-tight" data-v-3214b87b>Projects</h1><div class="grid grid-cols-1 md:grid-cols-12 gap-x-8 gap-y-20" data-v-3214b87b><!--[-->`);
      ssrRenderList(unref(projects), (project, index2) => {
        _push(`<div class="md:col-span-6 lg:col-span-4" data-v-3214b87b><div class="project-card" data-v-3214b87b><div class="aspect-[4/3] overflow-hidden mb-4" data-v-3214b87b><img${ssrRenderAttr("src", project.image)}${ssrRenderAttr("alt", project.title)} class="w-full h-full object-cover" data-v-3214b87b></div><h3 class="text-lg font-medium mb-2" data-v-3214b87b>${ssrInterpolate(project.title)}</h3><p class="text-sm text-gray-700 mb-4 leading-relaxed" data-v-3214b87b>${ssrInterpolate(project.description)}</p><div class="flex flex-wrap gap-2 mb-4" data-v-3214b87b><!--[-->`);
        ssrRenderList(project.technologies, (tech) => {
          _push(`<span class="text-xs text-gray-600" data-v-3214b87b>${ssrInterpolate(tech)}${ssrInterpolate(project.technologies.indexOf(tech) < project.technologies.length - 1 ? " / " : "")}</span>`);
        });
        _push(`<!--]--></div>`);
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: project.link,
          class: "text-sm uppercase tracking-widest hover:underline"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(` View Project `);
            } else {
              return [
                createTextVNode(" View Project ")
              ];
            }
          }),
          _: 2
        }, _parent));
        _push(`</div></div>`);
      });
      _push(`<!--]--></div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/projects/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-3214b87b"]]);

export { index as default };
//# sourceMappingURL=index.vue2.mjs.map
