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
import FolderApp from './components/FolderApp/FolderApp';
import explorer from "./components/FolderApp/data/data";
import SimpleUseReducer from './components/Hooks/reducer/SimpleUseReducer';
import ComplexUseReducer from './components/Hooks/reducer/ComplexUseReducer';
import MultipleUseReducer from './components/Hooks/reducer/MultipleUseReducer';
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
        <br />
        <br />
         Redux: Tutorial
        <CakeComponent />
        <HooksCakeContainer/>
        <NewCakeContainer/>
        <ItemContainer/>
        <ItemContainer/>
        <br/>
        <br />
        <br />
        <br />
        <div style={{border:'1px solid black', width: '800px', height: '200px'}}>
          <FolderApp  explorer={explorer}/>
        </div>
       <SimpleUseReducer/>
       <ComplexUseReducer/>
       <MultipleUseReducer/>
      </div>
    </Provider>
  );
}

export default App;
