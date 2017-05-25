import React from 'react';
import ReactDOM from 'react-dom';

// class Clock extends React.Component {

// 	render(){
// 		  return (
// 		    <div>
// 		      <h1>Hello, wo
// 		      rld!</h1>
// 		      <h2>It is {this.props.date.toLocaleTimeString()}.</h2>
// 		    </div>
// 		  );
// 		}
// }

class Clock extends React.Component {
	constructor(props){
		super(props);
		this.state = {"date":new Date()};
	}

// These methods are called "lifecycle hooks".
// We can declare special methods on the component class to run some code when a component mounts and unmounts:

  componentDidMount() {
  	  this.timerID = setInterval(
      () => this.tick(),
      1000
    );
  }
  componentWillUnmount() {
  	clearInterval(this.timerID);
  }

   tick() {
    this.setState({
      date: new Date()
    });
  }

	render(){
		  return (
		    <div>
		      <h1>Hello, wo
		      rld!</h1>
		      <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
		    </div>
		  );
		}
}

export default Clock;


// We want to set up a timer whenever the Clock is rendered to the DOM for the first time. This is called "mounting" in React.

// We also want to clear that timer whenever the DOM produced by the Clock is removed. This is called "unmounting" in React.