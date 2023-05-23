import React from 'react'
import { useSelector } from 'react-redux'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import "../Components/TodoList.css"


function TodoList() {
   const todos = useSelector((state)=> state.tasks)
   const [newTask,setNewTask] = useState('')
   const dispatch = useDispatch()
   console.log(todos)
   const handleAddTask = ()=>{
    //action dispatc
        dispatch({
            type : "Add-task",
            newTask
        })
        setNewTask('')
   }

   const handleCompletedTask = (ind)=>{
        dispatch({
            type: "complete-task",
            index: ind
        })
   }

   const handleDeletedTask = (ind)=>{
        dispatch({
            type: "remove-task",
            index: ind
        })
   }

  return (
    <div>
    <div>
      <ul>
        {todos.map((val, ind) => (
          <li key={ind}>
            {val}
            <button onClick={()=> handleCompletedTask(ind)}>Mark as Completed</button>
            <button onClick={()=> handleDeletedTask(ind)}> Delete</button>
          </li>
        ))}
      </ul>
    </div>

    <div>
      <input
        type="text"
        value={newTask}
        onChange={(e) => setNewTask(e.target.value)}
        placeholder="Enter a new task"
      />
      <button onClick={handleAddTask}>Add Task</button>
    </div>
  </div>)
}

export default TodoList