import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { deletePizza, getAllPizzas } from "../actions/pizzaActions";
import Error from "../components/Error";
import Loading from "../components/Loading";
import Adminscreen from "./Adminscreen";
export default function Pizzaslist() {
  const dispatch = useDispatch();

  const pizzasstate = useSelector((state) => state.getAllPizzasReducer);

  const { pizzas, error, loading } = pizzasstate;
  useEffect(() => {
    dispatch(getAllPizzas());
  }, []);
  return <div>
    <Adminscreen />
    <h2>Pizzas List</h2>
    {loading && (<Loading />)}
    {error && (<Error error='Something went wrong' />)}

    <table className='table table-bordered table-responsive-sm'>

      <thead className='thead-dark'>
        <tr>
          <th>Name</th>
          <th>Prices</th>
          <th>Category</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {pizzas && pizzas.map(pizza => {

          return <tr>
            <td>{pizza.name}</td>
            <td>

              Small : {pizza.prices[0]['small']} <br />
              Medium : {pizza.prices[0]['medium']} <br />
              Large : {pizza.prices[0]['large']}

            </td>
            <td>{pizza.category}</td>
            <td>
              <button onClick={() => { dispatch(deletePizza(pizza._id)) }}>delete</button>
              <Link to={`/admin/editpizza/${pizza._id}`}><button  style={{marginTop:'10px'}}>edit</button></Link>
            </td>

          </tr>

        })}
      </tbody>

    </table>


  </div>;
}
