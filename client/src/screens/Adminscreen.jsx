import React, { useEffect } from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

export default function Adminscreen() {
  const userstate = useSelector((state) => state.loginUserReducer);
  const { currentUser } = userstate;

  useEffect(() => {
    if (!currentUser.isAdmin) {
      window.location.href = "/";
    }
  }, []);


  return (
    <div>
      <HelmetProvider>
        <Helmet>
          <meta charSet='utf-8' />
          <title>Admin Page</title>
        </Helmet>
      </HelmetProvider>
      <div className="row justify-content-center p-3">
        <div className="col-md-10">
          <h2 style={{ fontSize: "35px" }}>Admin Panel</h2>

          <ul className="adminfunctions">
            <li>
              <Link to='/admin/userslist' style={{ color: 'white' }}>Users List</Link>
            </li>
            <li>
              <Link to='/admin/pizzaslist' style={{ color: 'white' }}>Pizzas List</Link>
            </li>
            <li>
              <Link to='/admin/addpizza' style={{ color: 'white' }}>Add Pizza</Link>
            </li>
            <li>
              <Link to='/admin/drinkslist' style={{ color: 'white' }}>Drinks List</Link>
            </li>
            <li>
              <Link to='/admin/adddrink' style={{ color: 'white' }}>Add Drink</Link>
            </li>
            <li>
              <Link to='/admin/orderslist' style={{ color: 'white' }}>Orders List</Link>
            </li>
          </ul>

        </div>
      </div>
    </div>
  );
}
