import React, { useState } from 'react'
import { Modal } from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import { addToCartDrink } from '../actions/cartActions'
import { AddRounded } from "@mui/icons-material";
function Drink({ drink }) {
    const [show, setShow] = useState(false);
    const [quantity, setquantity] = useState(1)
    const [varient, setvarient] = useState('330L')

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const dispatch = useDispatch()

    function addtocart() {
        dispatch(addToCartDrink(drink, quantity, varient))
    }

    return (
        <div className='imgHover'>
            <div onClick={handleShow}>
                <div className="imgBox">
                    <img src={drink.image} alt="drink img" className="itemImg" />
                </div>
            </div>
            <div className="itemContent">
                <div onClick={handleShow}>
                    <h3 className='itemName'>{drink.name}</h3>
                </div>

                <div className="center">

                    <div className='varients'>
                        <p>Varients:</p>
                        <select value={varient} onChange={(e) => { setvarient(e.target.value) }}>
                            {drink.varients.map(varient => {
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
                        <h3 className='price'><span>$</span> {drink.prices[0][varient] * quantity}</h3>
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
                    <Modal.Title>{drink.name}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className='modalImg'>
                        <img src={drink.image} style={{ width: '300px' }} />
                        <p>{drink.decription}</p>
                    </div>
                    <div className='modalPizzaVarient'>

                    <div className='varients'>
                            <p>Varients:</p>
                            <select value={varient} onChange={(e) => { setvarient(e.target.value) }}>
                                {drink.varients.map(varient => {
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

export default Drink