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

    const modify =(el, idx) =>{
        const modifiedTodo = prompt('수정할 값을 넣어주세요.', el);

        if (modifiedTodo !== '' && modifiedTodo !== null && modifiedTodo === true) {
            setTodos((cur) => {
                cur.splice(idx, 1, modifiedTodo)
                return [...cur]
            })
        }
    }

    return <div className='todoWrap'>
        <div className='newtodo'>
            <input className='todo-input' onChange={valueChange} placeholder='오늘의 할일' value={todo}/>
            <button type='submit' onClick={submitButton}>➕</button>
        </div>
        <div className='todolist'>
        <ul id='todo-ul'>
            {todos.map((e, idx) => { return <li key={idx} className='todo-li'><span onClick={()=>modify(e, idx)}>{e}</span><input className='align-right' type='checkbox' />
            <button className='align-right' type='submit' onClick={()=> deleteBtn(idx)}>❌</button></li>})}
            </ul>
        </div>
    </div>
    
    ;
}