/// <reference types="cypress" />

declare namespace Cypress {
    interface Chainable<Subject> {
    /**
     * Goes to a /expressdrive url and onboards a driver using a phone number
     * @example
     * cy.conditionalType('#username','validUserName')
     */
    conditionalType(locator: string, stringToType: string | undefined): Chainable<any>;
    /**
     * Goes to a /expressdrive url and onboards a driver using a phone number
     * @example
     * cy.login('abc','password')
     */
    login(username: string, password: string): Chainable<any>;
    }
}