import "./App.css";
import Hello from "./component/Hello.js";
import Welcome from "./component/Welcome";
function App() {
  return (
    <div className="App">
      <Welcome />
      <Hello age={10} />
      <Hello age={10} />
      <Hello age={10} />
    </div>
  );
}

export default App;
