/* eslint-disable jsx-a11y/alt-text */
import React from 'react'
import { FaTrashAlt, FaStar } from 'react-icons/fa';
import './CartItems.scss'
import { connect } from "react-redux";

import { removeItemFromCart, addItemToCart, ReduceItem, ChangeFavr, FavCartItem } from '../../../redux/cart/cart-action';
const CartItems = ({ cartItems, removeItemFromCart, addItemToCart, ReduceItem, ChangeFavr, FavCartItem }) => {

    console.log(FavCartItem)

    // console.log(cartItems)

    // <span className="FaAngleLeft" ></span><span></span><span className="FaAngleRight" onClick={() => (addItemToCart(item))}><FaAngleRight /></span>

    return (
        <>
            {cartItems.length ? cartItems.map((item, index) => (

                <ul key={index} className="content-wrap-ul">
                    <li><img className="objectFit" src={item.img1} /></li>
                    <li>{item.name}</li>
                    <li>{item.itemType}</li>
                    <li>{item.price}</li>
                    <li >
                        <ul className="quan">
                            {item.quantity === 1 ? <li>&#10094;</li> : <li onClick={() => (ReduceItem(item))}>&#10094;</li>}
                            <li>{item.quantity}</li>
                            <li onClick={() => (addItemToCart(item))} >&#10095;</li>
                        </ul>
                    </li>
                    <li value={item.quantity * item.price} >{item.quantity * item.price}</li>
                    <ul className="icon-list">
                        <div className="icon" onClick={() => removeItemFromCart(item.itemId)} ><FaTrashAlt /></div>
                        <div className="icon" onClick={() => FavCartItem(item)}><FaStar /></div>
                    </ul>
                </ul>

            )) : <ul className="content-wrap-ul-ls">
                    <li>購物車無商品</li>
                </ul>

            }
        </>
    )
}


const mapDispatchToProps = (dispatch) => ({
    removeItemFromCart: (itemId) => dispatch(removeItemFromCart(itemId)),
    addItemToCart: (itemId) => dispatch(addItemToCart(itemId)),
    ReduceItem: (itemId) => dispatch(ReduceItem(itemId)),
    ChangeFavr: (item) => dispatch(ChangeFavr(item)),
    FavCartItem: (item) => dispatch(FavCartItem(item)),
});

export default connect(null, mapDispatchToProps)(CartItems)
