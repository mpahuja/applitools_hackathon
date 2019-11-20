describe('v1 Canvas Charts', () => {
    it('Navigation to canvas charts page works', () => {
        cy.visit('/hackathon.html#')
        cy.login('abc', 'password')
        cy.get('#showExpensesChart').click()
        cy.get('#canvas').should('exist')
    })

    it('Verifies properties and content of chart', () => {
        cy.visit('/hackathonChart.html')
        cy.eyesOpen({
            appName: 'Manoj App v1',
            testName: 'v1 Canvas Default Properties',
            batchName: 'v1',
        })
        cy.eyesCheckWindow({
            tag: "DefaultChart",
            target: "region",
            selector: "#canvas"
        })
        cy.eyesClose()
    })

    it('Verifies content of chart with additional year data', () => {
        cy.visit('/hackathonChart.html')
        cy.get('#addDataset').click()
        cy.eyesOpen({
            appName: 'Manoj App v1',
            testName: 'v1 Canvas Added DataSet',
            batchName: 'v1',
        })
        cy.eyesCheckWindow({
            tag: "AddedDataset",
            target: "region",
            selector: "#canvas"
        })
        cy.eyesClose()
    })

})