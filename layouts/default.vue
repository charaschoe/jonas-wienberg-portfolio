<template>
	<div class="min-h-screen flex flex-col bg-neutral-50">
		<header
			class="fixed w-full top-0 z-50 backdrop-blur-sm bg-white/80 border-b border-neutral-200/50"
		>
			<nav class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<div class="flex items-center justify-between h-16">
					<NuxtLink
						to="/"
						class="font-display font-bold text-xl text-neutral-900 hover:text-primary-600 transition-colors"
					>
						Jonas Wienberg
					</NuxtLink>
					<div class="hidden sm:flex sm:space-x-8">
						<NuxtLink
							to="/projects"
							class="link-underline text-neutral-600 hover:text-neutral-900"
							>Projects</NuxtLink
						>
						<NuxtLink
							to="/about"
							class="link-underline text-neutral-600 hover:text-neutral-900"
							>About</NuxtLink
						>
						<NuxtLink
							to="/contact"
							class="link-underline text-neutral-600 hover:text-neutral-900"
							>Contact</NuxtLink
						>
					</div>
					<button
						class="sm:hidden p-2 rounded-lg hover:bg-neutral-100"
						@click="isMenuOpen = !isMenuOpen"
					>
						<svg
							class="w-6 h-6"
							fill="none"
							stroke="currentColor"
							viewBox="0 0 24 24"
						>
							<path
								v-if="!isMenuOpen"
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								d="M4 6h16M4 12h16M4 18h16"
							/>
							<path
								v-else
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								d="M6 18L18 6M6 6l12 12"
							/>
						</svg>
					</button>
				</div>
			</nav>
			<!-- Mobile menu -->
			<div v-if="isMenuOpen" class="sm:hidden">
				<div class="px-2 pt-2 pb-3 space-y-1">
					<NuxtLink
						to="/projects"
						class="block px-3 py-2 rounded-lg text-neutral-600 hover:text-neutral-900 hover:bg-neutral-100"
						>Projects</NuxtLink
					>
					<NuxtLink
						to="/about"
						class="block px-3 py-2 rounded-lg text-neutral-600 hover:text-neutral-900 hover:bg-neutral-100"
						>About</NuxtLink
					>
					<NuxtLink
						to="/contact"
						class="block px-3 py-2 rounded-lg text-neutral-600 hover:text-neutral-900 hover:bg-neutral-100"
						>Contact</NuxtLink
					>
				</div>
			</div>
		</header>

		<main class="flex-grow pt-16">
			<slot />
		</main>

		<footer class="bg-white border-t border-neutral-200/50">
			<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
				<div class="grid grid-cols-1 md:grid-cols-3 gap-8">
					<div>
						<h3 class="font-display font-bold text-lg mb-4">
							Jonas Wienberg
						</h3>
						<p class="text-neutral-600 text-sm">
							Interaction Design Student & Digital Innovation
							Specialist
						</p>
					</div>
					<div>
						<h3 class="font-display font-bold text-lg mb-4">
							Quick Links
						</h3>
						<div class="space-y-2">
							<NuxtLink
								to="/projects"
								class="block text-neutral-600 hover:text-primary-600"
								>Projects</NuxtLink
							>
							<NuxtLink
								to="/about"
								class="block text-neutral-600 hover:text-primary-600"
								>About</NuxtLink
							>
							<NuxtLink
								to="/contact"
								class="block text-neutral-600 hover:text-primary-600"
								>Contact</NuxtLink
							>
						</div>
					</div>
					<div>
						<h3 class="font-display font-bold text-lg mb-4">
							Connect
						</h3>
						<div class="space-y-2">
							<a
								href="mailto:jonas.wienberg@hfg.design"
								class="block text-neutral-600 hover:text-primary-600"
							>
								jonas.wienberg@hfg.design
							</a>
							<a
								href="https://www.linkedin.com/in/jonas-wienberg/"
								target="_blank"
								rel="noopener noreferrer"
								class="block text-neutral-600 hover:text-primary-600"
							>
								LinkedIn
							</a>
						</div>
					</div>
				</div>
				<div class="mt-12 pt-8 border-t border-neutral-200">
					<div
						class="flex flex-col sm:flex-row justify-between items-center"
					>
						<p class="text-neutral-600 text-sm">
							&copy; {{ new Date().getFullYear() }} Jonas
							Wienberg. All rights reserved.
						</p>
						<div class="mt-4 sm:mt-0 space-x-4">
							<NuxtLink
								to="/privacy"
								class="text-neutral-600 hover:text-primary-600 text-sm"
								>Privacy Policy</NuxtLink
							>
							<NuxtLink
								to="/legal-notice"
								class="text-neutral-600 hover:text-primary-600 text-sm"
								>Legal Notice</NuxtLink
							>
						</div>
					</div>
				</div>
			</div>
		</footer>
	</div>
</template>

<script setup>
const isMenuOpen = ref(false);

// Close mobile menu when route changes
watch(
	() => useRoute().fullPath,
	() => {
		isMenuOpen.value = false;
	}
);
</script>

<style>
.router-link-active {
	@apply text-primary-600;
}
</style>
