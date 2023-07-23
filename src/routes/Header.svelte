<script>
	import logo from '$lib/images/logo.png';
	import share from '$lib/images/share.svg';

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
	<div class="corner">
		<button on:click={copySiteLinkToClipboard}>
			<img src={share} alt="share" />
		</button>
	</div>

	<div class="header">
		<a href="/">
			<img src={logo} alt="logo" class="logo-image" />
		</a>
		<h1>운구름</h1>
		<div>
			<p>wooncloud</p>
		</div>
	</div>
</header>

<style>
	header{
		text-align: center;
	}

	header .logo-image {
		width: 70px;
		height: 70px;
		margin: auto;
		margin-top: 15px;
	}

	header h1 {
		font-size: x-large;
	}

	.corner {
		position: absolute;
		top: 10px;
	}

	.corner button {
		display: flex;
		align-items: center;
		justify-content: center;
		width: 100%;
		height: 100%;
		border: 1px solid black;
		border-radius: 100%;
		width: 2rem;
		height: 2rem;
		cursor: pointer;
		background-color: transparent;
	}

	.corner img {
		width: 1rem;
		height: 1rem;
		object-fit: contain;
	}

	.corner:hover img {
		filter: drop-shadow(0 0 5px #000000);
	}
</style>
