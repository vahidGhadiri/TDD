import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      require('cypress-watch-and-reload/plugins')(on, config, {
        watch: 'src/**/*.{js,jsx,ts,tsx}',
      });
    },
  },
});
