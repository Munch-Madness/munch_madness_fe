import { cleanUp, unreg } from './testerFunctions';

beforeEach(() => {
  cy.visit('http://localhost:3000');
  cy.intercept(
    'GET',
    `https://munch-madness-be-8b56c3719f5f.herokuapp.com/api/v1/places/?query=89128&search=random`,
    {
      statusCode: 200,
      fixture: 'multipleRestaurants.json',
    }
  ).as('getRestaurants');
});

describe('template spec', () => {
  it('should show bracket selection on page load', () => {
    unreg();
    cy.visit('http://localhost:3000')
    cy.get('img').should('have.attr', 'src', './assets/MunchMadness.PNG')
    cy.get('h1').should('have.text', 'Enter Your Zip CodeChoose Your Bracket Size')
    cy.get('p').should('have.text', 'How many restaurants do you want to compare?')
    cy.get('button').first().should('have.text', '16')
    cy.get('button').last().should('have.text', '2')
    cleanUp();
  })
  it('should show restaurants for user to choose from', () => {
    unreg();
    cy.visit('http://localhost:3000')
    cy.get('input').type('89128');
    cy.get('button').first().click();
    cy.wait('@getRestaurants');
    cy.get('button').first().should('have.text', 'Go Back').click();
    cy.get('button').first().should('have.text', '16').click();
    cy.get('.list').children('ul');
    cleanUp();
  });
  it('should not allow a user to move on without a full zipCode or with letters in zipCode', () => {
    unreg();
    cy.visit('http://localhost:3000')
    cy.get('input').type('8912');
    cy.get('button').should('be.disabled');
    cy.get('input').type('8');
    cy.get('button').should('not.be.disabled');
    cy.get('input').clear();
    cy.get('input').type('8912a');
    cy.get('button').should('be.disabled');
    cleanUp();
  });
})