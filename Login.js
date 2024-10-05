class LoginPage {
    Loginmyacc() {

       cy.get('.caret').click();
       cy.xpath("//a[text()='Login']").click();
    }

    Logintoapp(){
        cy.get('#input-email').type('nehakumari240602@gmail.com');
        cy.get('#input-password').type('neha123');
        cy.get('input[type="submit"]').click();
    }

 
        
}
export default LoginPage;
