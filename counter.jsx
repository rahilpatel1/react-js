import React, { Component } from 'react';
class Counter extends Component {
  state = { 
    count:0
   };

   handleIncrement=(product)=>
   {
          console.log(product);
          this.setState({count:this.state.count+1});
   };
   doHandleIncrement = () =>{
     this.handleIncrement({id :1});
   }
  render() { 
    return (
      <div>
      <span className={this.getBadgeClasses()}>{this.state.count}</span>
        <button onClick={this.doHandleIncrement} className="btn btn-secondary btn-sm m-2"> Increment </button>
        <button onClick={() =>this.props.onDelete(this.props.counter.id)} className="btn btn-danger btn-sm m-2"> Delete </button>
        
      </div>
    );
  }
getBadgeClasses(){
  let Classes ="badge m-2 badge-";
  Classes +=this.state.count === 0 ? "warning":"primary";
  return Classes;
}
formatCount(){
  const {count} =this.props.counter;
  return count=== 0? "zero" : count;
}
}

export default Counter;
 
