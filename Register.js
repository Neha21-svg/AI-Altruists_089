class RegisterPage{

    Enterurl(){
        cy.visit('https://tutorialsninja.com/demo/index.php?route=account/register');
       
    }

    Registerintoapp(){

        //  Register Account Assertion
        cy.xpath('//h1[.="Register Account"]').should('be.visible','Register Account');

        //Register personal details
        cy.xpath('//legend[.="Your Personal Details"]').should('be.visible','Your Personal Details');

        //Enter personal details
        cy.get('#input-firstname').type('Neha');
        cy.get('#input-lastname').type('Kumari');
        cy.get('#input-email').type('nehakumari240702@gmail.com');
        cy.get('#input-telephone').type('7476523546');

        // Password
        cy.xpath('//legend[.="Your Password"]').should('be.visible','Your Password');
        cy.get('#input-password').type('neha123');
        cy.get('#input-confirm').type('neha123');

        //Newsletter
        cy.xpath('//legend[.="Newsletter"]').should('be.visible','Newsletter');

        //Privacy policy
        cy.get('[value="0"]').click();
        cy.get('[name="agree"]').click();

        //Continue
        cy.get('[value="Continue"]').click();
    }

}
export default RegisterPage