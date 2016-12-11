import React from 'react';
import {fontColor} from './style';
class Main extends React.Component{
  render(){
    return(
      <div className='Main' style={{color:fontColor}}>
        Hello 我是Main组件
      </div>
    )
  }
}
export default Main
