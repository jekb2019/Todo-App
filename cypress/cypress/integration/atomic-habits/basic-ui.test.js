/// <reference types="cypress" />

describe("Basic app running test", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/");
  });

  it("Default page shows habits", () => {
    cy.contains("Atomic Habits").should("exist");
    cy.contains("You are whoever you wish to be").should("exist");
  });
});
