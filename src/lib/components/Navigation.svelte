<script>
	import { drawerStore } from '@skeletonlabs/skeleton';

	function drawerClose() {
		drawerStore.close();
	}
</script>

<nav class="list-nav p-4">
	<ul>
		<li><a href="/tickets" on:click={drawerClose}>Tickets</a></li>
		<li><a href="/representatives" on:click={drawerClose}>Representatives</a></li>
		<li><a href="/" on:click={drawerClose}>Notes</a></li>
		<li><a href="/?test=1" on:click={drawerClose}>Other Page 1</a></li>
		<li><a href="/?test=2" on:click={drawerClose}>Other Page 2</a></li>
		<li><a href="/?test=3" on:click={drawerClose}>Other Page 3</a></li>
	</ul>
</nav>
