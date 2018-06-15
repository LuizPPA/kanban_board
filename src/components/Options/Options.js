import React, { Component } from 'react'

class Options extends Component {

  addTask

  constructor(props) {
    super(props)
    // Set callback to task creation
    this.addTask = () => {
      props.addTask(this.state.newTask)
    }
    // Set initial state
    this.state = {
      newTask: {
        name: '',
        description: '',
        priority: 'Ultra Low',
        stage_id: 0,
        time: '2 Days'
      }
    }
  }

  // Update the state based on a form change
  handleChangeOn(property, value){
    let newTask = this.state.newTask
    newTask[property] = value
    this.setState({newTask})
  }

  render(){

    const label = {
      "width": "100%"
    }

    const input = {
      "width": "100%"
    }

    return (
      <div className="bar">
        <div data-toggle="modal" data-target="#newTask">
          <span className="glyphicon glyphicon-plus icon"></span><span className="option"> Create Task</span>
        </div>
        <span></span>
        <div className="modal fade" id="newTask" role="dialog">
          <div className="taskDetails">
            <div className="modal-header">
              <button type="button" className="close" data-dismiss="modal">&times;</button>
              <h4 className="modal-title">New Task</h4>
            </div>
            <div className="modal-body">
              <label style={label} className="form-group">
                Name
                <input style={input} className="form-control" type="text" value={this.state.newTask.name} onChange={(event) => this.handleChangeOn('name', event.target.value)} />
              </label>
              <label style={label} className="form-group">
                Description
                <textarea style={input} className="form-control" rows="6" value={this.state.newTask.description} onChange={(event) => this.handleChangeOn('description', event.target.value)}></textarea>
              </label>
              <label style={label} className="form-group">
                Priotity
                <select className="form-control" id="sel1" value={this.state.newTask.priority} onChange={(event) => this.handleChangeOn('priority', event.target.value)}>
                  <option>Ultra Low</option>
                  <option>Low</option>
                  <option>Medium</option>
                  <option>High</option>
                  <option>Ultra High</option>
                </select>
              </label>
            </div>
            <div className="modal-footer">
              <div className="col-md-3">
                <button type="button" className="btn btn-neutral" data-dismiss="modal" onClick={this.addTask}>Create</button>
              </div>
              <div className="col-md-3">
                <button type="button" className="btn btn-neutral" data-dismiss="modal">Close</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Options
