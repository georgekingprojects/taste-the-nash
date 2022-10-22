import logo from "./logo.svg";
import "./App.css";
import Restaurant from "./Restaurant.js";
import React, { useState } from "react";
import Select from "react-select";

// JSON data for each restaurant

var ANZIEBLUE = {
  name: "Anzie Blue",
  price: "$$",
  address: "2111 Belcourt Ave, Nashville, TN 37212",
  isGetApp: false,
  isDrinks: false,
  isMexican: false,
  isIndian: false,
  isAsian: false,
  isAmerican: false,
  isItalian: false,
  isDessert: false,
  isBreakfast: true,
  isSeafood: false,
  isPizza: false,
  isHealthy: false,
};

var BANHMIANDROLL = {
  name: "Banh Mi and Roll+",
  price: "$",
  address: "1808 20th Ave S Ste 101, Nashville, TN 37212",
  isGetApp: false,
  isDrinks: false,
  isMexican: false,
  isIndian: false,
  isAsian: true,
  isAmerican: false,
  isItalian: false,
  isDessert: false,
  isBreakfast: false,
  isSeafood: false,
  isPizza: false,
  isHealthy: false,
};

var BARISTAPARLOR = {
  name: "Barista Parlor",
  price: "$",
  address: "1817 21st Ave S, Nashville, TN 37212",
  isGetApp: false,
  isDrinks: true,
  isMexican: false,
  isIndian: false,
  isAsian: false,
  isAmerican: true,
  isItalian: false,
  isDessert: false,
  isBreakfast: false,
  isSeafood: false,
  isPizza: false,
  isHealthy: false,
};

var BISCUITLOVE = {
  name: "Biscuit Love",
  price: "$$",
  address: "2001 Belcourt Ave Nashville, TN 37212",
  isGetApp: false,
  isDrinks: false,
  isMexican: false,
  isIndian: false,
  isAsian: false,
  isAmerican: true,
  isItalian: false,
  isDessert: false,
  isBreakfast: true,
  isSeafood: false,
  isPizza: false,
  isHealthy: false,
};

var CABANATAPS = {
  name: "Cabana Taps",
  price: "$$",
  address: "1910 Belcourt Ave, Nashville, TN 37212",
  isGetApp: false,
  isDrinks: false,
  isMexican: false,
  isIndian: false,
  isAsian: false,
  isAmerican: true,
  isItalian: false,
  isDessert: false,
  isBreakfast: false,
  isSeafood: false,
  isPizza: false,
  isHealthy: false,
};

var CENTRALBBQ = {
  name: "Central BBQ",
  price: "$$",
  address: "1601 21st Ave S, Nashville, TN 37212",
  isGetApp: false,
  isDrinks: false,
  isMexican: false,
  isIndian: false,
  isAsian: false,
  isAmerican: true,
  isItalian: false,
  isDessert: false,
  isBreakfast: false,
  isSeafood: false,
  isPizza: false,
  isHealthy: false,
};

var GRAINBERRY = {
  name: "Grain & Berry",
  price: "$$",
  address: "1806 20th Ave S, Nashville, TN 37212",
  isGetApp: false,
  isDrinks: false,
  isMexican: false,
  isIndian: false,
  isAsian: false,
  isAmerican: false,
  isItalian: false,
  isDessert: true,
  isBreakfast: false,
  isSeafood: false,
  isPizza: false,
  isHealthy: true,
};

var THEGRILLEDCHEESERIE = {
  name: "The Grilled Cheeserie",
  price: "$",
  address: "2003 Belcourt Ave, Nashville, TN 37212",
  isGetApp: false,
  isDrinks: false,
  isMexican: false,
  isIndian: false,
  isAsian: false,
  isAmerican: true,
  isItalian: false,
  isDessert: false,
  isBreakfast: false,
  isSeafood: false,
  isPizza: false,
  isHealthy: false,
};

