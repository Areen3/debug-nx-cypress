import { IModelData, modelDataTest } from 'cy-lib';

describe('create new items', () => {
  beforeEach(() => {
    cy.viewport(1200, 900);
  });
  it('should have resources', () => {
    cy.visit('/');
    const myData: IModelData = { data: 'test data from cypress' };
    console.log('moj debug');
    cy.contains('Resources');
    console.log(modelDataTest(myData));
  });

  it('should boolean', () => {
    expect(true).to.equal(true);
  });
});

