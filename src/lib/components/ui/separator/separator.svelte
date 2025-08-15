<script>
	import { cn } from "$lib/utils.js";
	
	let className = undefined;
	export let orientation = "horizontal";
	export let decorative = true;
	export { className as class };
</script>

<div
	class={cn(
		"shrink-0 bg-border",
		orientation === "horizontal" ? "h-[1px] w-full" : "h-full w-[1px]",
		className
	)}
	role={!decorative ? "separator" : undefined}
	aria-orientation={orientation}
	{...$$restProps}
/>