import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { editDrink, getDrinkById } from "../actions/drinkActions";
import Error from "../components/Error";
import Loading from "../components/Loading";
import Success from "../components/Success";

export default function Editdrink({ match }) {
  const dispatch = useDispatch();
  const [name, setname] = useState("");
  const [smallprice, setsmallprice] = useState();
  const [mediumprice, setmediumprice] = useState();
  const [largeprice, setlargeprice] = useState();
  const [image, setimage] = useState("");
  const [description, setdescription] = useState("");

  const getdrinkbyidstate = useSelector((state) => state.getDrinkByIdReducer);

  const { drink, error, loading } = getdrinkbyidstate;

  const editdrinkstate = useSelector((state) => state.editDrinkReducer)
  const {editloading , editsuccess} = editdrinkstate;

  useEffect(() => {

    if(drink)
    {
        if(drink._id===match.params.drinkid)
        {
          setname(drink.name)
          setdescription(drink.description)
          setsmallprice(drink.prices[0]['330L'])
          setmediumprice(drink.prices[0]['550L'])
          setlargeprice(drink.prices[0]['1L'])
          setimage(drink.image)
        }
        else{
            dispatch(getDrinkById(match.params.drinkid));
        }
        
    }
    else{
        dispatch(getDrinkById(match.params.drinkid));
    }



  }, [drink , dispatch]);

  function formHandler(e) {
    e.preventDefault();

    const editeddrink = {
      _id : match.params.drinkid,
      name,
      image,
      description,
      prices: {
        "330L": smallprice,
        "550L": mediumprice,
        "1L": largeprice,
      },
    };

    dispatch(editDrink(editeddrink))
  }

  return (
    <div>
    
     

      <div className="text-left shadow-lg p-3 mb-5 bg-white rounded">
      <h1>Edit Drink</h1>
        {loading && <Loading />}
        {error && <Error error="Something went wrong" />}
        {editsuccess && (<Success success='Drink details edited successfully'/>)}
        {editloading && (<Loading />)}

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
          <button className="btn mt-3" type="submit">
            Edit Drink
          </button>
        </form>
      </div>
    </div>
  );
}
