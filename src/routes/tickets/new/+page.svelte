<script>
	// @ts-nocheck

	import { superForm, setMessage, setError } from 'sveltekit-superforms/client';
	import SuperDebug from 'sveltekit-superforms/client/SuperDebug.svelte';
	import { _ticketSchema } from './+page';
	import { goto } from '$app/navigation';

	export let data;

	const createTicket = graphql(`
		mutation CreateTicket($input: CreateTicketInput) {
			createTicket(input: $input) {
				result {
					id
					subject
					representativeId
				}
				errors {
					code
					fields
					message
					shortMessage
					vars
				}
			}
		}
	`);

	const { form, errors, message, constraints, enhance } = superForm(data.form, {
		SPA: true,
		validators: _ticketSchema,
		onUpdate({ form }) {
			if (form.data.subject.includes('spam')) {
				setError(form, 'subject', 'sus subject');
				setMessage(form, 'invalid data!');
			} else if (form.valid) {
				createTicket.mutate({
					input: {
						subject: form.data.subject,
						status: 'CLOSED'
					}
				});
				//goto('/tickets/');
			} else {
				setMessage(form, 'invalid data!');
			}
		}
	});
</script>

<SuperDebug data={$form} />

<h2 class="h2 mb-10">New Ticket</h2>

{#if $message}<h3>{$message}</h3>{/if}

<div class="container h-full mx-auto gap-8 flex flex-col">
	<form method="POST" use:enhance class="card p-4 flex flex-col gap-3">
		<label class="label">
			<span>Subject</span>
			<input
				class="input"
				type="text"
				name="subject"
				aria-invalid={$errors.name ? 'true' : undefined}
				bind:value={$form.subject}
				{...$constraints.name}
			/>
		</label>
		{#if $errors.subject}<span class="invalid">{$errors.subject}</span>{/if}

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

		<button type="submit" class="btn variant-ghost-primary self-end">Create Ticket</button>
	</form>
</div>

<style>
	.invalid {
		color: red;
	}
</style>
