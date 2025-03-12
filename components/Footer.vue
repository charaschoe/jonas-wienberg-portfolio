<template>
	<footer
		class="relative border-t border-gray-200"
		:style="{
			backgroundImage: 'url(/images/background-gradient.jpeg)',
			backgroundSize: 'cover',
			backgroundPosition: 'center',
		}"
	>
		<div class="relative z-10 bg-white/90 backdrop-blur-sm">
			<div class="max-w-6xl mx-auto px-4 py-12">
				<div class="grid grid-cols-1 md:grid-cols-4 gap-8">
					<!-- Contact -->
					<div>
						<h3 class="text-lg font-semibold mb-4">Contact</h3>
						<ul class="space-y-2 text-gray-600">
							<li>Jonas Wienberg</li>
							<li>Hochschule für Gestaltung</li>
							<li>Schwäbisch Gmünd</li>
							<li>
								<a
									href="mailto:jonas.wienberg@hfg.design"
									class="text-blue-600 hover:text-blue-800"
								>
									jonas.wienberg@hfg.design
								</a>
							</li>
						</ul>
					</div>

					<!-- Links -->
					<div>
						<h3 class="text-lg font-semibold mb-4">Quick Links</h3>
						<ul class="space-y-2 text-gray-600">
							<li>
								<NuxtLink
									to="/projects"
									class="hover:text-gray-900"
								>
									Projects
								</NuxtLink>
							</li>
							<li>
								<NuxtLink
									to="/about"
									class="hover:text-gray-900"
								>
									About
								</NuxtLink>
							</li>
							<li>
								<NuxtLink
									to="/contact"
									class="hover:text-gray-900"
								>
									Contact
								</NuxtLink>
							</li>
						</ul>
					</div>

					<!-- Social -->
					<div>
						<h3 class="text-lg font-semibold mb-4">Connect</h3>
						<ul class="space-y-2 text-gray-600">
							<li>
								<a
									href="https://www.linkedin.com/in/jwienb/"
									target="_blank"
									rel="noopener noreferrer"
									class="hover:text-gray-900 inline-flex items-center"
								>
									<svg
										class="w-5 h-5 mr-2"
										viewBox="0 0 24 24"
										fill="currentColor"
									>
										<path
											d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"
										/>
									</svg>
									LinkedIn
								</a>
							</li>
						</ul>
					</div>

					<!-- Legal -->
					<div>
						<h3 class="text-lg font-semibold mb-4">Legal</h3>
						<ul class="space-y-2 text-gray-600">
							<li>
								<NuxtLink
									to="/legal-notice"
									class="hover:text-gray-900"
								>
									Legal Notice
								</NuxtLink>
							</li>
							<li>
								<NuxtLink
									to="/privacy"
									class="hover:text-gray-900"
								>
									Privacy Policy
								</NuxtLink>
							</li>
						</ul>
					</div>
				</div>

				<div class="mt-12 pt-8 border-t border-gray-200">
					<div class="text-center text-gray-600 text-sm">
						<p>
							© {{ new Date().getFullYear() }} Jonas Wienberg. All
							rights reserved.
						</p>
						<p class="mt-2">
							This website uses essential cookies to ensure its
							proper operation and tracking cookies to understand
							how you interact with it. The latter will be set
							only after consent.
							<NuxtLink
								to="/privacy"
								class="text-blue-600 hover:text-blue-800 ml-1"
							>
								Learn more
							</NuxtLink>
						</p>
					</div>
				</div>
			</div>
		</div>
	</footer>
</template>

<script setup>
// Component logic here if needed
</script>
