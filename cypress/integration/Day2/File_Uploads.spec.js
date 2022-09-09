

describe('File Upload',()=>{


    it('Png file upload',()=>{

        cy.visit('http://practice.cybertekschool.com/upload')

        cy.get('[id="file-upload"]').attachFile('download.png')

        cy.get('[id="file-submit"]').click()

        cy.get('[id="uploaded-files"]').invoke('text','download.png').should('be.visible')
       


    })
})