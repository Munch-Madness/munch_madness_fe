describe('template spec', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000')
    cy.get('button').first().click()
  })
  it('should show a bracket of 16, then 8, then 4, then 2, then winner, and allow choosing winner for every round', () => {
    cy.get('p').first().should('have.text', 'Omakase')
    cy.get('h1').should('have.text', 'Round 1')
  })
})
