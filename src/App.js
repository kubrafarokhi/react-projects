import { Provider } from "react-redux";
import store from './redux/store';

import StopWatch from "./components/StopWatch/StopWatch";
import CountDownTimer from "./components/CountDownTimer/CountDownTimer";
import TimerClock from "./components/TimerClock/TimerClock";
import Counter from "./components/Counter/Counter";
import ToDoList from "./components/ToDoList/ToDoList";

import CakeComponent from "./components/Redux/CakeComponent";
import HooksCakeContainer from './components/Redux/HooksCakeContainer';
import NewCakeContainer from './components/Redux/NewCakeContainer';
import ItemContainer from './components/Redux/ItemContainer';

import "./App.css";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <CountDownTimer />
        <br />
        <StopWatch />
        <TimerClock />
        <Counter />
        <br />
        <ToDoList />
        <br />
        <CakeComponent />
        <HooksCakeContainer/>
        <NewCakeContainer/>
        <ItemContainer/>
        <ItemContainer/>
      </div>
    </Provider>
  );
}

export default App;
