import React, { PropTypes } from 'react'
import MyBtn from './MyBtn';
class Footer extends React.Component {
  render () {
    return(
      <div>
        Footer
        <MyBtn title="我是Footer" bg='red' />
      </div>
    )
  }
}

export default Footer;
