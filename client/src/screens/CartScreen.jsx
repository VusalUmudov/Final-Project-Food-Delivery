import { Delete } from '@mui/icons-material'
import React from 'react'
import { Helmet, HelmetProvider } from 'react-helmet-async'
import { useDispatch, useSelector } from 'react-redux'
import { addToCart, deleteFromCart } from '../actions/cartActions'
import Checkout from '../components/Checkout'
import Navbar from '../components/Navbar'

function CartScreen() {
  const cartState = useSelector(state => state.cartReducer)
  const cartItems = cartState.cartItems
  let subtotal = cartItems.reduce((x, item) => x + item.price, 0)
  const dispatch = useDispatch()
  return (
    <div>
           <HelmetProvider>
                <Helmet>
                    <meta charSet='utf-8'/>
                    <title>Cart Page</title>
                </Helmet>
            </HelmetProvider>
      <Navbar />
      <div className='cart-container'>
        <div className="container">

          <div className='cartItems'>
            <h2 style={{ fontSize: '40px' }}>My Cart</h2>

            {cartItems.map(item => {
              return <div className="cartItemContainer">

                <div className='cartImg'>
                  <img src={item.image} style={{ height: '100px' }}  />
                </div>

                <div className='cartDetail'>
                  <h3>{item.name}</h3>
                  <p>[{item.varient}]</p>
                  <div className='inc-dec-btn'>
                    <p>x {item.quantity}</p>
                  <button onClick={() => { dispatch(addToCart(item, item.quantity - 1, item.varient)) }}>-</button>
                    <button onClick={() => { dispatch(addToCart(item, item.quantity + 1, item.varient)) }}>+</button>
                  </div>
                </div>

                <div className='deleteBtn'>
                  <Delete onClick={() => { dispatch(deleteFromCart(item)) }} />
                </div>

              </div>
            })}

          </div>

          <div className='cartTutorial'>
            <h2 style={{ fontSize: '45px' }}>SubTotal: {subtotal} $</h2>
            <Checkout subtotal={subtotal} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default CartScreen