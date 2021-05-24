import  { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Greeting from './Greeting';
import { Task } from './Task';
import { Clock } from './Clock';


function App() {
  const [ task, setTask ] = useState({ description: 'do something'});
  const user = { name: 'someone' };
  const changeTask = (event) => {
    setTask({ description: event.target.value });
    console.log(task);
  };
  return (
    <div className="App">
      <Greeting user={user} />
      <Task task={task} />
      <Clock />
      <input placeholder="Change task" onChange={changeTask}/>
    </div>
  );
}

export default App;
