describe('My First Test', () => {
    it('Visits the page', () => {
      cy.visit('https://amenibensaadaweathery.netlify.app/')
      cy.get('*[class^="btn"]').contains('Sign In').click({ force: true })
      cy.url().should('include', '/signin')

    })
  })