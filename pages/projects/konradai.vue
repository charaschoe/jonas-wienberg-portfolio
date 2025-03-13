<template>
	<div class="max-w-4xl mx-auto px-4 py-12">
		<!-- Project Header -->
		<h1 class="text-4xl font-bold mb-2">
			KonradAI - Visa Application Helper
		</h1>
		<p class="text-xl text-gray-600 mb-8">
			Joint University Project / 3rd Semester
		</p>

		<!-- Project Overview -->
		<div class="mb-12">
			<p class="text-lg mb-8">
				This project aimed to redesign the German Federal Foreign
				Office's RKS Appointment platform, focusing on streamlining the
				visa application scheduling process for international users. The
				existing system suffered from fragmented navigation, cluttered
				information architecture, and inefficient appointment
				management, creating undue stress for applicants navigating
				complex bureaucratic requirements.
			</p>

			<!-- Project Image Placeholder - Replace with actual image when available -->
			<div class="mb-8">
				<img
					src="/images/projects/konradai/overview.jpg"
					alt="KonradAI Project Overview"
					class="w-full rounded-lg"
				/>
			</div>
		</div>

		<!-- Key Challenges Section -->
		<section class="mb-12">
			<h2 class="text-2xl font-bold mb-4">Key Challenges</h2>
			<p class="mb-4">
				The platform's primary issues centered on three areas:
				information overload, rigid scheduling limitations, and
				inconsistent navigation.
			</p>
			<p class="mb-4">
				Critical visa details were buried in dense, unstructured text
				blocks without mobile optimization, while the four-week booking
				window and lack of automated notifications led to frequent
				appointment shortages. Users faced a labyrinth of redundant
				redirects, inconsistent menu layouts, and no "back" function,
				exacerbating frustration during an already high-stakes process.
			</p>

			<!-- Design Approach -->
			<p class="mb-4">
				The redesign prioritized clarity and accessibility, asking: How
				might intuitive visual cues and contextual aids guide users
				through each step? How can we simplify a process complicated by
				opaque internal workflows?
			</p>

			<!-- Key Challenges Image Placeholder -->
			<div class="mb-8">
				<img
					src="/images/projects/konradai/overview.jpg"
					alt="Problem Analysis"
					class="w-full rounded-lg"
				/>
			</div>
		</section>

		<!-- Solution Approach Section -->
		<section class="mb-12">
			<h2 class="text-2xl font-bold mb-4">Solution Approach</h2>
			<p class="mb-4">
				By narrowing the scope to national visas (Schengen visas
				remained externally managed), the project focused on untangling
				information hierarchies and embedding real-time updates.
				Prototyping emphasized progressive disclosure—surfacing key
				requirements through interactive checklists and tooltips—while a
				reimagined appointment system introduced dynamic slot releases
				and status tracking to reduce uncertainty.
			</p>

			<!-- Solution Approach Image Placeholder -->
			<div class="mb-8">
				<img
					src="/images/projects/konradai/overview.jpg"
					alt="Solution Framework"
					class="w-full rounded-lg"
				/>
			</div>
		</section>

		<!-- Refined User Journey Section -->
		<section class="mb-12">
			<h2 class="text-2xl font-bold mb-4">Refined User Journey</h2>
			<p class="mb-4">
				The revamped flow begins with users landing on a visually
				streamlined embassy website, where document checklists and
				process timelines are immediately accessible. During appointment
				booking, auto-save functionality and live calendar updates
				prevent data loss and slot conflicts. Post-submission,
				applicants receive clear confirmations with expected wait times,
				reducing the need for repetitive follow-ups. By integrating
				error prevention and status transparency, the design minimizes
				redundancies and empowers users to navigate the process with
				confidence.
			</p>

			<!-- User Journey Image Placeholder -->
			<div class="mb-8">
				<img
					src="/images/projects/konradai/overview.jpg"
					alt="User Journey Map"
					class="w-full rounded-lg"
				/>
			</div>
		</section>

		<!-- Outcome Section -->
		<section class="mb-12">
			<h2 class="text-2xl font-bold mb-4">Outcome</h2>
			<p class="mb-4">
				The solution (Chrome extension) balances bureaucratic
				necessities with human-centered interactions, transforming a
				fragmented system into a cohesive, stress-reduced experience. It
				demonstrates how strategic information design and system
				transparency can alleviate pain points in even the most rigid
				institutional frameworks.
			</p>

			<!-- Outcome Image Placeholder -->
			<div class="mb-8">
				<img
					src="/images/projects/konradai/overview.jpg"
					alt="Chrome Extension Interface"
					class="w-full rounded-lg"
				/>
			</div>
		</section>

		<!-- Project Technologies -->
		<section class="mb-12">
			<h2 class="text-2xl font-bold mb-4">Technologies & Methods</h2>
			<div class="flex flex-wrap gap-2">
				<span class="px-3 py-1 bg-gray-100 rounded-full text-sm"
					>UX Research</span
				>
				<span class="px-3 py-1 bg-gray-100 rounded-full text-sm"
					>Information Architecture</span
				>
				<span class="px-3 py-1 bg-gray-100 rounded-full text-sm"
					>Chrome Extension</span
				>
				<span class="px-3 py-1 bg-gray-100 rounded-full text-sm"
					>Prototyping</span
				>
				<span class="px-3 py-1 bg-gray-100 rounded-full text-sm"
					>User Journey Mapping</span
				>
				<span class="px-3 py-1 bg-gray-100 rounded-full text-sm"
					>Progressive Disclosure</span
				>
				<span class="px-3 py-1 bg-gray-100 rounded-full text-sm"
					>System Design</span
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
	title: "KonradAI - Visa Application Helper | Jonas Wienberg Portfolio",
	meta: [
		{
			name: "description",
			content:
				"KonradAI redesigns the German Federal Foreign Office's visa application platform, streamlining the process for international users through a Chrome extension.",
		},
	],
});
</script>

<style scoped>
/* Add any project-specific styles here */
</style>
