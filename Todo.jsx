import React,{useState,useEffect} from 'react';
import './Todo.css';
import TodoLists from './TodoLists';
const Todo=() =>{
    const getData =() =>{
        let list = localStorage.getItem('name');
        console.log('list'); 
    
        if(list){
            return JSON.parse(localStorage.getItem('name'));
         }  
         else{
             return[];
        }}
    
    const [inputList, setInputList] = useState()
    const [items, setItems] = useState(getData())
const handleChange = (event)=>{
    setInputList(event.target.value);
};
    const listOfItem = ()=>{
        setItems((oldItems) => {
            return [...oldItems, inputList];
});
setInputList("") 
};

    

  useEffect(() => {
     localStorage.setItem('name',JSON.stringify(items));
   }, [items]);

const handleDelete= (id) =>{
    console.log('deleted');

    setItems((oldItems) =>{
        return oldItems.filter((arrEle ,index) =>{
            return index !==id;
        });
    });
};

 
const KeyPressHandler=(event)=>{
        if(event.key ==="Enter"){
            listOfItem();
        }
}
return (
    
    <div classname="main_div" >
   <div classname="center_div">
    <br />
    <h1> Todo List</h1>
    <br />
    <input type='text' placeholder='Add a items' onChange={handleChange} onKeyPress={KeyPressHandler} value={inputList}/>
    <button className='back' onClick={()=>listOfItem()} >Add</button>
    <ol>
       
  {items.map((getData,index) => {
  
      return (< TodoLists
   key={index}
   id={index}
   text={getData}
   onSelect={handleDelete}
   />)
  })}
    </ol>
   </div>   
    </div>
);
}
export default Todo;