import React from 'react';

const tasks = ['Acordar', 'Trabalhar', 'Estudar', 'Fisioterapia', 'Treinar', 'Dormir'];

const Task = (value) => {
  return (
    <li>{value}</li>
  );
}

class App extends React.Component {
  render() {
    return (
      <ul>{tasks.map((e) => Task(e))}</ul>
    )
  }
}

export default App;
