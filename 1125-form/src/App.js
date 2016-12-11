import React, { Component } from 'react';

class HandleEvent extends Component {
  constructor(){
    super();
    this.state = { liked: false }
  }
  handleClick (event){
    this.setState({liked: !this.state.liked});
  }
  render() {
    let text = this.state.liked ? '喜欢' : '不喜欢';

    return (
      <p onClick={this.handleClick.bind(this)}>
        我 {text} 你.
      </p>
    );
  }
}

export default HandleEvent;
