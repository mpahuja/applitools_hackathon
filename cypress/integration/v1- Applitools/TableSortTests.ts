describe('v1 Table Sort:', () => {
    it('Amount should be sortable', () => {
        cy.visit('/hackathon.html#')
        cy.eyesOpen({
            appName: 'Manoj App v1',
            testName: 'v1 Table Sort',
            batchName: 'v1',
        })
        cy.get('#username').type('username')
        cy.get('#password').type('password')
        cy.get('#log-in').click()
        cy.eyesCheckWindow({
            tag: "BeforeSorting",
            sizeMode: "selector",
            selector: "#transactionsTable"
        })
        cy.get('#amount').click()
        cy.eyesCheckWindow({
            tag: "AfterSorting",
            sizeMode: "selector",
            selector: "#transactionsTable"
        })
        cy.eyesClose()
    })
})