var HOPDODDY = {
  name: "Hopdoddy Burger Bar",
  price: "$$",
  address: "1805 21st Ave S, Nashville, TN 37212",
  isGetApp: false,
  isDrinks: false,
  isMexican: false,
  isIndian: false,
  isAsian: false,
  isAmerican: true,
  isItalian: false,
  isDessert: false,
  isBreakfast: false,
  isSeafood: false,
  isPizza: false,
  isHealthy: false,
};

var JENIS = {
  name: "Jeni's Splendid Ice Creams",
  price: "$$",
  address: "1819 21st Ave S, Nashville, TN 37212",
  isGetApp: false,
  isDrinks: false,
  isMexican: false,
  isIndian: false,
  isAsian: false,
  isAmerican: false,
  isItalian: false,
  isDessert: true,
  isBreakfast: false,
  isSeafood: false,
  isPizza: false,
  isHealthy: false,
};

var MEETNOODLES = {
  name: "Meet Noodles",
  price: "$$",
  address: "2121 Belcourt Ave, Nashville, TN 37212",
  isGetApp: false,
  isDrinks: false,
  isMexican: false,
  isIndian: false,
  isAsian: true,
  isAmerican: false,
  isItalian: false,
  isDessert: false,
  isBreakfast: false,
  isSeafood: false,
  isPizza: false,
  isHealthy: false,
};

var NICOLETTOS = {
  name: "Nicoletto's Italian Kitchen",
  price: "$$",
  address: "2123 Belcourt Ave, Nashville, TN 37212",
  isGetApp: false,
  isDrinks: false,
  isMexican: false,
  isIndian: false,
  isAsian: false,
  isAmerican: false,
  isItalian: true,
  isDessert: false,
  isBreakfast: false,
  isSeafood: false,
  isPizza: false,
  isHealthy: false,
};

var SHOKKURAMEN = {
  name: "Shokku Ramen",
  price: "$$",
  address: "2127 Belcourt Ave, Nashville, TN 37212",
  isGetApp: false,
  isDrinks: false,
  isMexican: false,
  isIndian: false,
  isAsian: true,
  isAmerican: false,
  isItalian: false,
  isDessert: false,
  isBreakfast: false,
  isSeafood: false,
  isPizza: false,
  isHealthy: false,
};

var TACOMAMA = {
  name: "Taco Mama",
  price: "$$",
  address: "1612 21st Ave S, Nashville, TN 37212",
  isGetApp: false,
  isDrinks: false,
  isMexican: true,
  isIndian: false,
  isAsian: false,
  isAmerican: false,
  isItalian: false,
  isDessert: false,
  isBreakfast: false,
  isSeafood: false,
  isPizza: false,
  isHealthy: false,
};

var URBANJUICER = {
  name: "The Urban Juicer",
  price: "$$",
  address: "1622 21st Ave S, Nashville, TN 37212",
  isGetApp: false,
  isDrinks: true,
  isMexican: false,
  isIndian: false,
  isAsian: false,
  isAmerican: false,
  isItalian: false,
  isDessert: false,
  isBreakfast: false,
  isSeafood: false,
  isPizza: false,
  isHealthy: true,
};

var CHUYS = {
  name: "Chuy's",
  price: "$$",
  address: "1901 Broadway, Nashville, TN 37203",
  isGetApp: false,
  isDrinks: false,
  isMexican: true,
  isIndian: false,
  isAsian: false,
  isAmerican: false,
  isItalian: false,
  isDessert: false,
  isBreakfast: false,
  isSeafood: false,
  isPizza: false,
  isHealthy: false,
};

var DONATOSPIZZA = {
  name: "Donato's Pizza",
  price: "$$",
  address: "1915 Broadway, Nashville, TN 37203",
  isGetApp: false,
  isDrinks: false,
  isMexican: false,
  isIndian: false,
  isAsian: false,
  isAmerican: false,
  isItalian: true,
  isDessert: false,
  isBreakfast: false,
  isSeafood: false,
  isPizza: true,
  isHealthy: false,
};

