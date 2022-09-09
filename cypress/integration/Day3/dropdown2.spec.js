let data=require('../../fixtures/states.json')


define('dropdownMenuFunction',()=>{

it('dropdownTest2',()=>{

    cy.visit('http://practice.cybertekschool.com/dropdown')

    cy.get('[id="state"]>option').each(($el,index)=>{

        
        let str=($el).text()
        expect(str).to.contain(data.states[index])

        cy.get('[id="state"]').select($el.text()).should('be.visible')

    })




})




})