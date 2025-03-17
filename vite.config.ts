import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

export default defineConfig({
	server: {
		host: '::', // Bind to all IPv6 addresses
		port: 3000 // Specify a port (optional)
	},
	plugins: [sveltekit()]
});
