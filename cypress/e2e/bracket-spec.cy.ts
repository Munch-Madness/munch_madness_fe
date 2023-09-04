async function unreg() {
  if (!window.navigator || !navigator.serviceWorker) {
    return null;
  }
  const registrations = await navigator.serviceWorker.getRegistrations();
  return Promise.all(
    registrations.map((registration) => registration.unregister())
  );
}

beforeEach(() => {
  cy.visit('http://localhost:3000');
  cy.intercept('GET', `https://munch-madness-be-8b56c3719f5f.herokuapp.com/api/v1/places/?query=89128&search=random`, {
      statusCode: 200,
      fixture: 'multipleRestaurants.json',
    }).as('getRestaurants');
});

function cleanUp() {
  cy.clearAllCookies();
}

describe('restaurant choice menu', () => {
  it('should show restaurants for user to choose from', () => {
    unreg()
    cy.get('input').type('89128');
    cy.get('button').first().click();
    cy.get('button').first().should('have.text', 'Go Back').click();
    cy.get('button').first().should('have.text', '16').click();
    cy.get('.list').children('ul');
    cleanUp();
  });
  it('should not allow a user to move on without a full zipCode', () => {
    unreg()
    cy.get('input').type('8912');
    cy.get('button').should('be.disabled');
    cy.get('input').type('8');
    cy.get('button').should('not.be.disabled');
    cleanUp();
  })
});
