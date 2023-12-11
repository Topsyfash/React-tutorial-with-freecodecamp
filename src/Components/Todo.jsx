import { useState } from 'react'
import './CSS/Todo.css'
import { useRef } from 'react'
import { useEffect } from 'react';
import Todoitems from './Todoitems';

let count = 0;
const Todo = () => {

    const [todos, setTodos] = useState([])
    const inputRef = useRef(null)

    const add = () => {
        setTodos([...todos, { number: count++, text: inputRef.current.value, display: "" }]);

        inputRef.current.value = "";
        localStorage.setItem('todos_count',count)
    }

    useEffect(() => {
        setTimeout(() => {
            console.log(todos);
            localStorage.setItem('todos', JSON.stringify(todos));
        }, 100);
    },[todos])


    useEffect(() => {
        setTodos(JSON.parse(localStorage.getItem('todos')));
        count = localStorage.getItem('todos_count')
    },[])

  return (
      <div className='todo'>
          <div className='todo-header'>To-Do-List</div>
          <div className='todo-add'>
              <input ref={inputRef} type='text' placeholder='Add Task' className='todo-input' />
              <div onClick={()=>{add()}} className='todo-add-btn'>Add</div>
          </div>
          <div className='todo-list'>
              {todos.map((items,index) => {
                  return <Todoitems key={index} setTodos={setTodos} number={items.number} display={items.display} text={items.text} />
              })}
          </div>
      </div>
  )
}

export default Todo