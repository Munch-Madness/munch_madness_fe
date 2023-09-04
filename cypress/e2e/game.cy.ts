import { unreg, cleanUp } from './testerFunctions';

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
  cy.intercept('GET', `http://localhost:3000/static/media/*`, {
    statusCode: 200,
  }).as('getSounds');
});

describe('template spec', () => {
  it('passes', () => {
    unreg();
    cy.get('input').type('89128');
    cy.get('button').first().click();
    cy.wait('@getRestaurants');
    cy.get('li').eq(0).contains('⚪️').click();
    cy.get('li').eq(1).contains('⚪️').click();
    cy.get('li').eq(2).contains('⚪️').click();
    cy.get('li').eq(3).contains('⚪️').click();
    cy.get('li').eq(4).contains('⚪️').click();
    cy.get('li').eq(5).contains('⚪️').click();
    cy.get('li').eq(6).contains('⚪️').click();
    cy.get('li').eq(7).contains('⚪️').click();
    cy.get('li').eq(8).contains('⚪️').click();
    cy.get('li').eq(9).contains('⚪️').click();
    cy.get('li').eq(10).contains('⚪️').click();
    cy.get('li').eq(11).contains('⚪️').click();
    cy.get('li').eq(12).contains('⚪️').click();
    cy.get('li').eq(13).contains('⚪️').click();
    cy.get('li').eq(14).contains('⚪️').click();
    cy.get('li').eq(15).contains('⚪️').click();
    cy.get('button').last().should('have.text', `Let's Play!`).click();
    
    cleanUp();
  });
});
