import React, { useState } from "react";
import "./user-center-page.scss";

// Component-------------------------------
import UserEdit from "../../component/user-edit/user-edit";
import UserCourses from "../../component/user-courses/UserCourses";
import ArticlesEdit from "../articles-edit-page/ArticlesEdit";
import ServiceRecord from "../../component/ServiceRecord/ServiceRecord";
import OrderList from "../orders-list-page/OrderList";
// Pages------------------------------------
function UserCenterPage(props) {
  const [nav, setNav] = useState("個人資料修改");
  return (
    <>
      <div className="user-center-page-wrapper">
        <div className="user-sidebar">
          <div className="center-line"></div>
          <p className="sidebar-title">會員中心</p>
          <ul className="list-unstyled">
            <li>
              <button
                className="nav-button"
                onClick={() => setNav("個人資料修改")}
              >
                個人資料修改
              </button>
            </li>
            <li>
              <button className="nav-button" onClick={() => setNav("我的課程")}>
                我的課程
              </button>
            </li>
            <li>
              <button className="nav-button" onClick={() => setNav("文章管理")}>
                文章管理
              </button>
            </li>
            <li>
              <button className="nav-button" onClick={() => setNav("歷史訂單")}>
                歷史訂單
              </button>
            </li>
            <li>
              <button className="nav-button" onClick={() => setNav("客訴紀錄")}>
                客訴紀錄
              </button>
            </li>
          </ul>
        </div>
        <div className="user-right">
          {nav === "個人資料修改" && <UserEdit />}
          {nav === "我的課程" && <UserCourses />}
          {nav === "文章管理" && <ArticlesEdit />}
           {nav === "歷史訂單" && <OrderList />} 
          {nav === "客訴紀錄" && <ServiceRecord />}
          {/* {nav === '' &&  </>  } */}
          {/* 依照state的字串，去顯示component */}
        </div>
      </div>
    </>
  );
}
export default UserCenterPage;
