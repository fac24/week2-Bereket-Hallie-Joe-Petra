beforeEach(() => {
  cy.task("resetDb");
});

/* Server route tests */

describe("Page navigation", () => {
  it("can navigate to homepage", () => {
    cy.visit("/");
  });

  it("can navigate to Write Review page", () => {
    cy.visit("/write-review");
  });
});

/* Database access tests */

describe("Fill out and submit the form and redirect to root route", () => {
  it("can fill out and submit the form and redirect to root route", () => {
    cy.get("form").find("input[name='username']").type("ron11");
    cy.get("form")
      .find("input[name='title']")
      .type("Harry Potter and the Philosopher's Stone");
    cy.get("form").find("input[name='author']").type("J.K. Rowling");
    cy.get("form").find("textarea[name='textcontent']").type("Best book ever!");
    cy.get("form").find("input[value='5']").check();

    cy.get("button").click();

    cy.url().should("include", "/");
    cy.visit("/");
    cy.contains("Harry Potter and the Philosopher's Stone");
  });
});

after(() => {
  cy.task("resetDb");
});
