import React, { PropTypes } from 'react'

class TodoControl extends React.Component {
  handleShow(i){
    this.props.handleShow(i)
  }

  render () {
    let styles={
      
    }
    let name=['All','Active','Completed'];
    let buttons=name.map((item,index) =>
      <button key={index} onClick={this.handleShow.bind(this,index)} style={this.props.show==index ? {backgroundColor:'#bada55'} :null}>{item}</button>
    )
    return(
      <div>
        {buttons}
      </div>
    )
  }
}

export default TodoControl;
