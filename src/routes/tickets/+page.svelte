<script>
	import { Table, tableMapperValues } from '@skeletonlabs/skeleton';

	/* @type { import('./$houdini').PageData } */
	export let data;

	$: ({ Tickets } = data);
	$: console.log($Tickets);

	$: sourceData = $Tickets.fetching ? [] : $Tickets.data.listTickets;

	// $: sourceData = [
	// 	{ id: 1, status: 'Open', subject: 'Test 1' },
	// 	{ id: 2, status: 'Open', subject: 'Test 2' },
	// 	{ id: 3, status: 'Open', subject: 'Test 3' }
	// ];

	$: tableSimple = {
		// A list of heading labels.
		head: ['ID', 'Status', 'Subject'],
		// The data visibly shown in your table body UI.
		body: tableMapperValues(sourceData, ['id', 'status', 'subject'])
	};

	function mySelectionHandler(event) {
		console.log(event.detail);
	}
</script>

<h2 class="h2 mb-10">Tickets</h2>

{#if $Tickets.fetching}
	<p>Tickets being fetched.</p>
{/if}

<Table source={tableSimple} interactive={true} on:selected={mySelectionHandler} />
