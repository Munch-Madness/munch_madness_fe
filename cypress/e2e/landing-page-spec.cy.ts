describe('template spec', () => {
  it('should show bracket selection on page load', () => {
    cy.visit('http://localhost:3000')
    cy.get('img').should('have.attr', 'src', './assets/MunchMadness.PNG')
    cy.get('h1').should('have.text', 'Choose Your Bracket Size')
    cy.get('p').should('have.text', 'How many restaurants do you want to compare?')
    cy.get('button').first().should('have.text', '16')
    cy.get('button').last().should('have.text', '2')
  })
})