import { defineConfig } from 'cypress';

export default defineConfig({
	component: {
		devServer: {
			framework: 'react',
			bundler: 'vite',
		},
		indexHtmlFile: 'cypress/support/component-index.html',
		supportFile: 'cypress/support/component.tsx',
	},
	e2e: {
		baseUrl: 'http://localhost:3001',
		supportFile: 'cypress/support/e2e.ts',
		setupNodeEvents(on, config) {
			// implement node event listeners here
		},
	},
});
