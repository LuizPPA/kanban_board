import React, { Component } from 'react'
import './Options.css'

class Options extends Component {

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
        time: ''
      },
      time: {
        weeks: 0,
        days: 0,
        hours: 0
      }
    }
  }

  // Update the time state based on a form change
  changeTime(property, value){
    let timeString = ''
    let time = this.state.time
    time[property] = value
    if (time.weeks) timeString += time.weeks+' Weeks '
    if (time.days) timeString += time.days+' Days '
    if (time.hours) timeString += time.hours+' Hours '
    this.handleChangeOn('time', timeString)
  }

  // Update the state based on a form change
  handleChangeOn(property, value){
    let newTask = this.state.newTask
    newTask[property] = value
    this.setState({newTask})
  }

  render(){

    const fullWidth = {
      'width': '100%'
    }

    const timeInput = {
      'width': '20%',
      'display': 'inline-block',
      'marginRight': '10px'
    }

    return (
      <div className='bar'>
        <div data-toggle='modal' data-target='#newTask'>
          <span className='glyphicon glyphicon-plus icon'></span><span className='option'> Create Task</span>
        </div>
        <span></span>
        <div className='modal fade' id='newTask' role='dialog'>
          <div className='modal-panel'>
            <div className='modal-header'>
              <button type='button' className='close' data-dismiss='modal'>&times;</button>
              <h4 className='modal-title'>New Task</h4>
            </div>
            <div className='modal-body'>
              <label style={fullWidth} className='form-group'>
                Name
                <input style={fullWidth} className='form-control' type='text' value={this.state.newTask.name} onChange={(event) => this.handleChangeOn('name', event.target.value)} />
              </label>
              <label style={fullWidth} className='form-group'>
                Description
                <textarea style={fullWidth} className='form-control' rows='6' value={this.state.newTask.description} onChange={(event) => this.handleChangeOn('description', event.target.value)}></textarea>
              </label>
              <label style={fullWidth} className='form-group'>
                Priotity
                <select className='form-control' id='sel1' value={this.state.newTask.priority} onChange={(event) => this.handleChangeOn('priority', event.target.value)}>
                  <option>Ultra Low</option>
                  <option>Low</option>
                  <option>Medium</option>
                  <option>High</option>
                  <option>Ultra High</option>
                </select>
              </label>
              <label style={timeInput} className='form-group'>
                Weeks
                <input className='form-control' type='number' min='0' max='2' value={this.state.time.weeks} onChange={(event) => this.changeTime('weeks', event.target.value)} />
              </label>
              <label style={timeInput} className='form-group'>
                Days
                <input className='form-control' type='number' min='0' max='7' value={this.state.time.days} onChange={(event) => this.changeTime('days', event.target.value)} />
              </label>
              <label style={timeInput} className='form-group'>
                Hours
                <input className='form-control' type='number' min='0' max='8' value={this.state.time.hours} onChange={(event) => this.changeTime('hours', event.target.value)} />
              </label>
            </div>
            <div className='modal-footer'>
              <button type='button' className='btn btn-primary' data-dismiss='modal' onClick={this.addTask}>Create</button>
              <button type='button' className='btn btn-default' data-dismiss='modal'>Close</button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Options
