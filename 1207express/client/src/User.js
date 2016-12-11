import React, { PropTypes } from 'react'
import axios from 'axios';
import map from 'lodash/fp/map';
class User extends React.Component {
  constructor(){
      super();
      this.state = {
        user: {}
      };
    }
  componentWillMount() {
    axios.get(`http://localhost:3000/users/${this.props.params._id}`)
      .then((response) => {
        this.setState({user: response.data});
        console.log(response.data)
      })
  }
  render () {
    // console.log(this.state.user);
    return(
      <div>
      {this.state.user.username}<br/>
      {this.state.user.age}<br/>
      {this.state.user.email}
      </div>
    )
  }
}

export default User;
