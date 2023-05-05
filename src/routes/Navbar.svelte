<script>
	import { each } from 'svelte/internal';

	let buttons = [{ id: '1', name: 'Home' }];
</script>

<h1>Welcome to embeddedboys.org!</h1>

<ul>
	{#each buttons as button}
		<li>
			{button.name}
		</li>
	{/each}
</ul>
