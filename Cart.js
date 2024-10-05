class CartPage {
    searchProduct() {
      cy.get('input[name="search"]').type(macbook);
      cy.get('.input-group-btn .btn-default').click();
    }
  
    addToCart() {
      cy.get('.product-layout .button-group .btn-add-to-cart').first().click();
    }
  }
  
  export default new ProductPage();
  