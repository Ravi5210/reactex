import React, { Component } from 'react'
import Child1 from './Child1'


export class Parentcom extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       name:"Mouli"
    }
  }
  
  render() {
    return (
      <div>
        <Child1 name={this.state.name} and age={20}/>
      </div>
    )
  }
}

export default Parentcom
