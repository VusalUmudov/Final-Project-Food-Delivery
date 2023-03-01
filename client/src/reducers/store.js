import { combineReducers, createStore } from 'redux'
import { applyMiddleware } from 'redux'
import { getAllPizzasReducer, addPizzaReducer, getPizzaByIdReducer, editPizzaReducer } from './pizzaReducers'
import { getAllDrinksReducer, addDrinkReducer, getDrinkByIdReducer, editDrinkReducer } from './drinkReducers'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import { cartReducer } from './cardReducer'
import { registerUserReducer, loginUserReducer, getAllUsersReducer } from './userReducer'
import { placeOrderReducer, getUserOrdersReducer, getAllOrdersReducer } from './orderReducer'


const finalReducer = combineReducers({
    getAllPizzasReducer: getAllPizzasReducer,
    cartReducer: cartReducer,
    registerUserReducer: registerUserReducer,
    loginUserReducer: loginUserReducer,
    placeOrderReducer: placeOrderReducer,
    getUserOrdersReducer: getUserOrdersReducer,
    addPizzaReducer: addPizzaReducer,
    getPizzaByIdReducer: getPizzaByIdReducer,
    editPizzaReducer: editPizzaReducer,
    getAllOrdersReducer: getAllOrdersReducer,
    getAllUsersReducer: getAllUsersReducer,
    getAllDrinksReducer: getAllDrinksReducer,
    addDrinkReducer: addDrinkReducer,
    getAllDrinksReducer: getAllDrinksReducer,
    getDrinkByIdReducer: getDrinkByIdReducer,
    editDrinkReducer: editPizzaReducer
})

const cartItems = localStorage.getItem('cartItems') ? JSON.parse(localStorage.getItem('cartItems')) : []
const currentUser = localStorage.getItem('currentUser') ? JSON.parse(localStorage.getItem('currentUser')) : null


const initialState = {
    cartReducer: {
        cartItems: cartItems
    },
    loginUserReducer: {
        currentUser: currentUser
    }
}

const composeEnhancers = composeWithDevTools({})

const store = createStore(finalReducer, initialState, composeEnhancers(applyMiddleware(thunk)))

export default store
