describe('Login', () => {
  beforeEach(() => {
    cy.log("Visit the Orange HRM login page")
    cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
  }) 
    
   
  it("Validate Url Launches the accurate dashboard", () => {
    //Verify it's the accurate login page by checking for assertions
    cy.get(".orangehrm-login-logo").should("be.visible")
    cy.get(".oxd-text.oxd-text--h5.orangehrm-login-title").should("be.visible")
    cy.get(".orangehrm-login-form").should ("be.visible")
  })

  it("Validate that user can successfully login with valid credentials", () => {
    cy.get('input[name="username"]').clear().type("Admin")
    cy.get("input[name='password']").clear().type("admin123")

    //click the login button
    cy.get("button[type='submit']").should("be.visible").click()

    //verify successful login and the new page URL contains the expected string
    cy.url().should('contain', 'https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index')
    cy.get(".oxd-text.oxd-text--h6.oxd-topbar-header-breadcrumb-module").should('be.visible')
  })

  it("Validate that user is unable to login with invalid credentials", () => {
    cy.log("Negative Login Test with Invalid username and Password")
    cy.get('input[name="username"]').clear().type("Administrator")
    cy.get("input[name='password']").clear().type("ADMIN123")
    cy.get("button[type='submit']").should("be.visible").click()

    //click the login button
    cy.get("button[type='submit']").should("be.visible").click()

    // Verify error message
    cy.get(".oxd-text.oxd-text--p.oxd-alert-content-text").should('be.visible')
  })

  it("Validate that user is unable to login with invalid credentials", () => {
    cy.log("Negative Login Test with Invalid Username")
    cy.get('input[name="username"]').clear().type("Administrator")
    cy.get("input[name='password']").clear().type("admin123")
    cy.get("button[type='submit']").should("be.visible").click()

    //click the login button
    cy.get("button[type='submit']").should("be.visible").click()

    // Verify error message
    cy.get(".oxd-text.oxd-text--p.oxd-alert-content-text").should('be.visible')
  })

  it("Validate that user is unable to login with invalid credentials", () => {
    cy.log("Negative Login Test with Invalid Password")
    cy.get('input[name="username"]').clear().type("Admin")
    cy.get("input[name='password']").clear().type("ADMIN123")
    cy.get("button[type='submit']").should("be.visible").click()

    //click the login button
    cy.get("button[type='submit']").should("be.visible").click()

    // Verify error message
    cy.get(".oxd-text.oxd-text--p.oxd-alert-content-text").should('be.visible')

    cy.log("Test Ends")

  })
    
})