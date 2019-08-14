describe('test_name', function() {

    it('what_it_does', function() {
   
       cy.viewport(1268, 634)
    
       
    
       cy.visit('https://www.google.com/')
    
       cy.get('.A8SBwf > .RNNXgb > .SDkEP > .a4bIc > .gLFyf').click()
    
       cy.get('.A8SBwf > .RNNXgb > .SDkEP > .a4bIc > .gLFyf').type('CNN')
    
       cy.get('.sbhl > .suggestions-inner-container > .sbtc > .sbl1 > span').click()
    
       cy.visit('https://www.google.com/search?source=hp&ei=zzhUXebePOGI5wK9y4DYBA&q=cnn&oq=CNN&gs_l=psy-ab.1.0.0i131i67j0i67j0i131j0l3j0i131j0l3.4817.5222..7775...1.0..0.164.558.0j4......0....1..gws-wiz.....10..35i39.o5LjlaFR9E4')
    
       cy.get('div:nth-child(2) > .rc > .r > a > .LC20lb').click()
    
       cy.visit('https://edition.cnn.com/')
    
       cy.get('.Grid-sc-1kcyc0j-0 > .Cell-i0zvfi-0 > .Flex-sc-1sqrs56-0 > .buttonstyles__ButtonBase-augw5g-0 > .search-icon').click()
    
       cy.get('.Grid-sc-1kcyc0j-0 > .Cell-i0zvfi-0 > .Box-sc-1fet97o-0 > .search-barstyles__SearchBarContainer-yoe3fw-0 > #header-search-bar').click()
    
       cy.get('.Grid-sc-1kcyc0j-0 > .Cell-i0zvfi-0 > .Box-sc-1fet97o-0 > .search-barstyles__SearchBarContainer-yoe3fw-0 > #header-search-bar').type('POLITIC')
    
       cy.get('.Grid-sc-1kcyc0j-0 > .Cell-i0zvfi-0 > .Box-sc-1fet97o-0 > .search-barstyles__SearchBarContainer-yoe3fw-0 > .Flex-sc-1sqrs56-0').click()
    
       cy.visit('https://edition.cnn.com/search?q=POLITIC')
    
       cy.get('.l-container > .cnn-search__right > .cnn-search__results > .cnn-search__results-count > strong').click()
    
    })


    describe('My First Test', function() {
        it('Does not do much!', function() {
          cy.visit('http://google.com')
    
    
          cy.url().should('include', 'google.com') //Validar el URL
         // cy.title().should() //Validar el Title del Html
          
          cy.get('body').contains('search')
    
        })
      })
   
   })