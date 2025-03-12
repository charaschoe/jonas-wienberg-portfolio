/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./components/**/*.{js,vue,ts}",
		"./layouts/**/*.vue",
		"./pages/**/*.vue",
		"./plugins/**/*.{js,ts}",
		"./app.vue",
		"./error.vue",
	],
	theme: {
		extend: {
			colors: {
				primary: {
					50: "#f0f9ff",
					100: "#e0f2fe",
					200: "#bae6fd",
					300: "#7dd3fc",
					400: "#38bdf8",
					500: "#0ea5e9",
					600: "#0284c7",
					700: "#0369a1",
					800: "#075985",
					900: "#0c4a6e",
				},
				accent: {
					50: "#fff1f2",
					100: "#ffe4e6",
					200: "#fecdd3",
					300: "#fda4af",
					400: "#fb7185",
					500: "#f43f5e",
					600: "#e11d48",
					700: "#be123c",
					800: "#9f1239",
					900: "#881337",
				},
				neutral: {
					50: "#fafafa",
					100: "#f4f4f5",
					200: "#e4e4e7",
					300: "#d4d4d8",
					400: "#a1a1aa",
					500: "#71717a",
					600: "#52525b",
					700: "#3f3f46",
					800: "#27272a",
					900: "#18181b",
				},
			},
			fontFamily: {
				sans: ["Inter var", "sans-serif"],
				display: ["Cabinet Grotesk", "sans-serif"],
				mono: ["JetBrains Mono", "monospace"],
			},
			animation: {
				"fade-in": "fade-in 0.5s ease-out",
				"slide-up": "slide-up 0.5s ease-out",
				"slide-down": "slide-down 0.5s ease-out",
			},
			keyframes: {
				"fade-in": {
					"0%": { opacity: "0" },
					"100%": { opacity: "1" },
				},
				"slide-up": {
					"0%": { transform: "translateY(20px)", opacity: "0" },
					"100%": { transform: "translateY(0)", opacity: "1" },
				},
				"slide-down": {
					"0%": { transform: "translateY(-20px)", opacity: "0" },
					"100%": { transform: "translateY(0)", opacity: "1" },
				},
			},
			borderRadius: {
				"4xl": "2rem",
			},
			typography: (theme) => ({
				DEFAULT: {
					css: {
						color: theme("colors.neutral.700"),
						a: {
							color: theme("colors.primary.600"),
							"&:hover": {
								color: theme("colors.primary.800"),
							},
						},
						"h1, h2, h3, h4": {
							color: theme("colors.neutral.900"),
							fontFamily: theme("fontFamily.display"),
						},
					},
				},
			}),
		},
	},
	plugins: [
		require("@tailwindcss/typography"),
		require("@tailwindcss/aspect-ratio"),
	],
};
