describe('v1 Dynamic Content', () => {
    it('shows adds on launch', () => {
        cy.visit('/hackathon.html?showAd=true') 
        cy.login('abc', 'password')
        cy.get('#flashSale').should('exist')
        cy.get('#flashSale2').should('exist')
    })
})