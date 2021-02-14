import { IModelData, modelDataTest } from '../../../cy-lib/src/public-api';


describe('create new items', () => {
  beforeEach(() => {
    cy.viewport(1200, 900);
  });
  it('should have resources', () => {
    cy.visit('/');
    const myData: IModelData = { data: 'test data from cypress' };
    cy.contains('Resources');
    console.log(modelDataTest(myData));
  });
});

