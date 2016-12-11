import React, { PropTypes } from 'react'
class App extends React.Component {
  constructor(){
    super();

  }
  componentWillMount(){

  }
  render () {

    return(
      <div>
        app
        {this.props.children}
      </div>
    )
  }
}

export default App;
