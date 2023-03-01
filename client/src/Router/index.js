import CartScreen from "../screens/CartScreen";
import Homescreen from "../screens/Homescreen";
import RegisterScreen from "../screens/RegisterScreen";
import LoginScreen from "../screens/LoginScreen";
import '../screens/Homescreen.css'
import '../components/pizza.css'
import '../screens/CartScreen.css'
import Ordersscreen from "../screens/Ordersscreen";
import Adminscreen from "../screens/Adminscreen";
import { BrowserRouter, Route, Link } from "react-router-dom";
import Userslist from "../screens/Userslist";
import Orderslist from "../screens/Orderslist";
import Pizzaslist from "../screens/Pizzaslist";
import Addpizza from "../screens/Addpizza";
import Adddrink from "../screens/Adddrink";
import Editpizza from "../screens/Editpizza";
import Editdrink from "../screens/Editdrink";
import Drinkslist from "../screens/Drinkslist";


function Router() {
  return (
    <div className="App">

      <BrowserRouter>

        <Route path="/" exact component={Homescreen} />
        <Route path="/cart" exact component={CartScreen} />
        <Route path="/register" exact component={RegisterScreen} />
        <Route path='/login' exact component={LoginScreen} />
        <Route path='/orders' exact component={Ordersscreen} />
        <Route path='/admin' exact component={Adminscreen} />

        <Route path="/admin/userslist" component={Userslist} exact />
        <Route path="/admin/orderslist" component={Orderslist} exact />
        <Route path="/admin/pizzaslist" component={Pizzaslist} exact />
        <Route path="/admin/drinkslist" component={Drinkslist} exact />
        <Route path="/admin/addpizza" component={Addpizza} exact />
        <Route path="/admin/adddrink" component={Adddrink} exact />
        <Route path="/admin/editpizza/:pizzaid" component={Editpizza} exact />
        <Route path="/admin/editdrink/:drinkid" component={Editdrink} exact />

      </BrowserRouter>

    </div>
  );
}

export default Router;