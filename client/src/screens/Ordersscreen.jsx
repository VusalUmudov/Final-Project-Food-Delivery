import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getUserOrders } from '../actions/orderActions'
import Error from "../components/Error";
import Loading from "../components/Loading";
import Navbar from '../components/Navbar';
import './OrderScreen.css';

export default function Ordersscreen() {

    const dispatch = useDispatch()
    const orderstate = useSelector(state => state.getUserOrdersReducer)
    const { orders, error, loading } = orderstate

    useEffect(() => {
        dispatch(getUserOrders())

    }, [])

    return (
        <div>
            <Navbar />
            <section className='order-container'>
                <div className='container'>

                    <h3 style={{ fontSize: '35px' }}>My Orders</h3>
                    <hr />
                    <div className="orders">
                        {loading && (<Loading />)}
                        {error && (<Error error='Something went wrong' />)}
                        {orders && orders.map(order => {
                            return <div className="orders-container">

                                <div className="order-items">
                                    <div className='text-left w-100 m-1'>
                                        <h2 style={{ fontSize: '25px' }}>Items</h2>
                                        <hr />
                                        {order.orderItems.map(item => {
                                            return <div>
                                                <p>{item.name} [{item.varient}] * {item.quantity} = {item.price}</p>
                                            </div>
                                        })}
                                    </div>
                                    <div className='text-left w-100 m-1'>

                                        <h2 style={{ fontSize: '25px' }}>Address</h2>
                                        <hr />
                                        <p>Street : {order.shippingAddress.street}</p>
                                        <p>City : {order.shippingAddress.city}</p>
                                        <p>Country : {order.shippingAddress.country}</p>
                                        <p>Pincode : {order.shippingAddress.pincode}</p>
                                    </div>
                                    <div className='text-left w-100 m-1'>
                                        <h2 style={{ fontSize: '25px' }}>Order Info</h2>
                                        <hr />
                                        <p>Order Amount : {order.orderAmount}</p>
                                        <p>Date : {order.createdAt.substring(0, 10)}</p>
                                        <p>Transaction Id : {order.transactionId}</p>
                                        <p>Order Id : {order._id}</p>
                                    </div>
                                </div>

                            </div>
                        })}
                    </div>
                </div>
            </section>
        </div>
    )
}
