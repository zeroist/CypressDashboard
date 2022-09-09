import { comparePageUrl, modelSURL } from '../support/authentication.constant'
var data = require('../fixtures/modelsPage.json')
var compare=require('../fixtures/comparePage.json')
export class ModelS {

    urlVerification() {
        cy.wait(1000)
        cy.contains('Model S').click()
        cy.url().should('eq', modelSURL)
    }

    privicy_verification() {

        cy.scrollTo('bottomLeft')
        cy.get('[class="tds-link tcl-link"]').each(($el, index) => {
            var word = $el.text()
            expect(word).to.contain(data.ModelS[index])

        })
    }

    modelScomparePage() {
    
        cy.scrollTo('bottomLeft')
        cy.get('[href="/compare"]').click()
        cy.url().should('eq',comparePageUrl)
        cy.scrollTo('bottomLeft')
        cy.get('[class="tds-text--caption tcl-compare-models__item-title"]').each(($el,index)=>{
            const text=$el.text()
        
            
          expect(text).to.contain(compare.comparePageText[index])

        })




    }

}

export const onModelSPage = new ModelS

