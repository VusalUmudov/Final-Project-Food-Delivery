import React, { useState } from "react";
import { useDispatch, useSelector } from 'react-redux'
import { addDrink } from "../actions/drinkActions";
import Error from "../components/Error";
import Loading from "../components/Loading";
import Success from '../components/Success'
import Adminscreen from "./Adminscreen";

export default function Adddrink() {
  const [name, setname] = useState("");
  const [smallprice, setsmallprice] = useState();
  const [mediumprice, setmediumprice] = useState();
  const [largeprice, setlargeprice] = useState();
  const [image, setimage] = useState("");
  const [description, setdescription] = useState("");

  const dispatch = useDispatch()

  const adddrinkstate = useSelector(state => state.addDrinkReducer)
  const { success, error, loading } = adddrinkstate
  function formHandler(e) {

    e.preventDefault();

    const drink = {
      name,
      image,
      description,
      prices: {
        "330L": smallprice,
        "550L": mediumprice,
        "1L": largeprice
      }
    }

    console.log(drink);
    dispatch(addDrink(drink));

  }

  return (
    <div>
      <Adminscreen />
      <div className='text-left shadow-lg p-3 mb-5 bg-white rounded'>
        <h1>Add Drink</h1>

        {loading && (<Loading />)}
        {error && (<Error error='Something went wrong' />)}
        {success && (<Success success='New Drink added successfully' />)}

        <form onSubmit={formHandler}>
          <input
            className="form-control"
            type="text"
            placeholder="name"
            value={name}
            onChange={(e) => {
              setname(e.target.value);
            }}
          />
          <input
            className="form-control"
            type="text"
            placeholder="small varient price"
            value={smallprice}
            onChange={(e) => {
              setsmallprice(e.target.value);
            }}
          />
          <input
            className="form-control"
            type="text"
            placeholder="medium varient price"
            value={mediumprice}
            onChange={(e) => {
              setmediumprice(e.target.value);
            }}
          />
          <input
            className="form-control"
            type="text"
            placeholder="large varient price"
            value={largeprice}
            onChange={(e) => {
              setlargeprice(e.target.value);
            }}
          />
          <input
            className="form-control"
            type="text"
            placeholder="description"
            value={description}
            onChange={(e) => {
              setdescription(e.target.value);
            }}
          />
          <input
            className="form-control"
            type="text"
            placeholder="image url"
            value={image}
            onChange={(e) => {
              setimage(e.target.value);
            }}
          />
          <button className='btn mt-3' type='submit'>Add Drink</button>
        </form>
      </div>
    </div>
  );
}
