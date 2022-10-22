import logo from "./logo.svg";
import "./App.css";
import Restaurant from "./Restaurant.js";

function App() {
  return (
    <div className="App">
      <h1>Taste the Nash!</h1>
      <h3>Sarah put map stuff here</h3>
      <h4>We will put search and restaurant component stuff here.</h4>
      <div style={{ display: "flex", flexDirection: "row" }}>
        <Restaurant
          name="Sweet Dots"
          price="$"
          description="Sweet Dots is hip, local, premium bubble tea cafe located in Elliston Place near Vanderbilt University in Nashville, Tennessee. The store provides a variety of unique flavors and concoctions, made fresh to order. "
        />
        <Restaurant
          name="Papa Johns"
          price="$"
          description="Enjoy the ease of ordering delicious pizza for delivery or carryout from a Papa Johns near you."
        />
        <Restaurant
          name="Jet's Pizza"
          price="$"
          description="Jet's America, Inc. is an American pizza franchise restaurant. It was founded in 1978 in the Detroit suburb of Sterling Heights, and operates primarily in the state of Michigan."
        />
      </div>
    </div>
  );
}

export default App;
