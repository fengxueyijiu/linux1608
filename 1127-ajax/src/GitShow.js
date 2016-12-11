import React, { PropTypes } from 'react'

class GitShow extends React.Component {
  render () {
    let info=this.props.gitInfo;
    console.log(this.props.gitInfo)
    return(
      <div>
        <a href={info.blog}>aaa</a>
        <p>用户名：{info.login}</p>
        <img src={this.props.gitInfo.avatar_url}/>
      </div>
    )
  }
}

export default GitShow;
