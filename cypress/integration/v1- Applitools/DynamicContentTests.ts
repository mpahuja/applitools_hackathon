describe('v1 Dynamic Content', () => {
    it('shows adds on launch', () => {
        cy.visit('/hackathon.html?showAd=true') 
        cy.login('abc', 'password')
        cy.eyesOpen({
            appName: 'Manoj App v1',
            testName: 'v1 Dynamic Content Area',
            batchName: 'v1',
        })
        cy.eyesCheckWindow({
            tag: "Dynamic Area",
            sizeMode: "selector",
            selector: ".element-balances"
        })
        cy.eyesClose()
    })
})