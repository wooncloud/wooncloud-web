<script>
	import { Button } from "$lib/components/ui/button";
	import { Instagram, PanelTop, Github, Rss } from 'lucide-svelte';
	import link from "$lib/images/link.svg";
	import insta from "$lib/images/insta.svg";
	import github from "$lib/images/github.svg";
</script>

<div>
	<div class="content">
		<div class="w-full py-1">
			<Button href="https://wooncloud.tistory.com" class="w-full">
				<Rss size={20} class="mx-1" />
				블로그 (blog)
			</Button>
		</div>
		<div class="w-full py-1">
			<Button href="https://github.com/wooncloud" class="w-full">
				<Github size={20} class="mx-1" />
				깃허브 (github)
			</Button>
		</div>
		<div class="w-full py-1">
			<Button href="https://instagram.com/_wooncloud" class="w-full">
				<Instagram size={20} class="mx-1" />
				인스타 (instagram)
			</Button>
		</div>
		<div class="w-full py-1">
			<Button href="https://instagram.com/dosiowl_official" class="w-full">
				<Instagram size={20} class="mx-1" />
				도시부엉 인스타 (dosiowl instagram)
			</Button>
		</div>
		<div class="w-full py-1">
			<Button href="https://litt.ly/dosiowl" class="w-full">
				<PanelTop size={20} class="mx-1" />
				도시부엉 리틀리 (dosiowl littly)
			</Button>
		</div>
	</div>
</div>

<style>
	.content {
		width: 100%;
		display: flex;
		flex-direction: column;
		padding: 1rem 0;
	}
</style>