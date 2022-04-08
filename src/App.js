import { Provider } from "react-redux";
import store from "./redux/store";

import StopWatch from "./components/StopWatch/StopWatch";
import CountDownTimer from "./components/CountDownTimer/CountDownTimer";
import TimerClock from "./components/TimerClock/TimerClock";
import Counter from "./components/Counter/Counter";
import ToDoList from "./components/ToDoList/ToDoList";

import CakeComponent from "./components/Redux/CakeComponent";
import HooksCakeContainer from "./components/Redux/HooksCakeContainer";
import NewCakeContainer from "./components/Redux/NewCakeContainer";
import ItemContainer from "./components/Redux/ItemContainer";
import FolderApp from "./components/FolderApp/FolderApp";
import explorer from "./components/FolderApp/data/data";
import SimpleUseReducer from "./components/Hooks/reducer/SimpleUseReducer";
import ComplexUseReducer from "./components/Hooks/reducer/ComplexUseReducer";
import MultipleUseReducer from "./components/Hooks/reducer/MultipleUseReducers";
import SearchwithFilter from "./common/AutoCompleteSearch/SearchwithFilter";
import AutocompleteDebounce from "./common/AutocompleteDebounce/AutocompleteDebounce";
import ToastContainer from "./common/ToastContainer/ToastContainer";
import ModalContainer from "./common/Modal/index";
import Dropdown from "./common/Dropdown/Dropdown";
import AnalogClock from "./common/AnalogClock/AnalogClock";
import SpecialAnalogClock from "./common/SpecialAnalogClock/SpecialAnalogClock";
import Caraousel from './common/Caraousel/Caraousel';
import Axios from "./axiosCrud/Axios";
import { Tabs, Tab } from "./common/Tab/Tab";
import ButtonLoadingSpinner from "./common/ButtonLoadingSpinner/LoadingSpinner";
import SimpleProgressBar from "./common/SimpleProgressBar/SimpleProgressBar";

import StarComponentContainer from "./common/StarComponent/StarComponentContainer";
import TicTacToe from "./common/TicTacToe/TicTacToe";
import FileUpload from "./common/FileUpload/FileUpload";
import ToggleSwitch from "./common/ToggleSwitch/ToggleSwitch";
import ScrollIndicator from "./common/ScrollIndicator/ScrollIndicator";
import DynamicHeightDiv from "./common/DynamicHeightDiv/DynamicHeightDiv";
import Accordian from "./common/Accordian/Accordian";
import DynamicElement from "./common/DynamicElement/DynamicElement";
import InfinteScroll from "./common/InfinteScroll/InfinteScroll";
import SideMenu from "./common/SideMenu/SideMenu";

import "./App.css";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        {/* <ToDoList /> */}
        {/* <CountDownTimer />
        <br />
        <StopWatch />
        <TimerClock />
        <Counter />
        <br />

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
       <br/>
        <br />
        <br />
        <br /> */}
        {/* <AutoCompleteSearch/> */}
        {/* <AutocompleteDebounce/> */}
        {/* <SearchwithFilter/> */}
        {/* <Dropdown/>  */}
        {/* <ToastContainer/> */}
        {/* <ModalContainer/>
        {/* <AnalogClock/> */}
        <SpecialAnalogClock
          label={"India"}
          country={"en-IN"}
          timeZone={"Asia/Kolkata"}
        />
        <SpecialAnalogClock
          label={"WashingTon DC"}
          country={"en-GB"}
          timeZone={"Europe/London"}
          //datediff={-2}
        />
        <Caraousel/>
        {/* <SpecialAnalogClock label={'Australia'} timeDiff={{hours: 5, minutes: 0}}/> */}
        {/* <Axios /> */}
        {/* <Tabs>
          <Tab label={"tab 1"} tabName={"Tab 1"}>
            <p>Recommended channels for you</p>
          </Tab>
          <Tab label={"tab 2"} tabName={"Tab 2"}>
            <p>You haven't subscribed to any channel</p>
          </Tab>
          <Tab label={"tab 3"} tabName={"Tab 3"}>
            <h5>Millions of subscribers</h5>
          </Tab>
        </Tabs>
        <br />
        <br />
        <ButtonLoadingSpinner />
        <StarComponentContainer />
        <SimpleProgressBar />
        <TicTacToe /> */}
        {/* <FileUpload/> */}
        {/* <ToggleSwitch/> */}
        {/* <ScrollIndicator/> */}
        {/* <DynamicHeightDiv/> */}
        {/* <Accordian/> */}
        {/* <DynamicElement/> */}
        {/* <InfinteScroll/> */}
        {/* <SideMenu/> */}
      </div>
    </Provider>
  );
}

export default App;
