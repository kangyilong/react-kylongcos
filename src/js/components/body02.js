import React from 'react';

import '../../css/body/body02.css';

export default class Body02 extends React.Component{
  render(){
    return(
      <div id="body02">
        <div className="container">
          <h2>我们能做什么</h2>
          <div>
            <ul className="body02Con-list">
              <li>
                <div className="body02Show-con">
                  <div className="show-box">
                    <i className="iconfont icon-html5"></i>
                  </div>
                  <h5>高端定制网站</h5>
                  <p className="body02Hide-p">
                    企业高端定制网站设计
                    <br />
                    彰显品牌形象
                  </p>
                </div>
                <div className="body02Hide-con"></div>
              </li>
              <li>
                <div className="body02Show-con">
                  <div className="show-box">
                    <i className="iconfont icon-shouji-copy"></i>
                  </div>
                  <h5>移动网站建设</h5>
                  <p className="body02Hide-p">
                    定制手机网站 / 微网站制作
                    <br />
                    布局移动互联网
                  </p>
                </div>
                <div className="body02Hide-con"></div>
              </li>
              <li>
                <div className="body02Show-con">
                  <div className="show-box">
                    <i className="iconfont icon-weixin"></i>
                  </div>
                  <h5>微信平台开发</h5>
                  <p className="body02Hide-p">
                    微信公众平台地址开发，为企业提供便捷的推广渠道
                  </p>
                </div>
                <div className="body02Hide-con"></div>
              </li>
              <li>
                <div className="body02Show-con">
                  <div className="show-box">
                    <i className="iconfont icon-shield"></i>
                  </div>
                  <h5>UI 美工设计</h5>
                  <p className="body02Hide-p">
                    IIS等网站运行环境安全维护
                    <br />
                    业务的稳定来源
                  </p>
                </div>
                <div className="body02Hide-con"></div>
              </li>
              <li>
                <div className="body02Show-con">
                  <div className="show-box">
                    <i className="iconfont icon-iphone"></i>
                  </div>
                  <h5>APP应用程序</h5>
                  <p className="body02Hide-p">
                    基于 iOS / Android 应用开发
                    <br />
                    掌控智能终端时代
                  </p>
                </div>
                <div className="body02Hide-con"></div>
              </li>
              <li>
                <div className="body02Show-con">
                  <div className="show-box">
                    <i className="iconfont icon-sitemap"></i>
                  </div>
                  <h5>业务系统研发</h5>
                  <p className="body02Hide-p">
                    基于 B/S 架构的系统研发
                    <br />
                    让业务办公轻松自如
                  </p>
                </div>
                <div className="body02Hide-con"></div>
              </li>
              <li>
                <div className="body02Show-con">
                  <div className="show-box">
                    <i className="iconfont icon-dropbox"></i>
                  </div>
                  <h5>服务器运维</h5>
                  <p className="body02Hide-p">
                    我们不只提供云硬件和网络
                    <br />
                    更加注重技术运维
                  </p>
                </div>
                <div className="body02Hide-con"></div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    )
  }
}
