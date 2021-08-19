/// <reference types="cypress" />

const checkButtonsExist = () => {
  cy.get("[data-testid=routeButton]").should("exist");
  cy.get("[data-testid=addNewButton]").should("exist");
};

const checkHeaderTitle = (title) => {
  cy.get("[data-testid=headerTitle]").should("have.text", title);
};

const checkFooterTitle = (title) => {
  cy.get("[data-testid=footerTitle]").should("have.text", title);
};

describe("Basic app running test", () => {
  it("{BaseUrl}/ shows habits page", () => {
    cy.visit("http://localhost:3000/");
    checkHeaderTitle("Atomic Habits");
    checkButtonsExist();
    checkFooterTitle("You are whoever you wish to be");
  });

  it("{BaseUrl}/habits shows habits page", () => {
    cy.visit("http://localhost:3000/habits");
    checkHeaderTitle("Atomic Habits");
    checkButtonsExist();
    checkFooterTitle("You are whoever you wish to be");
  });

  it("{BaseUrl}/identities shows identity page", () => {
    cy.visit("http://localhost:3000/identities");
    checkHeaderTitle("Who I Am");
    checkButtonsExist();
    checkFooterTitle("You are whoever you wish to be");
  });
});
