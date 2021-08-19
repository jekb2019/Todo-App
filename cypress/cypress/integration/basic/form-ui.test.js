/// <reference types="cypress" />

const checkFormComponentsExist = (modalType) => {
  cy.get("[data-testid=inputName]").should("exist");
  cy.get("[data-testid=inputDescription]").should("exist");

  cy.get("[data-testid=addNewButton]").should("exist");
  if (modalType === "identity") {
    cy.get("[data-testid=inputIdentity]").should("not.exist");
  } else if (modalType === "habit") {
    cy.get("[data-testid=inputIdentity]").should("exist");
  }
};

describe("add new habit/identity form ui test", () => {
  it("add new habit form opens correctly", () => {
    cy.visit("http://localhost:3000/habits");
    cy.get("[data-testid=addNewButton]").click();
    cy.get("[data-testid=newHabitModalTitle]").should(
      "have.text",
      "Add New Habit"
    );
    checkFormComponentsExist("habit");
  });

  it("add new identity form opens correctly", () => {
    cy.visit("http://localhost:3000/identities");
    cy.get("[data-testid=addNewButton]").click();
    cy.get("[data-testid=newIdentityModalTitle]").should(
      "have.text",
      "Add New Identity"
    );
    checkFormComponentsExist("identity");
  });
});
