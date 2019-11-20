import { fieldsInputOutput } from '../../fixtures/loginData'
describe('v1 Login Tests:', () => {
    it('Verifies all static elements exist on the page', () => {
        cy.visit('/hackathonV2.html#')
        cy.eyesOpen({
            appName: 'Manoj App v1',
            testName: 'v1 Login Page',
            batchName: 'v1',
        })
        cy.eyesCheckWindow({
            tag: "LandingPage",
        })
        cy.eyesClose()
    })

    fieldsInputOutput.forEach(fields => {
        it(`Login with Username: ${fields.userName} and ${fields.password}`, () => {
            cy.visit('/hackathon.html#')
            cy.reload()
            cy.conditionalType('#username', fields.userName)
            cy.conditionalType('#password', fields.password)
            cy.get('#log-in').click()
            if (fields.erroMessage !== undefined)
            {
                cy.get('.alert-warning').should('contain', fields.erroMessage)
            } else {
                cy.get('.logged-user-i').should('exist')
            }
        })
    })

})