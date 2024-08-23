describe('bloglist', function() {
  it('front page can be opened', function() {
    cy.visit('http://localhost:9999')
    cy.contains('Log in')
  })
})