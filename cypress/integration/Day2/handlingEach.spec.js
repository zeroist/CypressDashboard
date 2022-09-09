

var data=require('../../fixtures/staging.json')

define('handleEach2', () => {

    before(function(){
        cy.visit('https://opensource-demo.orangehrmlive.com/')
        cy.get('[placeholder="Username"]').clear().type('Admin')
        cy.get('[class="oxd-input oxd-input--active"]').clear().type('admin123')
        cy.get('[type="submit"]').click()
    })

    
    it('each Try', () => {


        cy.get('[class="oxd-main-menu"]>[class="oxd-main-menu-item-wrapper"]').each((element,index2,no)=>{
           // cy.log('element : ', element.text())
            let word=element.text()
            
            expect(word).to.be.equal(data.quickLaunch[index2])
            
            

 

        })





    })









}

)