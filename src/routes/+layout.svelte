<script>
	import { ModeWatcher } from "mode-watcher";
	import { onMount } from 'svelte';

	import "../app.css";
	import Header from "./Header.svelte";

	onMount(() => {
		// 초기화 코드
	});
</script>

<div class="app">
	<ModeWatcher />
	<Header></Header>
	<main>
		<slot></slot>
	</main>
</div>


<style>
	.app {
		display: flex;
		flex-direction: column;
		min-height: 100vh;
		max-width: 445px;
		margin: auto;
		padding: 0 1rem;
	}
	
	/* 성능 최적화: GPU 가속 활성화 */
	main {
		transform: translateZ(0);
		will-change: transform;
	}
</style>
