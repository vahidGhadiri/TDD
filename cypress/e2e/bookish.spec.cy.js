import axios from "axios";

before(() => {
    return axios
        .delete('http://localhost:8080/books?_cleanup=true')
        .catch((err) => err);
});

afterEach(() => {
    return axios
        .delete('http://localhost:8080/books?_cleanup=true')
        .catch(err => err);
});

beforeEach(() => {
    const books = [
        { 'name': 'Refactoring', 'id': 1 },
        { 'name': 'Domain-driven design', 'id': 2 },
        { 'name': 'Building Microservices', 'id': 3 }
    ];
    return Promise.all(books.map(item =>
        axios.post('http://localhost:8080/books', item, {
            headers: { 'Content-Type': 'application/json' }
        })
    ));
});

describe("Bookish Application", () => {
    it('Shows a book list', () => {
        cy.visit("http://localhost:3000/");
        cy.get('div[data-test="book-list"]').should('exist');
        cy.get('div.book-item').should((books) => {
            expect(books).to.have.length(3); // Check for 3 books
            const titles = [...books].map(x => x.querySelector('h2').innerHTML);
            expect(titles).to.deep.equal(
                ['Refactoring', 'Domain-driven design', 'Building Microservices']
            );
        });
    });
});

describe("Bookish Application", () => {
    it('Shows a book list', () => {
        cy.get('div[data-test="book-list"]').should('exist');

        cy.get('div.book-item').should((books) => {
            expect(books).to.have.length(2);
            const titles = [...books].map(x => x.querySelector('h2').
                innerHTML);
            expect(titles).to.deep.equal(
                ['Refactoring', 'Domain-driven design']
            )
        })
    })

})

