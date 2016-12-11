import React, { PropTypes } from 'react';
import Card from './components/Card';
import Header from './components/Header';
import {data} from './data.js'
class Cards extends React.Component {
  render () {
    let cards=data.map((item,index) =>
      <Card key={index} index={item.index} title={item.title} date={item.date}/>
    )
    return(
      <div>
        <Header />
        {cards}
      </div>
    )
  }
}

export default Cards;
