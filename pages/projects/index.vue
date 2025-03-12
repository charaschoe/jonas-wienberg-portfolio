<template>
	<div class="max-w-6xl mx-auto px-4">
		<section class="py-16">
			<h1 class="text-4xl font-bold mb-12 text-center">
				Featured Projects
			</h1>
			<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
				<!-- Project Card Template -->
				<div
					v-for="project in projects"
					:key="project.id"
					class="bg-white rounded-xl shadow-md overflow-hidden cursor-pointer transform transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
					@click="selectedProject = project"
				>
					<div class="relative h-56 overflow-hidden">
						<img
							:src="project.image"
							:alt="project.title"
							class="w-full h-full object-cover transform transition-transform duration-700 hover:scale-110"
						/>
						<div
							class="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"
						></div>
						<div class="absolute bottom-4 left-4 right-4">
							<h3 class="text-xl font-bold text-white mb-1">
								{{ project.title }}
							</h3>
							<p class="text-sm text-white/90">
								{{ project.subtitle }}
							</p>
						</div>
					</div>
					<div class="p-6">
						<p class="text-gray-600 mb-4 line-clamp-2">
							{{ project.shortDescription }}
						</p>
						<div class="flex flex-wrap gap-2 mb-4">
							<span
								v-for="tech in project.technologies"
								:key="tech"
								class="px-3 py-1 bg-gray-100 rounded-full text-sm font-medium text-gray-600 hover:bg-gray-200 transition-colors"
							>
								{{ tech }}
							</span>
						</div>
						<button
							@click.stop="selectedProject = project"
							class="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium transition-colors"
						>
							View Details
							<svg
								class="w-4 h-4 ml-1"
								viewBox="0 0 20 20"
								fill="currentColor"
							>
								<path
									fill-rule="evenodd"
									d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
									clip-rule="evenodd"
								/>
							</svg>
						</button>
					</div>
				</div>
			</div>
		</section>

		<!-- Project Details Modal -->
		<div
			v-if="selectedProject"
			class="fixed inset-0 bg-black/70 z-50 flex items-center justify-center p-4 backdrop-blur-sm"
			@click="selectedProject = null"
		>
			<div
				class="bg-white rounded-2xl max-w-4xl max-h-[90vh] overflow-y-auto w-full shadow-2xl"
				@click.stop
			>
				<div
					class="sticky top-0 z-10 bg-white/80 backdrop-blur-sm border-b border-gray-200"
				>
					<div class="px-8 py-6 flex justify-between items-start">
						<div>
							<h2 class="text-4xl font-bold mb-2">
								{{ selectedProject.title }}
							</h2>
							<p class="text-xl text-gray-600">
								{{ selectedProject.subtitle }}
							</p>
						</div>
						<button
							@click="selectedProject = null"
							class="text-gray-400 hover:text-gray-600 transition-colors p-2 hover:bg-gray-100 rounded-lg"
						>
							<svg
								class="w-6 h-6"
								fill="none"
								stroke="currentColor"
								viewBox="0 0 24 24"
							>
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									stroke-width="2"
									d="M6 18L18 6M6 6l12 12"
								/>
							</svg>
						</button>
					</div>
				</div>

				<div class="p-8">
					<div class="prose prose-lg max-w-none">
						<!-- Overview -->
						<div class="mb-16">
							<div
								class="aspect-video w-full mb-8 rounded-xl overflow-hidden shadow-lg"
							>
								<iframe
									width="100%"
									height="100%"
									src="https://www.youtube.com/embed/T6XXA21UFIg"
									title="BALINEUM Project Video"
									frameborder="0"
									allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
									allowfullscreen
									class="w-full h-full"
								></iframe>
							</div>
							<p
								class="text-lg leading-relaxed text-gray-700"
								v-html="selectedProject.fullDescription"
							></p>
						</div>

						<!-- Scene Selector Demo -->
						<div
							v-if="selectedProject.title === 'BALINEUM'"
							class="mb-16"
						>
							<h2 class="text-3xl font-bold mb-8">
								Interactive Scene Demo
							</h2>
							<div class="bg-black rounded-2xl p-8 shadow-xl">
								<SceneSelector />
							</div>
						</div>

						<!-- Additional Sections -->
						<template v-if="selectedProject.sections">
							<div
								v-for="(
									section, index
								) in selectedProject.sections"
								:key="index"
								class="mb-16 last:mb-0"
							>
								<h3 class="text-3xl font-bold mb-6">
									{{ section.title }}
								</h3>
								<div
									v-html="section.content"
									class="text-gray-700"
								></div>
							</div>
						</template>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script setup>
import SceneSelector from "~/components/SceneSelector.vue";

const selectedProject = ref(null);

// Watch for escape key to close modal
onMounted(() => {
	const handleEscape = (e) => {
		if (e.key === "Escape" && selectedProject.value) {
			selectedProject.value = null;
		}
	};
	document.addEventListener("keydown", handleEscape);
	onUnmounted(() => {
		document.removeEventListener("keydown", handleEscape);
	});
});

