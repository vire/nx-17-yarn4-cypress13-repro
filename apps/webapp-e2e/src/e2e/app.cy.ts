import { getUserId } from '@nx-17-yarn4-cypress13-repro/test-helpers';
import { getGreeting } from '../support/app.po';

describe('webapp', () => {
  beforeEach(() => cy.visit('/'));

  it('should display welcome message', () => {
    // Custom command example, see `../support/commands.ts` file
    cy.login('my-email@something.com', 'myPassword');

    // Function helper example, see `../support/app.po.ts` file
    getGreeting().contains('Welcome webapp', getUserId());
  });
});
