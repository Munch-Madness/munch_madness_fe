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

describe('playing through the brackets', () => {
  it('should allow a user to progress through brackets and see details about restuarants', () => {
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
    cy.get('p').eq(1).should('have.text', 'Buca di Beppo Italian Restaurant');
    cy.get('p').eq(16).should('have.text', 'Las Vegas Mini Grand Prix Family Fun Center');
    cy.get('button').eq(1).click();
    cy.get('h2').should('have.text', 'Buca di Beppo Italian Restaurant');
    cy.get('.absolute.top-1.right-1').should('have.text', 'exit').click();
    cy.get('svg').eq(0).click();
    cy.get('svg').eq(4).click();
    cy.get('svg').eq(8).click();
    cy.get('svg').eq(12).click();
    cy.get('svg').eq(16).click();
    cy.get('svg').eq(20).click();
    cy.get('svg').eq(24).click();
    cy.get('svg').eq(28).click();
    cy.get('p').eq(1).should('have.text', 'Buca di Beppo Italian Restaurant');
    cy.get('p').eq(8).should('have.text', 'Round Table Pizza');
    cy.get('button').eq(8).click();
    cy.get('h2').should('have.text', 'Round Table Pizza');
    cy.get('.absolute.top-1.right-1').should('have.text', 'exit').click();
    cy.get('svg').eq(0).click();
    cy.get('svg').eq(4).click();
    cy.get('svg').eq(8).click();
    cy.get('svg').eq(12).click();
    cy.get('p').eq(1).should('have.text', 'Buca di Beppo Italian Restaurant');
    cy.get('p').eq(4).should('have.text', `Joe's Crab Shack`);
    cy.get('button').eq(4).click();
    cy.get('h2').should('have.text', `Joe's Crab Shack`);
    cy.get('.absolute.top-1.right-1').should('have.text', 'exit').click();
    cy.get('svg').eq(0).click();
    cy.get('svg').eq(4).click();
    cy.get('p').eq(1).should('have.text', 'Buca di Beppo Italian Restaurant');
    cy.get('p').eq(2).should('have.text', 'Marché Bacchus');
    cy.get('button').eq(2).click();
    cy.get('h2').should('have.text', 'Marché Bacchus');
    cy.get('.absolute.top-1.right-1').should('have.text', 'exit').click();
    cy.get('svg').eq(0).click();
    cy.get('h1').should('have.text', 'Buca di Beppo Italian Restaurant');
    cy.get('img').eq(1).should('have.attr', 'src', 'https://lh3.googleusercontent.com/places/ANJU3DuenCeDk5FOKKsTIYyTJDitp4YHvREJ1gKVDwGQeFY2D5iEv8IfbQyvkFPuW_6futPpziNq4wRqzb6YYuMSWO5BEw9ZYkGyEWw=s1600-w400');
    cy.get('a').first().should('have.attr', 'href', 'https://locations.bucadibeppo.com/us/nv/las-vegas/7690-w-lake-mead-blvd?utm_source=google&utm_campaign=local-listing&utm_medium=organic&utm_content=gmb&y_source=1_NDgxNzY0OS03MTUtbG9jYXRpb24ud2Vic2l0ZQ%3D%3D')
    cy.get('a').last().should('have.attr', 'href', 'http://maps.google.com/maps?q=7690+West+Lake+Mead+Boulevard,+Las+Vegas+Buca+di+Beppo+Italian+Restaurant')
    cy.get('button').last().should('have.text', 'Go Again?').click();
    cy.get('h1').should('have.text', 'Enter Your Zip CodeChoose Your Bracket Size');
    cleanUp();
  });
});
