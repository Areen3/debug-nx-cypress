// eslint-disable-next-line @nrwl/nx/enforce-module-boundaries
import { cyModel, ITestCyModel } from '@areen/cy-model';
import { getGreeting } from '../support/app.po';

describe('cy', () => {
  beforeEach(() => cy.visit('/'));

  it('should display welcome message', () => {
    // Custom command example, see `../support/commands.ts` file
    cy.login('my-email@something.com', 'myPassword');
    const myData: ITestCyModel = { myData: 'my test data' }
    console.log(cyModel(myData));

    // Function helper example, see `../support/app.po.ts` file
    getGreeting().contains('Welcome to cy!');
  });
});
