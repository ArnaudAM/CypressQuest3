Cypress.Commands.add('tasteDiveSearch', (query) => {
    cy.request(
        `https://tastedive.com/api/similar?q=${query.name}&type=${query.type}&limit=${query.limit}`
    ).as('tasteDiveResponse')
})