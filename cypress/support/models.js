import { modelSURL } from '../support/authentication.constant'
var data=require('../fixtures/modelsPage.json')
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

}

export const onModelSPage = new ModelS

