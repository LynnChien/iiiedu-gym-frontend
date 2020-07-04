import React, { useState } from 'react'
import './ServiceCreate.scss'
import Swal from 'sweetalert2'


const ServiceCreate = ({onClick , currentUserData}) => {
    const memberId = currentUserData.id
    console.log(memberId);
    // const [detailOptions, setDetailOptions] = useState();

    // useEffect(() => {
    //     setDetailOptions(
    //         [{ name: '瑜伽課程', value: '1' },
    //         { name: '飛輪課程', value: '2' },
    //         ]
    //     )
    // }, [])

    const [selectType, setSelectType] = useState('');
    // const [selectDetail, setSelectDetail] = useState(0);
    const [listText, setListText] = useState('');
    const [name, setName] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [email, setEmail] = useState('');
    const [title, setTitle] = useState('');

    // let name, phonenumber, email, title

    async function createlist(props) {
        const request = new Request('http://localhost:5000/api/customerRoutes', {
            method: 'POST',
            headers: new Headers({
                Accept: 'application/json', 'Content-Type': 'application/json',
            }),
            body: JSON.stringify({
                memberId: memberId,
                complaintkind: selectType,
                name: name,
                phonenumber: phoneNumber,
                email: email,
                complainttitle: title,
                complainttextarea: listText
            })
        })
        const res = await fetch(request)
        const data = await res.json()
        console.log(data);
        setListText('')
        setSelectType('')
        setListText('')
        setName('')
        setPhoneNumber('')
        setEmail('')
        setTitle('')
        onClick('回報紀錄列表')
        // 成功post資料後，進行子傳父跳頁
        // 設定資料
    }
    // const changeType = (e) => {
    //     setSelectType(e.target.value)
        // if (e.target.value = 課程問題 || 商品問題)
        // {
        // // call api ()
        // }
    // }
    // const changeDetail = (e) => {
    //     setSelectDetail(e.target.value)
    // }
    // console.log(selectDetail);
    // const disabledSty = () =>{
    //     if(listText==="" || name==="" || phoneNumber==="" || title==="" ){
    //       return "disabled"
    //     }
    //   }
    const clickData = () => {
        selectType==="" || email==="" || listText==="" || name==="" || phoneNumber==="" || title==="" ?Swal.fire("請將資料填寫完整!")
        :createlist()
        // {()=> props.setNav('回報紀錄列表')}
        }
    // console.log(selectType)
    const deleteData = () => {
        setListText('')
        setSelectType('')
        setListText('')
        setName('')
        setPhoneNumber('')
        setEmail('')
        setTitle('')
    }
    return (
        <>
            {/* <button onClick={()=>()}>test</button> */}
            <h3><span className="h3-span">問題回報</span><span>線上表單</span></h3>
            <div className="select-box">
                <select className="select-question-box" name="category" id="category" onChange={e=>setSelectType(e.target.value)} value={selectType}>
                    <option>選擇問題</option>
                    <option value="course">課程問題</option>
                    <option value="coach">教練問題</option>
                    <option value="shop">商城問題</option>
                    <option value="good">商品問題</option>
                    <option value="environment">環境問題</option>
                    <option value="equipment">設備問題</option>
                </select>
                {/* {selectType === "course" || selectType === "good" ?
                    <select onChange={changeDetail} >
                        {detailOptions.map(item =>
                            <option value={item.value} label={item.name}></option>
                        )} */}
                    {/* </select>:""} */}
                <input className="input-Question" onChange={e => setName(e.target.value)} value={name} id="Name" type="text" maxlength="10" placeholder="您的姓名" />
                <input className="input-Question" onChange={e => setPhoneNumber(e.target.value)}  value={phoneNumber} id="phoneNumber" type="tel" maxlength="10" placeholder="您的聯絡電話" />
                <input className="input-Question" onChange={e => setEmail(e.target.value)}  value={email} id="Email" type="email" maxlength="24" placeholder="您的連絡信箱" />
                <input className="input-Question" onChange={e => setTitle(e.target.value)}  value={title} id="Complaint-title" type="text" maxlength="24" placeholder="您的問題主旨" />
                <textarea className="Question-text" value={listText}
                    id="Complaint-textarea" name="question-textarea" rows="10" cols="50"
                    onChange={e => setListText(e.target.value)} placeholder="請描述您的問題..."></textarea>
                {/* <input type="file" className="uploadImage" /> */}
                <div className="button-box">
                    <button className="create-delete-btn" onClick={()=>  deleteData()}>取消重填</button>
                    <button className="create-post-btn" onClick={()=>  clickData()}>確認送出</button>
                </div>
            </div>
        </>
    )
}

export default ServiceCreate;