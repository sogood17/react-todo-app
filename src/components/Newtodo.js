import React from 'react';
import {useState} from 'react';
import Todolist from './todolist.js';
import './todocss.css';

export default function Newtodo() {
    const [todo, setTodo] = useState('');
    const [todos, setTodos]=useState([]);

    const valueChange =(event) => {
        setTodo(event.target.value)
    }

    const submitButton =() => {
        if (todo !== '') {
            setTodos(current =>[todo, ...current])
            setTodo('')
        }
    }

    const deleteBtn =(el) => {
        setTodos(todos.filter((e, i)=> i !== el))
    }

    const modify =(el) =>{
        console.log(el)
    }

    return <div>
        <div className='newtodo'>
            <input className='todo-input' onChange={valueChange} placeholder='오늘의 할일' value={todo}/>
            <button type='submit' onClick={submitButton}>➕</button>
        </div>
        <div className='todolist'>
        <ul id='todo-ul'>
            {todos.map((e, idx) => { return <li key={idx} className='todo-li'><label htmlFor='list' onClick={()=>modify(e)}>{e}</label><input id='list' type='checkbox' />
            <button type='submit' onClick={()=> deleteBtn(idx)}>❌</button></li>})}
            </ul>
        </div>
    </div>
    
    ;
}