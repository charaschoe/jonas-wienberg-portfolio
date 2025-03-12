<template>
	<div class="min-h-screen bg-gray-50">
		<Header />
		<main class="container mx-auto px-4 py-8">
			<NuxtPage />
		</main>
	</div>
</template>

<script setup>
useHead({
	title: "Jonas Wienberg - Portfolio",
	meta: [
		{
			name: "description",
			content:
				"Personal portfolio of Jonas Wienberg - Developer & Creator",
		},
		{
			name: "keywords",
			content: "Jonas Wienberg, Portfolio, Developer, Projects",
		},
	],
});
</script>
