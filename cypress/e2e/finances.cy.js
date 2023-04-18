/// <reference types="cypress" />

describe('Transações', () => {

    beforeEach(() => {
        cy.visit('https://devfinance-agilizei.netlify.app/');
    });
    it('Cadastar uma entrada', () => {        
        cy.criarTransacao('Freela React', 3500);

        cy.get('tbody tr .description').should('have.text', 'Freela React');
    });
    
    it('Cadastrar uma saida', () => {
        cy.criarTransacao('Restaurante', -350);
        
        cy.get('tbody tr .description').should('have.text', 'Restaurante');
    });

    it('Remover entrada e saida', () => {
        cy.criarTransacao('Monitor', 1500);
        cy.criarTransacao('Tv 60 polegadas', 4500);
 
        cy.contains('.description', "Monitor")
            .parent()
            .find('img')
            .click();
        
        cy.get('tbody tr').should('have.length', 1);
    });
});


