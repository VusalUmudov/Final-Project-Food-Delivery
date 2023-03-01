import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { deleteDrink, getAllDrinks } from "../actions/drinkActions";
import Error from "../components/Error";
import Loading from "../components/Loading";
import Adminscreen from "./Adminscreen";
export default function Drinkslist() {
  const dispatch = useDispatch();

  const drinksstate = useSelector((state) => state.getAllDrinksReducer);

  const { drinks, error, loading } = drinksstate;
  useEffect(() => {
    dispatch(getAllDrinks());
  }, []);
  return <div>
    <Adminscreen />
    <h2>Drinks List</h2>
    {loading && (<Loading />)}
    {error && (<Error error='Something went wrong' />)}

    <table className='table table-bordered table-responsive-sm'>

      <thead className='thead-dark'>
        <tr>
          <th>Name</th>
          <th>Prices</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {drinks && drinks.map(drink => {

          return <tr>
            <td>{drink.name}</td>
            <td>

              330L : {drink.prices[0]['330L']} <br />
              550L : {drink.prices[0]['550L']} <br />
              1L : {drink.prices[0]['1L']}

            </td>
            <td>
              <button onClick={() => { dispatch(deleteDrink(drink._id)) }}>delete</button>
              <Link to={`/admin/editdrink/${drink._id}`}><button style={{ marginTop: '10px' }}>edit</button></Link>
            </td>
          </tr>

        })}
      </tbody>

    </table>


  </div>;
}
