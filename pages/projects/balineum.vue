<template>
	<div class="max-w-4xl mx-auto px-4 py-12">
		<!-- Project Header -->
		<h1 class="text-4xl font-bold mb-2">BALINEUM</h1>
		<p class="text-xl text-gray-600 mb-8">
			Joint University Project / 2nd Semester
		</p>

		<!-- Project Overview -->
		<div class="mb-12">
			<p class="text-lg mb-8">
				BALINEUM transforms bathroom interactions through a unified dial
				system integrating adaptive water control, NFC-powered user
				profiles, and gesture-based music management. Developed with UX
				research and iterative prototyping, this solution addresses
				multi-user conflicts in households through regulatory-compliant
				hardware engineering and tangible interface design.
			</p>

			<!-- Project Image -->
			<div class="mb-8">
				<img
					src="/images/projects/balineum/overview.jpg"
					alt="BALINEUM Project Overview"
					class="w-full rounded-lg"
				/>
			</div>
		</div>

		<!-- Research Section -->
		<section class="mb-12">
			<h2 class="text-2xl font-bold mb-4">Research-Driven Development</h2>
			<p class="mb-4">
				UX research across family homes and shared apartments uncovered
				three core challenges: inconsistent temperature recall between
				users, awkward music control mechanics, and temporal
				disorientation during showers.
			</p>
			<p class="mb-4">
				Technical validation disproved capacitive touch reliability in
				humidity, driving adoption of hybrid physical interactions
				inspired by the Nest Thermostat's rotational paradigm. Six
				hardware iterations refined the 94 mm anodized aluminum dial,
				implementing IP68-rated seals and radial groove patterning
				validated through 3D-printed foam prototypes.
			</p>
		</section>

		<!-- Interaction Architecture Section -->
		<section class="mb-12">
			<h2 class="text-2xl font-bold mb-4">
				Core Interaction Architecture
			</h2>
			<p class="mb-4">
				The dual-axis interface combines rotational precision (2-45°C
				temperature, 5-25 l/min flow control) with quad-directional tilt
				navigation. Circumferential RGB LEDs (#40798C cold → red warmth
				gradients) provide mode feedback through steam-resistant
				displays, complemented by haptic pulse confirmation for mode
				changes. Magnetic docking enables tool-free reconfiguration,
				while inductive charging maintains IP68 compliance.
			</p>
		</section>

		<!-- User Profiles Section -->
		<section class="mb-12">
			<h2 class="text-2xl font-bold mb-4">Adaptive User Profiles</h2>
			<p class="mb-4">
				NFC-paired wearables such as ŌURA or Apple Watch activate:
			</p>
			<ul class="list-disc pl-6 mb-4 space-y-2">
				<li>
					<strong>YOU Profile:</strong> Custom water-music
					combinations (e.g., 25 °C massage jets + the favorite Travis
					Scott playlist)
				</li>
				<li>
					<strong>Scene Presets:</strong> Preconfigured experiences
					like "Arctic Ice" (2 °C jets + Nordic ambient tracks)
				</li>
				<li>
					<strong>Guest Mode:</strong> Safety-locked defaults with 40
					°C thermal caps
				</li>
			</ul>
		</section>

		<!-- Key Insights Section -->
		<section class="mb-12">
			<h2 class="text-2xl font-bold mb-4">Key Insights</h2>
			<p class="mb-4">
				Our exploratory design process yielded several conceptual
				findings through hands-on methods. Paper prototyping sessions
				utilizing Wizard of Oz techniques revealed user preferences for
				tactile feedback during mode transitions, suggesting haptic
				pulse cues as a potential design solution.
			</p>
			<p class="mb-4">
				Final refinements introduced rotational momentum principles for
				intuitive menu navigation and ambient light patterns to address
				temporal awareness, all framed as speculative design
				recommendations rather than functional implementations. These
				insights remained strictly conceptual, focusing on interaction
				design exploration without engineering execution.
			</p>
		</section>

		<!-- Project Technologies -->
		<section class="mb-12">
			<h2 class="text-2xl font-bold mb-4">Technologies & Methods</h2>
			<div class="flex flex-wrap gap-2">
				<span class="px-3 py-1 bg-gray-100 rounded-full text-sm"
					>UX Research</span
				>
				<span class="px-3 py-1 bg-gray-100 rounded-full text-sm"
					>Iterative Prototyping</span
				>
				<span class="px-3 py-1 bg-gray-100 rounded-full text-sm"
					>Hardware Engineering</span
				>
				<span class="px-3 py-1 bg-gray-100 rounded-full text-sm"
					>Tangible Interface Design</span
				>
				<span class="px-3 py-1 bg-gray-100 rounded-full text-sm"
					>3D Printing</span
				>
				<span class="px-3 py-1 bg-gray-100 rounded-full text-sm"
					>NFC Technology</span
				>
				<span class="px-3 py-1 bg-gray-100 rounded-full text-sm"
					>Wizard of Oz Testing</span
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
/* Add any project-specific styles here */
</style>
