import React from 'react';
// import ReactDOM from 'react-dom';

class Tick extends React.Component {
  render() {
    return (
      // const element = (
      <div>
        <h1>Hello, Time</h1>
        <h2>It is {new Date().toLocaleTimeString()}.</h2>
      </div>
    // )

    // ReactDOM.render(element, document.getElementById('root'));

    )
  }
}
// setInterval(Tick, 1000);

export default Tick;