<script>
	// @ts-nocheck

	import { Table, tableMapperValues } from '@skeletonlabs/skeleton';

	/* @type { import('./$houdini').PageData } */
	export let data;

	$: ({ Representatives } = data);
	$: console.log($Representatives);
	$: sourceData = $Representatives.data.listRepresentatives.edges.map((edge) => ({
		id: edge.node.id,
		name: edge.node.name
	}));

	$: tableSimple = {
		// A list of heading labels.
		head: ['ID', 'Name'],
		// The data visibly shown in your table body UI.
		body: tableMapperValues(sourceData, ['id', 'name'])
	};

	/**
	 * @param {{ detail: any; }} event
	 */
	function mySelectionHandler(event) {
		console.log(event.detail);
	}
</script>

<h2 class="h2 mb-10">Representatives</h2>

<Table source={tableSimple} interactive={true} on:selected={mySelectionHandler} />

<button
	type="button"
	class="btn variant-filled"
	on:click={Representatives.loadPreviousPage()}
	disabled={!$Representatives.pageInfo.hasPreviousPage}
>
	Previous Page
</button>

<button
	type="button"
	class="btn variant-filled"
	on:click={Representatives.loadNextPage()}
	disabled={!$Representatives.pageInfo.hasNextPage}
>
	Next Page
</button>