const projects = ref([
	{
		id: 1,
		title: "BALINEUM",
		shortDescription:
			"A unified dial system transforming bathroom interactions through adaptive water control and user profiles.",
		subtitle: "Joint University Project | 2 Semester",
		fullDescription: `BALINEUM transforms bathroom interactions through a unified dial system integrating adaptive water control, 
			NFC-powered user profiles, and gesture-based music management. Developed with UX research and iterative prototyping, 
			this solution addresses multi-user conflicts in households through regulatory-compliant hardware engineering and 
			tangible interface design.`,
		image: "/images/balineum.jpg",
		technologies: [
			"UX Research",
			"Hardware Engineering",
			"Interaction Design",
			"Prototyping",
			"NFC Technology",
		],
		sections: [
			{
				title: "Research-Driven Development",
				content: `
					<p class="mb-6 text-lg">UX research across family homes and shared apartments uncovered three core challenges:</p>
					<ul class="space-y-3 mb-6 pl-6 list-disc">
						<li>Inconsistent temperature recall between users</li>
						<li>Awkward music control mechanics</li>
						<li>Temporal disorientation during showers</li>
					</ul>
					<p class="text-lg">Technical validation disproved capacitive touch reliability in humidity, driving adoption of hybrid physical 
					interactions inspired by the Nest Thermostat's rotational paradigm. Six hardware iterations refined the 94 mm 
					anodized aluminum dial, implementing IP68-rated seals and radial groove patterning validated through 3D-printed 
					foam prototypes.</p>
				`,
			},
			{
				title: "Core Interaction Architecture",
				content: `
					<div class="bg-gray-50 p-8 rounded-xl shadow-sm mb-6">
						<h3 class="text-2xl font-bold mb-6">Interface Features</h3>
						<ul class="space-y-4">
							<li class="flex items-start">
								<span class="font-bold mr-2">Dual-axis Control:</span>
								<span>Rotational precision (2-45°C temperature, 5-25 l/min flow control) 
								with quad-directional tilt navigation</span>
							</li>
							<li class="flex items-start">
								<span class="font-bold mr-2">Visual Feedback:</span>
								<span>Circumferential RGB LEDs (#40798C cold → red warmth gradients) 
								through steam-resistant displays</span>
							</li>
							<li class="flex items-start">
								<span class="font-bold mr-2">Haptic Feedback:</span>
								<span>Pulse confirmation for mode changes</span>
							</li>
							<li class="flex items-start">
								<span class="font-bold mr-2">Installation:</span>
								<span>Magnetic docking for tool-free reconfiguration</span>
							</li>
							<li class="flex items-start">
								<span class="font-bold mr-2">Power:</span>
								<span>Inductive charging maintaining IP68 compliance</span>
							</li>
						</ul>
					</div>
				`,
			},
			{
				title: "Adaptive User Profiles",
				content: `
					<p class="text-lg mb-8">NFC-paired wearables such as ŌURA or Apple Watch activate:</p>
					<div class="grid grid-cols-1 md:grid-cols-3 gap-6">
						<div class="bg-gray-50 p-6 rounded-xl shadow-sm">
							<h3 class="text-xl font-bold mb-3">YOU Profile</h3>
							<p>Custom water-music combinations (e.g., 25°C massage jets + favorite Travis Scott playlist)</p>
						</div>
						<div class="bg-gray-50 p-6 rounded-xl shadow-sm">
							<h3 class="text-xl font-bold mb-3">Scene Presets</h3>
							<p>Preconfigured experiences like "Arctic Ice" (2°C jets + Nordic ambient tracks)</p>
						</div>
						<div class="bg-gray-50 p-6 rounded-xl shadow-sm">
							<h3 class="text-xl font-bold mb-3">Guest Mode</h3>
							<p>Safety-locked defaults with 40°C thermal caps</p>
						</div>
					</div>
				`,
			},
			{
				title: "Key Insights",
				content: `
					<p class="text-lg mb-6">Our exploratory design process yielded several conceptual findings through hands-on methods. Paper prototyping 
					sessions utilizing Wizard of Oz techniques revealed user preferences for tactile feedback during mode transitions, 
					suggesting haptic pulse cues as a potential design solution.</p>
					<p class="text-lg">Final refinements introduced rotational momentum principles for intuitive menu navigation and ambient light patterns 
					to address temporal awareness, all framed as speculative design recommendations rather than functional implementations. 
					These insights remained strictly conceptual, focusing on interaction design exploration without engineering execution.</p>
				`,
			},
		],
	},
	{
		id: 2,
		title: "Project Two",
		shortDescription: "Full-stack application with real-time features.",
		image: "/images/project-2.jpg",
		technologies: ["Node.js", "Express", "MongoDB"],
	},
	{
		id: 3,
		title: "Project Three",
		shortDescription: "Mobile-first responsive web design project.",
		image: "/images/project-3.jpg",
		technologies: ["HTML", "CSS", "JavaScript"],
	},
]);
</script>

<style>
.prose ul {
	list-style-type: none;
	padding: 0;
}

/* Custom scrollbar for the modal */
.max-h-\[90vh\]::-webkit-scrollbar {
	width: 8px;
}

.max-h-\[90vh\]::-webkit-scrollbar-track {
	background: transparent;
}

.max-h-\[90vh\]::-webkit-scrollbar-thumb {
	background-color: rgba(0, 0, 0, 0.2);
	border-radius: 4px;
}

.max-h-\[90vh\]::-webkit-scrollbar-thumb:hover {
	background-color: rgba(0, 0, 0, 0.3);
}
</style>
