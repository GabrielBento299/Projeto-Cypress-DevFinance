Cypress.Commands.add('criarTransacao', (descricao, valor) => {
    cy.contains('Nova Transação').click();

    cy.get('.input-group input[type="text"]').type(descricao);
    cy.get('.input-group input[type="number"]').type(valor);
    cy.get('.input-group input[type="date"]').type("2023-01-01"); 

    cy.contains('button', 'Salvar').click();
});