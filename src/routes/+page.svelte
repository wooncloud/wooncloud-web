<script>
  import { Button } from '$lib/components/ui/button';
  
  import * as Card from '$lib/components/ui/card';
  import { Separator } from '$lib/components/ui/separator';
  import { getLinksByGroup } from '$lib/data/links.js';

  // 그룹별로 정리된 링크 데이터 가져오기
  const groupedLinks = getLinksByGroup();
</script>

<div class="space-y-6">
  {#each Object.entries(groupedLinks) as [groupId, group] (groupId)}
    <Card.Root class="overflow-hidden border-0 bg-card/50 backdrop-blur-sm">
      <Card.Header class="pb-3">
        <Card.Title class="text-center text-base font-medium text-muted-foreground">
          {group.name}
        </Card.Title>
        <Separator class="mt-2 bg-border/50" />
      </Card.Header>
      <Card.Content class="space-y-2 pt-0">
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
      </Card.Content>
    </Card.Root>
  {/each}

  <div>
    <!-- 나에 대해서 -->
  </div>
  <div>
    <!-- 기술 스택 -->
  </div>
  <div>
    <!-- 경력 -->
  </div>
  <div>
    <!-- 프로젝트 -->
  </div>
  <div>
    <!-- 그 외 활동 -->
    <div>
      <!-- 자격증 -->
      <Card.Root>
		<Card.Header>
			<Card.Title>정보처리기사</Card.Title>
		</Card.Header>
		<Card.Content>
			<div>취득일</div>
			<div>2021.06.03</div>
		</Card.Content>
	  </Card.Root>
      <Card.Root>
		<Card.Header>
			<Card.Title>SQLD</Card.Title>
		</Card.Header>
		<Card.Content>
			<div>취득일</div>
			<div>2021.06.03</div>
		</Card.Content>
	  </Card.Root>
      <Card.Root>
		<Card.Header>
			<Card.Title>GTQ1급</Card.Title>
			<Card.Description>GTQ그래픽기술자격 1급</Card.Description>
		</Card.Header>
		<Card.Content>
			<div>취득일</div>
			<div>2013.02.15</div>
		</Card.Content>
	  </Card.Root>
    </div>
  </div>
  <div>
    <!-- 문의 -->
  </div>
</div>

<style>
  /* 추가 스타일링은 Tailwind CSS로 처리 */
</style>
