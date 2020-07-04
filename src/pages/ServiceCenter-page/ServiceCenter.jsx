import React, { useState } from 'react'
import ServiceCreate from '../../component/ServiceCreate/ServiceCreate'
import ServiceRecord from '../../component/ServiceRecord/ServiceRecord'
import FaqList from '../../component/Faq_list/FaqList'
// import '../component/ServiceNav/ServiceNav.scss'
import './ServiceCenter.scss'
import { MdKeyboardArrowRight } from "react-icons/md"
// import Header from '../component/header/Header'

//---------------1
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { createStructuredSelector } from "reselect";
import { currentUserSelect } from "../../redux/user/user-selector";
//---------------

const ServiceCenter = (props) => {
    const [nav, setNav] = useState('常見問題')
    // 改變state後，用state內的字串，去改變component。

 //---------------2
 const { currentUserData } = props
 console.log(currentUserData);
 //該使用者的id
//  const currentUserId = currentUserData ? currentUserData.id : ''
 //---------------

const handleChange = (i) => {
    setNav(i)
    console.log(i);
}
    return (
        <div className="serviceCenter">
        <div className="page">
            {/* <Header /> */}
            <div className="left-body">
                <h1 href="./home.html" className="home-title" onClick={() => setNav('常見問題')}>客服中心</h1>
                <div className="nav-box">
                    <button className="nav-button" onClick={() => setNav('常見問題')}>常見問題ＦＡＱ
                    <MdKeyboardArrowRight className="question-icon" />
                    </button>
                    <button className="nav-button" onClick={() => setNav('問題回報線上表單')}>問題回報線上表單<MdKeyboardArrowRight className="service-icon" />
                    </button>
                    <button className="nav-button" onClick={() => setNav('回報紀錄列表')}>回報紀錄列表<MdKeyboardArrowRight className="service-list-icon" />
                    {/* onclick後，變更state的字串。 */}
                    </button>
                </div>
            </div>
            <div className="right-body">
                {nav === '常見問題' &&  <FaqList/>  }
                {nav === '問題回報線上表單' &&  <ServiceCreate onClick={handleChange} currentUserData={currentUserData}/>  }
                {nav === '回報紀錄列表' &&  <ServiceRecord currentUserData={currentUserData}/>  }
                {/* 依照state的字串，去顯示component */}
            </div>
        </div>
        </div>
    )
}

//---------------
const mapStateToProps = createStructuredSelector({
    currentUserData: currentUserSelect,
  });
  
  export default withRouter(connect(mapStateToProps)(ServiceCenter));
  //---------------