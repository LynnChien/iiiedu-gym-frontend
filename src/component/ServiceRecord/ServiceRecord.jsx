import React, { useEffect, useState } from 'react'
import NewServiceRecordDetail from '../ServiceRecordDetail/NewServiceRecordDetail'
import './ServiceRecord.scss'

const ServiceRecord = (props) => {
    const [AllData, setAllData] = useState([])
    const currentUserData = props.currentUserData
    const memberid = props.currentUserData.id
    console.log(currentUserData);
    console.log(memberid);
    // 取回報紀錄列表
    async function getData() {
        const request = new Request('http://localhost:5000/api/customerRoutes/', {
            method: 'GET',
            headers: new Headers({
                Accept: 'application/json', 'Content-Type': 'application/json',
            })
        })
        const res = await fetch(request)
        const data = await res.json()
        // 設定資料
        console.log("data", data, "memberid", memberid)
        console.log(data.filter(data => memberid === data.memberid))
        // setAllData((data => data.memberid===1? :memberId === data.memberid))
        setAllData(memberid === 1 ? data : data.filter(data => memberid === data.memberid))
    }
    console.log(AllData);
    useEffect(() => {
        getData();
    }, [])

    return (
        <>
            <div className="ServiceRecord">
                <h3><span className="h3-span">問題</span><span>紀錄列表</span></h3>
                <span className="list-title-box">
                    <div className="number">單號</div>
                    <div className="user-id">會員編號</div>
                    <div className="user-name">姓名</div>
                    <div className="phone-number">連絡電話</div>
                    <div className="e-mail">E-mail</div>
                    <div className="QA-body">問答內容</div>
                    <div className="create-time">建立時間</div>
                </span>
            </div>
            {AllData.map((item, index) =>
                <NewServiceRecordDetail number={index + 1} key={index}{...item} currentUserData={currentUserData} >
                </NewServiceRecordDetail>
            )}
        </>
    )
}

export default ServiceRecord;