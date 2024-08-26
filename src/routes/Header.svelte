<script>
	import { toggleMode } from "mode-watcher";
	import { Button } from "$lib/components/ui/button/index.js";
	import Sun from "lucide-svelte/icons/sun";
	import Moon from "lucide-svelte/icons/moon";
	import { Share2 } from 'lucide-svelte';
	import * as Avatar from "$lib/components/ui/avatar";
	
	import logo from '$lib/images/logo.png';

	function copySiteLinkToClipboard() {
		const siteLink = window.location.href;
		const tempInput = document.createElement('input');
		document.body.appendChild(tempInput);
		tempInput.value = siteLink;
		tempInput.select();

		try {
				navigator.clipboard.writeText(siteLink);
		} catch (error) {
				console.error('Failed to copy link: ', error);
		} finally {
				document.body.removeChild(tempInput);
				alert("링크가 복사 되었습니다.");
		}
	}
</script>

<header>
	<div class="flex">
		<div class="flex-none">
			<Button on:click={copySiteLinkToClipboard} variant="outline" size="icon">
				<Share2 />
			</Button>
		</div>
		<div class="grow"></div>
		<div class="flex-none">
			<Button on:click={toggleMode} variant="outline" size="icon">
				<Sun class="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
				<Moon class="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
				<span class="sr-only">Toggle theme</span>
			</Button>
		</div>
	</div>

	<div class="header">
		<a href="/" class="logo-image">
			<Avatar.Root class="h-[5rem] w-[5rem]">
				<Avatar.Image src={logo} alt="logo" />
				<Avatar.Fallback>LOGO</Avatar.Fallback>
			</Avatar.Root>
		</a>

		<!-- <a href="/">
			<img src={logo} alt="logo" class="logo-image" />
		</a> -->
		<h1>운구름</h1>
		<div>
			<p>wooncloud</p>
		</div>
	</div>
</header>

<style>
	header{
		text-align: center;
		padding: 1rem 0;
	}

	header > .header > .logo-image {
		display: flex;
		justify-content: center;
	}

	header h1 {
		font-size: x-large;
	}
</style>