var HELENSHOTCHICKEN = {
  name: "Helen's Hot Chicken",
  price: "$",
  address: "2010 Scarritt Pl, Nashville, TN 37203",
  isGetApp: false,
  isDrinks: false,
  isMexican: false,
  isIndian: false,
  isAsian: false,
  isAmerican: true,
  isItalian: false,
  isDessert: false,
  isBreakfast: false,
  isSeafood: true,
  isPizza: false,
  isHealthy: false,
};

var MELLOWMUSHROOM = {
  name: "Mellow Mushroom",
  price: "$$",
  address: "212 21st Ave S, Nashville, TN 37203",
  isGetApp: false,
  isDrinks: false,
  isMexican: false,
  isIndian: false,
  isAsian: false,
  isAmerican: false,
  isItalian: true,
  isDessert: false,
  isBreakfast: false,
  isSeafood: false,
  isPizza: true,
  isHealthy: false,
};

var NADA = {
  name: "Nada",
  price: "$$",
  address: "202 21st Ave S Nashville, TN 37203",
  isGetApp: false,
  isDrinks: true,
  isMexican: true,
  isIndian: false,
  isAsian: false,
  isAmerican: false,
  isItalian: false,
  isDessert: false,
  isBreakfast: false,
  isSeafood: false,
  isPizza: false,
  isHealthy: false,
};

var THEAINSWORTH = {
  name: "The Ainsworth",
  price: "$$",
  address: "206 21st Ave S, Nashville, TN 37203",
  isGetApp: false,
  isDrinks: true,
  isMexican: false,
  isIndian: false,
  isAsian: false,
  isAmerican: true,
  isItalian: false,
  isDessert: false,
  isBreakfast: false,
  isSeafood: false,
  isPizza: false,
  isHealthy: false,
};

var SARABHASCREAMERY = {
  name: "Sarabha's Creamery",
  price: "$$",
  address: "400 21st Ave S suite 201, Nashville, TN 37203",
  isGetApp: false,
  isDrinks: false,
  isMexican: false,
  isIndian: true,
  isAsian: true,
  isAmerican: false,
  isItalian: false,
  isDessert: true,
  isBreakfast: false,
  isSeafood: false,
  isPizza: false,
  isHealthy: false,
};

var THESLIDERHOUSE = {
  name: "The Slider House",
  price: "$$",
  address: "1907 Division St, Nashville, TN 37203",
  isGetApp: false,
  isDrinks: false,
  isMexican: false,
  isIndian: false,
  isAsian: false,
  isAmerican: true,
  isItalian: false,
  isDessert: false,
  isBreakfast: false,
  isSeafood: false,
  isPizza: false,
  isHealthy: false,
};

var URBANCOOKHOUSE = {
  name: "Urban Cookhouse",
  price: "$$",
  address: "1907 Broadway, Nashville, TN 37203",
  isGetApp: false,
  isDrinks: false,
  isMexican: false,
  isIndian: false,
  isAsian: false,
  isAmerican: true,
  isItalian: false,
  isDessert: false,
  isBreakfast: false,
  isSeafood: false,
  isPizza: false,
  isHealthy: false,
};

var BOMBAYPALACE = {
  name: "Bombay Palace",
  price: "$$",
  address: "2912 West End Ave, Nashville, TN 37203",
  isGetApp: false,
  isDrinks: false,
  isMexican: false,
  isIndian: true,
  isAsian: true,
  isAmerican: false,
  isItalian: false,
  isDessert: false,
  isBreakfast: false,
  isSeafood: false,
  isPizza: false,
  isHealthy: false,
};

var CHILIS = {
  name: "Chili's Grill & Bar",
  price: "$$",
  address: "2322 West End Ave, Nashville, TN 37203",
  isGetApp: false,
  isDrinks: false,
  isMexican: false,
  isIndian: false,
  isAsian: false,
  isAmerican: true,
  isItalian: false,
  isDessert: false,
  isBreakfast: false,
  isSeafood: false,
  isPizza: false,
  isHealthy: false,
};

