<template>
	<div class="max-w-4xl mx-auto px-4 py-12">
		<!-- Project Header -->
		<h1 class="text-4xl font-bold mb-2">INFLUENZA</h1>
		<p class="text-xl text-gray-600 mb-8">
			Interactive Data Visualization / 2nd Semester
		</p>

		<!-- Project Overview -->
		<div class="mb-12">
			<p class="text-lg mb-8">
				Interactive dashboard tracking WHO FluNet data (2009-2024)
				across six nations: Germany, Iceland, Iran, Japan, North Korea,
				and UAE.
			</p>
			<p class="text-lg mb-8">
				Developed through iterative coding in Programmiertes Entwerfen
				2, with Git version control and Vercel deployment. Radial
				layouts mirror WHO surveillance protocols while maintaining
				national color identities.
			</p>

			<!-- Project Image Placeholder - Replace with actual image when available -->
			<div class="mb-8">
				<img
					src="/images/projects/influenza/overview.jpg"
					alt="INFLUENZA Dashboard Overview"
					class="w-full rounded-lg"
				/>
			</div>
		</div>

		<!-- Key Features Section -->
		<section class="mb-12">
			<h2 class="text-2xl font-bold mb-4">Key Features</h2>
			<ul class="list-disc pl-6 mb-4 space-y-2">
				<li>
					<strong>Pandemic patterns:</strong> 2009 H1N1 spike
					visualized across all countries
				</li>
				<li>
					<strong>Seasonal rhythms:</strong> Winter peaks (Dec-Mar NH,
					Apr-Sept SH) vs summer baseline
				</li>
				<li>
					<strong>Hemispheric contrast:</strong> UAE's tropical dual
					peaks vs single temperate spikes
				</li>
			</ul>

			<!-- Key Features Image Placeholder -->
			<div class="mb-8">
				<img
					src="/images/projects/influenza/visualization.svg"
					alt="Data Pattern Visualization"
					class="w-full rounded-lg bg-gray-800"
				/>
			</div>
		</section>

		<!-- Technical Details Section -->
		<section class="mb-12">
			<h2 class="text-2xl font-bold mb-4">Technical Details</h2>
			<ul class="list-disc pl-6 mb-4 space-y-2">
				<li>
					49,890 cleaned data rows processed through gmynd.js/jQuery
				</li>
				<li>754 lines of custom code</li>
				<li>1488ms avg load time (Chromium engine)</li>
				<li>7/64 FluNet categories mapped</li>
			</ul>

			<!-- Technical Details Image Placeholder -->
			<div class="mb-8">
				<img
					src="/images/projects/influenza/visualization.svg"
					alt="Technical Architecture Diagram"
					class="w-full rounded-lg bg-gray-800"
				/>
			</div>
		</section>

		<!-- Design System Section -->
		<section class="mb-12">
			<h2 class="text-2xl font-bold mb-4">Design System</h2>
			<p class="mb-4">
				Color schemes strictly derived from national flags:
			</p>
			<ul class="list-disc pl-6 mb-4 space-y-2">
				<li><strong>Germany:</strong> Black-red-gold progression</li>
				<li>
					<strong>Japan:</strong> White field with red disk ratios
				</li>
				<li>
					<strong>UAE:</strong> Vertical pan-Arab red/green/white
					bands
				</li>
				<li>
					<strong>Iran:</strong> Green/white/red stripes with emblem
					integration
				</li>
				<li>
					<strong>Iceland:</strong> Nordic cross blue/red
					intersections
				</li>
			</ul>

			<!-- Design System Image Placeholder -->
			<div class="mb-8">
				<img
					src="/images/projects/influenza/overview.jpg"
					alt="Color System Visualization"
					class="w-full rounded-lg"
				/>
			</div>
		</section>

		<!-- Live Demo Section -->
		<section class="mb-12">
			<h2 class="text-2xl font-bold mb-4">Try It Yourself</h2>
			<p class="mb-4">
				Experience the interactive data visualization firsthand:
			</p>
			<div class="mt-6">
				<a
					href="https://neu-blush.vercel.app/"
					target="_blank"
					class="inline-block px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
				>
					Launch Live Demo
				</a>
			</div>

			<!-- Demo Preview Image Placeholder -->
			<div class="mt-8 mb-8">
				<img
					src="/images/projects/influenza/overview.jpg"
					alt="Interactive Demo Preview"
					class="w-full rounded-lg"
				/>
			</div>
		</section>

		<!-- Project Technologies -->
		<section class="mb-12">
			<h2 class="text-2xl font-bold mb-4">Technologies & Methods</h2>
			<div class="flex flex-wrap gap-2">
				<span class="px-3 py-1 bg-gray-100 rounded-full text-sm"
					>Data Visualization</span
				>
				<span class="px-3 py-1 bg-gray-100 rounded-full text-sm"
					>JavaScript</span
				>
				<span class="px-3 py-1 bg-gray-100 rounded-full text-sm"
					>jQuery</span
				>
				<span class="px-3 py-1 bg-gray-100 rounded-full text-sm"
					>gmynd.js</span
				>
				<span class="px-3 py-1 bg-gray-100 rounded-full text-sm"
					>Git</span
				>
				<span class="px-3 py-1 bg-gray-100 rounded-full text-sm"
					>Vercel</span
				>
				<span class="px-3 py-1 bg-gray-100 rounded-full text-sm"
					>WHO FluNet Data</span
				>
			</div>
		</section>

		<!-- Back to Projects Link -->
		<div>
			<NuxtLink
				to="/projects"
				class="text-blue-600 hover:text-blue-800 flex items-center"
			>
				<span class="mr-2">←</span> Back to Projects
			</NuxtLink>
		</div>
	</div>
</template>

<script setup>
// Page metadata
useHead({
	title: "INFLUENZA - Interactive Data Visualization | Jonas Wienberg Portfolio",
	meta: [
		{
			name: "description",
			content:
				"Interactive dashboard tracking WHO FluNet data (2009-2024) across six nations, visualizing pandemic patterns and seasonal rhythms.",
		},
	],
});
</script>

<style scoped>
/* Add any project-specific styles here */
</style>
