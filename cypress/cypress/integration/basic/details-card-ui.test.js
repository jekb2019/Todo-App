/// <reference types="cypress" />

const checkCorrectModalDisplayed = (modalType) => {
  cy.get("[data-testid=detailsModal]").should("exist");
  if (modalType === "habit") {
    cy.get("[data-testid=relatedIdentity]").should("exist");
  } else if (modalType === "identity") {
    cy.get("[data-testid=relatedIdentity]").should("not.exist");
  }
};

describe("habit/identity details card ui test", () => {
  it("habit details card opens correctly", () => {
    cy.visit("http://localhost:3000/habits");
    cy.get("[data-testid=card]").first().click();
    checkCorrectModalDisplayed("habit");
    cy.get("[data-testid=okButton]").click();
    cy.get("[data-testid=detailsModal]").should("not.exist");
  });

  it("identity details card opens correctly", () => {
    cy.visit("http://localhost:3000/identities");
    cy.get("[data-testid=card]").first().click();
    checkCorrectModalDisplayed("identity");
    cy.get("[data-testid=okButton]").click();
    cy.get("[data-testid=detailsModal]").should("not.exist");
  });
});