var INCHINSBAMBOOGARDEN = {
  name: "Inchin's Bamboo Garden",
  price: "$$",
  address: "1800 West End Ave, Nashville, TN 37203",
  isGetApp: false,
  isDrinks: false,
  isMexican: false,
  isIndian: false,
  isAsian: true,
  isAmerican: false,
  isItalian: false,
  isDessert: false,
  isBreakfast: false,
  isSeafood: false,
  isPizza: false,
  isHealthy: false,
};

var CRABFEVER = {
  name: "Crab Fever",
  price: "$$",
  address: "1907 West End Ave, Nashville, TN 37203",
  isGetApp: false,
  isDrinks: false,
  isMexican: false,
  isIndian: false,
  isAsian: false,
  isAmerican: false,
  isItalian: false,
  isDessert: false,
  isBreakfast: false,
  isSeafood: true,
  isPizza: false,
  isHealthy: false,
};

var FABLE = {
  name: "Fable Lounge",
  price: "$$",
  address: "114 28th Ave N, Nashville, TN 37203",
  isGetApp: false,
  isDrinks: true,
  isMexican: false,
  isIndian: false,
  isAsian: false,
  isAmerican: true,
  isItalian: false,
  isDessert: false,
  isBreakfast: false,
  isSeafood: false,
  isPizza: false,
  isHealthy: false,
};

var KOISUSHI = {
  name: "Koi Sushi & Tai",
  price: "$$",
  address: "2214 Elliston Pl, Nashville, TN 37203",
  isGetApp: false,
  isDrinks: false,
  isMexican: false,
  isIndian: false,
  isAsian: true,
  isAmerican: false,
  isItalian: false,
  isDessert: false,
  isBreakfast: false,
  isSeafood: true,
  isPizza: false,
  isHealthy: false,
};

var PAPAJOHNS = {
  name: "Papa John's Pizza",
  price: "$",
  address: "2316 West End Ave, Nashville, TN 37203",
  isGetApp: false,
  isDrinks: false,
  isMexican: false,
  isIndian: false,
  isAsian: false,
  isAmerican: false,
  isItalian: true,
  isDessert: false,
  isBreakfast: false,
  isSeafood: false,
  isPizza: true,
  isHealthy: false,
};

var SITARINDIAN = {
  name: "Sitar Indian Restaurant",
  price: "$$",
  address: "116 21st Ave N, Nashville, TN 37203",
  isGetApp: false,
  isDrinks: false,
  isMexican: false,
  isIndian: true,
  isAsian: true,
  isAmerican: false,
  isItalian: false,
  isDessert: false,
  isBreakfast: false,
  isSeafood: false,
  isPizza: false,
  isHealthy: false,
};

var SUNANDFORK = {
  name: "Sun & Fork",
  price: "$$",
  address: "2525 West End Ave, Nashville, TN 37203",
  isGetApp: false,
  isDrinks: false,
  isMexican: false,
  isIndian: false,
  isAsian: false,
  isAmerican: false,
  isItalian: false,
  isDessert: false,
  isBreakfast: true,
  isSeafood: false,
  isPizza: false,
  isHealthy: false,
};

var WENDYS = {
  name: "Wendy's",
  price: "$",
  address: "2603 West End Ave, Nashville, TN 37203",
  isGetApp: false,
  isDrinks: false,
  isMexican: false,
  isIndian: false,
  isAsian: false,
  isAmerican: true,
  isItalian: false,
  isDessert: false,
  isBreakfast: false,
  isSeafood: false,
  isPizza: false,
  isHealthy: false,
};

