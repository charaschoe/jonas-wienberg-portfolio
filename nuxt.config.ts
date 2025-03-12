// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	devtools: { enabled: true },
	typescript: {
		strict: true,
		typeCheck: false,
	},
	modules: ["@nuxtjs/tailwindcss"],
	css: ["~/assets/css/main.css"],
	compatibilityDate: "2025-03-12",
	nitro: {
		preset: "vercel",
	},
	server: {
		port: 3000,
		host: "0.0.0.0",
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
					hid: "description",
					name: "description",
					content:
						"Portfolio of Jonas Wienberg, showcasing projects in Interaction Design, UX Research, and Digital Innovation.",
				},
			],
			link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
		},
	},
});
