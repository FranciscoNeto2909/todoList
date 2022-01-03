import React from "react";
import Task from "./Task";

export default function Tasks({tasks, handleTaskClick, handleRemoveTask}) {
    return(
        <>
            {
                tasks.map(task => <Task 
                    task={task}
                    handleTaskClick={handleTaskClick}
                    handleRemoveTask={handleRemoveTask} 
                />)
            }
        </>
    )
}