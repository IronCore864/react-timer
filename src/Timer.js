import React from 'react';

class Display extends React.Component {
  format() {
    var new_times = [] 
    if (this.props.times[0].toString().length === 1) {
      new_times[0] = "0" + this.props.times[0]
    }
    if (this.props.times[1].toString().length === 1) {
      new_times[1] = "0" + this.props.times[1]
    }
    new_times[2] = Math.floor(this.props.times[2], 2)
    if (new_times[2].toString().length === 1 ) {
      new_times[2] = "0" + new_times[2]
    }
    return new_times[0].toString() + ":" + new_times[1].toString() + ":" + new_times[2].toString()
  }
    
  render() {
    return (
      <div>
        {this.format()}
      </div>
    )
  }
}

class Timer extends React.Component {
  constructor() {
    super()

    this.start = this.start.bind(this)
    this.reset = this.reset.bind(this)
    this.step = this.step.bind(this)
    this.calculate = this.calculate.bind(this)

    this.state = {
      times: [0, 0, 0],
      running: false,
      buttonText: "Start",
      timestamp: null
    }
  }

  start() {
    var running = this.state.running
    
    if (!this.state.timestamptime) {
      this.setState({timestamp: performance.now()})
    }

    if (!running) {
      requestAnimationFrame(this.step);      
    }
    
    if (running) {
      console.log(this.state.times)
    }
    this.setState({
      running: !running,
      buttonText: running ? "Start" : "Stop"
    })
  }
  
  reset() {
    this.setState({
      times: [0, 0, 0],
      running: false,
      buttonText: "Start",
      timestamp: null
    })
  }
  
  step(timestamp) {
    if (!this.state.running) {
      return
    }
    this.calculate(timestamp)
    this.setState({timestamp: timestamp})
    requestAnimationFrame(this.step);
  }
    
  calculate(timestamp) {
    var diff = timestamp - this.state.timestamp
    var times = this.state.times
    times[2] += diff / 10
    if (times[2] >= 100) {
      times[1] += 1
      times[2] -= 100
    }
    if (times[1] >= 60) {
      times[0] += 1
      times[1] -= 60
    }
    this.setState({times: times})
  }

  render() {
    return (
      <div className="timer">
        <div className="timer-display">
          <Display
            times={this.state.times}
          />
        </div>
        <div className="timer-btn">
          <button className="btn" onClick={this.start}>
            {this.state.buttonText}
          </button>
          <button className="btn" onClick={this.reset}>
            Reset
          </button>
        </div>
      </div>
    )
  }
}

export default Timer;
