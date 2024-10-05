class CheckoutPage {
    fillDetails() {

      cy.get('input[name="payment_address_firstname"]').type('John');
      cy.get('input[name="payment_address_lastname"]').type('Doe');
      // Add more fields as needed
  
      cy.get('input[name="agree"]').check();
      cy.get('input[value="Continue"]').last().click();
    }
  
    confirmOrder() {
        
      cy.get('input[value="Confirm Order"]').click();
    }
  }
  
  export default new CheckoutPage();
  