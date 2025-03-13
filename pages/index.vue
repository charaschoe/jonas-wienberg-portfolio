<template>
	<div class="max-w-5xl mx-auto px-6 py-16 md:py-24">
		<!-- Grid Layout -->
		<div class="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12">
			<!-- Profile Image - Spans 5 columns on desktop -->
			<div class="md:col-span-5">
				<div class="aspect-[3/4] overflow-hidden">
					<img
						src="/images/profiles/R0009867.JPG"
						alt="Jonas Wienberg"
						class="w-full h-full object-cover"
					/>
				</div>
			</div>

			<!-- Introduction Text - Spans 7 columns on desktop -->
			<div class="md:col-span-7 flex flex-col justify-center">
				<h1 class="text-4xl font-light mb-8 tracking-tight">
					Jonas Wienberg
				</h1>
				<p class="text-xl font-light mb-10 text-gray-700">
					Interaction Design Student & Digital Innovation Specialist
				</p>
				<div class="space-y-6 mb-12">
					<p class="text-base text-gray-800 leading-relaxed">
						Currently studying Interaction Design at Hochschule für
						Gestaltung Schwäbisch Gmünd, focusing on
						interdisciplinary projects that combine design
						innovation, analytical leadership (PMO), and
						user-centered solutions (UI/UX).
					</p>
					<p class="text-base text-gray-800 leading-relaxed">
						As Chair of the General Students' Committee (AStA), I
						actively advocate for student interests and lead
						collaborative initiatives within the academic community.
					</p>
				</div>

				<!-- Call to Action Buttons -->
				<div class="flex flex-wrap gap-4">
					<NuxtLink
						to="/projects"
						class="px-8 py-3 border border-black text-sm uppercase tracking-widest hover:bg-black hover:text-white transition-colors duration-300"
					>
						View Work
					</NuxtLink>
					<NuxtLink
						to="/about"
						class="px-8 py-3 border border-black text-sm uppercase tracking-widest hover:bg-black hover:text-white transition-colors duration-300"
					>
						About
					</NuxtLink>
				</div>
			</div>
		</div>
	</div>
</template>

<script lang="ts" setup></script>

<style>
body {
	font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
	background-color: #ffffff;
	color: #000000;
}
</style>
