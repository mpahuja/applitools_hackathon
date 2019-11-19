describe('v2 Dynamic Content', () => {
    it('shows adds on launch', () => {
        cy.visit('/hackathonV2.html?showAd=true') 
        cy.login('abc', 'password')
        // ****************** BUG *********************//
        // Bug in v2 version of the app - This passes if we dont look for the img as the child locator when trying to get the element. 
        // TO-DO - Fix the bug
        // cy.get('#flashSale > img').should('be.visible') 
        cy.get('#flashSale2 > img').should('be.visible')
    })
})