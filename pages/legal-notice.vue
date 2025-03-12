<template>
	<div class="min-h-screen bg-neutral-50">
		<div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
			<section class="py-16 sm:py-24">
				<h1 class="section-title mb-12 animate-fade-in">
					Legal Notice
				</h1>

				<div class="prose prose-lg max-w-none space-y-8">
					<div class="card p-8 animate-slide-up">
						<h2
							class="text-2xl font-display font-bold text-neutral-900 mb-6"
						>
							Information according to § 5 TMG
						</h2>
						<div class="text-neutral-700 space-y-1">
							<p>Jonas Wienberg</p>
							<p>c/o Hochschule für Gestaltung</p>
							<p>Rektor-Klaus-Straße 100</p>
							<p>73525 Schwäbisch Gmünd</p>
							<p>Germany</p>
						</div>
					</div>

					<div class="card p-8 animate-slide-up">
						<h2
							class="text-2xl font-display font-bold text-neutral-900 mb-6"
						>
							Contact
						</h2>
						<p>
							<a
								href="mailto:jonas.wienberg@hfg.design"
								class="link-underline"
								>jonas.wienberg@hfg.design</a
							>
						</p>
					</div>

					<div class="card p-8 animate-slide-up">
						<h2
							class="text-2xl font-display font-bold text-neutral-900 mb-6"
						>
							Responsible for content according to § 55 Abs. 2
							RStV
						</h2>
						<div class="text-neutral-700 space-y-1">
							<p>Jonas Wienberg</p>
							<p>c/o Hochschule für Gestaltung</p>
							<p>Rektor-Klaus-Straße 100</p>
							<p>73525 Schwäbisch Gmünd</p>
							<p>Germany</p>
						</div>
					</div>

					<div class="card p-8 animate-slide-up">
						<h2
							class="text-2xl font-display font-bold text-neutral-900 mb-6"
						>
							Liability for Content
						</h2>
						<div class="space-y-4 text-neutral-700">
							<p>
								As a service provider, we are responsible for
								our own content on these pages in accordance
								with general law (§ 7 Para.1 TMG). However,
								according to §§ 8 to 10 TMG, we are not
								obligated to monitor transmitted or stored
								third-party information or to investigate
								circumstances that indicate illegal activity.
							</p>
							<p>
								Obligations to remove or block the use of
								information under general law remain unaffected.
								However, liability in this regard is only
								possible from the moment of knowledge of a
								specific infringement. Upon becoming aware of
								such infringements, we will remove this content
								immediately.
							</p>
						</div>
					</div>

					<div class="card p-8 animate-slide-up">
						<h2
							class="text-2xl font-display font-bold text-neutral-900 mb-6"
						>
							Liability for Links
						</h2>
						<div class="space-y-4 text-neutral-700">
							<p>
								Our website contains links to external
								third-party websites, over whose content we have
								no influence. Therefore, we cannot assume any
								liability for these external contents. The
								respective provider or operator of the linked
								pages is always responsible for their content.
							</p>
							<p>
								The linked pages were checked for possible legal
								violations at the time of linking. Illegal
								content was not apparent at the time of linking.
								However, continuous content monitoring of the
								linked pages is not reasonable without concrete
								evidence of a violation. Upon becoming aware of
								rights violations, we will remove such links
								immediately.
							</p>
						</div>
					</div>

					<div class="card p-8 animate-slide-up">
						<h2
							class="text-2xl font-display font-bold text-neutral-900 mb-6"
						>
							Copyright
						</h2>
						<div class="space-y-4 text-neutral-700">
							<p>
								The content and works created by the site
								operators on these pages are subject to German
								copyright law. Duplication, processing,
								distribution, or any form of commercialization
								of such material beyond the scope of the
								copyright law shall require the prior written
								consent of its respective author or creator.
							</p>
							<p>
								Downloads and copies of this site are only
								permitted for private, non-commercial use.
								Insofar as the content on this site was not
								created by the operator, the copyrights of third
								parties are respected. In particular,
								third-party content is marked as such. Should
								you become aware of any copyright infringement,
								please inform us accordingly. Upon becoming
								aware of any infringements, we will remove such
								content immediately.
							</p>
						</div>
					</div>
				</div>
			</section>
		</div>
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
</script>
