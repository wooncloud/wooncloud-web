<script>
	import { Button } from "$lib/components/ui/button";
	import { Instagram, PanelTop, Github, Rss } from 'lucide-svelte';

	// 링크 데이터 구조화로 관리 효율성 향상
	const links = [
		{
			id: 'blog',
			url: 'https://wooncloud.tistory.com',
			icon: Rss,
			label: '블로그 (blog)',
			ariaLabel: '운구름의 개발 블로그로 이동'
		},
		{
			id: 'github',
			url: 'https://github.com/wooncloud',
			icon: Github,
			label: '깃허브 (github)',
			ariaLabel: '운구름의 GitHub 프로필로 이동'
		},
		{
			id: 'instagram',
			url: 'https://instagram.com/_wooncloud',
			icon: Instagram,
			label: '인스타 (instagram)',
			ariaLabel: '운구름의 개인 Instagram으로 이동'
		},
		{
			id: 'dosiowl-instagram',
			url: 'https://instagram.com/dosiowl_official',
			icon: Instagram,
			label: '도시부엉 인스타 (dosiowl instagram)',
			ariaLabel: '도시부엉 공식 Instagram으로 이동'
		},
		{
			id: 'dosiowl-littly',
			url: 'https://litt.ly/dosiowl',
			icon: PanelTop,
			label: '도시부엉 리틀리 (dosiowl littly)',
			ariaLabel: '도시부엉 Littly 프로필로 이동'
		}
	];
</script>

<div>
	<div class="content">
		{#each links as link (link.id)}
			<div class="w-full py-1">
				<Button 
					href={link.url} 
					class="w-full transition-transform hover:scale-[1.02] active:scale-[0.98]" 
					target="_blank"
					rel="noopener noreferrer"
					aria-label={link.ariaLabel}
				>
					<svelte:component this={link.icon} size={20} class="mx-1" />
					{link.label}
				</Button>
			</div>
		{/each}
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