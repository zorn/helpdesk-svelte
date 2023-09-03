<script>
	let content = '';

	function createTicket() {
		console.log('create ticket');
	}
</script>

<h2 class="h2 mb-10">New Ticket</h2>

<div class="container h-full mx-auto gap-8 flex flex-col">
	<form class="card p-4 flex flex-col gap-3">
		<label class="label">
			<span>Subject</span>
			<input class="input" type="text" placeholder="Input" />
		</label>

		<label>
			<span>Status</span>
			<select class="select">
				<option value="OPEN">Open</option>
				<option value="CLOSED">Closed</option>
			</select>
		</label>

		<label class="label">
			<span>Details</span>
			<textarea class="textarea" rows="5" disabled />
		</label>

		<label>
			<span>Representative</span>
			<select class="select">
				<option value="" />
				<option value="1">Amy</option>
				<option value="2">Billy</option>
			</select>
		</label>

		<button type="button" on:click={createTicket} class="btn variant-ghost-primary self-end">
			Create Ticket
		</button>
	</form>
</div>
