import React from 'react'
import Task from '../Task/Task'

const Stage = (props) => {

  // Stage's local styles
  const section = {
    "height": "90vh",
  }

  const innerScroll = {
    "overflow": "auto",
    "height": "90%",
    "padding": "3%"
  }

  const title = {
    "color": "rgb(60, 60, 60)",
    "fontSize": "22px",
    "borderBottom": "2px solid "+props.color
  }

  // Add a gray border to the left if stage isn't hte first
  if (props.id) {
    section["borderLeft"] = "1px solid #ccc"
  }

  let tasks = []
  // eslint-disable-next-line
  props.tasks.map((task) => {
    // Push tasks
    tasks.push(
      <Task
        task = {task}
        changeStage = {props.taskChangeStage}
        remove = {props.removeTask}
        stages = {props.stages}
        key = {task.id}
      />
    )
  })

  return (
    <div style={section} className="col-md-3">
      <p style={title}>{props.name}</p>
      <div style={innerScroll}>
        {tasks}
      </div>
    </div>
  )
}

export default Stage
