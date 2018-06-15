import React from 'react'
import './Task.css'

const Task = (props) => {
  // Set shorthand to current task
  let task = props.task
  // Set task's current stage
  let currentStage = props.stages.find((stage) => stage.id === props.task.stage_id)

  // Task card's local styles
  const modalHeader = {
    "backgroundColor": currentStage.color,
    "color": "white"
  }

  const button = {
    "margin": "5px"
  }

  // Update stage options
  let dropdownOptions = []
  // eslint-disable-next-line
  props.stages.map((stage) => {
    // Push options if stage is not the current stage
    if (stage.id !== currentStage.id) {
      dropdownOptions.push(
        <p onClick={() => props.changeStage(task.id, stage.id)} data-dismiss="modal" className="dropdown-item" key={stage.id}>{stage.name}</p>
      )
    }
  })

  return (
    <div>
      <div className="col-md-12 card" data-toggle="modal" data-target={"#task"+task.id}>
        <p className="name">{task.name}</p>
        <p className="description">{task.description}</p>
        <div className="col-md-6">
          <p className="task-info">{task.time}</p>
        </div>
        <div className="col-md-6">
          <p className="task-info">{task.priority} priority</p>
        </div>
      </div>

      <div className="modal fade" id={"task"+task.id} role="dialog">
        <div className="modal-panel">
          <div className="modal-header" style={modalHeader}>
            <button type="button" className="close" data-dismiss="modal">&times;</button>
            <h4 className="modal-title">{task.name}</h4>
          </div>
          <div className="modal-body">
            <p className="details">{task.description}</p>
            <p>Duration: <span className="task-info">{task.time}</span></p>
            <p>Priority: <span className="task-info">{task.priority}</span></p>
          </div>
          <div className="modal-footer">
            <div className="col-md-12">
              <button type="button" className="btn btn-danger" style={button} data-dismiss="modal" onClick={() => props.remove(task.id)}>
                Delete
              </button>
              <button type="button" className="btn btn-default dropdown-toggle" style={button} data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Move
              </button>
              <div className="dropdown-menu">
                {dropdownOptions}
              </div>
              <button type="button" className="btn btn-default" style={button} data-dismiss="modal">Close</button>
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Task
