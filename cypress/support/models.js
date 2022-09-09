import { modelSURL } from '../support/authentication.constant'
var data=require('../fixtures/modelsPage.json')
export class ModelS {

    urlVerification() {
        cy.wait(1000)
        cy.contains('Model S').click()
        cy.url().should('eq', modelSURL)
    }

    privicy_verification() {
  



    }

}

export const onModelSPage = new ModelS

