import React, {Component} from "react";



 class App extends Component{
Ls=[
  {
    name:"alan",age:20,job:"HR"
    
  },
  {name:"aju",age:21,job:"HR"},
  {name:"ajith",age:21,job:"Hod"},
  
];

  render() {
    return(
      <div>
        <h1>list</h1>
        <ul>
          {this.Ls.map((dt)=>(<li key={dt.name}>{dt.name}-{dt.age}-{dt.job}</li>))}
         

        </ul>
  

      </div>
    );
  }
}
 export default App;

