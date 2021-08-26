// https://docs.cypress.io/api/introduction/api.html

describe("Home", () => {
  it("Visits the app root url", () => {
    cy.visit("http://localhost:8080/");
    cy.contains("h3", "One Piece");
  });
});

describe("Search", () => {
  it("Searchs for Batman movies", () => {
    cy.get(".search-textbox").type("Batman");
    cy.get(".search-button").click();
    cy.contains("h3", "Batman Begins");
  });
});
