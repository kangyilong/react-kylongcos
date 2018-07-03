import React from 'react';

export default class BodyCon04 extends React.Component{

  constructor(){
    super();
    this.state = {
      move: 1
    }
  }

  render(){
    return (
      <div id="con04">
        <div className="con04-box">
          <div className="center-box">
            <div className="center-list write con03-list">
              <p className={['write-p01', 'w1', this.state.move === 1 && 'move-bottom'].join(' ')}>先入为主，布局未来</p>
              <p className={['write-p02', 'w2', this.state.move === 1 && 'move-top'].join(' ')}>LAYOUT</p>
              <p className={['write-p03', 'w3', this.state.move === 1 && 'opc'].join(' ')}>
                全面布局<em>PC</em>端与<em>移动</em>端
                <br />
                抢占头等商机
                <br />
                基于<em>Html5</em>响应式布局，智能识别多种终端设备
              </p>
            </div>
          </div>
        </div>
      </div>
    )
  }

  componentWillReceiveProps(nextProps){
    if(nextProps.index === 3){
      setTimeout( () => {
        this.setState({
          move: 0
        })
      }, 200);
    }else{
      setTimeout( () => {
        this.setState({
          move: 1
        })
      }, 100);
    }
  }

}
