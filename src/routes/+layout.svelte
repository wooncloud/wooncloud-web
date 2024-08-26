<script>
	import { ModeWatcher } from "mode-watcher";

	import "../app.css";
	import Header from "./Header.svelte";
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
		height: 100vh;
		max-width: 445px;
		margin: auto;
		padding: 0 1rem;
	}
</style>
