import React from 'react';
import ReactDOM from 'react-dom';
import Clock from './clock.js';


// function tick() {
//   ReactDOM.render(
//     <Clock date={new Date()} />,
//     document.getElementById('root')
//   );
// }

function tick() {
  ReactDOM.render(
    <Clock />,
    document.getElementById('root')
  );
}


// However, writing a Redux application produces a lot of boilerplate code. 
// One framework alternative is MobX, which solves this problem by doing automation using observables.




// State is similar to props, but it is private and fully controlled by the component.

setInterval(tick, 1000);


// Every React component maintains props and state.
// Props are passed to the component to configure the component.
// The state is used to change the way the component is rendered at run-time.

// Redux is a library that manages data flow in a React application. Redux implements uni-directional data flow.
// Actions, Store, and Reducers lie at the heart of Redux.
// Store is where the data resides.
// To update the store, React components emit actions.
// The updated store is available to the React components via props.


 // The key idea that makes redux so popular is that your application logic lives in "reducers",
 // which are JavaScript functions that take in a state and an action, and return a new state. 