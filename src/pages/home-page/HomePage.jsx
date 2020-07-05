import React from "react";
import "./HomePage.scss";
import GYM2 from "../../API/GYM.mp4";
import PhotosImgbackground from "./PhotosImgbackground1.png";
// import PhotosImgFront from "./PhotosImgFront.png";
// import CoachBackGround from "./CoachBackGround.jpg";
import CustomButton from "../../component/custom-button/Custom-button";
const HomePage = () => {
  return (
    <>
      <div className="homepage">
        <div className="page1">
          <video autoPlay loop muted className="video">
            <source src={GYM2} type="video/mp4" />
          </video>
          <div className="space"></div>
        </div>
        <div className="page2">
          <div className="page2-left-wrapper">
            <div className="page2-wrapper">
              <p>關於我們</p>
              <span>
                WoW FIT
                於2020年所創立，提供包括個人客製化運動訓練服務，企業團隊健康策略，專業運動教育培訓，與企業健康顧問等服務。
                對 WoW FIT 來說，運動是一件認真的事情。
                作為一個專業的體能顧問，我們帶著真誠藉由科學與數據條理化的方法與您相互合作，為每一次的運動帶來最高效益與價值。
                我們相信「若能幫助您成功的改變生活、邁向健康，自然而然可透過運動創造屬於您的人本價值及生活品質。」
              </span>
            </div>
          </div>
          <div className="page2-right-wrapper"></div>
        </div>
        <div className="page3">
       
          <div className="page3-left-wrapper"></div>
          <div className="page3-right-wrapper">
           
            <div className="page3-right-news">

              <p>最新消息</p>
              <span>
                包含最熱門的飛輪、 舞蹈、瑜珈、LESM ILLS、MOSSA與
                獨家系列，有氧老師師資也非常充足與專業，滿足您隨時想上課的需求。
                <br />
                Including the most popular flywheels, dance, yoga,
                LESMILLS,MOSSA and exclusive series, the aerobic teacher is also
                very adequate and professional, to meet your needs at any time.
              </span>
              <div className="space"> </div>
              <CustomButton>了解更多</CustomButton>
            </div>
          </div>
        </div>
        <div className="page4">
        
    
          <div className="page4-menu">
            <ul>
              <li className="first-li">
                <a>
                  <img src={PhotosImgbackground}></img>
                </a>
                <div className="title">
                  <a href="">包含最熱門的飛輪、 舞蹈、瑜珈、LESM ILLS、MOSSA與
                獨家系列，有氧老師師資也非常充足與專業，滿足您隨時想上課的需求。</a>
                </div>
              </li>
              <li>
                <a>
                  <img src={PhotosImgbackground}></img>
                </a>
                <div className="title">
                  <a href="">包含最熱門的飛輪、 舞蹈、瑜珈、LESM ILLS、MOSSA與
                獨家系列，有氧老師師資也非常充足與專業，滿足您隨時想上課的需求。</a>
                </div>
              </li>
              <li>
                <a>
                  <img src={PhotosImgbackground}></img>
                </a>
                <div className="title">
                  <a href="">包含最熱門的飛輪、 舞蹈、瑜珈、LESM ILLS、MOSSA與
                獨家系列，有氧老師師資也非常充足與專業，滿足您隨時想上課的需求。</a>
                </div>
              </li>
              <li>
                <a>
                  <img src={PhotosImgbackground}></img>
                </a>
                <div className="title">
                  <a href="">包含最熱門的飛輪、 舞蹈、瑜珈、LESM ILLS、MOSSA與
                獨家系列，有氧老師師資也非常充足與專業，滿足您隨時想上課的需求。</a>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div className="page5">
        </div>
      </div>
    </>
  );
};
export default HomePage;