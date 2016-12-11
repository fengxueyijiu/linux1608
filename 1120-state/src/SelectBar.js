import React, { PropTypes } from 'react'

class SelectBar extends React.Component {
  constructor(){
    super();
    this.state={
      tab:0
    }
  }
  handleClick(n){
    console.log(n);
    this.setState({
      tab:n
    })

  }
  render () {
    let box1=(
        <div>
          <h3>我是选项卡一的内容</h3>
          <h3>我是选项卡一的内容</h3>
          <h3>我是选项卡一的内容</h3>
          <h3>我是选项卡一的内容</h3>
        </div>
        )
    let box2=(<h3>我是选项卡二的内容</h3>)
    let box3=(<h3>我是选项卡三的内容</h3>)
    return(
      <div>
        <button onClick={this.handleClick.bind(this,0)}>选项一</button>
        <button onClick={this.handleClick.bind(this,1)}>选项二</button>
        <button onClick={this.handleClick.bind(this,2)}>选项三</button>
      {this.state.tab==0 ? box1 :
        this.state.tab==1 ? box2 :box3}
      </div>

    )
  }
}

export default SelectBar;
