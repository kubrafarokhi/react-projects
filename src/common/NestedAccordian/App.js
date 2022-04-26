import "./styles.css";
import Accordian from "./components/Accordian/Accordian";
import accordianData from "./components/Accordian/data";
export default function App() {
  return (
    <div className="App">
      {accordianData &&
        accordianData?.map((data) => <Accordian explorer={data} />)}
    </div>
  );
}
