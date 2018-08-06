import React from 'react'
import Task from '../Task/Task'

const Stage = (props) => {

  // Stage's local styles
  const section = {
    'height': '90vh',
  }

  const innerScroll = {
    'overflow': 'auto',
    'height': '80%',
    'padding': '3%'
  }

  const title = {
    'color': 'rgb(60, 60, 60)',
    'fontSize': '22px',
    'marginTop': '28px',
    'borderBottom': '2px solid '+props.color
  }

  const weak = {
    'color': 'rgb(190, 190, 190)',
    'fontSize': '22px',
    'textAlign': 'center',
    'marginTop': '45%'
  }

  // Add a gray border to the left of the section if stage isn't hte first
  if (props.id && document.documentElement.clientWidth > 991) {
    section['borderLeft'] = '1px solid #ccc'
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

  if(tasks.length === 0) tasks = (<p style={weak}>No tasks at this stage</p>)

  return (
    <div style={section} className='col-md-3'>
      <p style={title}>{props.name}</p>
      <div style={innerScroll}>
        {tasks}
      </div>
    </div>
  )
}

export default Stage
