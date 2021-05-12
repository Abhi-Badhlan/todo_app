import React, { useState } from 'react'
import logo from '../images/logo.png'
import {addTodo,deleteTodo,removeTodo } from '../actions/index'
import { useDispatch, useSelector } from 'react-redux'

const Todo=()=>{
  const [inputData,setInputData]=useState('')
  const dispatch=useDispatch();
  const list = useSelector((state)=>state.todoReducer.list)
  return(  <>
  <div className='main-div'>
    <div className='child-div'>
      <figure>
      <img src={logo} alt='logo'/>
        <figcaption>Add your list here:</figcaption>
      </figure>
      <div className="addItems">
      
        <input type='text' placeholder='add items here' 
        value={inputData}
        onChange={(e)=>{setInputData(e.target.value)}}
        />
        <i className="fa fa-plus add-btn" onClick={()=>{dispatch(addTodo(inputData),
          setInputData(''))}}></i>
          </div>
    <div className='showItems'>
    {
      list.map((elm)=>{
        return(
        <div className='eachItem' key={elm.id}>
        <h3>{elm.data}</h3>
        <i class="far fa-trash-alt add-btn" onClick={()=>{dispatch(deleteTodo(elm.id))}}></i>
      </div>
      )
      })
    }
    </div>
    
    <div className='showItems'>
      <button className='btn effect04' data-sm-link-text='remove All' onClick={()=>{dispatch(removeTodo())}}><span>Check list</span></button>

    </div>
    
    </div>

  </div>
    </>
  )
}
export default Todo;