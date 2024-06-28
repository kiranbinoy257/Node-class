
import React,{  Component} from "react"
import './todo.css'



class Todo extends Component{

  render(){
    return(
      <>
      <div className="main">
      <div className="child"></div>
      <div className="child1"></div>
      <div className="child2"></div>
      <div className="child3"></div>
      
        <form action="ui" className="ui">
            <input type="D" id="d1" placeholder="Data"/>
            <button id="b1">Submit</button>
            <input type="D1"id="d2" placeholder="Data "/>
            <button id="b2">Delete</button>
            

        </form>

      </div>
      </>
    )
  }
}


export default Todo;

