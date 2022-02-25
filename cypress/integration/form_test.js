// write tests here
describe('Module 4 Tests', () => {
    // Before each test, navigate to localhost 3000
    beforeEach(()=>{
        cy.visit('http://localhost:3000')
    })

    // declaring these for tests below
const nameInput = () => cy.get('input[name="name"]')
const emailInput = () => cy.get('input[name="email"]')
const passwordInput = () => cy.get('input[name="password"]')
const termsBox = () => cy.get('input[name="terms"]')
const submitButton = () => cy.get('button')

    //tests
//Get the Name input and type a name in it.
//Use an assertion to check if the text inputted contains the name you provided (Hint: use the .should assertion)
 it('Can type inside the Name Input', ()=> {
    nameInput()
        .should('have.value','')
        .type('Billy Dean')
        .should('have.value','Billy Dean')
})
//Get the Email input and type an email address in it
 it('Can enter an Email Address', ()=>{
     emailInput()
        .should('have.value','')
        .type('billy.goehring@gmail.com')
        .should('have.value','billy.goehring@gmail.com')
 })
//Get the password input and type a password in it
it('Can enter password into Input', ()=>{
    passwordInput()
        .should('have.value','')
        .type('hamburger123')
        .should('have.value','hamburger123')
})
//Set up a test that will check to see if a user can check the terms of service box
it('Can check the Terms of Service Checkbox',()=>{
    termsBox()
        .check()
})
//Check to see if a user can submit the form data
it('Can Submit Form Data',()=>{
    nameInput()
        .type('Billy')
    emailInput()
        .type('b@b.com')
    passwordInput()
        .type('password')
    termsBox()
        .check()
    submitButton()
        .should('not.be.disabled')
        .click()    
})
//Check for form validation if an input is left empty
it('Does form validate if Input Left Empty?',()=>{
    nameInput().type('Billy')
    emailInput().type('b@b.com')
    passwordInput().should('have.value','')
    termsBox().check()
    submitButton().should('be.disabled')
})
})