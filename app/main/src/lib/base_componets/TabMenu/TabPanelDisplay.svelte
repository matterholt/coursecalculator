<script>
	import { getContext } from 'svelte';
	import {TABS} from './TabbedMenu.svelte'

	const panel = {};
	const { registerPanel, selectedPanel } = getContext(TABS);

	registerPanel(panel);
</script>

{#if $selectedPanel === panel}
	<slot></slot>
{/if}