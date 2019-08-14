

describe('Positive Test NFL', function() {

    it('Navigate to CNN web site and Seacrh NFL', function() {
   
       cy.viewport(1268, 634)
    
    
       cy.visit('https://edition.cnn.com/')
    
       cy.get('.Grid-sc-1kcyc0j-0 > .Cell-i0zvfi-0 > .Flex-sc-1sqrs56-0 > .buttonstyles__ButtonBase-augw5g-0 > .search-icon').click()
       
       
       cy.get('.Grid-sc-1kcyc0j-0 > .Cell-i0zvfi-0 > .Box-sc-1fet97o-0 > .search-barstyles__SearchBarContainer-yoe3fw-0 > #header-search-bar').click()
    
       cy.get('.Grid-sc-1kcyc0j-0 > .Cell-i0zvfi-0 > .Box-sc-1fet97o-0 > .search-barstyles__SearchBarContainer-yoe3fw-0 > #header-search-bar').type('NFL')
    
       cy.get('.Grid-sc-1kcyc0j-0 > .Cell-i0zvfi-0 > .Box-sc-1fet97o-0 > .search-barstyles__SearchBarContainer-yoe3fw-0 > .Flex-sc-1sqrs56-0').click()
    
       //cy.visit('https://edition.cnn.com/search?q=NFL')

       cy.get('body').contains('FIVE')
    
    })
   
   })


   describe('Negative Test NFL', function() {

    it('Navigate to CNN web site and Seacrh NFL/', function() {
   
       cy.viewport(1268, 634)
    
    
       cy.visit('https://edition.cnn.com/')
    
       cy.get('.Grid-sc-1kcyc0j-0 > .Cell-i0zvfi-0 > .Flex-sc-1sqrs56-0 > .buttonstyles__ButtonBase-augw5g-0 > .search-icon').click()
    
       cy.get('.Grid-sc-1kcyc0j-0 > .Cell-i0zvfi-0 > .Box-sc-1fet97o-0 > .search-barstyles__SearchBarContainer-yoe3fw-0 > #header-search-bar').click()
    
       cy.get('.Grid-sc-1kcyc0j-0 > .Cell-i0zvfi-0 > .Box-sc-1fet97o-0 > .search-barstyles__SearchBarContainer-yoe3fw-0 > #header-search-bar').type('NFL/')
    
       cy.get('.Grid-sc-1kcyc0j-0 > .Cell-i0zvfi-0 > .Box-sc-1fet97o-0 > .search-barstyles__SearchBarContainer-yoe3fw-0 > .Flex-sc-1sqrs56-0').click()
    
       cy.visit('https://edition.cnn.com/search?q=NFL/')

       cy.get('body').contains('NFL/')
    
    })
   
   })




  
     
   