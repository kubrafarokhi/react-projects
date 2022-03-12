import StopWatch  from './components/StopWatch/StopWatch';
import CountDownTimer from './components/CountDownTimer/CountDownTimer';
import TimerClock from './components/TimerClock/TimerClock';
import Counter from './components/Counter/Counter';
import ToDoList from './components/ToDoList/ToDoList';

import './App.css';

function App() {
  return (
    <div className="App">
     <CountDownTimer/>
     <br/>
     <StopWatch/>
     <TimerClock/>
     <Counter/>
     <br/>
      <ToDoList/>
    </div>
  );
}

export default App;
