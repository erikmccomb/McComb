import React from 'react'

class NoMatch extends React.Component {
  render () {
    return (
      <div>
        <h1>404</h1>
        <div>
          "Not all who wander are lost", 
        </div>

        <div style={{paddingBottom: '10px'}}>
          but you definitely are.
        </div>
        
        <div>
          Click Here to take a shortcut back
        </div>
      </div>
    )
  }
}

export default NoMatch