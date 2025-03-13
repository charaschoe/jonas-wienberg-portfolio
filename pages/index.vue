<template>
	<div class="max-w-4xl mx-auto px-4">
		<section class="py-20">
			<div class="flex flex-col md:flex-row items-center gap-8 mb-10">
				<!-- Profile Image -->
				<div class="w-full md:w-1/3">
					<img
						src="/images/profiles/R0009867.JPG"
						alt="Jonas Wienberg"
						class="rounded-lg shadow-md w-full max-w-xs mx-auto"
					/>
				</div>

				<!-- Introduction Text -->
				<div class="w-full md:w-2/3 text-center md:text-left">
					<h1 class="text-4xl font-bold mb-4">Jonas Wienberg</h1>
					<p class="text-xl text-gray-600 mb-6">
						Interaction Design Student & Digital Innovation
						Specialist
					</p>
					<div class="space-y-4">
						<p class="text-lg text-gray-700">
							Currently studying Interaction Design at Hochschule
							für Gestaltung Schwäbisch Gmünd, focusing on
							interdisciplinary projects that combine design
							innovation, analytical leadership (PMO), and
							user-centered solutions (UI/UX).
						</p>
						<p class="text-lg text-gray-700">
							As Chair of the General Students' Committee (AStA),
							I actively advocate for student interests and lead
							collaborative initiatives within the academic
							community.
						</p>
					</div>
				</div>
			</div>

			<!-- Call to Action Buttons -->
			<div class="text-center mt-8">
				<NuxtLink
					to="/projects"
					class="inline-block bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition mr-4"
				>
					View My Work
				</NuxtLink>
				<NuxtLink
					to="/about"
					class="inline-block border border-blue-600 text-blue-600 px-6 py-2 rounded-lg hover:bg-blue-50 transition"
				>
					About Me
				</NuxtLink>
			</div>
		</section>
	</div>
</template>

<script lang="ts" setup></script>

<style></style>
