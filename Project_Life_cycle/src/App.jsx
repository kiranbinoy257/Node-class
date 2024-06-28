import React , {PureComponent}from "react"
import './App.css'
class App extends PureComponent{
  state={
    data:5
  }
  handleClick=()=>{this.setState({data:10})}
  render(){
    console.log(this.state.data);
    return(
      <div>
        <button onClick={this.handleClick}>click</button>
      </div>
    );
  }

}

export default App
