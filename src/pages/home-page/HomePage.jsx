import React, { useEffect } from "react";
import "./HomePage.scss";
import GYM2 from "../../API/GYM.mp4";
import PhotosImgbackground from "./PhotosImgbackground1.png";
import ChrisHemsworth from "./Chris-Hemsworth.jpg";
import ChrisEvans from "./Chris-Evans.jpg";
import Alice from "./Alice.png";
import CustomButton from "../../component/custom-button/Custom-button";

const HomePage = () => {
  // document.getElementById("homepagescroll").addEventListener("scroll");

  useEffect(() => {
    window.addEventListener("scroll", handlescroll);

    return () => window.removeEventListener("scroll", handlescroll);
  }, []);

  const handlescroll = function () {
    if (((this.height = 1050), this.scrollY > this.height)) {
      document.getElementById("page2-right").classList.add("sticky");
    } else {
      document.getElementById("page2-right").classList.remove("sticky");
    }

    if (((this.height = 2000), this.scrollY > this.height)) {
      document.getElementById("page3-right").classList.add("sticky");
      document.getElementById("page2-right").classList.remove("sticky");
    } else {
      document.getElementById("page3-right").classList.remove("sticky");
    }
    if (((this.height = 2950), this.scrollY > this.height)) {
      document.getElementById("page4-left").classList.add("sticky");
      document.getElementById("page3-right").classList.remove("sticky");
    } else {
      document.getElementById("page4-left").classList.remove("sticky");
    }
    if (((this.height = 3880), this.scrollY > this.height)) {
      document.getElementById("page5-left").classList.add("sticky");
      document.getElementById("page4-left").classList.remove("sticky");
    } else {
      document.getElementById("page5-left").classList.remove("sticky");
    }
    if (((this.height = 4750), this.scrollY > this.height)) {
      document.getElementById("page5-left").classList.remove("sticky");
    } else {
    }
  };
  return (
    <>
      <div className="homepage" id="homepagescroll">
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
          <div className="page2-right-wrapper" id="page2-right"></div>
        </div>

        <div className="page3">
          <div className="page3-left-wrapper">
            <div className="page3-wrapper">
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
          <div className="page3-right-wrapper" id="page3-right"></div>
        </div>

        <div className="page4">
          <div id="page4-left"></div>
          <div className="page4-right-wrapper">
            <div className="page4-right-news">
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
            <div className="page4-left-wrapper-rwd"></div>
          </div>
        </div>

        <div className="page5">
          <div id="page5-left"></div>
          <div className="page5-right-wrapper">
            <div className="page5-right-news">
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
            <div className="page5-left-wrapper-rwd"></div>
          </div>
        </div>

        <div className="page6">
          <div className="page6-menu">
            <ul>
              <li>
                <img src={PhotosImgbackground} alt=""></img>
                <div className="page6-card-right">
                  <span>
                    包含最熱門的飛輪、 舞蹈、瑜珈、LESM ILLS、MOSSA與
                    獨家系列，有氧老師師資也非常充足與專業，滿足您隨時想上課的需求。
                  </span>
                </div>
              </li>
              <li>
                <img src={ChrisHemsworth} alt=""></img>
                <div className="page6-card-right">
                  <span>
                    包含最熱門的飛輪、 舞蹈、瑜珈、LESM ILLS、MOSSA與
                    獨家系列，有氧老師師資也非常充足與專業，滿足您隨時想上課的需求。
                  </span>
                </div>
              </li>
              <li>
                <img src={ChrisEvans} alt=""></img>
                <div className="page6-card-right">
                  <span>
                    包含最熱門的飛輪、 舞蹈、瑜珈、LESM ILLS、MOSSA與
                    獨家系列，有氧老師師資也非常充足與專業，滿足您隨時想上課的需求。
                  </span>
                </div>
              </li>
              <li>
                <img src={Alice} alt=""></img>
                <div className="page6-card-right">
                <h2>Alice</h2>
                  <span>
                    AFAA WT重量訓練證照、FRE-F泡棉滾筒運動證照、TRX
                    STC懸吊訓練師、MMA4Ffifcoach Level 1
                    、綜合格鬥適能教練認證、CKC壺鈴教練認證Level 1、CPR+AED證照
                  </span>
                </div>
              </li>
            </ul>
          </div>

          <div className="page6-menu-rwd"></div>
        </div>

        <div id="page7">
          <div className="shop-item-list">
            <ul>
              <li>
                <div class="view view-first">
                  <img src="https://i.ibb.co/2KT3nqN/clothes66.jpg" />

                  <div class="mask">
                    <h2>女-白色運動內衣</h2>
                    <a href="#" class="info">
                      More
                    </a>
                  </div>
                </div>
              </li>
              <li>
                <div class="view view-first">
                  <img alt="" src="https://i.ibb.co/3m0Cp19/clothes94.jpg" />
                  <div class="mask">
                    <h2>黑色無袖</h2>
                    <a href="#" class="info">
                      More
                    </a>
                  </div>
                </div>
              </li>
              <li>
                <div class="view view-first">
                  <img alt="" src="https://i.ibb.co/kqjHd2f/clothes21.jpg" />
                  <div class="mask">
                    <h2>黑色無袖</h2>
                    <a href="#" class="info">
                      More
                    </a>
                  </div>
                </div>
              </li>
              <li>
                <div class="view view-first">
                  <img alt="" src="https://i.ibb.co/rMwSmzB/clothes3.jpg" />
                  <div class="mask">
                    <h2>黑色無袖</h2>
                    <a href="#" class="info">
                      More
                    </a>
                  </div>
                </div>
              </li>
              <li>
                <div class="view view-first">
                  <img alt="" src="https://i.ibb.co/80qHPs3/Men-s-Charged-Cotton-Short-Sleeve-T-Shirt-gray.jpg" />
                  <div class="mask">
                    <h2>黑色無袖</h2>
                    <a href="#" class="info">
                      More
                    </a>
                  </div>
                </div>
              </li>
              <li>
                <div class="view view-first">
                  <img alt="" src="https://i.ibb.co/JnDCfp9/Men-s-Charged-Cotton-Short-Sleeve-T-Shirt-white.png" />
                  <div class="mask">
                    <h2>黑色無袖</h2>
                    <a href="#" class="info">
                      More
                    </a>
                  </div>
                </div>
              </li>
              <li>
                <div class="view view-first">
                  <img alt="" src="https://i.ibb.co/k89LvDx/image-QC28803187-2000-1.jpg" />
                  <div class="mask">
                    <h2>黑色無袖</h2>
                    <a href="#" class="info">
                      More
                    </a>
                  </div>
                </div>
              </li>
            </ul>
          </div>

          <div className="shop-item-list2">
            <ul>
              <li>
                <div class="view view-first">
                  <img alt="" src="https://i.ibb.co/vPpKg48/image-QC28852702-2000-1.jpg" />
                  <div class="mask">
                    <h2>黑色無袖</h2>
                    <a href="#" class="info">
                      More
                    </a>
                  </div>
                </div>
              </li>
              <li>
                <div class="view view-first">
                  <img alt="" src="https://i.ibb.co/Yd6Pfd5/image-QC28830101-2000-1.jpg" />
                  <div class="mask">
                    <h2>黑色無袖</h2>
                    <a href="#" class="info">
                      More
                    </a>
                  </div>
                </div>
              </li>
              <li>
                <div class="view view-first">
                  <img alt="" src="https://i.ibb.co/jHBhfzT/image-QC28855581-2000-2.jpg" />
                  <div class="mask">
                    <h2>黑色無袖</h2>
                    <a href="#" class="info">
                      More
                    </a>
                  </div>
                </div>
              </li>
              <li>
                <div class="view view-first">
                  <img alt="" src="https://i.ibb.co/Wprv96j/image-QC28847341-2000-2.jpg" />
                  <div class="mask">
                    <h2>黑色無袖</h2>
                    <a href="#" class="info">
                      More
                    </a>
                  </div>
                </div>
              </li>
              <li>
                <div class="view view-first">
                  <img alt="" src="https://i.ibb.co/qm6vTXR/10.jpg" />
                  <div class="mask">
                    <h2>黑色無袖</h2>
                    <a href="#" class="info">
                      More
                    </a>
                  </div>
                </div>
              </li>
              <li>
                <div class="view view-first">
                  <img alt="" src="https://i.ibb.co/9sBWgCD/ADIDAS-X-SPEZIAL-HESWALL-1.jpg" />
                  <div class="mask">
                    <h2>黑色無袖</h2>
                    <a href="#" class="info">
                      More
                    </a>
                  </div>
                </div>
              </li>
              <li>
                <div class="view view-first">
                  <img alt="" src="https://i.ibb.co/0jxVyrz/Women-s-Project-Rock-Terry-Joggers-Trousers-black-grey.png" />
                  <div class="mask">
                    <h2>黑色無袖</h2>
                    <a href="#" class="info">
                      More
                    </a>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
        {/* <div id="footer">
          <Footer />
        </div> */}
      </div>
    </>
  );
};
export default HomePage;
