import React, { useEffect } from 'react'
import Navbar from '../components/Navbar'
import { useDispatch, useSelector } from 'react-redux'
import { getAllPizzas } from '../actions/pizzaActions'
import { getAllDrinks } from '../actions/drinkActions'
import Pizza from '../components/Pizza'
import Drink from '../components/Drink'
import Loading from '../components/Loading'
import Error from '../components/Error'
import Slider from '../components/Slider'
import {Helmet, HelmetProvider} from 'react-helmet-async'

function Homescreen() {

    const disaptch = useDispatch()

    const pizzasstate = useSelector(state => state.getAllPizzasReducer)
    const drinksstate = useSelector(state => state.getAllDrinksReducer)

    const { pizzas, error, loading } = pizzasstate
    const { drinks} = drinksstate
    const userState = useSelector(state => state.loginUserReducer)
    const { currentUser } = userState
    useEffect(() => {
        disaptch(getAllPizzas())

        disaptch(getAllDrinks())
    }, [])

    return (
        <div className='App'>
            <HelmetProvider>
                <Helmet>
                    <meta charSet='utf-8'/>
                    <title>Home Page</title>
                </Helmet>
            </HelmetProvider>
            <Navbar />
            <main className='main-container'>
                <div className="container">
                    <div className="banner">
                        <div class="bannerContent">
                            <h3>Hello, {currentUser ? (
                                        <>
                                            {currentUser.name}
                                        </>
                                ) : (
                                    <>
                                        User
                                    </>
                                )}</h3>
                            <p>Get free discount for every <span>$20</span> purchase</p>
                            <a href="#">Learn More</a>
                        </div>
                        <img
                            src="https://firebasestorage.googleapis.com/v0/b/food-delivery-37c59.appspot.com/o/Images%2Fdelivery.png?alt=media&amp;token=69b9823d-96df-452a-bd4e-14d27a4cc337" alt="" class="deliveryPic">
                        </img>
                    </div>

                    <Slider/>

                    <div className="dishContainer">
                        <div className='dishItemContainer'>
                            {loading ? (<Loading />) : error ? (<Error error='Something Went Wrong' />) : (
                                pizzas.map(pizza => {
                                    return <div className='itemCard' key={pizza._id}>

                                        <Pizza pizza={pizza} />

                                    </div>
                                })
                            )}
                        </div>
                    </div>
                    <h2>Drinks</h2>
                    <div className="dishContainer">
                        <div className='dishItemContainer'>
                            {loading ? (<Loading />) : error ? (<Error error='Something Went Wrong' />) : (
                                drinks.map(drink => {
                                    return <div className='itemCard' key={drink._id}>

                                        <Drink drink={drink} />

                                    </div>
                                })
                            )}
                        </div>
                    </div>
                </div>
            </main>
        </div>
    )
}

export default Homescreen