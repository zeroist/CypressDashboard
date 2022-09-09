import { githubUrl }from '../support/authentication.constant'
export class github{

    urlVerification(){
        cy.get('[href="/login"]').click()
        cy.url().should('eq',githubUrl)
        cy.wait(2000)
    }

    navigatetoMainPage(){
    
        cy.go('back')
       // cy.url().should('eq',githubUrl)
    }


}

export const ongithubPage=new github()