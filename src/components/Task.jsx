import React from 'react'
import './task.css'
import { useHistory } from 'react-router-dom'
export default function Task({task, handleTaskClick, handleRemoveTask}) {
    const completed = {
        'borderLeft':" 15px solid chartreuse"
    }
    const history = useHistory()
    const handleTaskDetailsClick = () => {
        history.push(`/${task.title}`)
    }

    return (
        <div className='task-container' style={task.completed ? completed : {}}>
            <div 
                className="task-title" 
                className="pointer"
                onClick={()=>{handleTaskClick(task.id)}}>
                    <h3>{task.title}</h3>
            </div>
            <div className='btn-container'>
                <button
                    className='btn-task'
                    onClick={() => handleRemoveTask(task.id)}>X</button>
                <button
                    className='btn-task'
                    onClick={handleTaskDetailsClick}
                    >
                        <p className='info'>ℹ️</p>
                </button>
            </div>
        </div>
    )
}