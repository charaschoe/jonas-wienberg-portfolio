<template>
	<div class="max-w-5xl mx-auto px-6 py-16 md:py-24">
		<!-- Project Header -->
		<div class="grid grid-cols-1 md:grid-cols-12 gap-8 mb-20">
			<div class="md:col-span-8">
				<h1 class="text-4xl font-light mb-4 tracking-tight">
					INFLUENZA
				</h1>
				<p class="text-base text-gray-600 mb-8">
					Interactive Data Visualization / 2nd Semester
				</p>
			</div>
		</div>

		<!-- Project Overview -->
		<div class="grid grid-cols-1 md:grid-cols-12 gap-8 mb-20">
			<!-- Project Image - Full width on mobile, 8 columns on desktop -->
			<div class="md:col-span-12 mb-8">
				<img
					src="/images/projects/influenza/visualization.svg"
					alt="INFLUENZA Data Visualization"
					class="w-full h-auto"
				/>
			</div>

			<!-- Project Description - 8 columns on desktop -->
			<div class="md:col-span-8 md:col-start-3">
				<div class="space-y-6 text-base leading-relaxed">
					<p>
						Interactive dashboard tracking WHO FluNet data
						(2009-2024) across six nations: Germany, Iceland, Iran,
						Japan, North Korea, and UAE.
					</p>
					<p>
						Developed through iterative coding in Programmiertes
						Entwerfen 2, with Git version control and Vercel
						deployment. Radial layouts mirror WHO surveillance
						protocols while maintaining national color identities.
					</p>
				</div>
			</div>
		</div>

		<!-- Content Sections -->
		<div class="grid grid-cols-1 md:grid-cols-12 gap-x-8 gap-y-20">
			<!-- Data Visualization Section - 6 columns -->
			<section class="md:col-span-6">
				<h2 class="text-2xl font-light mb-6 tracking-tight">
					Data Visualization Approach
				</h2>
				<div class="space-y-4 text-sm leading-relaxed">
					<p>
						The visualization employs a radial layout where each
						circle represents a country's influenza data over time.
						The design prioritizes both aesthetic appeal and
						functional clarity, allowing users to identify patterns
						across different nations and time periods.
					</p>
					<p>
						Each country's data is represented through a unique
						color scheme that maintains cultural relevance while
						ensuring sufficient contrast for accessibility. The
						radial format enables efficient comparison of seasonal
						patterns, with particular emphasis on pandemic years.
					</p>
				</div>
			</section>

			<!-- Technical Implementation Section - 6 columns -->
			<section class="md:col-span-6">
				<h2 class="text-2xl font-light mb-6 tracking-tight">
					Technical Implementation
				</h2>
				<p class="text-sm leading-relaxed">
					The visualization was built using D3.js for data binding and
					SVG manipulation, with JavaScript ES6 features for data
					processing. WHO FluNet data was preprocessed using Python
					scripts to normalize reporting inconsistencies across
					different national health systems.
				</p>
				<p class="text-sm leading-relaxed mt-4">
					Interactive elements include time-period filtering, country
					isolation for detailed analysis, and tooltip information
					displaying specific data points. The responsive design
					adapts to various screen sizes while maintaining the
					integrity of the visualization.
				</p>
			</section>

			<!-- Research Insights Section - 6 columns -->
			<section class="md:col-span-6">
				<h2 class="text-2xl font-light mb-6 tracking-tight">
					Research Insights
				</h2>
				<div class="space-y-4 text-sm leading-relaxed">
					<p>
						Analysis of the visualization revealed several key
						patterns:
					</p>
					<ul class="space-y-3">
						<li>
							<span class="font-medium"
								>Seasonal Variations:</span
							>
							Northern hemisphere countries (Germany, Japan) show
							consistent winter peaks, while equatorial nations
							display less pronounced seasonality
						</li>
						<li>
							<span class="font-medium">Pandemic Impact:</span>
							The 2009 H1N1 and 2020 COVID-19 periods show
							distinctive disruptions to typical influenza
							patterns
						</li>
						<li>
							<span class="font-medium"
								>Reporting Disparities:</span
							>
							Significant differences in surveillance capacity are
							visible between nations, with data gaps particularly
							evident in North Korea
						</li>
					</ul>
				</div>
			</section>

			<!-- Design Process Section - 6 columns -->
			<section class="md:col-span-6">
				<h2 class="text-2xl font-light mb-6 tracking-tight">
					Design Process
				</h2>
				<div class="space-y-4 text-sm leading-relaxed">
					<p>
						The project followed an iterative design process,
						beginning with exploratory data analysis to identify
						meaningful patterns. Initial sketches explored various
						visualization approaches, including linear timelines,
						heatmaps, and radial layouts.
					</p>
					<p>
						User testing with epidemiology students informed
						refinements to the visual encoding, interaction design,
						and color palette. The final design balances aesthetic
						considerations with scientific accuracy, creating a
						visualization that serves both analytical and
						communicative purposes.
					</p>
				</div>
			</section>

			<!-- Project Technologies - Full width -->
			<section class="md:col-span-12 md:col-start-3 md:col-end-11">
				<h2 class="text-2xl font-light mb-6 tracking-tight">
					Technologies & Methods
				</h2>
				<div class="flex flex-wrap gap-x-4 gap-y-2">
					<span class="text-xs text-gray-600">D3.js</span>
					<span class="text-xs text-gray-600">JavaScript</span>
					<span class="text-xs text-gray-600">SVG</span>
					<span class="text-xs text-gray-600">WHO FluNet Data</span>
					<span class="text-xs text-gray-600">Python</span>
					<span class="text-xs text-gray-600">Git</span>
					<span class="text-xs text-gray-600">Vercel</span>
				</div>
			</section>
		</div>

		<!-- Back to Projects Link -->
		<div class="mt-20">
			<NuxtLink
				to="/projects"
				class="text-sm uppercase tracking-widest hover:underline"
			>
				Back to Projects
			</NuxtLink>
		</div>
	</div>
</template>

<script setup>
// Page metadata
useHead({
	title: "INFLUENZA Project | Jonas Wienberg Portfolio",
	meta: [
		{
			name: "description",
			content:
				"Interactive dashboard tracking WHO FluNet data (2009-2024) across six nations with radial visualizations of pandemic patterns.",
		},
	],
});
</script>

<style scoped>
ul {
	list-style-type: none;
	padding: 0;
	margin: 0;
}
</style>
