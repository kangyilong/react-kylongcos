import React from 'react';
import '../../css/body/body.css';

import {Icon} from 'antd';
import { NavLink } from 'react-router-dom'

//引入各块组件
import BodyCon01 from './body-con/con-01';
import BodyCon02 from './body-con/con-02';
import BodyCon03 from './body-con/con-03';
import BodyCon04 from './body-con/con-04';

export default class Body extends React.Component{
  constructor(){
    super();
    this.state = {
      index: 0,
      conTime: ''
    };
    this.conEnetr.bind(this);
    this.conLeave.bind(this);
    this.conLeftClick.bind(this);
    this.conRightClick.bind(this);
  }
  render(){
    return (
      <div id="container">
        <div className="con-to con01-left">
          <Icon
            type="left"
            onMouseOver={this.conEnetr}
            onMouseOut={this.conLeave}
            onClick={this.conLeftClick}
          />
        </div>
        <div className="con-to con01-right">
          <Icon
            type="right"
            onMouseOver={this.conEnetr}
            onMouseOut={this.conLeave}
            onClick={this.conRightClick}
          />
        </div>
        <div className="con-list" ref="conList">
          <div className="con-01">
            <BodyCon01 index = {this.state.index}/>
          </div>
          <div className="con-02">
            <BodyCon02 index = {this.state.index}/>
          </div>
          <div className="con-03">
            <BodyCon03 index = {this.state.index}/>
          </div>
          <div className="con-04">
            <BodyCon04 index = {this.state.index}/>
          </div>
        </div>
        <div className="show-con">
          <ul onMouseOver={this.conEnetr} onMouseOut={this.conLeave}>
            <li onClick={ ()=>{this.state.index = 0;this.changeCon();}}>
              <span className={[this.state.index === 0 && 'sel-show_sp'].join(' ')}></span>
            </li>
            <li onClick={ ()=>{this.state.index = 1;this.changeCon();}}>
              <span className={[this.state.index === 1 && 'sel-show_sp'].join(' ')}></span>
            </li>
            <li onClick={ ()=>{this.state.index = 2;this.changeCon();}}>
              <span className={[this.state.index === 2 && 'sel-show_sp'].join(' ')}></span>
            </li>
            <li onClick={ ()=>{this.state.index = 3;this.changeCon();}}>
              <span className={[this.state.index === 3 && 'sel-show_sp'].join(' ')}></span>
            </li>
          </ul>
        </div>
        <div className="next-page">
          <NavLink to="/body02"><Icon type="down" /></NavLink>
        </div>
      </div>
    )
  }

  conEnetr = () => {
    clearInterval(this.state.conTime);
  }

  conLeave = () => {
    clearInterval(this.state.conTime);
    this.state.conTime = setInterval(() => {
      this.state.index ++;
      this.changeCon();
    }, 5000);
  }

  conLeftClick = () => {
    this.state.index --;
    this.changeCon();
  }

  conRightClick = () => {
    this.state.index ++;
    this.changeCon();
  }

  componentDidMount(){
    clearInterval(this.state.conTime);
    this.state.conTime = setInterval(() => {
      this.state.index ++;
      this.changeCon();
    }, 5000);
  }

  changeCon(){
    if(this.state.index > 3){
      this.state.index = 0;
    }
    if(this.state.index < 0){
      this.state.index = 3;
    }
    this.setState({index: this.state.index});
    this.refs.conList.style.left = -100 * this.state.index + '%';
  }
  componentWillUnmount(){
    clearInterval(this.state.conTime);
  }
}
