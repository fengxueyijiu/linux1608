import React, { PropTypes } from 'react'
import {Link} from 'react-router';
class MenuBar extends React.Component {
  render () {
    return(
      // <div>
      //   <ul className="nav nav-pills">
      //     <li role="presentation">
      //       <Link to="/" activeStyle={{color: 'red'}} onlyActiveOnIndex={true}> 首頁 </Link>
      //     </li>
      //     <li role="presentation">
      //       <Link to="/work" activeStyle={{color: 'red'}} activeClassName='add'> work </Link>
      //     </li>
      //     <li role="presentation">
      //       <Link to="/contact" activeStyle={{color: 'red'}}> contact </Link>
      //     </li>
      //   </ul>
      // </div>
      <ul className="nav nav-tabs">
        <li role="presentation" className="active"><Link to="/" activeStyle={{color: 'red'}} onlyActiveOnIndex={true}> 首頁 </Link></li>
        <li role="presentation"><Link to="/work" activeStyle={{color: 'red'}} activeClassName='add'> work </Link></li>
        <li role="presentation"><Link to="/contact" activeStyle={{color: 'red'}}> contact </Link></li>
      </ul>
    )
  }
}

export default MenuBar;
