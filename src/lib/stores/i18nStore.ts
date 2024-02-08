import { writable } from 'svelte/store';

export const newLocale = writable<string>('en');
