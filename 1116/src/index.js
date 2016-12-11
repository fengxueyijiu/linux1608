'use strict';

import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
class HelloWorld extends Component {
  render(){
    return (
      <div>
        <Header />
        <Main />
        <Footer />
      </div>
    )
  }
}

ReactDOM.render(<HelloWorld />, document.getElementById('root'));
