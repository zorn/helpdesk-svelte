// @ts-nocheck
import { z } from 'zod';
import { fail } from '@sveltejs/kit';
import { superValidate } from 'sveltekit-superforms/server';
import { toastStore } from '@skeletonlabs/skeleton';
import { goto } from '$app/navigation';




export const _ticketSchema = z.object({
    subject: z.string().min(5)
});

export const load = async (event) => {
    const form = await superValidate(_ticketSchema);
    return { form };
};

// export const actions = {
//     default: async ({ request }) => {
//         console.log('hello')

//         const form = await superValidate(request, schema);
//         console.log('POST', form);

//         // Convenient validation check:
//         if (!form.valid) {
//             console.log('form is not valid')

//             // Again, always return { form } and things will just work.
//             return fail(400, { form });
//         }

//         // TODO: Do something with the validated data
//         await createTicket.mutate({
//             input: {
//                 subject: form.data.subject,
//                 status: "OPEN"
//             }
//         });
//         // TODO: make status dynamic

//         // TODO: Add error checking
//         toastStore.trigger({
//             message: 'Ticket created successfully!',
//             background: 'variant-filled-success'
//         });
//         goto('/tickets/');
//         // Yep, return { form } here too
//         return { form };
//     }
// };
