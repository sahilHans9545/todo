import React from "react";
import { useState } from "react";

const Input=()=>{
    let [todo, settodo] = useState([]);
    let [input,setInput]=useState('');
    let [edit,setedit]=useState(false);
    let [editId,setId]=useState();


    function inputTodo(){
      let todo_text=document.querySelector("input").value;
        setInput(todo_text)
        if(edit){
          todo[editId]=todo_text;
        }
        
    }
    

    function addTodo(){
      if(input===""){
        return;
      }
        settodo([input,...todo]);
        setInput("");
        setedit(false)
    }

    function deleteTodo(e){
      settodo(todo.filter((Element,index)=>
            index!=e.target.id
      ))
    }

    function editTodo(e){
      setedit(true);
      setInput(e.target.parentNode.parentNode.textContent)
      setId(e.target.id)
    }

    function todoEdited(){
        setedit(false)
        todo[editId]=input
        setInput("")
    }

   


    
  return (
    <>
      <div className="todoapp">
      <div className="add-todo">
          <input type="text" onChange={inputTodo} value={input} /  ><span onClick={addTodo}>+</span>
      </div>
      <ul className="todo-list">
      {todo.map((e,id)=>{
        if(edit){
          return;
        }
          return <li key={id}>{e}<span> <i id={id} class="far fa-edit" onClick={editTodo} style={{marginRight:"20px"}}></i><i id={id} onClick={deleteTodo} className="fas fa-trash-alt"></i></span></li>
        })}

        {edit?<li>{todo[editId]}</li>:null}

        
    </ul>
    
      </div>
      {edit?<button onClick={todoEdited}>Confirm</button>:null}
      </>
  )
}

export default Input;
