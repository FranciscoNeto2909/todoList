import React,{ useState} from 'react'
import {v4 as uuidv4} from 'uuid' 
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Tasks from './components/Tasks'
import AddTask from './components/AddTask';
import Header from './components/Header';
import TaskDetails from './components/TaskDetails';

export default function App() {
  const [tasks, setTasks] = useState([])
  
  const handleTaskClick = (taskId) => {
    const newTask = tasks.map((task) => {
      if (task.id === taskId) return{ ...task, completed: !task.completed}

      return task
    })
    setTasks(newTask)
  }

  const handleTaskAddition = (taskTitle) => {
    if (taskTitle ==='') {
      window.alert('O campo não pode estar vazio')
    }else{
      const newTask = [...tasks,{
        title:taskTitle,
        id: uuidv4(),
        completed: false
      }]
      setTasks(newTask)
    }
  }
  const handleRemoveTask = (taskId) => {
    const newTasks = tasks.filter(task => task.id !== taskId)

    setTasks(newTasks)
  }


  return (
    <Router>
      <div className="container">
        <Header />
        <Route 
          path="/" 
          exact 
          render={()=>(
            <>
              <AddTask handleTaskAddition={handleTaskAddition}/>
              <Tasks
                tasks={tasks}
                handleTaskClick={handleTaskClick}
                handleRemoveTask={handleRemoveTask}
              />
            </>
          )}
        />
        <Route 
          path="/:taskTitle" 
          exact 
          component={TaskDetails}/>
      </div>
    </Router>

  );
}

