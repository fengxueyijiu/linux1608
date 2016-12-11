import React, { PropTypes } from 'react'

class Footer extends React.Component {
  render () {
    let styles={
      fontSize:'32px',
      textAligh:'center',
      margin:'20px 0',
      color:'red'
    }
    return(
      <div>
        <h1 style={styles}>欢迎观临，woshi Footer</h1>
      </div>
    )
  }
}

export default Footer;
