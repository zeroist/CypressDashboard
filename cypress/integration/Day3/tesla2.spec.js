
import {modelSURL, teslaURL} from '../../support/authentication.constant'
import { onModelSPage } from '../../support/models'

define('tesla2 feature',()=>{

    beforeEach('open main page',()=>{
    
        cy.visit(teslaURL)
        
    })

    it('MOdelS test',()=>{

        onModelSPage.urlVerification()
        onModelSPage.privicy_verification()
        onModelSPage.modelScomparePage()


    })




})