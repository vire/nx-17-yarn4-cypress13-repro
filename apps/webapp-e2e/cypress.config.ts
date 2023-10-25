import { defineConfig } from 'cypress';
// import { nxE2EPreset } from '@nx/cypress/plugins/cypress-preset';

export default defineConfig({
  e2e: {
    videosFolder: '../../dist/cypress/apps/webapp-e2e/videos',
    screenshotsFolder: '../../dist/cypress/apps/webapp-e2e/screenshots',
    chromeWebSecurity: false,
    fileServerFolder: '.',
    supportFile: 'src/support/e2e.ts',
    specPattern: 'src/**/*.cy.{js,jsx,ts,tsx}',
    fixturesFolder: 'src/fixtures',
  },
});
