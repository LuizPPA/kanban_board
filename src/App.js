import React, { Component } from 'react'
import Options from './components/Options/Options'
import Stage from './components/Stage/Stage'
import './App.css'

class App extends Component {

  constructor(props) {
    super(props);
    // Retrieve tasks from local storage
    let tasks = JSON.parse(localStorage.getItem('tasks')) || []
    // Standard stages
    let stages = [
      {id: 0, name: 'Todo', color: '#c10600', tasks: []},
      {id: 1, name: 'In Progress', color: '#c19600', tasks: []},
      {id: 2, name: 'QA', color: '#b1c100', tasks: []},
      {id: 3, name: 'Done', color: '#00c192', tasks: []}
    ]
    // Initializing state
    this.state = {stages, tasks}
    this.changeStage = this.changeStage.bind(this)
    this.removeTask = this.removeTask.bind(this)
    this.addTask = this.addTask.bind(this)
  }

  // Check if a task match the requisites berfore it can be added
  isValidTask(task){
    return task.name.length > 0 && task.priority.length > 0
  }

  // Return the next available id for a task
  setId(){
    let id = 0
    // eslint-disable-next-line
    this.state.tasks.map((task) => {
      if(task.id >= id) id = task.id+1
    })
    return id
  }

  // Add a new task to the board
  addTask(task){
    // Validades task
    if (this.isValidTask(task)) {
      let tasks = this.state.tasks.slice()
      // Set the task id
      task.id = this.setId()
      // Push task to the array
      tasks.push(task)
      // Update the local storage
      localStorage.setItem('tasks', JSON.stringify(tasks))
      // Update state
      this.setState({tasks})
    }
    else{

    }
  }

  // Remove a task from the board
  removeTask(id){
    // Filter the task from the array
    let tasks = this.state.tasks.filter((task) => {
      return task.id !== id
    })
    // Update local storage
    localStorage.setItem('tasks', JSON.stringify(tasks))
    // Update state
    this.setState({tasks})
  }

  // Update a task's stage
  changeStage(task_id, stage_id){
    let tasks = []
    // eslint-disable-next-line
    this.state.tasks.map((task) => {
      // Update the stage if the task is found
      if (task.id === task_id) task.stage_id = stage_id
      // Push tasks to the array
      tasks.push(task)
    })
    // Update local storage
    localStorage.setItem('tasks', JSON.stringify(tasks))
    // Update state
    this.setState({tasks})
  }

  render() {
    let stages = []
    // eslint-disable-next-line
    this.state.stages.map((stage) => {
      // Push the due tasks to the stage
      let tasks = this.state.tasks.filter((task) => {
        return task.stage_id === stage.id
      })
      // Then push the stage itself
      stages.push(
        <Stage  taskChangeStage={this.changeStage}
                removeTask={this.removeTask}
                id={stage.id}
                name={stage.name}
                color={stage.color}
                stages={this.state.stages}
                tasks={tasks}
                key={stage.id}
                />
            )
    })

    return (
      <div className='App'>
        <Options addTask={this.addTask}/>
        <div className='container'>
          <div className='row'>
            <div className='col-md-12' id='board'>
              {stages}
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App;
