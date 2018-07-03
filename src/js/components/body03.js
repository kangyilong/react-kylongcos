import React from 'react';

import '../../css/body/body03.css';
import { Icon } from 'antd';

export default class Body03Con extends React.Component{
  constructor(){
    super();
    this.state = {
      body03Index: 0,
      body03Time: '',
      bodyListData: [
        {
          txt: '罗纳服饰',
          img: require('../../images/thumb.jpg')
        },{
          txt: '浙江欧仁新材料科技有限公司',
          img: require('../../images/thumb1.jpg')
        },{
          txt: '浙江周通新材料科技有限公司',
          img: require('../../images/thumb2.jpg')
        },{
          txt: '嘉兴市华益股份有限公司',
          img: require('../../images/thumb3.jpg')
        },{
          txt: '浙江众成包装材料股份有限公司',
          img: require('../../images/thumb4.jpg')
        },{
          txt: '浙江联洋新材料股份有限公司',
          img: require('../../images/thumb5.jpg')
        },{
          txt: '浙江新嘉联电子股份有限公司',
          img: require('../../images/thumb6.jpg')
        },{
          txt: '新都实业',
          img: require('../../images/thumb7.jpg')
        },{
          txt: '加西贝拉压缩股份有限公司',
          img: require('../../images/thumb8.jpg')
        },{
          txt: '浙江晨丰科技股份有限公司',
          img: require('../../images/thumb9.jpg')
        },{
          txt: '嘉兴市大明实业有限公司',
          img: require('../../images/thumb10.jpg')
        },{
          txt: '海盐县百合美家庭农场',
          img: require('../../images/thumb11.jpg')
        }
      ]
    }
    this.conLeftClick.bind(this);
    this.conRightClick.bind(this);
    this.conEnetr.bind(this);
    this.conLeave.bind(this);
  }
  componentDidMount(){
    this.autoChangeBody03List();
  }
  render(){
    return(
      <div id="body03">
        <div className="container">
          <h2>我们的案例</h2>
          <div className="body03-con">
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
            <div className="body03-list">
              <ul className="body03list-ul" ref="body03ListUl">
                { this.state.bodyListData.map((item) => {
                  return(
                    <li>
                      <div className="b3show-con">
                        <div className="showBox-img">
                          <img src={item.img}/>
                          <div className="hide-top">
                            <span><Icon type="plus"/></span>
                          </div>
                        </div>
                        <div className="showBox-p">
                          {item.txt}
                          <div className="hide-btm"></div>
                        </div>
                      </div>
                    </li>
                  )
                })
                }
              </ul>
            </div>
          </div>
        </div>
      </div>
    )
  }
  conLeftClick = () => {
    this.state.body03Index --;
    this.changeBody03List();
  }
  conRightClick = () => {
    this.state.body03Index ++;
    this.changeBody03List();
  }
  conEnetr = () => {
    clearInterval(this.state.body03Time);
  }
  conLeave = () => {
    this.autoChangeBody03List();
  }
  changeBody03List(){
    if(this.state.body03Index > 9){
      this.state.body03Index = 0;
    }
    if(this.state.body03Index < 0){
      this.state.body03Index = 9;
    }
    this.refs.body03ListUl.style.marginLeft = (- this.state.body03Index * 33.33) + '%';
  }
  autoChangeBody03List(){
    this.state.body03Time = setInterval(() => {
      this.state.body03Index ++;
      this.changeBody03List();
    }, 5000);
  }
  componentWillUnmount(){
    clearInterval(this.state.body03Time);
  }
}
