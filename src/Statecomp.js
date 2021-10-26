import React, { Component } from 'react'

export class Statecomp extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
          name:"ravi",
          id:""
         
      }
    //   this.one=this.view.bind(this)
    }
    view=()=>{
        console.log(this.state.name);
    }
    
  render() {
    return (
      <div>
        <p>{this.state.name}</p>
        <input type="text" value={this.state.name} onChange={(e)=>this.setState({name:e.target.value})}></input>
        <button onClick={this.view}>submit</button>
     </div>
    )
  }
}

export default Statecomp

