<template>
	<div class="max-w-5xl mx-auto px-6 py-16 md:py-24">
		<h1 class="text-4xl font-light mb-16 tracking-tight">Projects</h1>

		<!-- Project Grid -->
		<div class="grid grid-cols-1 md:grid-cols-12 gap-x-8 gap-y-20">
			<!-- Project Card Template -->
			<div
				v-for="(project, index) in projects"
				:key="project.id"
				class="md:col-span-6 lg:col-span-4"
			>
				<div class="project-card">
					<div class="aspect-[4/3] overflow-hidden mb-4">
						<img
							:src="project.image"
							:alt="project.title"
							class="w-full h-full object-cover"
						/>
					</div>
					<h3 class="text-lg font-medium mb-2">
						{{ project.title }}
					</h3>
					<p class="text-sm text-gray-700 mb-4 leading-relaxed">
						{{ project.description }}
					</p>
					<div class="flex flex-wrap gap-2 mb-4">
						<span
							v-for="tech in project.technologies"
							:key="tech"
							class="text-xs text-gray-600"
						>
							{{ tech
							}}{{
								project.technologies.indexOf(tech) <
								project.technologies.length - 1
									? " / "
									: ""
							}}
						</span>
					</div>
					<NuxtLink
						:to="project.link"
						class="text-sm uppercase tracking-widest hover:underline"
					>
						View Project
					</NuxtLink>
				</div>
			</div>
		</div>
	</div>
</template>

<script setup>
const projects = ref([
	{
		id: 1,
		title: "BALINEUM",
		description:
			"A unified dial system transforming bathroom interactions with adaptive water control and NFC-powered user profiles.",
		image: "/images/projects/balineum/overview.jpg",
		technologies: [
			"UX Research",
			"Hardware Engineering",
			"Tangible Interface Design",
		],
		link: "/projects/balineum",
	},
	{
		id: 2,
		title: "KonradAI - Visa Application Helper",
		description:
			"Redesigning the German Federal Foreign Office's visa application platform to streamline the process for international users.",
		image: "/images/projects/konradai/konradai_screenshot.jpg",
		technologies: [
			"UX Research",
			"Information Architecture",
			"Chrome Extension",
		],
		link: "/projects/konradai",
	},
	{
		id: 3,
		title: "INFLUENZA",
		description:
			"Interactive dashboard tracking WHO FluNet data (2009-2024) across six nations with radial visualizations of pandemic patterns.",
		image: "/images/projects/influenza/visualization.svg",
		technologies: ["Data Visualization", "JavaScript", "WHO FluNet Data"],
		link: "/projects/influenza",
	},
]);
</script>

<style scoped>
.project-card {
	transition: opacity 0.3s ease;
}

.project-card:hover {
	opacity: 0.9;
}
</style>
