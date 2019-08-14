describe('Calypso Test', function() {

    it('Login Test', function() {
   
       cy.viewport(1224, 677)
    
       cy.visit('http://calypso-dev.citymaps.io:8080/activiti-app/#/login')
    
       cy.visit('http://calypso-dev.citymaps.io:8080/activiti-app/#/login')
    
       cy.get('#main > .ng-pristine > .content-form > .form-fields > #username').type('admin@app.activiti.com')
    
       cy.get('#main > .ng-valid > .content-form > .form-fields > #password').type('admin')
    
       cy.get('#main > .ng-valid > .content-form > .form-fields > #username').click()
    
       cy.get('#main > .ng-valid > .content-form > .form-fields > #password').click()
    
       cy.get('#main > .ng-valid > .content-form > .btn-holder > #login').click()
    
       cy.get('#main-nav > .fixed-container > .user-menu-con > .dropdown > .user-menu').click()
    
       cy.get('.user-menu-con > .dropdown > .dropdown-menu > li:nth-child(5) > .ng-scope').click()
    
       cy.get('#main > .ng-pristine > .content-form > .form-fields > #username').type('admin@app.activiti.com')
    
       cy.get('#main > .ng-valid > .content-form > .form-fields > #password').type('admin')
    
    })
   
   })
   