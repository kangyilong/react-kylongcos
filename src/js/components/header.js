import React from 'react';

import Body01 from './body';

import { Icon } from 'antd';
import { NavLink } from 'react-router-dom';

import '../../css/header.css';

export default class Header extends React.Component{

  // constructor(){
  //
  // }

  render(){
    return (
      <header>
        <div id="header">
          <div className="head-left">
            <div className="logo-box"><img src={require('../../images/1491380439.png')} /></div>
          </div>
          <div className="head-con">
            <div>
              <ul className="head-list">
                <li><NavLink to="/body01" activeClassName="sel-head">首页</NavLink></li>
                <li><NavLink to="/body02" activeClassName="sel-head">业务</NavLink ></li>
                <li><NavLink to="/body03" activeClassName="sel-head">案例</NavLink></li>
                <li><NavLink to="/body04" activeClassName="sel-head">合作</NavLink></li>
                <li><NavLink to="/body05" activeClassName="sel-head">品质</NavLink></li>
                <li><NavLink to="/body06" activeClassName="sel-head">关于</NavLink></li>
                <li><NavLink to="/body07" activeClassName="sel-head">联系</NavLink></li>
              </ul>
            </div>
          </div>
          <div className="head-right">
            <div>
              <ul className="head-right_list">
                <li><Icon type="phone" spin="true" /></li>
                <li><b>4007-573-002</b></li>
                <li><Icon type="windows" /></li>
              </ul>
            </div>
          </div>
        </div>
      </header>
    )
  }
}
