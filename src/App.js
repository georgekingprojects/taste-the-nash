import logo from "./logo.svg";
import "./App.css";
import Restaurant from "./Restaurant.js";
import React, { useState } from "react";
import Select from "react-select";
import Popup from "./Popup.js";

// JSON data for each restaurant

var ANZIEBLUE = {
  name: "Anzie Blue",
  price: "$$",
  address: "2111 Belcourt Ave, Nashville, TN 37212",
  imgLoc: "..imgfiles/anzieblue.png",
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
  imgLoc: "..imgfiles/banhmiroll.png",
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
  imgLoc: "..imgfiles/baristaparlor.png",
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
  imgLoc: "..imgfiles/biscuitlove.png",
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
  imgLoc: "..imgfiles/bombaypalace.png",
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
  imgLoc: "..imgfiles/centralbbq.png",
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
  imgLoc: "..imgfiles/grainandberry.png",
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
  imgLoc: "..imgfiles/grilledcheeserie.png",
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
  imgLoc: "..imgfiles/hopdoddy.png",
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
  imgLoc: "..imgfiles/jenis.png",
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
  imgLoc: "..imgfiles/meetnoodles.png",
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
  imgLoc: "..imgfiles/nicolettos.png",
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
  imgLoc: "..imgfiles/shokkuramen.png",
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
  imgLoc: "..imgfiles/tacomama.png",
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
  imgLoc: "..imgfiles/urbanjuicer.png",
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
  imgLoc: "..imgfiles/chuys.png",
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
  imgLoc: "..imgfiles/donatos.png",
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
  imgLoc: "..imgfiles/helenshotchicken.png",
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
  imgLoc: "..imgfiles/mellowmushroom.png",
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
  imgLoc: "..imgfiles/nada.png",
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
  imgLoc: "..imgfiles/ainsworth.png",
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
  imgLoc: "..imgfiles/sarabhas.png",
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
  imgLoc: "..imgfiles/sliderhouse.png",
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
  imgLoc: "..imgfiles/urbancookhouse.png",
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
  WENDYS,
  ROMAPIZZAANDPASTA,
  JETSPIZZA,
  MICHAELANGELOSPIZZA,
  OSCARSTACOSHOP,
  PAPAJOHNS,
  HOLYSMOKES,
  ELLISTONPLACESODASHOP,
  THEGRILLEDCHEESERIE,
  SATAYTHAIGRILL,
  CAFECOCO,
  JAMBA,
  HELENSHOTCHICKEN,
  BARISTAPARLOR,
  BANHMIANDROLL,
  SWEETDOTS,
  POKEBROS,
  JPCAFE,
  MELLOWMUSHROOM,
  DONATOSPIZZA,
  CENTRALBBQ,
  NICOLETTOS,
  FRUTTABOWLS,
  SUNANDFORK,
  GRAINBERRY,
  CRABFEVER,
  INCHINSBAMBOOGARDEN,
  CHILIS,
  BOMBAYPALACE,
  URBANCOOKHOUSE,
  THESLIDERHOUSE,
  SARABHASCREAMERY,
  CHUYS,
  URBANJUICER,
  TACOMAMA,
  SHOKKURAMEN,
  MEETNOODLES,
  JENIS,
  ILOVESUSHI,
  SITARINDIAN,
  BISCUITLOVE,
  HOPDODDY,
  NADA,
  FABLE,
  CABANATAPS,
  KOISUSHI,
  THEAINSWORTH,
  ANZIEBLUE,
];

const sortedRestaurantArrayDecresasing = [
  ANZIEBLUE,
  THEAINSWORTH,
  KOISUSHI,
  CABANATAPS,
  FABLE,
  NADA,
  HOPDODDY,
  BISCUITLOVE,
  SITARINDIAN,
  ILOVESUSHI,
  JENIS,
  MEETNOODLES,
  SHOKKURAMEN,
  TACOMAMA,
  URBANJUICER,
  CHUYS,
  SARABHASCREAMERY,
  THESLIDERHOUSE,
  URBANCOOKHOUSE,
  BOMBAYPALACE,
  CHILIS,
  INCHINSBAMBOOGARDEN,
  CRABFEVER,
  GRAINBERRY,
  SUNANDFORK,
  FRUTTABOWLS,
  NICOLETTOS,
  CENTRALBBQ,
  DONATOSPIZZA,
  MELLOWMUSHROOM,
  JPCAFE,
  POKEBROS,
  SWEETDOTS,
  BANHMIANDROLL,
  BARISTAPARLOR,
  HELENSHOTCHICKEN,
  JAMBA,
  CAFECOCO,
  SATAYTHAIGRILL,
  THEGRILLEDCHEESERIE,
  ELLISTONPLACESODASHOP,
  HOLYSMOKES,
  PAPAJOHNS,
  OSCARSTACOSHOP,
  MICHAELANGELOSPIZZA,
  JETSPIZZA,
  ROMAPIZZAANDPASTA,
  WENDYS,
];

