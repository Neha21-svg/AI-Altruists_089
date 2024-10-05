class CartPage {
  
    checkoutfromapp() {
      cy.contains('Shopping Cart!').click();
      cy.get('a.btn.btn-primary').contains('Checkout').click();
    }
  }
  
  export default new CartPage();
  