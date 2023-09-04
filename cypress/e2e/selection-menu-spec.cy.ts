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
});


describe('restaurant choice menu', () => {
  it('should show restaurants for user to choose from', () => {
    unreg();
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
    cy.get('input').type('8912');
    cy.get('button').should('be.disabled');
    cy.get('input').type('8');
    cy.get('button').should('not.be.disabled');
    cy.get('input').clear();
    cy.get('input').type('8912a');
    cy.get('button').should('be.disabled');
    cleanUp();
  });
  it('should force a user down a bracket if few restaurants are available', () => {
    unreg();
    cy.intercept(
      'GET',
      `https://munch-madness-be-8b56c3719f5f.herokuapp.com/api/v1/places/?query=98555&search=random`,
      {
        statusCode: 200,
        fixture: 'fewRestaurants.json',
      }
    ).as('fewRestaurants');
    cy.get('input').type('98555');
    cy.get('button').first().click();
    cy.wait('@fewRestaurants');
    cy.get('p').first().should('have.text', 'sorry your bracket size has been reset to 8 due to lack of restaurants in the area');
    cy.get('p').last().should('have.text', 'select 8 more restaurants');
    cleanUp();
  });
  it('should allow a user to select a restaurant', () => {
    unreg();
    cy.get('input').type('89128');
    cy.get('button').first().click();
    cy.get('button').first().should('have.text', 'Go Back').click();
    cy.get('button').first().should('have.text', '16').click();
    cy.get('li').first().should('have.text', 'Buca di Beppo Italian Restaurant ⚪️');
    cy.get('li').last().should('have.text', `Northside Nathan's Detroit Pizza ⚪️`);
    cy.get('li').eq(0).contains('⚪️').click();
    cy.get('li').eq(0).contains('🟢');
    cy.get('li').eq(1).contains('⚪️').click();
    cy.get('li').eq(1).contains('🟢');
    cy.get('li').eq(2).contains('⚪️').click();
    cy.get('li').eq(2).contains('🟢');
    cy.get('li').eq(3).contains('⚪️').click();
    cy.get('li').eq(3).contains('🟢');
    cy.get('li').eq(4).contains('⚪️').click();
    cy.get('li').eq(4).contains('🟢');
    cy.get('li').eq(5).contains('⚪️').click();
    cy.get('li').eq(5).contains('🟢');
    cy.get('li').eq(6).contains('⚪️').click();
    cy.get('li').eq(6).contains('🟢');
    cy.get('li').eq(7).contains('⚪️').click();
    cy.get('li').eq(7).contains('🟢');
    cy.get('li').eq(8).contains('⚪️').click();
    cy.get('li').eq(8).contains('🟢');
    cy.get('li').eq(9).contains('⚪️').click();
    cy.get('li').eq(9).contains('🟢');
    cy.get('li').eq(10).contains('⚪️').click();
    cy.get('li').eq(10).contains('🟢');
    cy.get('li').eq(11).contains('⚪️').click();
    cy.get('li').eq(11).contains('🟢');
    cy.get('li').eq(12).contains('⚪️').click();
    cy.get('li').eq(12).contains('🟢');
    cy.get('li').eq(13).contains('⚪️').click();
    cy.get('li').eq(13).contains('🟢');
    cy.get('li').eq(14).contains('⚪️').click();
    cy.get('li').eq(14).contains('🟢');
    cy.get('li').eq(15).contains('⚪️').click();
    cy.get('li').eq(15).contains('🟢');
    cy.get('button').last().should('have.text', `Let's Play!`).click();
    cleanUp();
  });
});
