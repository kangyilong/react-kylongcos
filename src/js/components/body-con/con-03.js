import React from 'react';

import '../../../css/body-con/con03.css';

export default class BodyCon03 extends React.Component{

  constructor(){
    super();
    this.state = {
      move: 1
    }
  }

  render(){
    return (
      <div id="con03">
        <div className="con03-box">
          <div className="center-box">
            <div className="center-list write con03-list">
              <p className={['write-p01', 'w1', this.state.move === 1 && 'move-bottom'].join(' ')}>技术派，论研发</p>
              <p className={['write-p02', 'w2', this.state.move === 1 && 'move-top'].join(' ')}>DEVELOPER</p>
              <p className={['write-p03', 'w3', this.state.move === 1 && 'opc'].join(' ')}>
                我说，业界没有最好的技术，只有最棒的技术开发者
                <br />
                定制研发，为您的客户和团队
              </p>
            </div>
          </div>
        </div>
      </div>
    )
  }

  componentWillReceiveProps(nextProps){
    if(nextProps.index === 2){
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
