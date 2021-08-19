/// <reference types="cypress" />

describe("Routing", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/");
  });

  it("Route to identities page from habits page", () => {
    cy.get("[data-testid=routeButton]").click();
    cy.url().should("eq", "http://localhost:3000/identities");
  });

  it("Route to identities page from habits page", () => {
    cy.visit("http://localhost:3000/habits");
    cy.get("[data-testid=routeButton]").click();
    cy.url().should("eq", "http://localhost:3000/identities");
  });

  it("Route to habits page from identities page", () => {
    cy.visit("http://localhost:3000/identities");
    cy.get("[data-testid=routeButton]").click();
    cy.url().should("eq", "http://localhost:3000/habits");
  });
});
