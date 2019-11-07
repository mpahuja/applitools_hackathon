Cypress.Commands.add("conditionalType", (locator, stringToType) => { 
    if (stringToType !== undefined) {
        cy.get(locator).type(stringToType)
    } 
})
