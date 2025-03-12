<template>
	<div class="min-h-screen bg-neutral-50">
		<div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
			<section class="py-16 sm:py-24">
				<h1 class="section-title mb-12 text-center animate-fade-in">
					Featured Projects
				</h1>
				<div
					class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
				>
					<!-- Project Card Template -->
					<div
						v-for="project in projects"
						:key="project.id"
						class="card group cursor-pointer animate-slide-up"
						@click="selectedProject = project"
					>
						<div class="relative h-56 overflow-hidden rounded-t-xl">
							<img
								:src="project.image"
								:alt="project.title"
								class="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-110"
							/>
							<div
								class="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"
							></div>
							<div class="absolute bottom-4 left-4 right-4">
								<h3
									class="text-xl font-display font-bold text-white mb-1"
								>
									{{ project.title }}
								</h3>
								<p class="text-sm text-white/90">
									{{ project.subtitle }}
								</p>
							</div>
						</div>
						<div class="p-6">
							<p class="text-neutral-600 mb-4 line-clamp-2">
								{{ project.shortDescription }}
							</p>
							<div class="flex flex-wrap gap-2 mb-4">
								<span
									v-for="tech in project.technologies"
									:key="tech"
									class="px-3 py-1 bg-neutral-100 rounded-full text-sm font-medium text-neutral-600 hover:bg-neutral-200 transition-colors"
								>
									{{ tech }}
								</span>
							</div>
							<button
								@click.stop="selectedProject = project"
								class="link-underline inline-flex items-center text-primary-500 hover:text-primary-600 font-medium transition-colors"
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
					class="bg-white rounded-2xl max-w-4xl max-h-[90vh] overflow-y-auto w-full shadow-2xl animate-fade-in"
					@click.stop
				>
					<div
						class="sticky top-0 z-10 bg-white/80 backdrop-blur-sm border-b border-neutral-200"
					>
						<div class="px-8 py-6 flex justify-between items-start">
							<div>
								<h2
									class="text-4xl font-display font-bold text-neutral-900 mb-2"
								>
									{{ selectedProject.title }}
								</h2>
								<p class="text-xl text-neutral-600">
									{{ selectedProject.subtitle }}
								</p>
							</div>
							<button
								@click="selectedProject = null"
								class="text-neutral-400 hover:text-neutral-600 transition-colors p-2 hover:bg-neutral-100 rounded-lg"
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
									class="text-lg leading-relaxed text-neutral-700"
									v-html="selectedProject.fullDescription"
								></p>
							</div>

							<!-- Scene Selector Demo -->
							<div
								v-if="selectedProject.title === 'BALINEUM'"
								class="mb-16"
							>
								<h2
									class="text-3xl font-display font-bold text-neutral-900 mb-8"
								>
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
									<h3
										class="text-3xl font-display font-bold text-neutral-900 mb-6"
									>
										{{ section.title }}
									</h3>
									<div
										v-html="section.content"
										class="text-neutral-700"
									></div>
								</div>
							</template>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script setup>
import SceneSelector from "~/components/SceneSelector.vue";

definePageMeta({
	layout: "default",
	transition: {
		name: "page",
		mode: "out-in",
	},
});

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
					<div class="bg-neutral-50 p-8 rounded-xl shadow-sm mb-6">
						<h3 class="text-2xl font-display font-bold mb-6">Interface Features</h3>
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
						</ul>
					</div>
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
