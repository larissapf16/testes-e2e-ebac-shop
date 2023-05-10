/// <reference types="cypress" />
import EnderecoPage from "../support/page_objects/endereco.page";
const dadosEndereco = require('../fixtures/endereco.json')

context('Exercicio - Testes End-to-end - Fluxo de pedido', () => {
    /*  Como cliente 
        Quero acessar a Loja EBAC 
        Para fazer um pedido de 4 produtos 
        Fazendo a escolha dos produtos
        Adicionando ao carrinho
        Preenchendo todas opções no checkout
        E validando minha compra ao final */

    beforeEach(() => {
        cy.visit('/')
    });
    it('Finaliza compra dos produtos com sucesso', () => {

        cy.produto('Abominable Hoodie', 'M', 'Green', '1')//Produto1

        cy.wait(70000)
        cy.get('#primary-menu > .menu-item-629 > a').click() //clicar no menu comprar
        cy.get(':nth-child(2) > .page-numbers').click() // clicar página 2

        cy.produto('Balboa Persistence Tee', 'L', 'Gray', '1')//Produto1

        cy.wait(70000)
        cy.get('#primary-menu > .menu-item-629 > a').click() //clicar no menu comprar
        cy.get(':nth-child(2) > .page-numbers').click() // clicar página 2

        cy.produto('Atomic Endurance Running Tee (Crew-Neck)', 'L', 'Black', '1')//Produto 3

        cy.wait(70000)
        cy.get('#primary-menu > .menu-item-629 > a').click() //clicar no menu comprar
        cy.get(':nth-child(2) > .page-numbers').click() // clicar na página 2

        cy.produto('Atomic Endurance Running Tee (Crew-Neck)', 'XL', 'Black', '1')//Produto 4
        
        cy.wait(70000)
        cy.get('.dropdown-toggle > .mini-cart-items').should('contain', 4) //verifica se o carrinho contém o produto 

        cy.get('.dropdown-toggle > .text-skin > .icon-basket').click()
        cy.get('#cart > .dropdown-menu > .widget_shopping_cart_content > .mini_cart_content > .mini_cart_inner > .mcart-border > .buttons > .checkout').click()

        EnderecoPage.inserirEnderecoFaturamento(
            dadosEndereco[0].nome,
            dadosEndereco[0].sobrenome,
            dadosEndereco[0].empresa,
            dadosEndereco[0].pais,
            dadosEndereco[0].endereco,
            dadosEndereco[0].numero,
            dadosEndereco[0].cidade,
            dadosEndereco[0].estado,
            dadosEndereco[0].cep,
            dadosEndereco[0].telefone,
            dadosEndereco[0].email
        )

        cy.get('#terms').click()
        cy.get('[class="btn btn-primary btn-outline alt"]').click()
        cy.get('.woocommerce-notice').should('contain', 'Obrigado. Seu pedido foi recebido.')
    });



});




