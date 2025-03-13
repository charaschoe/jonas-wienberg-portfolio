<template>
	<div class="max-w-6xl mx-auto">
		<section class="py-12">
			<h1 class="text-3xl font-bold mb-8">My Projects</h1>
			<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
				<!-- Project Card Template -->
				<div
					v-for="project in projects"
					:key="project.id"
					class="bg-white rounded-lg shadow-sm overflow-hidden"
				>
					<img
						:src="project.image"
						:alt="project.title"
						class="w-full h-48 object-cover"
					/>
					<div class="p-6">
						<h3 class="text-xl font-semibold mb-2">
							{{ project.title }}
						</h3>
						<p class="text-gray-600 mb-4">
							{{ project.description }}
						</p>
						<div class="flex flex-wrap gap-2 mb-4">
							<span
								v-for="tech in project.technologies"
								:key="tech"
								class="px-2 py-1 bg-gray-100 rounded text-sm"
							>
								{{ tech }}
							</span>
						</div>
						<a
							:href="project.link"
							target="_blank"
							class="text-blue-600 hover:text-blue-800"
						>
							View Project →
						</a>
					</div>
				</div>
			</div>
		</section>
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