var CAFECOCO = {
  name: "Cafe Coco",
  price: "$",
  address: "210 Louise Ave, Nashville, TN 37203",
  isGetApp: false,
  isDrinks: false,
  isMexican: false,
  isIndian: false,
  isAsian: false,
  isAmerican: true,
  isItalian: false,
  isDessert: false,
  isBreakfast: false,
  isSeafood: false,
  isPizza: false,
  isHealthy: false,
};

var ELLISTONPLACESODASHOP = {
  name: "Elliston Place Soda Shop",
  price: "$",
  address: "2105 Elliston Pl, Nashville, TN 37203",
  isGetApp: false,
  isDrinks: false,
  isMexican: false,
  isIndian: false,
  isAsian: false,
  isAmerican: true,
  isItalian: false,
  isDessert: false,
  isBreakfast: false,
  isSeafood: false,
  isPizza: false,
  isHealthy: false,
};

var FRUTTABOWLS = {
  name: "Frutta Bowls",
  price: "$$",
  address: "2424 Elliston Pl, Nashville, TN 37203",
  isGetApp: false,
  isDrinks: false,
  isMexican: false,
  isIndian: false,
  isAsian: false,
  isAmerican: false,
  isItalian: false,
  isDessert: true,
  isBreakfast: false,
  isSeafood: false,
  isPizza: false,
  isHealthy: true,
};

var ILOVESUSHI = {
  name: "I Love Sushi",
  price: "$$",
  address: "2300 Elliston Pl, Nashville, TN 37203",
  isGetApp: false,
  isDrinks: false,
  isMexican: false,
  isIndian: false,
  isAsian: true,
  isAmerican: false,
  isItalian: false,
  isDessert: false,
  isBreakfast: false,
  isSeafood: true,
  isPizza: false,
  isHealthy: false,
};

var JAMBA = {
  name: "Jamba",
  price: "$",
  address: "2314 Elliston Pl, Nashville, TN 37203",
  isGetApp: false,
  isDrinks: true,
  isMexican: false,
  isIndian: false,
  isAsian: false,
  isAmerican: false,
  isItalian: false,
  isDessert: false,
  isBreakfast: false,
  isSeafood: false,
  isPizza: false,
  isHealthy: true,
};

var JETSPIZZA = {
  name: "Jet's Pizza",
  price: "$",
  address: "214 25th Ave N, Nashville, TN 37203",
  isGetApp: false,
  isDrinks: false,
  isMexican: false,
  isIndian: false,
  isAsian: false,
  isAmerican: false,
  isItalian: true,
  isDessert: false,
  isBreakfast: false,
  isSeafood: false,
  isPizza: true,
  isHealthy: false,
};

var MICHAELANGELOSPIZZA = {
  name: "Michaelangelo's Pizza",
  price: "$",
  address: "205 22nd Ave N, Nashville, TN 37203",
  isGetApp: false,
  isDrinks: false,
  isMexican: false,
  isIndian: false,
  isAsian: false,
  isAmerican: false,
  isItalian: true,
  isDessert: false,
  isBreakfast: false,
  isSeafood: false,
  isPizza: true,
  isHealthy: false,
};

var OSCARSTACOSHOP = {
  name: "Oscar's Taco Shop",
  price: "$",
  address: "2323 Elliston Pl, Nashville, TN 37203",
  isGetApp: false,
  isDrinks: false,
  isMexican: true,
  isIndian: false,
  isAsian: false,
  isAmerican: false,
  isItalian: false,
  isDessert: false,
  isBreakfast: false,
  isSeafood: false,
  isPizza: false,
  isHealthy: false,
};

var POKEBROS = {
  name: "Poke Bros",
  price: "$$",
  address: "2414 Elliston Pl, Nashville, TN 37203",
  isGetApp: false,
  isDrinks: false,
  isMexican: false,
  isIndian: false,
  isAsian: true,
  isAmerican: false,
  isItalian: false,
  isDessert: false,
  isBreakfast: false,
  isSeafood: true,
  isPizza: false,
  isHealthy: false,
};

