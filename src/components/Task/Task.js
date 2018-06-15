import React from 'react'

const Task = (props) => {
  // Set shorthand to current task
  let task = props.task
  // Set task's current stage
  let currentStage = props.stages.find((stage) => stage.id === props.task.stage_id)

  // Task card's local styles
  const name = {
    "fontSize": "18px",
    "padding": "5px",
    "backgroundColor": "rgb(221, 221, 221)"
  }

  const description = {
    "maxHeight": "100px",
    "textOverflow": "ellipsis",
    "overflow": "hidden",
    "padding": "5px"
  }

  const time = {
    "textTransform": "uppercase",
    "padding": "5px"
  }

  const priority = {
    "textTransform": "uppercase",
    "padding": "5px"
  }

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
        <p style={name}>{task.name}</p>
        <p style={description}>{task.description}</p>
        <div className="col-md-6">
          <p style={time}>{task.time}</p>
        </div>
        <div className="col-md-6">
          <p style={priority}>{task.priority}</p>
        </div>
      </div>

      <div className="modal fade" id={"task"+task.id} role="dialog">
        <div className="taskDetails">
          <div className="modal-header" style={modalHeader}>
            <button type="button" className="close" data-dismiss="modal">&times;</button>
            <h4 className="modal-title">{task.name}</h4>
          </div>
          <div className="modal-body">
            <p>{task.description}</p>
          </div>
          <div className="modal-footer">
            <div className="col-md-12">
              <p>Duration: <span style={time}>{task.time}</span></p>
              <p>Priority: <span style={priority}>{task.priority}</span></p>
            </div>
            <div className="col-md-12">
              <button type="button" className="btn btn-danger" style={button} data-dismiss="modal" onClick={() => props.remove(task.id)}>Delete</button>
              <button type="button" className="btn btn-neutral dropdown-toggle" style={button} data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                {currentStage.name}
              </button>
              <div className="dropdown-menu">
                {dropdownOptions}
              </div>
              <button type="button" className="btn btn-neutral" style={button} data-dismiss="modal">Close</button>
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Task
