import React, { useState, useEffect } from 'react'
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { cartItemsSelect, favoriteItemsSelect, SelectTotal } from '../../../redux/cart/cart-selector';
import { withRouter } from 'react-router-dom';

import './CartListButton.scss'
const CartListButton = ({ cartItems, history, SelectTotal }) => {

    // console.log(history.location.state)
    console.log(SelectTotal)

    const [cubon, setcubon] = useState(0)
    const [payType, setpayType] = useState(0)


    const next = () => {
        if (payType == false) {
            alert('請選擇付款方式')
            return false
        }
        history.push('/CheckOutPage', {
            pay: payType,
            cubon: cubon,
            cartItems: cartItems
        })

    }






    return (
        <div className="content-right">
            <div>購物車總額：</div>
            <h3>${SelectTotal}</h3>
            <div>折扣：{cubon}</div>
            <h4>總計：{SelectTotal - cubon}</h4>
            <div>
                <select id="select-pay-type" name="PayType" value={payType} required="required" className="select-type" onChange={(e) => setpayType(e.target.value)}>
                    <option value="0">請選擇付款方式</option>
                    <option value="信用卡">信用卡</option>
                    <option value="現金">現金</option>
                </select>
            </div>
            <div>
                <select id="select-pay-type" value={cubon} name="PayType" required="required" className="select-type" onChange={(e) => (setcubon(e.target.value))}>
                    <option value="">請選擇優惠券</option>
                    <option value="100">100</option>
                    <option value="200">200</option>
                    <option value="300">300</option>
                </select>
            </div>
            <button onClick={() => next()}>下一步</button>
        </div>

    )
}
const mapStateToProps = createStructuredSelector({
    SelectTotal: SelectTotal

});


export default withRouter(connect(mapStateToProps)(CartListButton))