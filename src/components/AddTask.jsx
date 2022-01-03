import React, {useState} from "react";
import "./addTask.css"
import Button from './Button'

export default function AddTask({handleTaskAddition}) {
    const [inputData, setInputData] = useState('')
    const handleInputChange = (e) => {
       setInputData(e.target.value)
    }
    const handleAddTaskClick = () => {
        handleTaskAddition(inputData)
        setInputData('')
    }
    return(
        <div className="add-task-container">
            <input type="text" 
                className="add-task-input"
                placeholder="Tarefa 1"
                value={inputData} 
                onChange={handleInputChange}
            />
            <div className="button-container">
                <Button onclick={handleAddTaskClick}>Adicionar</Button>
            </div>
        </div>
    )
}