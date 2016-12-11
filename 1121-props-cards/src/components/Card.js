import React, { PropTypes } from 'react';
class Card extends React.Component {
  render () {
    return(
      <div className='card clearfix'>
        <div className='cardLeft'>{this.props.index}</div>
        <div className='cardRight'>
          <h3>{this.props.title}</h3>
          <p>{this.props.date}</p>
        </div>
      </div>
    )
  }
}
Card.defaultProps = {
  index: "1",
  title:"标题一",
  date:'2014.12.12'
};
Card.propTypes = {
  index:React.PropTypes.string,
  title:React.PropTypes.string,
  date:React.PropTypes.string
};
export default Card;
