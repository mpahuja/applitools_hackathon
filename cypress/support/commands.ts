Cypress.Commands.add("conditionalType", (locator, stringToType) => { 
    if (stringToType !== undefined) {
        cy.get(locator).type(stringToType)
    } 
})

Cypress.Commands.add("login", (username, password) => {
    cy.get('#username').type(username)
    cy.get('#password').type(password)
    cy.get('#log-in').click()
})
