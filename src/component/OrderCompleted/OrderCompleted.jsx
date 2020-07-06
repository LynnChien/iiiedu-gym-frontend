import React, { useState, useEffect } from 'react'
import axios from 'axios';
import { withRouter } from 'react-router-dom'

import './OrderCompleted.scss'

const OrderCompleted = ({ history }) => {
    // console.log(match.params.orderId)
    const [data, setData] = useState([]);
    const [item, setitem] = useState([]);
    const [Value, setValue] = useState();

    useEffect(() => {
        const FetchData = async () => {
            const result = await axios(
                `http://localhost:5000/Orders/api/OrderCompeleted`,
                {
                    method: 'GET',
                    credentials: 'include', // 需傳送 Cookie 必須開啟
                    headers: new Headers({
                        Accept: 'application/json',
                        'Content-Type': 'application/json',
                    }),
                },
            )
            setData(result.data)
        }
        FetchData()
    }, []);

    useEffect(() => {
        const ListToSever = async () => {
            const product = await axios(
                "http://localhost:5000/Orders/api/OrderListDeatail"
            );
            setitem(product.data.rows.filter((i) => i.orderId === Value));
        };
        ListToSever();
    }, [Value])

    useEffect(() => {
        data.forEach((i) => (
            setValue(i.orderId)
        ))
    }, [data])

    console.log(item);

    return (
        <>
            <div className="title">
                <div className="title-cotainer">
                    <ol className="title-ol">
                        <li>購物完成</li>
                    </ol>
                    <h3>購物完成</h3>
                </div>
            </div>
            <div className="container">
                <ul className="step">
                    <li className="step1-active-ac">
                    </li>
                    <li className="step2-active-ac">
                    </li>
                    <li className="step3-active-ac">
                    </li>
                </ul>
                <div className="content-com">
                    <div className="content-wrap">
                        <h3>Order Compeleted</h3>
                        <span className="content-Cartlist-title">Order Detail</span>
                        <ul className="content-wrap-ul-compeleted">
                            <li>訂單編號</li>
                            <li>總計</li>
                            <li>付款方式</li>
                            <li>運送地址</li>
                        </ul>
                        {data.map((list, index) => (
                            <>
                                <ul key={index + "6"} className="content-wrap-ul-compeleted">
                                    <li>{list.orderId}</li>
                                    <li>{list.Total}</li>
                                    <li>{list.PayMentMethod}</li>
                                    <li>{list.City + list.district + list.address}</li>
                                </ul>
                            </>
                        ))}
                        <ul className="content-wrap-ul-compeleted">
                            <li>商品名稱</li>
                            <li>商品價格</li>
                            <li>商品數量</li>
                            <li>商品種類</li>
                        </ul>
                        {item.map((list, index) => (
                            <>
                                <ul key={index + "6"} className="content-wrap-ul-compeleted">
                                    <li>{list.ItemName}</li>
                                    <li>{list.ItemNamePrice}</li>
                                    <li>{list.itemQuantity}</li>
                                    <li>{list.itemType}</li>
                                </ul>
                            </>
                        ))}

                    </div>
                    <div className="buttonContainer">
                        <div className="button-two" onClick={() => (history.push('/OrderList'))}>歷史訂單</div>
                        <div className="button-two" onClick={() => (history.push('/'))}>返回首頁</div>
                    </div>
                </div>
            </div>
        </>
    )

}


export default withRouter(OrderCompleted)



