import React from 'react';

import '../../../css/body-con/con02.css';

export default class BodyCon02 extends React.Component{
  constructor(){
    super();
    this.state = {
      moveShade: 1,
      moveList: 1
    }
  }

  render(){
    return (
      <div id="con02">
        <div className={['shade-box', this.state.moveShade == 1 && 'move-shade'].join(' ')}></div>
        <div className="center-box">
          <div className={['center-list', 'write', this.state.moveList == 1 && 'mone-list'].join(' ')}>
            <p className="write-p01 w1">设计控，也醉了</p>
            <p className="write-p02 w2">I·DESIGN</p>
            <p className="write-p03 w3">
              不是非要高大上，只是醉心于设计
              <br />
              我们想，再上一个好案例
            </p>
          </div>
        </div>
      </div>
    )
  }

  componentDidMount(){

  }

  componentWillReceiveProps(nextProps){
    if(nextProps.index == 1){
      this.autoChangeCon02();
    }else{
      setTimeout( () => {
        this.setState({
          moveShade: 1,
          moveList: 1
        })
      }, 100)
    }
  }

  autoChangeCon02(){
    setTimeout( () => {
      this.setState({
        moveShade: 0
      });
      setTimeout( () => {
        this.setState({
          moveList: 0
        });
      }, 550)
    }, 200);
  }
}
