import React from 'react';

const TodoLists=(props) =>{
     
    
    return(
        <>
        <div className='todo_style'>
            <button onClick={()=> {props.onSelect(props.id)}}>Remove</button>
         <li>{props.text }</li>    
         </div>
        </>
    )
}
 export default TodoLists;