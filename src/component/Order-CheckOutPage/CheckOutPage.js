import React, { useState, useEffect } from "react";
import "./CheckOutPage.scss";
import { FaRegListAlt } from "react-icons/fa";
import axios from "axios";
import { useHistory } from "react-router-dom";
import city from "../../API/AllData.json";
import CartCheckOutButton from '../Order-cart-checkOut/CartCheckOutButton.jsx'
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { cartItemsSelect, favoriteItemsSelect, SelectTotal } from '../../redux/cart/cart-selector';
import { withRouter } from 'react-router-dom';

async function addToSever(item) {
    // 注意資料格式要設定，伺服器才知道是json格式
    // console.log(item);
    axios.post(`http://localhost:5000/Orders/api/addCheckOutPage`, {
        method: "POST",
        credentials: "include", // 需傳送 Cookie 必須開啟
        headers: new Headers({
            Accept: "application/json",
            "Content-Type": "application/json",
        }),
        data: {
            Name: item.Name,
            City: item.Select,
            District: item.District,
            Mobile: item.Mobile,
            Address: item.Address,
            Email: item.Email,
            recipientName: item.recipientName,
            recipientSelect: item.recipientSelect,
            recipientDistrict: item.recipientDistrict,
            recipientMobile: item.recipientMobile,
            recipientAddress: item.recipientAddress,
            recipientEmail: item.recipientEmail,
            Member: item.Member

        },
    });


}
async function additemToSever(cartItems, Total, Member) {
    // 注意資料格式要設定，伺服器才知道是json格式
    // console.log(cartItems);
    axios.post(`http://localhost:5000/Orders/api/additem`, {
        method: "POST",
        credentials: "include", // 需傳送 Cookie 必須開啟
        headers: new Headers({
            Accept: "application/json",
            "Content-Type": "application/json",
        }),
        cartItems: cartItems, Total, Member
    });
}

async function addordersToSever(item) {
    // 注意資料格式要設定，伺服器才知道是json格式
    // console.log(cartItems);
    axios.post(`http://localhost:5000/Orders/api/orders`, {
        method: "POST",
        credentials: "include", // 需傳送 Cookie 必須開啟
        headers: new Headers({
            Accept: "application/json",
            "Content-Type": "application/json",
        }),
        orders: item
    });
}


