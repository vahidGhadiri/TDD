describe("TDD Application", () => {
    it("visit the TDD", () => {
        cy.visit('http://localhost:3000/');
        cy.get('h2[data-test="heading"]').contains('TDD')
    })
})