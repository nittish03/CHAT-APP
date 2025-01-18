import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
	build: {
        outDir: 'public', // Ensure this matches what your system is expecting
    },
	plugins: [react()],
	server: {
		port: 3000,
		proxy: {
			"/api": {
				target: "http://localhost:8080",
			},
		},
	},
});