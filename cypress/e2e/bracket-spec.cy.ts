describe('template spec', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000')
    cy.get('button').first().click()
  })
  it('should show reastaurants for user to choose from', () => {
    cy.get('button').first().should('have.text', 'Go Back').click()
    cy.get('button').first().should('have.text', '16').click()
    cy.get('.list').children('ul').children('li').first().should('have.text', 'Applebees ⚪️')
  })
})
