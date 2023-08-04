import { writable } from "svelte/store";

export const noteStore = writable([{
    id: 1,
    content: "Note 1"
}])
