<script>
	// @ts-nocheck

	import { Table, tableMapperValues } from '@skeletonlabs/skeleton';

	/* @type { import('./$houdini').PageData } */
	export let data;

	$: ({ Tickets } = data);
	$: console.log($Tickets);
	$: sourceData =
		$Tickets.data == null
			? []
			: $Tickets.data.listTickets.edges.map((edge) => ({
					id: edge.node.id,
					insertedAt: edge.node.insertedAt,
					status: edge.node.status,
					subject: edge.node.subject,
					representative: edge.node.representative ? edge.node.representative.name : ''
			  }));

	$: tableSimple = {
		// A list of heading labels.
		head: ['ID', 'Created At', 'Status', 'Subject', 'Representative'],
		// The data visibly shown in your table body UI.
		body: tableMapperValues(sourceData, ['id', 'insertedAt', 'status', 'subject', 'representative'])
	};

	/**
	 * @param {{ detail: any; }} event
	 */
	function mySelectionHandler(event) {
		console.log(event.detail);
	}
</script>

<h2 class="h2 mb-10">Tickets</h2>

<a href="/tickets/new" class="btn variant-filled"> New Ticket </a>

<Table source={tableSimple} interactive={true} on:selected={mySelectionHandler} />

<button
	type="button"
	class="btn variant-filled"
	on:click={Tickets.loadPreviousPage()}
	disabled={!$Tickets.pageInfo.hasPreviousPage}
>
	Previous Page
</button>

<button
	type="button"
	class="btn variant-filled"
	on:click={Tickets.loadNextPage()}
	disabled={!$Tickets.pageInfo.hasNextPage}
>
	Next Page
</button>
