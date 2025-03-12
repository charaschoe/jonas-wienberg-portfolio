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
		title: "Project One",
		description: "A modern web application built with Vue.js and Nuxt.",
		image: "/images/project-1.jpg",
		technologies: ["Vue.js", "Nuxt", "TailwindCSS"],
		link: "#",
	},
	{
		id: 2,
		title: "Project Two",
		description: "Full-stack application with real-time features.",
		image: "/images/project-2.jpg",
		technologies: ["Node.js", "Express", "MongoDB"],
		link: "#",
	},
	{
		id: 3,
		title: "Project Three",
		description: "Mobile-first responsive web design project.",
		image: "/images/project-3.jpg",
		technologies: ["HTML", "CSS", "JavaScript"],
		link: "#",
	},
]);
</script>
