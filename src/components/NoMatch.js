// Required by React
  import React, { Component } from 'react';
  import { Link } from 'react-router-dom';

class NoMatch extends Component {
  render () {
    return (
      <div>
        <div>
          <div>
            Page Not Found
          </div>
          <div>
            <Link to='/'>Home</Link>
          </div>
        </div>
      </div>
    )
  }
}

export default NoMatch
