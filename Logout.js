class LogoutPage{

    Logoutfromapp(){
        cy.get('.caret').click();
        cy.xpath("//a[text()='Logout'][1]").click();


    }
}
export default LogoutPage;