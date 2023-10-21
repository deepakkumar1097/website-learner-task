import "./App.css";
import AccordionComp from "./components/AccordionComp";
import Body from "./components/Body";
import NavigationBar from "./components/NavigationBar";

function App() {
  return (
    <div className="app">
      <NavigationBar />
      <Body />
      <AccordionComp />
    </div>
  );
}

export default App;
