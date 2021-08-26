// https://docs.cypress.io/api/introduction/api.html

describe("Home", () => {
  beforeEach(() => {
    cy.visit("http://localhost:8080/");
  });

  it("Visits the app root url", () => {
    cy.visit("http://localhost:8080/");
    cy.contains("h3", "One Piece");
  });

  it("Click on One Piece about search bar", () => {
    cy.contains("h3", "One Piece").click();
    cy.contains(
      "p",
      "The young pirate Monkey D Luffy sets out on a quest in search of the legendary treasure One Piece."
    );
  });
});

describe("Search", () => {
  beforeEach(() => {
    cy.visit("http://localhost:8080/");
  });

  it("Can type in search", () => {
    cy.get(".search-textbox")
      .type("Demon Slayer")
      .should("have.value", "Demon Slayer");
  });

  it("Search for movies", () => {
    cy.get(".search-textbox").type("Batman");
    cy.get(".search-button").click();
    cy.contains("h3", "Batman Begins");
  });

  it("Navigates to movie details", () => {
    cy.get(".search-textbox").type("Naruto");
    cy.get(".search-button").click();
    cy.contains("h3", "Naruto: Shippûden").click();
  });

  it("Search bar should not be visible once the movie is clicked", () => {
    cy.get(".search-textbox").type("Bleach");
    cy.get(".search-button").click();
    cy.contains("h3", "Bleach: Memories of Nobody").click();
  });
});
