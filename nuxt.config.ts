// https://nuxt.com/docs/api/configuration/nuxt-config
import { defineNuxtConfig } from "nuxt/config";

export default defineNuxtConfig({
	devtools: { enabled: false },

	typescript: {
		strict: true,
		typeCheck: false,
		shim: false,
	},

	modules: ["@nuxtjs/tailwindcss"],
	css: ["~/assets/css/main.css"],

	nitro: {
		preset: "vercel",
	},

	app: {
		head: {
			title: "Jonas Wienberg - Interaction Design Student & Digital Innovation Specialist",
			meta: [
				{ charset: "utf-8" },
				{
					name: "viewport",
					content: "width=device-width, initial-scale=1",
				},
				{
					key: "description",
					name: "description",
					content:
						"Portfolio of Jonas Wienberg, showcasing projects in Interaction Design, UX Research, and Digital Innovation.",
				},
			],
			link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
		},
		baseURL: "/",
	},

	build: {
		transpile: ["vue"],
	},

	compatibilityDate: "2025-03-13",

	ssr: false,

	router: {
		options: {
			strict: false,
		},
	},

	experimental: {
		payloadExtraction: false,
	},

	trailingSlash: false,
});
