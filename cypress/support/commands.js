Cypress.Commands.add('criarTransacao', (descricao, valor) => {
    cy.contains('Nova Transação').click();

    cy.get('.input-group input[type="text"]').type(descricao);
    cy.get('.input-group input[type="number"]').type(valor);
    cy.get('.input-group input[type="date"]').type("2023-01-01"); 

    cy.contains('button', 'Salvar').click();
});

Cypress.Commands.add('criarTransacaoSemDescricao', (valor) => {
    cy.contains('Nova Transação').click();

    cy.get('.input-group input[type="text"]').clear();
    cy.get('.input-group input[type="number"]').type(valor);
    cy.get('.input-group input[type="date"]').type("2023-01-01"); 

    cy.contains('button', 'Salvar').click();

    cy.on('window:alert', (str) => {
        expect(str).to.equal(`Por favor, preencha todos os campos`);
    });

    cy.contains('a', 'Cancelar').click();
});

Cypress.Commands.add('criarTransacaoSemValor', (descricao) => {
    cy.contains('Nova Transação').click();

    cy.get('.input-group input[type="text"]').type(descricao);
    cy.get('.input-group input[type="number"]').clear();
    cy.get('.input-group input[type="date"]').type("2023-01-01"); 

    cy.contains('button', 'Salvar').click();

    cy.on('window:alert', (str) => {
        expect(str).to.equal(`Por favor, preencha todos os campos`);
    });

    cy.contains('a', 'Cancelar').click();
});

Cypress.Commands.add('criarTransacaoSemData', (descricao, valor) => {
    cy.contains('Nova Transação').click();

    cy.get('.input-group input[type="text"]').type(descricao);
    cy.get('.input-group input[type="number"]').type(valor);
    cy.get('.input-group input[type="date"]').clear(); 

    cy.contains('button', 'Salvar').click();

    cy.on('window:alert', (str) => {
        expect(str).to.equal(`Por favor, preencha todos os campos`);
    });

    cy.contains('a', 'Cancelar').click();
 });

Cypress.Commands.add('criarTransacaoSemDado', () => {
    cy.contains('Nova Transação').click();

    cy.get('.input-group input[type="text"]').clear();
    cy.get('.input-group input[type="number"]').clear();;
    cy.get('.input-group input[type="date"]').clear(); 

    cy.contains('button', 'Salvar').click();

    cy.on('window:alert', (str) => {
        expect(str).to.equal(`Por favor, preencha todos os campos`);
    });

    cy.contains('a', 'Cancelar').click();
});