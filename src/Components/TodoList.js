import React from 'react'
import { useSelector } from 'react-redux'


function TodoList() {
   const todos = useSelector((state)=> state.tasks)
   
  return (
    <div>
        <div>
        <ul>
            {todos.map((val,ind)=>{
                return(
                    <li key={ind}>
                        {val}
                    </li>
                )
            })}
        </ul>
        </div>
      
        
        </div>
  )
}

export default TodoList