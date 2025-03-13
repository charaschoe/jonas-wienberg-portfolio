<template>
	<div class="max-w-5xl mx-auto px-6 py-16 md:py-24">
		<!-- Project Header -->
		<div class="grid grid-cols-1 md:grid-cols-12 gap-8 mb-20">
			<div class="md:col-span-8">
				<h1 class="text-4xl font-light mb-4 tracking-tight">
					BALINEUM
				</h1>
				<p class="text-base text-gray-600 mb-8">
					Joint University Project / 2nd Semester
				</p>
			</div>
		</div>

		<!-- Project Overview -->
		<div class="grid grid-cols-1 md:grid-cols-12 gap-8 mb-20">
			<!-- Project Image - Full width on mobile, 8 columns on desktop -->
			<div class="md:col-span-12 mb-8">
				<img
					src="/images/projects/balineum/overview.jpg"
					alt="BALINEUM Project Overview"
					class="w-full h-auto"
				/>
			</div>

			<!-- Project Description - 8 columns on desktop -->
			<div class="md:col-span-8 md:col-start-3">
				<p class="text-base leading-relaxed mb-0">
					BALINEUM transforms bathroom interactions through a unified
					dial system integrating adaptive water control, NFC-powered
					user profiles, and gesture-based music management. Developed
					with UX research and iterative prototyping, this solution
					addresses multi-user conflicts in households through
					regulatory-compliant hardware engineering and tangible
					interface design.
				</p>
			</div>
		</div>

		<!-- Content Sections -->
		<div class="grid grid-cols-1 md:grid-cols-12 gap-x-8 gap-y-20">
			<!-- Research Section - 6 columns -->
			<section class="md:col-span-6">
				<h2 class="text-2xl font-light mb-6 tracking-tight">
					Research-Driven Development
				</h2>
				<div class="space-y-4 text-sm leading-relaxed">
					<p>
						UX research across family homes and shared apartments
						uncovered three core challenges: inconsistent
						temperature recall between users, awkward music control
						mechanics, and temporal disorientation during showers.
					</p>
					<p>
						Technical validation disproved capacitive touch
						reliability in humidity, driving adoption of hybrid
						physical interactions inspired by the Nest Thermostat's
						rotational paradigm. Six hardware iterations refined the
						94 mm anodized aluminum dial, implementing IP68-rated
						seals and radial groove patterning validated through
						3D-printed foam prototypes.
					</p>
				</div>
			</section>

			<!-- Interaction Architecture Section - 6 columns -->
			<section class="md:col-span-6">
				<h2 class="text-2xl font-light mb-6 tracking-tight">
					Core Interaction Architecture
				</h2>
				<p class="text-sm leading-relaxed">
					The dual-axis interface combines rotational precision
					(2-45°C temperature, 5-25 l/min flow control) with
					quad-directional tilt navigation. Circumferential RGB LEDs
					(#40798C cold → red warmth gradients) provide mode feedback
					through steam-resistant displays, complemented by haptic
					pulse confirmation for mode changes. Magnetic docking
					enables tool-free reconfiguration, while inductive charging
					maintains IP68 compliance.
				</p>
			</section>

			<!-- User Profiles Section - 6 columns -->
			<section class="md:col-span-6">
				<h2 class="text-2xl font-light mb-6 tracking-tight">
					Adaptive User Profiles
				</h2>
				<p class="text-sm leading-relaxed mb-4">
					NFC-paired wearables such as ŌURA or Apple Watch activate:
				</p>
				<ul class="space-y-3 text-sm leading-relaxed">
					<li>
						<span class="font-medium">YOU Profile:</span> Custom
						water-music combinations (e.g., 25 °C massage jets + the
						favorite Travis Scott playlist)
					</li>
					<li>
						<span class="font-medium">Scene Presets:</span>
						Preconfigured experiences like "Arctic Ice" (2 °C jets +
						Nordic ambient tracks)
					</li>
					<li>
						<span class="font-medium">Guest Mode:</span>
						Safety-locked defaults with 40 °C thermal caps
					</li>
				</ul>
			</section>

			<!-- Key Insights Section - 6 columns -->
			<section class="md:col-span-6">
				<h2 class="text-2xl font-light mb-6 tracking-tight">
					Key Insights
				</h2>
				<div class="space-y-4 text-sm leading-relaxed">
					<p>
						Our exploratory design process yielded several
						conceptual findings through hands-on methods. Paper
						prototyping sessions utilizing Wizard of Oz techniques
						revealed user preferences for tactile feedback during
						mode transitions, suggesting haptic pulse cues as a
						potential design solution.
					</p>
					<p>
						Final refinements introduced rotational momentum
						principles for intuitive menu navigation and ambient
						light patterns to address temporal awareness, all framed
						as speculative design recommendations rather than
						functional implementations. These insights remained
						strictly conceptual, focusing on interaction design
						exploration without engineering execution.
					</p>
				</div>
			</section>

			<!-- Project Technologies - Full width -->
			<section class="md:col-span-12 md:col-start-3 md:col-end-11">
				<h2 class="text-2xl font-light mb-6 tracking-tight">
					Technologies & Methods
				</h2>
				<div class="flex flex-wrap gap-x-4 gap-y-2">
					<span class="text-xs text-gray-600">UX Research</span>
					<span class="text-xs text-gray-600"
						>Iterative Prototyping</span
					>
					<span class="text-xs text-gray-600"
						>Hardware Engineering</span
					>
					<span class="text-xs text-gray-600"
						>Tangible Interface Design</span
					>
					<span class="text-xs text-gray-600">3D Printing</span>
					<span class="text-xs text-gray-600">NFC Technology</span>
					<span class="text-xs text-gray-600"
						>Wizard of Oz Testing</span
					>
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
	title: "BALINEUM Project | Jonas Wienberg Portfolio",
	meta: [
		{
			name: "description",
			content:
				"BALINEUM transforms bathroom interactions through a unified dial system integrating adaptive water control, NFC-powered user profiles, and gesture-based music management.",
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
