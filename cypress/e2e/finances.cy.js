/// <reference types="cypress" />

describe('Cadastar entradas e saidas', () => {
    beforeEach(() => {
        cy.visit('https://devfinance-agilizei.netlify.app/');
    });
    it('Cadastar uma entrada', () => {       
        cy.criarTransacao('Freela React', 3500);
        cy.criarTransacao('Moto trilha', 13500);

        cy.get('tbody tr .description').should('contain.text', 'Freela React');
        cy.get('tbody tr .description').should('contain.text', 'Moto trilha');
        cy.get('#data-table tbody tr').should('have.length', 2);
    });
    
    it('Cadastrar uma saida', () => {
        cy.criarTransacao('Restaurante', -350);
        cy.criarTransacao('Tv 60 polegadas', -5650);
        
        cy.get('tbody tr .description').should('contain.text', 'Restaurante');
        cy.get('tbody tr .description').should('contain.text', 'Tv 60 polegadas');
        cy.get('#data-table tbody tr').should('have.length', 2);
    });

    it('Remover entrada e saida', () => {
        cy.criarTransacao('Gurda roupa', 950);
        cy.criarTransacao('Moto', 15000);
        cy.criarTransacao('Pizza', -60);
 
        cy.contains('.description', "Pizza")
            .parent()
            .find('img')
            .click();
        
        cy.get('tbody tr').should('have.length', 2);
    });
});

describe('Cadastar sem prencher os campos obrigatórios', () => {
    beforeEach(() => {
        cy.visit('https://devfinance-agilizei.netlify.app/');
    });
    it('Cadastrar sem prencher a descrição', () => {
        cy.criarTransacaoSemDescricao(2500);
    });

    it('Cadastrar sem prencher o valor', () => {
        cy.criarTransacaoSemValor('Chevette');
    });
    it('Cadastrar sem prencher a data', () => {
        cy.criarTransacaoSemData('Uno Turbo', 12500);
    });

    it('Cadastrar sem prenhcer nenhum campo', () => {
        cy.criarTransacaoSemDado();
    });
});


