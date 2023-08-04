<script>
	import { goto } from '$app/navigation';
	import { noteStore } from '$lib/stores';
	import { toastStore } from '@skeletonlabs/skeleton';

	let content = '';

	function createNote() {
		console.log($noteStore);
		noteStore.update((notes) => [
			// @ts-ignore
			...notes,
			{
				// @ts-ignore
				id: crypto.randomUUID(),
				// @ts-ignore
				content: content
			}
		]);
		content = '';
		toastStore.trigger({
			message: 'Note created successfully!',
			background: 'variant-filled-success'
		});
		goto('/');
	}
</script>

<div class="container h-full mx-auto gap-8 flex flex-col">
	<form class="card p-4 flex flex-col gap-3">
		<h2>New Note</h2>
		<textarea bind:value={content} class="textarea" rows="5" placeholder="Note content..." />
		<button type="button" on:click={createNote} class="btn variant-ghost-primary self-end"
			>Create Note</button
		>
	</form>
</div>
