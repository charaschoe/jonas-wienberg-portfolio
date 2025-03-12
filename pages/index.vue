<template>
	<div class="min-h-screen flex flex-col">
		<!-- Hero Section -->
		<section class="relative py-24 sm:py-32 bg-neutral-50">
			<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<div
					class="text-center lg:text-left lg:grid lg:grid-cols-12 lg:gap-8"
				>
					<div class="lg:col-span-7">
						<h1
							class="text-4xl sm:text-5xl font-bold font-display tracking-tight text-neutral-900 mb-6 animate-fade-in"
						>
							Jonas Wienberg
						</h1>
						<p
							class="text-xl sm:text-2xl text-neutral-600 mb-8 animate-slide-up"
						>
							Interaction Design Student & Digital Innovation
							Specialist
						</p>
						<div
							class="prose prose-lg text-neutral-700 mb-8 animate-slide-up [&>p]:mt-4"
						>
							<p>
								Currently studying Interaction Design at
								Hochschule für Gestaltung Schwäbisch Gmünd,
								focusing on interdisciplinary projects that
								combine design innovation, analytical leadership
								(PMO), and user-centered solutions (UI/UX).
							</p>
							<p>
								As Chair of the General Students' Committee
								(AStA), I actively advocate for student
								interests and lead collaborative initiatives
								within the academic community.
							</p>
						</div>
						<div
							class="flex flex-wrap gap-4 justify-center lg:justify-start animate-slide-up"
						>
							<NuxtLink to="/projects" class="button-primary">
								View My Work
								<svg
									class="ml-2 w-5 h-5"
									fill="none"
									stroke="currentColor"
									viewBox="0 0 24 24"
								>
									<path
										stroke-linecap="round"
										stroke-linejoin="round"
										stroke-width="2"
										d="M13 7l5 5m0 0l-5 5m5-5H6"
									/>
								</svg>
							</NuxtLink>
							<NuxtLink to="/about" class="button-secondary">
								About Me
							</NuxtLink>
						</div>
					</div>
					<div class="hidden lg:block lg:col-span-5">
						<div class="relative mt-12 lg:mt-0">
							<div
								class="absolute inset-0 flex items-center justify-center"
							>
								<div
									class="w-64 h-64 bg-primary-100 rounded-full filter blur-3xl opacity-50"
								></div>
							</div>
							<div class="relative animate-fade-in">
								<img
									src="/images/profilepicture.jpeg"
									alt="Jonas Wienberg"
									class="w-64 h-64 mx-auto rounded-full object-cover shadow-lg"
								/>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>

		<!-- Featured Projects Preview -->
		<section class="py-16 sm:py-24 bg-white">
			<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<div class="text-center mb-12">
					<h2 class="section-title">Featured Projects</h2>
					<p class="mt-4 text-lg text-neutral-600">
						A selection of my recent work in interaction design and
						digital innovation.
					</p>
				</div>
				<div
					class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
				>
					<!-- Project Cards will be dynamically populated -->
					<div
						v-for="project in featuredProjects"
						:key="project.title"
						class="card group"
					>
						<div
							class="relative w-full aspect-video rounded-t-xl overflow-hidden"
						>
							<img
								:src="project.image"
								:alt="project.title"
								class="object-cover transform group-hover:scale-105 transition-transform duration-200"
							/>
						</div>
						<div class="p-6">
							<h3
								class="text-xl font-semibold font-display text-neutral-900"
							>
								{{ project.title }}
							</h3>
							<p class="mt-2 text-neutral-600">
								{{ project.description }}
							</p>
						</div>
					</div>
				</div>
				<div class="mt-12 text-center">
					<NuxtLink
						to="/projects"
						class="button-secondary inline-flex items-center"
					>
						View All Projects
						<svg
							class="ml-2 w-5 h-5"
							fill="none"
							stroke="currentColor"
							viewBox="0 0 24 24"
						>
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								d="M17 8l4 4m0 0l-4 4m4-4H3"
							/>
						</svg>
					</NuxtLink>
				</div>
			</div>
		</section>

		<!-- Footer -->
		<Footer class="mt-auto" />
	</div>
</template>

<script lang="ts" setup>
definePageMeta({
	layout: "default",
	transition: {
		name: "page",
		mode: "out-in",
	},
});

const featuredProjects = [
	{
		title: "Balineum",
		description:
			"A unified dial system for enhanced bathroom interactions, featuring adaptive water control and NFC-powered user profiles.",
		image: "/images/balineum-preview.jpg",
	},
	{
		title: "Project 2",
		description: "Description for Project 2",
		image: "/images/project2-preview.jpg",
	},
	{
		title: "Project 3",
		description: "Description for Project 3",
		image: "/images/project3-preview.jpg",
	},
];
</script>
