import React, { PropTypes } from 'react'

class MyBtn extends React.Component {
  render () {
    let styles={
      backgroundColor:this.props.bg,
      padding:'10px 15px',
      border:'none',
      borderRadius:'5px',
      color:'#fff',
      fontSize:'22px'
    }
    return(
        <button style={styles}>{this.props.title}</button>
    )
  }
}
MyBtn.defaultProps = {
  title: '我是默认的标题',
  bg:'#000'
};
MyBtn.propTypes = {
  title:React.PropTypes.string,
  bg:React.PropTypes.string
};
export default MyBtn;
