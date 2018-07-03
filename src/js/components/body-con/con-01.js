import React from 'react';

import '../../../css/body-con/con01.css';

export default class BodyCon01 extends React.Component{

  constructor(){
    super();
    this.state = {
      ban01: 1,
      ban02: 1,
      ban03: 1
    }
  }

  render(){
    return(
      <div id="con01">
        <div className={['con01-box', this.state.ban01 == 1 && 'ban-full'].join(' ')}>
          <div>
            <ul className='banner-full'>
              <li className="left-top"></li>
              <li className="left-center"></li>
              <li className="left-bottom"></li>
              <li className="center-top"></li>
              <li className="center-bottom"></li>
              <li className="right-top"></li>
              <li className="right-center"></li>
              <li className="right-bottom"></li>
            </ul>
          </div>
          <div className={['banner-border', this.state.ban02 == 1 && 'ban-border'].join(' ')}></div>
          <div className='banner-ctrl'>
            <div className="banner-write ">
              <div className={[this.state.ban03 == 1 && 'ban-left', 'write-left'].join(' ')}>
                <span>9</span>
              </div>
              <div className={[this.state.ban03 == 1 && 'ban-right', 'write-right', 'write'].join(' ')}>
                <p className="write-p01">年专注 · 互联网+</p>
                <p className="write-p02">WEBSITE</p>
                <p className="write-p03">
                  始于 2009 - 2017 展望未来
                  <br />
                  专注于设计体验，专业于解决方案
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }

  componentDidMount(){
    this.autoChangeBan();
  }

  componentWillReceiveProps(nextProps){
    if(nextProps.index === 0){
      this.autoChangeBan();
    }else{
      setTimeout( () => {
        this.setState({
          ban01: 1,
          ban02: 1,
          ban03: 1
        })
      }, 400);
    }
  }

  autoChangeBan(){
    function setBan(that, banName, time){
      return function(){
        return new Promise((resolve, resject) => {
          setTimeout(() => {
            that.setState({
              [banName]: 0
            });
            resolve();
          }, time);
        })
      }
    };
    let that = this;
    [
      setBan(that, 'ban01', 10),
      setBan(that, 'ban02', 500),
      setBan(that, 'ban03', 500)
    ].reduce((acc, value) => {
        return acc.then(value);
      }, Promise.resolve());

  }
}
