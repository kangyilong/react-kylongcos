import React from 'react';
import ReactDOM from 'react-dom';

import './css/index.css';
import './fonts/download/font/iconfont.css';
import 'antd/dist/antd.css';

import Header from './js/components/header';
import Footer from './js/components/footer';


export default class Index extends React.Component{
  render(){
    return (
      <div>
        <Header />
        { this.props.children }
        <Footer />
      </div>
    )
  }
}
