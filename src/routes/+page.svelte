<script>
	import { Button } from "$lib/components/ui/button";
	import { Card, CardHeader, CardTitle, CardContent } from "$lib/components/ui/card";
	import { Separator } from "$lib/components/ui/separator";
	import { getLinksByGroup } from "$lib/data/links.js";

	// 그룹별로 정리된 링크 데이터 가져오기
	const groupedLinks = getLinksByGroup();
</script>

<div class="space-y-6">
	{#each Object.entries(groupedLinks) as [groupId, group] (groupId)}
		<Card class="overflow-hidden border-0 bg-card/50 backdrop-blur-sm">
			<CardHeader class="pb-3">
				<CardTitle class="text-center text-base font-medium text-muted-foreground">
					{group.name}
				</CardTitle>
				<Separator class="mt-2 bg-border/50" />
			</CardHeader>
			<CardContent class="space-y-2 pt-0">
				{#each group.links as link (link.id)}
					<Button 
						href={link.url} 
						class="w-full transition-all duration-200 hover:scale-[1.02] hover:shadow-md active:scale-[0.98] bg-background/80 hover:bg-background border border-border/50 hover:border-border" 
						variant="outline"
						target="_blank"
						rel="noopener noreferrer"
						aria-label={link.ariaLabel}
					>
						<svelte:component this={link.icon} size={18} class="mr-2" />
						<span class="text-sm font-medium">{link.label}</span>
					</Button>
				{/each}
			</CardContent>
		</Card>
	{/each}
</div>

<style>
	/* 추가 스타일링은 Tailwind CSS로 처리 */
</style>