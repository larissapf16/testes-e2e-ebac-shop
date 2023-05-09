// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })


Cypress.Commands.add('login', (usuario, senha) => {
    cy.get('#username').type(usuario)
    cy.get('#password').type(senha, { log: false })
    cy.get('.woocommerce-form > .button').click()
});

Cypress.Commands.add('produto', (produto, tamanho, cor) => {
    cy.get('[class="product-block grid"]')
        .contains(produto).click() //clica no nome do produto
    cy.get('[class="variable-items-wrapper button-variable-wrapper"]')
        .contains(tamanho).click({ force: true }) //clica no tamanho do produto
    cy.get('.button-variable-item-Green') // clica na cor do produto
        .contains(cor).click({ force: true })

});

Cypress.Commands.add('produto2', (produto2, tamanho2, cor2) => {
    cy.get('[class="product-block grid"]')
        .contains(produto2).click()
    cy.get('[class="variable-items-wrapper button-variable-wrapper"]')
        .contains(tamanho2).click({ force: true })
    cy.get('.button-variable-item-Gray')
        .contains(cor2).click({ force: true })

});

/*Cypress.Commands.add('produto3', (produto3, tamanho3, cor3) => {
    cy.get('[class="product-block grid"]')
        .contains(produto3).click() //Produto 3
    cy.get('[class="variable-items-wrapper button-variable-wrapper"]')
        .contains(tamanho3).click({ force: true })
    cy.get('.button-variable-item-Black')
        .contains(cor3).click({ force: true })
});

Cypress.Commands.add('produto4', (produto4, tamanho4, cor4) => {
    cy.get('[class="product-block grid"]')
        .contains(produto4).click() //Produto 4
    cy.get('[class="variable-items-wrapper button-variable-wrapper"]').click()
        .contains(tamanho4).click({ force: true })
    cy.get('.button-variable-item-Orange').click()
        .contains(cor4).click({ force: true })

});*/