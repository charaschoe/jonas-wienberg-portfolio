<template>
	<div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
		<section class="py-16 sm:py-24">
			<div class="animate-fade-in">
				<h1 class="section-title text-center sm:text-left">
					Let's Connect
				</h1>
				<div class="card p-8 sm:p-10 animate-slide-up">
					<p class="text-lg text-neutral-700 mb-12 font-light">
						Whether you're interested in discussing design
						innovation, potential collaborations, or just want to
						say hello — I'd love to hear from you. I'm always open
						to exploring new ideas and opportunities.
					</p>
					<div class="grid gap-10 sm:grid-cols-2">
						<div class="space-y-3 hover-lift">
							<h2
								class="text-xl font-display font-bold text-neutral-900"
							>
								Drop me a line
							</h2>
							<a
								href="mailto:jonas.wienberg@hfg.design"
								class="link-underline text-primary-600 inline-flex items-center group"
							>
								<svg
									class="w-5 h-5 mr-2 text-primary-400 group-hover:text-primary-600 transition-colors"
									viewBox="0 0 24 24"
									fill="none"
									stroke="currentColor"
								>
									<path
										stroke-linecap="round"
										stroke-linejoin="round"
										stroke-width="2"
										d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
									/>
								</svg>
								jonas.wienberg@hfg.design
							</a>
						</div>
						<div class="space-y-3 hover-lift">
							<h2
								class="text-xl font-display font-bold text-neutral-900"
							>
								Based in
							</h2>
							<p
								class="text-neutral-700 inline-flex items-center"
							>
								<svg
									class="w-5 h-5 mr-2 text-primary-400"
									viewBox="0 0 24 24"
									fill="none"
									stroke="currentColor"
								>
									<path
										stroke-linecap="round"
										stroke-linejoin="round"
										stroke-width="2"
										d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
									/>
									<path
										stroke-linecap="round"
										stroke-linejoin="round"
										stroke-width="2"
										d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
									/>
								</svg>
								Schwäbisch Gmünd, Germany
							</p>
						</div>
						<div class="space-y-4 sm:col-span-2">
							<h2
								class="text-xl font-display font-bold text-neutral-900"
							>
								Professional Network
							</h2>
							<div class="flex flex-wrap gap-4">
								<a
									href="https://www.linkedin.com/in/jonas-wienberg/"
									target="_blank"
									rel="noopener noreferrer"
									class="button-secondary hover-lift"
								>
									<svg
										class="w-5 h-5 mr-2"
										fill="currentColor"
										viewBox="0 0 24 24"
									>
										<path
											d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"
										/>
									</svg>
									Connect on LinkedIn
								</a>
							</div>
						</div>
					</div>
					<div class="mt-12 pt-8 border-t border-neutral-200">
						<p class="text-neutral-600 text-sm">
							Currently working on exciting projects at HfG
							Schwäbisch Gmünd. Open to discussing new
							opportunities and collaborations.
						</p>
					</div>
				</div>
			</div>
		</section>
	</div>
</template>

<script setup>
definePageMeta({
	layout: "default",
	transition: {
		name: "page",
		mode: "out-in",
	},
});
</script>

<style scoped>
.page-enter-active,
.page-leave-active {
	transition: all 0.4s;
}
.page-enter-from,
.page-leave-to {
	opacity: 0;
	transform: translateY(20px);
}
</style>
