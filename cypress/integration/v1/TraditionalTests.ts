import { fieldsInputOutput } from '../../fixtures/loginData'
describe('v1 Login Tests:', () => {
    it('Verifies all static elements exist on the page', () => {
        cy.visit('/hackathon.html#')
        cy.get('img[src="img/logo-big.png"]').should('exist')
        cy.get('img[src="img/social-icons/twitter.png"]').should('exist')
        cy.get('img[src="img/social-icons/facebook.png"]').should('exist')
        cy.get('img[src="img/social-icons/linkedin.png"]').should('exist')
        cy.get('.form-check-label').should('exist')
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