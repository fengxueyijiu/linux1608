import React, { PropTypes } from 'react'
import MyBtn from './MyBtn';
class Header extends React.Component {
  render () {
    return(
      <div>
        Header
        <MyBtn title="我是Header" bg='blue' />
      </div>
    )
  }
}

export default Header;
