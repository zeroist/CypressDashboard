import { githubUrl } from '../../support/authentication.constant'
import { ongithubPage } from '../../support/github'
define('Udemy',()=>{

    beforeEach('udemy',()=>{
        cy.visit(githubUrl)
        
    })

it('udemy',()=>{
ongithubPage.urlVerification()
})

it('navigatetoBack',()=>{

    ongithubPage.navigatetoMainPage()
})



})