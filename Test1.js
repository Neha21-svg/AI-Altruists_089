import Register from "../support/PageClasses/Register";
import Logout from "../support/PageClasses/Logout";
import Login from "../support/PageClasses/Login";
import Cart from "../support/PageClasses/Cart";
import CartPage from "../support/PageClasses/CartPage";
import Checkout from "../support/PageClasses/Checkout";


describe('Tutorial Ninja', () => {

    //Now we create object for class

    const Registerobj = new Register();
    const Logoutobj = new Logout();
    const Loginobj = new Login();
    const Cartobj = new Cart();
    const CartPageobj = new CartPage();
    const Checkoutobj = new Checkout();


    it('Practice', () => {

        Registerobj.Enterurl();
        Registerobj.Registerintoapp();
        Logoutobj.  Logoutfromapp();
        Loginobj.Loginmyacc();
        Loginobj.Logintoapp();
        Cartobj.searchProduct();
        Cartobj.addToCart();
        CartPage.checkoutfromapp();
        Checkout.fillDetails();
        Checkout.confirmOrder(); 
        
    });
});