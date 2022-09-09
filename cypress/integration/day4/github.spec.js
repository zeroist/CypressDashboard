import { githubUrl } from '../../support/authentication.constant'
import { ongithubPage } from '../../support/github'
describe('Udemy',()=>{

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