const CheckOutPage = ({ cartItems, history, SelectTotal }) => {
    // console.log(history.location.state.pay)

    // console.log(props.location.state)
    const [Name, setName] = useState();
    const [Select, setSelect] = useState("臺北市");
    const [District, setDistrict] = useState();
    const [Mobile, setMobile] = useState();
    const [Address, setAddress] = useState();
    const [Email, setEmail] = useState();
    const [recipientName, setrecipientName] = useState(null);
    const [recipientSelect, setrecipientSelect] = useState(null);
    const [recipientDistrict, setrecipientDistrict] = useState(null);
    const [recipientMobile, setrecipientMobile] = useState(null);
    const [recipientAddress, setrecipientAddress] = useState(null);
    const [recipientEmail, setrecipientEmail] = useState(null);
    const [checkbox, setcheckbox] = useState(false);
    const [Total, setTotal] = useState(0)
    const [Member, setMember] = useState(10)
    const [pay, setpay] = useState('現金')
    const [data, setData] = useState([{ rows: [] }]);

    // console.log(Total)
    useEffect(() => {
        setTotal(SelectTotal)
    }, [])
    useEffect(() => {
        setpay(history.location.state.pay)
        console.log(pay)
    }, [pay])


    //////////



    useEffect(() => {
        const FetchData = async () => {
            const result = await axios(
                'http://localhost:5000/Orders/api/OrderList');
            setData(result.data)
        }
        FetchData();
    }, []);


    const next = () => {
        history.push(`/OrderCompleted`)
    }



    return (
        <>
            <div className="title">
                <div className="title-cotainer">
                    <ol className="title-ol">
                        <li className="icon">
                            <FaRegListAlt />
                        </li>
                        <li>CheckOutPage</li>
                    </ol>
                    <h3>CheckOutPage</h3>
                </div>
            </div>
            <div className="container">
                <ul className="step">
                    <li className="step1-active"></li>
                    <li className="step2-active-extend"></li>
                    <li className="step3-active"></li>
                </ul>
                <form
                    className="content"
                    onSubmit={() => {
                        addToSever({
                            Member,
                            Name,
                            Select,
                            District,
                            Mobile,
                            Address,
                            Email,
                            recipientName,
                            recipientSelect,
                            recipientDistrict,
                            recipientMobile,
                            recipientAddress,
                            recipientEmail,
                        }, additemToSever(cartItems, Total, Member), (addordersToSever({ pay, Total, Member })), next())
                    }}
                >
                    <div className="content-wrap-Checkoutpage">
                        <h3>CHECKOUT</h3>
                        <span className="content-list-title">Billing details</span>
                        <ul className="content-list-detail">
                            <span> 會員編號：{Member}</span>
                            <input
                                className="content-list-detail-input"
                                onChange={(event) => setName(event.target.value)}
                                type="text"
                                id="user_name"
                                name="name"
                                placeholder="請輸入姓名"
                                required="required"
                            />
                            <div className="detail-select">
                                <select
                                    name="city"
                                    className="content-list-detail-select"
                                    onChange={(event) => setSelect(event.target.value)}
                                >
                                    {city.map((item, index) => (
                                        <option key={index} value={item.CityName}>
                                            {item.CityName}
                                        </option>
                                    ))}
                                </select>
                                <select
                                    className="content-list-detail-select"
                                    name="district"
                                    onChange={(event) => setDistrict(event.target.value)}
                                >
                                    {city
                                        .filter((i) => i.CityName == Select)
                                        .map((i) =>
                                            i.AreaList.map((i, index) => (
                                                <option key={index} value={i.AreaName}>
                                                    {i.AreaName}
                                                </option>
                                            ))
                                        )}
                                </select>
                            </div>
                            <input
                                onChange={(event) => setMobile(event.target.value)}
                                className="content-list-detail-input"
                                type="text"
                                id="tel"
                                name="mobile"
                                placeholder="請輸入手機號碼"
                                required="required"
                            ></input>
                            <input
                                onChange={(event) => setAddress(event.target.value)}
                                className="content-list-detail-input"
                                type="text"
                                name="address"
                                placeholder="請輸入地址"
                                required="required"
                            />
                            <input
                                onChange={(event) => setEmail(event.target.value)}
                                className="content-list-detail-input"
                                type="text"
                                id="email"
                                name="mail"
                                placeholder="請輸入E-mail"
                            />
                        </ul>
                        <div className="content-wrap-Checkoutpage-recipient-district">
                            <div className="recipient-district-input">
                                <input
                                    onChange={(event) => setcheckbox(event.target.checked)}
                                    className="content-list-detail-input"
                                    type="checkbox"
                                    id="recipient-district-input"
                                />
                                <h3>Ship to a different address?</h3>
                            </div>
                            {checkbox ? (
                                <ul className="content-list-detail">
                                    <input
                                        onChange={(event) => setrecipientName(event.target.value)}
                                        className="content-list-detail-input"
                                        type="text"
                                        id="recipient-user_name"
                                        name="recipient-name"
                                        placeholder="請輸入姓名"
                                        required="required"
                                    />
                                    <div className="detail-select">
                                        <select
                                            onChange={(event) =>
                                                setrecipientSelect(event.target.value)
                                            }
                                            className="content-list-detail-select"
                                            vlaue=""
                                        >
                                            {city.map((item, index) => (
                                                <option key={index} value={item.CityName}>
                                                    {item.CityName}
                                                </option>
                                            ))}
                                        </select>
                                        <select
                                            onChange={(event) =>
                                                setrecipientDistrict(event.target.value)
                                            }
                                            className="content-list-detail-select"
                                            name="recipient-district"
                                            vlaue=""
                                        >
                                            {recipientSelect == null
                                                ? city
                                                    .filter((i) => i.CityName == "臺北市")
                                                    .map((i) =>
                                                        i.AreaList.map((i, index) => (
                                                            <option key={index} value={i.AreaName}>
                                                                {i.AreaName}
                                                            </option>
                                                        ))
                                                    )
                                                : city
                                                    .filter((i) => i.CityName == recipientSelect)
                                                    .map((i) =>
                                                        i.AreaList.map((i, index) => (
                                                            <option key={index} value={i.AreaName}>
                                                                {i.AreaName}
                                                            </option>
                                                        ))
                                                    )}
                                        </select>
                                    </div>
                                    <input
                                        onChange={(event) => setrecipientMobile(event.target.value)}
                                        className="content-list-detail-input"
                                        type="text"
                                        id="recipient-tel"
                                        name="recipient-mobile"
                                        placeholder="請輸入手機號碼"
                                        required="required"
                                    ></input>
                                    <input
                                        onChange={(event) =>
                                            setrecipientAddress(event.target.value)
                                        }
                                        className="content-list-detail-input"
                                        type="text"
                                        name="recipient-address"
                                        placeholder="請輸入地址"
                                        required="required"
                                    />
                                    <input
                                        onChange={(event) => setrecipientEmail(event.target.value)}
                                        className="content-list-detail-input"
                                        type="text"
                                        id="recipient-email"
                                        name="recipient-mail"
                                        placeholder="請輸入E-mail"
                                    />
                                </ul>
                            ) : (
                                    ""
                                )}
                        </div>
                    </div>
                    <CartCheckOutButton additemToSever={additemToSever} addToSever={addToSever} />
                </form>
            </div>
        </>
    );
};
const mapStateToProps = createStructuredSelector({
    cartItems: cartItemsSelect,
    cartFavoriteItems: favoriteItemsSelect,
    SelectTotal: SelectTotal

});

export default withRouter(connect(mapStateToProps)(CheckOutPage))