var ROMAPIZZAANDPASTA = {
  name: "Roma Pizza & Pasta",
  price: "$",
  address: "2418 Elliston Pl, Nashville, TN 37203",
  isGetApp: false,
  isDrinks: false,
  isMexican: false,
  isIndian: false,
  isAsian: false,
  isAmerican: false,
  isItalian: true,
  isDessert: false,
  isBreakfast: false,
  isSeafood: false,
  isPizza: true,
  isHealthy: false,
};

var SATAYTHAIGRILL = {
  name: "Satay Thai Grill",
  price: "$",
  address: "2412 Elliston Pl, Nashville, TN 37203",
  isGetApp: false,
  isDrinks: false,
  isMexican: false,
  isIndian: false,
  isAsian: true,
  isAmerican: false,
  isItalian: false,
  isDessert: false,
  isBreakfast: false,
  isSeafood: false,
  isPizza: false,
  isHealthy: false,
};

var SWEETDOTS = {
  name: "Sweet Dots",
  price: "$$",
  address: "2217 Elliston Pl, Nashville, TN 37203",
  isGetApp: false,
  isDrinks: true,
  isMexican: false,
  isIndian: false,
  isAsian: true,
  isAmerican: false,
  isItalian: false,
  isDessert: false,
  isBreakfast: false,
  isSeafood: false,
  isPizza: false,
  isHealthy: false,
};

var JPCAFE = {
  name: "JP Cafe",
  price: "$$",
  address: "41 Peabody St, Nashville, TN 37210",
  isGetApp: false,
  isDrinks: true,
  isMexican: false,
  isIndian: false,
  isAsian: false,
  isAmerican: false,
  isItalian: false,
  isDessert: false,
  isBreakfast: true,
  isSeafood: false,
  isPizza: false,
  isHealthy: false,
};

var HOLYSMOKES = {
  name: "Holy Smokes",
  price: "$",
  address: "300 24th Ave S, Nashville, TN 37212",
  isGetApp: false,
  isDrinks: false,
  isMexican: false,
  isIndian: false,
  isAsian: false,
  isAmerican: false,
  isItalian: false,
  isDessert: false,
  isBreakfast: false,
  isSeafood: false,
  isPizza: false,
  isHealthy: false,
};

const sortedRestaurantArray = [
  HOLYSMOKES,
  JPCAFE,
  SWEETDOTS,
  SATAYTHAIGRILL,
  ROMAPIZZAANDPASTA,
  POKEBROS,
  OSCARSTACOSHOP,
  MICHAELANGELOSPIZZA,
  JETSPIZZA,
  JAMBA,
  ILOVESUSHI,
  FRUTTABOWLS,
  ELLISTONPLACESODASHOP,
  CAFECOCO,
  WENDYS,
  SUNANDFORK,
  SITARINDIAN,
  PAPAJOHNS,
  KOISUSHI,
  FABLE,
  CRABFEVER,
  INCHINSBAMBOOGARDEN,
  CHILIS,
  BOMBAYPALACE,
  URBANCOOKHOUSE,
  THESLIDERHOUSE,
  SARABHASCREAMERY,
  THEAINSWORTH,
  NADA,
  MELLOWMUSHROOM,
  HELENSHOTCHICKEN,
  DONATOSPIZZA,
  CHUYS,
  URBANJUICER,
  TACOMAMA,
  SHOKKURAMEN,
  NICOLETTOS,
  MEETNOODLES,
  JENIS,
  HOPDODDY,
  THEGRILLEDCHEESERIE,
  GRAINBERRY,
  CENTRALBBQ,
  CABANATAPS,
  BISCUITLOVE,
  BARISTAPARLOR,
  BANHMIANDROLL,
  ANZIEBLUE,
];

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
      <h1>Tast the Nash!</h1>
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
      {sortedRestaurantArray.map((restaurant) => {
        if (restaurant.isPizza && selectedCategory == "pizza")
          return <div>{restaurant.name}</div>;
      })}
    </div>
  );
}

export default App;
