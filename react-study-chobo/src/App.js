import "./App.css";
import Hello from "./component/Hello.js";
import Welcome from "./component/Welcome";
function App() {
  return (
    <div className="App">
      <Welcome />
      <Hello />
      <Hello />
      <Hello />
    </div>
  );
}

export default App;
