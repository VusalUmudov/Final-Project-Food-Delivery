import React, { useState } from 'react'
import { Modal } from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import { addToCart } from '../actions/cartActions'
import { AddRounded } from "@mui/icons-material";
function Pizza({ pizza }) {
    const [quantity, setquantity] = useState(1)
    const [varient, setvarient] = useState('small')

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const dispatch = useDispatch()

    function addtocart() {
        dispatch(addToCart(pizza, quantity, varient))
    }

    return (
        <div className='imgHover'>
            <div onClick={handleShow}>
                <div className="imgBox">
                    <img src={pizza.image} alt="pizza img" className="itemImg" />
                </div>
            </div>
            <div className="itemContent">
                <div onClick={handleShow}>
                    <h3 className='itemName'>{pizza.name}</h3>
                </div>

                <div className="center">
                    <div className='varients'>
                        <p>Varients:</p>
                        <select value={varient} onChange={(e) => { setvarient(e.target.value) }}>
                            {pizza.varients.map(varient => {
                                return <option value={varient}>{varient}</option>
                            })}
                        </select>
                    </div>

                    <div className='quantity'>
                        <p>Quantity:</p>
                        <select value={quantity} onChange={(e) => { setquantity(e.target.value) }}>
                            {[...Array(10).keys()].map((x, i) => {
                                return <option value={i + 1}>{i + 1}</option>
                            })}
                        </select>
                    </div>
                </div>
                <div className='bottom'>

                    <div className='ratins'>
                        <h3 className='price'><span>$</span> {pizza.prices[0][varient] * quantity}</h3>
                    </div>
                    <div className='addToCartBtn'>
                        <i className='addToCart' onClick={addtocart}>
                            <AddRounded />
                            <p className='addToCart-text'>Add To Cart</p>
                        </i>
                    </div>
                </div>



            </div>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header>
                    <Modal.Title>{pizza.name}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className='modalImg'>
                        <img src={pizza.image} style={{ width: '300px' }} />
                        <p>{pizza.decription}</p>
                    </div>
                    <div className='modalPizzaVarient'>
                        <div className='varients'>
                            <p>Varients:</p>
                            <select value={varient} onChange={(e) => { setvarient(e.target.value) }}>
                                {pizza.varients.map(varient => {
                                    return <option value={varient}>{varient}</option>
                                })}
                            </select>
                        </div>

                        <div className='quantity'>
                            <p>Quantity:</p>
                            <select value={quantity} onChange={(e) => { setquantity(e.target.value) }}>
                                {[...Array(10).keys()].map((x, i) => {
                                    return <option value={i + 1}>{i + 1}</option>
                                })}
                            </select>
                        </div>

                    </div>
                    <div>
                        <button className='btn' onClick={addtocart}>
                            Add To Cart
                        </button>

                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <button className='closeBtn' onClick={handleClose}>
                        Close
                    </button>
                </Modal.Footer>
            </Modal>

        </div>
    )
}

export default Pizza