//options for categories
const categoryOptions = [
  { value: "all", label: "Select All" },
  { value: "pizza", label: "Pizza" },
  { value: "drinks", label: "Drinks" },
  { value: "mexican", label: "Mexican" },
  { value: "healthy", label: "Healthy" },
  { value: "seafood", label: "Seafood" },
  { value: "breakfast", label: "Breakfast" },
  { value: "dessert", label: "Dessert" },
  { value: "italian", label: "Italian" },
  { value: "american", label: "American" },
  { value: "asian", label: "East Asian" },
  { value: "indian", label: "Indian" },
  { value: "get", label: "Available on GET App" },
];

//options for sorts
const sortOptions = [
  { value: "price", label: "Price (increasing)" },
  { value: "pricedec", label: "Price (decreasing)" },
];

function App() {
  const [isOpen, setIsOpen] = useState(false);

  const togglePopup = () => {
    setIsOpen(!isOpen);
  };
  //state for categories
  const [selectedCategory, setSelectedCategory] = useState(null);
  //state for sort by
  const [selectedSort, setSelectedSort] = useState(null);
  return (
    <div className="App">
      <div id="nav">
        <a href="#map" class="navlink">Maps</a>
        <a href="#search" class="navlink">Search</a>
        <a href="#category" class="navlink">Category</a>
        <a href="#sort" class="navlink">Sort</a>
      </div>
      <h1 id="taste">Tast the Nash!</h1>
      <div id="things">
        <iframe
          src="https://www.google.com/maps/d/u/0/embed?mid=11MSZMur_QnNCaeMNLguURSVG0_dRA5E&ehbc=2E312F"
          width="640"
          height="480"
          href="map"
        ></iframe>
        <h4 href="search">We will put search and restaurant component stuff here.</h4>
      </div>

      {/*Restaurant component stuff*/}
      <div id="category" href="category">
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

      <div id="select" href="sort">
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

      {/*Increasing Price*/}
      {selectedSort == "price" &&
        sortedRestaurantArray.map((restaurant) => {
          if (
            selectedCategory == "all" ||
            (restaurant.isPizza && selectedCategory == "pizza") ||
            (restaurant.isDrinks && selectedCategory == "drinks") ||
            (restaurant.isMexican && selectedCategory == "mexican") ||
            (restaurant.isHealthy && selectedCategory == "healthy") ||
            (restaurant.isSeafood && selectedCategory == "seafood") ||
            (restaurant.isBreakfast && selectedCategory == "breakfast") ||
            (restaurant.isDessert && selectedCategory == "dessert") ||
            (restaurant.isItalian && selectedCategory == "italian") ||
            (restaurant.isAmerican && selectedCategory == "american") ||
            (restaurant.isAsian && selectedCategory == "asian") ||
            (restaurant.isIndian && selectedCategory == "indian") ||
            (restaurant.isGetApp && selectedCategory == "get")
          )
            return (
              <>
                <div id="boxes">
                  <div className="restaurantBox" onClick={togglePopup}>
                    <h3>{restaurant.name}</h3>
                  </div>

                  {isOpen && (
                    <Popup
                      content={
                        <>
                          <b>Design your Popup</b>
                          <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua. Ut enim ad minim veniam, quis
                            nostrud exercitation ullamco laboris nisi ut aliquip
                            ex ea commodo consequat. Duis aute irure dolor in
                            reprehenderit in voluptate velit esse cillum dolore
                            eu fugiat nulla pariatur. Excepteur sint occaecat
                            cupidatat non proident, sunt in culpa qui officia
                            deserunt mollit anim id est laborum.
                          </p>
                          <button>Test button</button>
                        </>
                      }
                      handleClose={togglePopup}
                    />
                  )}
                </div>
              </>
            );
        })}

      {/*Decreasing Price*/}
      {selectedSort == "pricedec" &&
        sortedRestaurantArrayDecresasing.map((restaurant) => {
          if (
            selectedCategory == "all" ||
            (restaurant.isPizza && selectedCategory == "pizza") ||
            (restaurant.isDrinks && selectedCategory == "drinks") ||
            (restaurant.isMexican && selectedCategory == "mexican") ||
            (restaurant.isHealthy && selectedCategory == "healthy") ||
            (restaurant.isSeafood && selectedCategory == "seafood") ||
            (restaurant.isBreakfast && selectedCategory == "breakfast") ||
            (restaurant.isDessert && selectedCategory == "dessert") ||
            (restaurant.isItalian && selectedCategory == "italian") ||
            (restaurant.isAmerican && selectedCategory == "american") ||
            (restaurant.isAsian && selectedCategory == "asian") ||
            (restaurant.isIndian && selectedCategory == "indian") ||
            (restaurant.isGetApp && selectedCategory == "get")
          )
            return (
              <>
                <div id="boxes">
                  <div className="restaurantBox" onClick={togglePopup}>
                    <h3>{restaurant.name}</h3>
                  </div>

                  {isOpen && (
                    <Popup
                      content={
                        <>
                          <div className="restaurantTitle">
                          <b> {restaurant.name} </b>
                          </div>
                          <button className="popupButton"> Text Me Directions! </button>
                        </>
                      }
                      handleClose={togglePopup}
                    />
                  )}
                </div>
              </>
            );
        })}
    </div>
  );
}

export default App;
