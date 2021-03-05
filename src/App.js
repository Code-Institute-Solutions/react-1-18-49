import "./App.css";
import ConditionalRenderingClass from "./components/ConditionalRenderingClass";
import ConditionalRenderingFunctional from "./components/ConditionalRenderingFunctional";

function App() {
  return (<div className="App">
      <ConditionalRenderingClass />
      <ConditionalRenderingFunctional />
  </div>);
}

export default App;
