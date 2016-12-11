import React, { PropTypes } from 'react';

class FrontPage extends React.Component {
  render () {
    return(
      <div className="jumbotron">
        <h1>Hello, world!</h1>
        <p>
          This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.
          Learn more
        </p>
        <p><a className="btn btn-primary btn-lg" href="#" role="button">Learn more</a></p>
      </div>
    )
  }
}

export default FrontPage;
