<script>
	import { cn } from "$lib/utils.js";
	
	let className = undefined;
	export { className as class };
</script>

<h3
	class={cn("text-lg font-semibold leading-none tracking-tight", className)}
	{...$$restProps}
>
	<slot />
</h3>