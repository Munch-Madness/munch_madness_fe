async function unreg() {
  if (!window.navigator || !navigator.serviceWorker) {
    return null;
  }
  const registrations = await navigator.serviceWorker.getRegistrations();
  return Promise.all(registrations.map(registration => registration.unregister()));
}

function cleanUp() {
  cy.clearAllCookies();
}

describe('template spec', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000')
    cy.get('button').first().click()
  })
  it('should show reastaurants for user to choose from', () => {
    unreg()
    cy.get('button').first().should('have.text', 'Go Back').click()
    cy.get('button').first().should('have.text', '16').click()
    cy.get('.list').children('ul')
    cleanUp()
  })
})
