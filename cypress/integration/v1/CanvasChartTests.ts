describe('v1 Canvas Charts', () => {
    it('Navigation to canvas charts page works', () => {
        cy.visit('/hackathon.html#')
        cy.login('abc', 'password')
        cy.get('#showExpensesChart').click()
        cy.get('#canvas').should('exist')
    })

    it('Verifies properties and content of chart', () => {
        cy.visit('/hackathonChart.html')
        cy.get('#canvas')
            .should('be.visible')
            .and(chart => {
                // we can assert anything about the chart really
                expect(chart.height()).to.be.greaterThan(470)
              })
    })

    it('Verifies content of chart with additional year data', () => {
        cy.visit('/hackathonChart.html')
        cy.get('#addDataset').click()
        // Purposefully skipped validation of bar charts and value verification
    })

})