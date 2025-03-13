<!-- <template> 
  <div>
    <NuxtLink to="/">Home</NuxtLink>
    <NuxtLink to="/about">About</NuxtLink>
  </div>
</template>

<script lang="ts" setup>

</script>

<style>

</style> -->

<template>
	<header class="border-b border-gray-100">
		<nav class="max-w-5xl mx-auto px-6 py-6">
			<div class="flex items-center justify-between">
				<NuxtLink to="/" class="text-lg font-light tracking-wide">
					JONAS WIENBERG
				</NuxtLink>
				<div class="space-x-8">
					<NuxtLink
						to="/"
						class="text-sm uppercase tracking-widest hover:opacity-60 transition-opacity"
					>
						Home
					</NuxtLink>
					<NuxtLink
						to="/projects"
						class="text-sm uppercase tracking-widest hover:opacity-60 transition-opacity"
					>
						Projects
					</NuxtLink>
					<NuxtLink
						to="/about"
						class="text-sm uppercase tracking-widest hover:opacity-60 transition-opacity"
					>
						About
					</NuxtLink>
					<NuxtLink
						to="/contact"
						class="text-sm uppercase tracking-widest hover:opacity-60 transition-opacity"
					>
						Contact
					</NuxtLink>
				</div>
			</div>
		</nav>
	</header>
</template>

<script lang="ts" setup></script>

<style scoped>
a.router-link-active {
	opacity: 0.6;
}
</style>
