import logo from "./logo.svg";
import "./App.css";
import Restaurant from "./Restaurant.js";
import React, { useState } from "react";
import Select from "react-select";

//options for categories
const categoryOptions = [
  { value: "all", label: "Select All" },
  { value: "pizza", label: "Pizza" },
  { value: "drinks", label: "Drinks" },
  { value: "mexican", label: "Mexican" },
];

//options for sorts
const sortOptions = [{ value: "price", label: "price" }];

function App() {
  //state for categories
  const [selectedCategory, setSelectedCategory] = useState(null);
  //state for sort by
  const [selectedSort, setSelectedSort] = useState(null);
  return (
    <div className="App">
      <h1>Taste the Nash!</h1>
      <h3>Sarah put map stuff here</h3>
      <h4>We will put search and restaurant component stuff here.</h4>

      {/*Restaurant component stuff*/}
      <div style={{ width: "300px" }}>
        {/*Category selector*/}
        <h2>Category</h2>
        <Select
          defaultValue={selectedCategory}
          onChange={(v) => {
            setSelectedCategory(v.value);
          }}
          options={categoryOptions}
        />
      </div>

      <div style={{ width: "300px" }}>
        {/*Sort by selector*/}
        <h2>Sort by</h2>
        <Select
          defaultValue={selectedSort}
          onChange={(v) => {
            setSelectedSort(v.value);
          }}
          options={sortOptions}
        />
      </div>

      {/*The restaurant boxes*/}
      <div style={{ display: "flex", flexDirection: "row" }}>
        {/*Only show this stuff if the category selected is drinks */}
        {selectedCategory == "drinks" && (
          <div>
            <Restaurant name="Sweet Dots" price="$" />
          </div>
        )}
        {/*Only show this stuff if the category selected is pizza */}
        {selectedCategory == "pizza" && (
          <div style={{ display: "flex" }}>
            <Restaurant name="Papa Johns" price="$" />
            <Restaurant name="Jet's Pizza" price="$" />
            <Restaurant name="Michaelangelo's Pizza" price="$" />
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
