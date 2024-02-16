import { writable } from "svelte/store";

export const statusLoading = writable(true);
export const percentLoading = writable(0);
