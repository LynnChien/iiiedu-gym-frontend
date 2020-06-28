import React, { useState, useEffect } from "react";
import "./user-edit.scss";
import axios from 'axios'
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { withRouter } from 'react-router-dom';
import { currentUserSelect } from "../../redux/user/user-selector";


function UserEdit({ currentUserSelect }) {

    // console.log(currentUserSelect);

    const [member, setMember] = useState([]);
    const [memberAccount, setmemberAccount] = useState();

    const [memberName, setName] = useState();
    const [memberNickname, setNickName] = useState();
    const [memberGender, setsex] = useState();
    const [memberBirth, setdate] = useState();
    const [memberEmail, setmail] = useState();
    const [memberPhoneNum, setphone] = useState();
    const [city, setcity] = useState();
    const [contury, setcontury] = useState();
    const [memberAddress, setaddress] = useState();
    const [memberPwd, setpwd] = useState();
    const [memberImg, setimg] = useState();


    async function AddFromToServer() {
        axios.post("http://localhost:5000/api/user/UpdateUser", {

            data: { memberName, memberNickname, memberGender, memberBirth, memberEmail, memberPhoneNum, memberAddress, memberPwd, memberImg },
            currentUserSelect, city, contury,
        });
    }

    useEffect(() => {
        const FetchData = async () => {
            const result = await axios(`http://localhost:5000/api/user/${currentUserSelect.memberId}`);
            // console.log(result.data.memberItem.membersRow)
            setMember(result.data.memberItem.membersRow);
        };
        FetchData();
    }, [currentUserSelect.memberId]);

    useEffect(() => {
        member.forEach((el) => {
            setName(el.memberName)
            setmail(el.memberEmail)
            setmemberAccount(el.memberAccount)
        })
    }, [member]);
    return (
        <>
            <div className="edit">
                <h1>個人資料修改</h1>
                <h3>管理您的檔案以保護您的帳戶</h3>
                <h3>使用者帳號:{memberAccount}</h3>
                <div className="horizontally-line"></div>
                <form onSubmit={() => AddFromToServer()}>
                    <div className="form-wrapper">
                        <div className="left-form">
                            <input type="text" placeholder="請輸入姓名" onChange={(e) => setName(e.target.value)} />
                            <input type="text" placeholder="請輸入暱稱" onChange={(e) => setNickName(e.target.value)} />
                            <select onChange={(e) => setsex(e.target.value)}>
                                <option value="男" >
                                    男
                                   </option>
                                <option value="女">女</option>
                            </select>
                            <div></div>
                            <input type="date" placeholder="請輸入生日" onChange={(e) => setdate(e.target.value)} />

                            <div></div>
                            <input type="email" placeholder="請輸入電子郵件" onChange={(e) => setmail(e.target.value)} />
                            <input
                                type="text"
                                minLength="10"
                                pattern="[0-9]*"
                                placeholder="請輸入手機號碼"
                                onChange={(e) => setphone(e.target.value)}
                            />
                            <div></div>
                            <input type="text" placeholder="請輸入縣市" onChange={(e) => setcity(e.target.value)} />
                            <input type="text" placeholder="請輸入鄉鎮" onChange={(e) => setcontury(e.target.value)} />
                            <div></div>
                            <input maxLength="40" type="text" placeholder="請輸入地址" onChange={(e) => setaddress(e.target.value)} />
                            <div></div>
                        </div>

                        <div className="right-form">
                            <h1>目前照片</h1>
                            <img src="" alt=""></img>
                            <h5>照片上傳</h5>
                            <input type="file" onChange={(e) => setimg(e.target.value)} />
                            <h5>修改密碼</h5>
                            <input
                                minLength="8"
                                type="password"
                                pattern="(?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z a-z]).*$"
                                placeholder="請輸入密碼"
                                onChange={(e) => setpwd(e.target.value)}
                            />
                            <div></div>
                            <input
                                minLength="8"
                                type="password"
                                pattern="(?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z a-z]).*$"
                                placeholder="新密碼請設定8-12字元包含任意英數字"
                            />
                            <div></div>
                            <input
                                minLength="8"
                                type="password"
                                pattern="(?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z a-z]).*$"
                                placeholder="請再輸入一次新密碼"
                            />
                            <div></div>
                            <button type="submit">儲存</button>
                        </div>
                    </div>
                </form>
            </div>
        </>
    );
}


const mapStateToProps = createStructuredSelector({

    currentUserSelect: currentUserSelect

});

export default withRouter(connect(mapStateToProps)(UserEdit))
