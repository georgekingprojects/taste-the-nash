import campusbackground from "./campusbackground.png";
import "./App.css";
import Restaurant from "./Restaurant.js";
import React, { useState, useEffect } from "react";
import Select from "react-select";
import { db } from "./firebase";
import "@fontsource/niconne";
import linkedinicon from "./linkedinicon.png";

// JSON data for each restaurant

var ANZIEBLUE = {
  name: "Anzie Blue",
  price: "$$",
  address: "2111 Belcourt Ave, Nashville, TN 37212",
  imgLoc: "anzieblue.png",
  menuUrl: "https://wickedtasty.menu/anzie-blue",
  mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3222.2326147747162!2d-86.80361818478379!3d36.13654908009065!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x886463e5988bf3ed%3A0xaee8505e47112f32!2sAnzie%20Blue!5e0!3m2!1sen!2sus!4v1666505193689!5m2!1sen!2sus",
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
  lat: 36.13661,
  long: -86.80143,
};
var BANHMIANDROLL = {
  name: "Banh Mi and Roll+",
  price: "$",
  address: "1808 20th Ave S Ste 101, Nashville, TN 37212",
  imgLoc: "banhmiroll.png",
  menuUrl: "https://banhmiandrollplus.com/our-menu/",
  mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3222.236339352223!2d-86.80158128478375!3d36.136458380090566!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x886467abb7b11605%3A0x6cf63c224b8c72ee!2sBanh%20mi%20and%20roll%20%2B!5e0!3m2!1sen!2sus!4v1666504563998!5m2!1sen!2sus",
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
  lat: 36.13647,
  long: -86.79941,
};
var BARISTAPARLOR = {
  name: "Barista Parlor",
  price: "$",
  address: "1817 21st Ave S, Nashville, TN 37212",
  imgLoc: "baristaparlor.png",
  menuUrl: "https://baristaparlor.com/menu/",
  mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d25777.891139961313!2d-86.81690220306011!3d36.136457085965226!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x886467d30c25247f%3A0xc0746e0bde21118!2sBarista%20Parlor%20Hillsboro%20Village!5e0!3m2!1sen!2sus!4v1666504620890!5m2!1sen!2sus",
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
  lat: 36.13583,
  long: -86.80112,
};
var BISCUITLOVE = {
  name: "Biscuit Love",
  price: "$$",
  address: "2001 Belcourt Ave Nashville, TN 37212",
  imgLoc: "biscuitlove.png",
  menuUrl: "https://www.biscuitlove.com/menu",
  mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5419.122697370997!2d-86.80339793532193!3d36.13662165747132!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8864669f0694a49d%3A0xdf3d71804ee65e8e!2sBiscuit%20Love%20(Hillsboro%20Village)!5e0!3m2!1sen!2sus!4v1666504687026!5m2!1sen!2sus",
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
  lat: 36.13666,
  long: -86.7997,
};
var CABANATAPS = {
  name: "Cabana Taps",
  price: "$$",
  address: "1910 Belcourt Ave, Nashville, TN 37212",
  imgLoc: "cabanataps.png",
  menuUrl: "https://cabananashville.com/nashville-cabana-taps-food-menu",
  mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3222.2062221954207!2d-86.80140418478369!3d36.137191780090475!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8864669efdbb2bc9%3A0x1aeae9b1f2e469b7!2sCabana%20Taps!5e0!3m2!1sen!2sus!4v1666505316380!5m2!1sen!2sus",
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
  lat: 36.1372,
  long: -86.79921,
};
var CENTRALBBQ = {
  name: "Central BBQ",
  price: "$$",
  address: "1601 21st Ave S, Nashville, TN 37212",
  imgLoc: "centralbbq.png",
  menuUrl: "https://eatcbq.com/",
  mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d51555.302917173416!2d-86.83423499761138!3d36.137186663190676!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x886467d42be9afdb%3A0x170177e243afa13c!2sCentral%20BBQ!5e0!3m2!1sen!2sus!4v1666505431965!5m2!1sen!2sus",
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
  lat: 36.16304,
  long: -86.79086,
};
var GRAINBERRY = {
  name: "Grain & Berry",
  price: "$$",
  address: "1806 20th Ave S, Nashville, TN 37212",
  imgLoc: "grainandberry.png",
  menuUrl: "https://grainandberry.com/menu-2/",
  mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12888.961832346544!2d-86.8081685662711!3d36.13635808144898!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x886467d67b8ff8e5%3A0xc6926d42286215c6!2sGrain%20and%20Berry%20-%20Nashville!5e0!3m2!1sen!2sus!4v1666505536542!5m2!1sen!2sus",
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
  lat: 36.1336,
  long: -86.79942,
};
var THEGRILLEDCHEESERIE = {
  name: "The Grilled Cheeserie",
  price: "$",
  address: "2003 Belcourt Ave, Nashville, TN 37212",
  imgLoc: "grilledcheeserie.png",
  menuUrl: "https://grilledcheeserie.com/view-menu-limited",
  mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12888.914870642659!2d-86.80860906627098!3d36.13664398144795!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8864669f0f41df73%3A0xeb05a6b01eb70b85!2sThe%20Grilled%20Cheeserie!5e0!3m2!1sen!2sus!4v1666505595300!5m2!1sen!2sus",
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
  lat: 36.13671,
  long: -86.79986,
};
var HOPDODDY = {
  name: "Hopdoddy Burger Bar",
  price: "$$",
  address: "1805 21st Ave S, Nashville, TN 37212",
  imgLoc: "hopdoddy.png",
  menuUrl: "https://www.hopdoddy.com/menu",
  mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3222.24308627855!2d-86.80354738478374!3d36.13629408009081!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8864669f9d14186d%3A0x58ca00de34b70864!2sHopdoddy%20Burger%20Bar!5e0!3m2!1sen!2sus!4v1666505830080!5m2!1sen!2sus",
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
  lat: 36.1363,
  long: -86.80136,
};
var JENIS = {
  name: "Jeni's Splendid Ice Creams",
  price: "$$",
  address: "1819 21st Ave S, Nashville, TN 37212",
  imgLoc: "jenis.png",
  menuUrl: "https://jenis.com/collections/all-flavors",
  mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3222.281337072941!2d-86.80368552607776!3d36.13536259106764!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8864642ec2958fdf%3A0x410684f065c72c72!2sJeni&#39;s%20Splendid%20Ice%20Creams!5e0!3m2!1sen!2sus!4v1666505885279!5m2!1sen!2sus",
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
  lat: 36.13576,
  long: -86.80116,
};
var MEETNOODLES = {
  name: "Meet Noodles",
  price: "$$",
  address: "2121 Belcourt Ave, Nashville, TN 37212",
  imgLoc: "meetnoodles.png",
  menuUrl: "https://www.meetnoodlestn.com/menu.aspx",
  mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3222.232272444995!2d-86.8072454726363!3d36.1365574164104!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88646761afc2c73d%3A0x485a16bce2e0764e!2sMeet%20Noodles!5e0!3m2!1sen!2sus!4v1666506001201!5m2!1sen!2sus",
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
  lat: 36.13656,
  long: -86.80275,
};
var NICOLETTOS = {
  name: "Nicoletto's Italian Kitchen",
  price: "$$",
  address: "2123 Belcourt Ave, Nashville, TN 37212",
  imgLoc: "nicolettos.png",
  menuUrl: "https://www.nicolettos.com/pages/italian-kitchen",
  mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3222.2287505683507!2d-86.80513368478375!3d36.136643180090715!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8864678d34af2a7d%3A0x3a4b9f841d4de0b5!2sNicoletto&#39;s%20Italian%20Kitchen%20(Hillsboro%20Village)!5e0!3m2!1sen!2sus!4v1666506039789!5m2!1sen!2sus",
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
  lat: 36.13664,
  long: -86.80295,
};
var SHOKKURAMEN = {
  name: "Shokku Ramen",
  price: "$$",
  address: "2127 Belcourt Ave, Nashville, TN 37212",
  imgLoc: "shokkuramen.png",
  menuUrl: "https://shokkuramen.com/menu-nashville/",
  mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3222.2250588264237!2d-86.80542268478376!3d36.136733080090565!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x886467806feabec1%3A0xdb0cba44760d1417!2sShokku%20Ramen!5e0!3m2!1sen!2sus!4v1666506076959!5m2!1sen!2sus",
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
  lat: 36.13674,
  long: -86.80324,
};
var TACOMAMA = {
  name: "Taco Mama",
  price: "$$",
  address: "1612 21st Ave S, Nashville, TN 37212",
  imgLoc: "tacomama.png",
  menuUrl: "https://tacomamaonline.com/hillsborovillage/",
  mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3222.162072133931!2d-86.80269308478364!3d36.13826688009033!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8864669f3f554c69%3A0xd381289d733de4ad!2sTaco%20Mama%20-%20Hillsboro%20Village!5e0!3m2!1sen!2sus!4v1666506135824!5m2!1sen!2sus",
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
  lat: 36.13827,
  long: -86.8005,
};
var URBANJUICER = {
  name: "The Urban Juicer",
  price: "$$",
  address: "1622 21st Ave S, Nashville, TN 37212",
  imgLoc: "urbanjuicer.png",
  menuUrl: "https://theurbanjuicer.com/our-menu/",
  mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d25777.29700224193!2d-86.81801400305675!3d36.13826558593891!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x886465d4483088c7%3A0x4a92ab2b83b9175d!2sThe%20Urban%20Juicer!5e0!3m2!1sen!2sus!4v1666506278245!5m2!1sen!2sus",
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
  lat: 36.13811,
  long: -86.80062,
};
var CHUYS = {
  name: "Chuy's",
  price: "$$",
  address: "1901 Broadway, Nashville, TN 37203",
  imgLoc: "chuys.png",
  menuUrl: "https://www.chuys.com/menu/food",
  mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d103109.21647707302!2d-86.87054452933361!3d36.13824392283513!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88646693f112417b%3A0xa2777f58e9d6bed7!2sChuy&#39;s!5e0!3m2!1sen!2sus!4v1666506331023!5m2!1sen!2sus",
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
  lat: 36.15057,
  long: -86.79641,
};
var DONATOSPIZZA = {
  name: "Donatos Pizza",
  price: "$$",
  address: "1915 Broadway, Nashville, TN 37203",
  imgLoc: "donatos.png",
  menuUrl: "https://www.donatos.com/location?redirect=/menu/pizza",
  mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d103109.27009411149!2d-86.87054462166945!3d36.1382031223559!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88646696a9ce94e7%3A0x5df48710e218ef71!2sDonatos%20Pizza!5e0!3m2!1sen!2sus!4v1666506413828!5m2!1sen!2sus",
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
  lat: 36.1499,
  long: -86.79748,
};
var HELENSHOTCHICKEN = {
  name: "Helen's Hot Chicken",
  price: "$",
  address: "2010 Scarritt Pl, Nashville, TN 37203",
  imgLoc: "helenshotchicken.png",
  menuUrl: "https://www.helenshotchicken.com/menus/",
  mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2709.211828069792!2d-86.80141232535799!3d36.14674227048738!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8864679b74c1897f%3A0xd12eeeeb8b287f2b!2sHelen&#39;s%20Hot%20Chicken!5e0!3m2!1sen!2sus!4v1666506510131!5m2!1sen!2sus",
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
  lat: 36.14615043397751,
  long: -86.79895700650803,
};
var MELLOWMUSHROOM = {
  name: "Mellow Mushroom",
  price: "$$",
  address: "212 21st Ave S, Nashville, TN 37203",
  imgLoc: "mellowmushroom.png",
  menuUrl: "https://mellowmushroom.com/menu/",
  mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d25774.512279301394!2d-86.81708147148412!3d36.1467409820457!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88646696f3546719%3A0x9043bdfd1e56441f!2sMellow%20Mushroom%20Nashville%20-%20Vanderbilt!5e0!3m2!1sen!2sus!4v1666506544325!5m2!1sen!2sus",
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
  lat: 36.147508570892555,
  long: -86.79907582318071,
};
var NADA = {
  name: "Nada",
  price: "$$",
  address: "202 21st Ave S Nashville, TN 37203",
  imgLoc: "nada.png",
  menuUrl: "https://www.eatdrinknada.com/location/nashville/",
  mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3221.757556147578!2d-86.80126868478338!3d36.14811598008804!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88646696f46ef19f%3A0x73a2c29f0c505f7c!2sNada!5e0!3m2!1sen!2sus!4v1666506597957!5m2!1sen!2sus",
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
  lat: 36.14811596635937,
  long: -86.7990791616437,
};
var THEAINSWORTH = {
  name: "The Ainsworth",
  price: "$$",
  address: "206 21st Ave S, Nashville, TN 37203",
  imgLoc: "ainsworth.png",
  menuUrl: "https://www.the-ainsworth.com/nashville-menu/",
  mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3221.7713166190815!2d-86.80132458478337!3d36.147780980088044!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88646738903d65d9%3A0xcca0b78c1f94fcdf!2sThe%20Ainsworth%20-%20Nashville!5e0!3m2!1sen!2sus!4v1666506627909!5m2!1sen!2sus",
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
  lat: 36.14778525953427,
  long: -86.79913119699204,
};
var SARABHASCREAMERY = {
  name: "Sarabha's Creamery",
  price: "$$",
  address: "400 21st Ave S suite 201, Nashville, TN 37203",
  imgLoc: "sarabhas.png",
  menuUrl: "https://sarabhascreamery.com/typography/",
  mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3221.7906740760495!2d-86.80336247263367!3d36.14730971640036!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8864675e5baaf697%3A0x73b3368b7a488038!2sSarabhas%20creamery!5e0!3m2!1sen!2sus!4v1666506691761!5m2!1sen!2sus",
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
  lat: 36.147307658898065,
  long: -86.79887693767307,
};
var THESLIDERHOUSE = {
  name: "The Slider House",
  price: "$$",
  address: "1907 Division St, Nashville, TN 37203",
  imgLoc: "sliderhouse.png",
  menuurl: "https://sliderhousensh.com/#menu",
  mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3221.684504683849!2d-86.79852198478326!3d36.14989438008769!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88646693fe10fc69%3A0xae556a43976fa75c!2sThe%20Slider%20House!5e0!3m2!1sen!2sus!4v1666513264918!5m2!1sen!2sus",
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
  lat: 36.149951929734684,
  long: -86.79629631155957,
};
var URBANCOOKHOUSE = {
  name: "Urban Cookhouse",
  price: "$$",
  address: "1907 Broadway, Nashville, TN 37203",
  imgLoc: "urbancookhouse.png",
  menuUrl: "https://www.urbancookhouse.com/category/full-menu/?post_type=menu",
  mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3221.6606089489933!2d-86.79812389925975!3d36.15047609295999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88646693f8496fc1%3A0x8d088dc3048734f0!2sUrban%20Cookhouse!5e0!3m2!1sen!2sus!4v1666506813347!5m2!1sen!2sus",
  isGetApp: true,
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
  lat: 36.15048579947603,
  long: -86.796838959506,
};
var BOMBAYPALACE = {
  name: "Bombay Palace",
  price: "$$",
  address: "2912 West End Ave, Nashville, TN 37203",
  imgLoc: "bombaypalace.png",
  menuUrl: "https://bobmaypalacenashville.com/menu/",
  mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3221.9057553003977!2d-86.81828367263441!3d36.14450791640302!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x886466afdbb2ec61%3A0xc4e81bde3db3c442!2sBombay%20Palace!5e0!3m2!1sen!2sus!4v1666506879908!5m2!1sen!2sus",
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
  lat: 36.144499520729696,
  long: -86.81379776273519,
};
var CHILIS = {
  name: "Chili's Grill & Bar",
  price: "$$",
  address: "2322 West End Ave, Nashville, TN 37203",
  imgLoc: "chilis.png",
  menuUrl: "https://www.chilis.com/menu",
  mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3221.7516822411226!2d-86.80860268478344!3d36.14825898008813!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x886466bc71b28307%3A0xbd311da80d8dc64e!2sChili&#39;s%20Grill%20%26%20Bar!5e0!3m2!1sen!2sus!4v1666506918101!5m2!1sen!2sus",
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
  lat: 36.14822621649832,
  long: -86.80638720179039,
};
var INCHINSBAMBOOGARDEN = {
  name: "Inchin's Bamboo Garden",
  price: "$$",
  address: "1800 West End Ave, Nashville, TN 37203",
  imgLoc: "inchins.png",
  menuUrl: "https://bamboo-gardens.com/menu/",
  mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3221.55167812961!2d-86.79848838478328!3d36.153127780086905!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88646693707b7ec1%3A0x7893ca35011981b4!2sInchin&#39;s%20Bamboo%20Garden!5e0!3m2!1sen!2sus!4v1666506978957!5m2!1sen!2sus",
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
  lat: 36.15366230737689,
  long: -86.79444030781157,
};
var CRABFEVER = {
  name: "Crab Fever",
  price: "$$",
  address: "1907 West End Ave, Nashville, TN 37203",
  imgLoc: "crabfever.png",
  menuUrl: "https://www.crabfever.com/#menu-section",
  mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3221.607017612114!2d-86.80007448478327!3d36.15178068008725!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8864678a7bd8023d%3A0xdb4cbc187f8fab3a!2sCrab%20Fever%20Nashville!5e0!3m2!1sen!2sus!4v1666507011446!5m2!1sen!2sus",
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
  lat: 36.15186415827151,
  long: -86.79793149540174,
};
var FABLE = {
  name: "Fable Lounge",
  price: "$$",
  address: "114 28th Ave N, Nashville, TN 37203",
  imgLoc: "fable.png",
  menuUrl: "https://www.fablelounge.restaurant/menu",
  mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3221.8380374758717!2d-86.81724147263398!3d36.14615661640138!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x886466b012deaaab%3A0x149f08393ffb8fab!2sFable%20Lounge!5e0!3m2!1sen!2sus!4v1666507154039!5m2!1sen!2sus",
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
  lat: 36.14613961265017,
  long: -86.81273230847562,
};
var KOISUSHI = {
  name: "Koi Sushi & Thai",
  price: "$$",
  address: "2214 Elliston Pl, Nashville, TN 37203",
  imgLoc: "koisushi.png",
  menuUrl: "https://www.talech.com/biz/619853/Koi-Sushi-Thai-East-Llc-Nashville-TN#/menu",
  mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3831.270457419076!2d-86.80743529252204!3d36.1494783682196!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8864673f28810e89%3A0x7610859de290c950!2sKoi%20Sushi%20%26%20Thai%20Midtown!5e0!3m2!1sen!2sus!4v1666507246590!5m2!1sen!2sus",
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
  lat: 36.15099404666151,
  long: -86.80486703767974,
};
var PAPAJOHNS = {
  name: "Papa Johns Pizza",
  price: "$",
  address: "2316 West End Ave, Nashville, TN 37203",
  imgLoc: "papajohns.png",
  menuUrl: "https://www.papajohns.com/order/menu",
  mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d51547.2288650928!2d-86.83985198358545!3d36.14947324237286!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x886466bc692400f3%3A0xed3b471aebfb1697!2sPapa%20Johns%20Pizza!5e0!3m2!1sen!2sus!4v1666507341752!5m2!1sen!2sus",
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
  lat: 36.148323832894704,
  long: -86.80598393036196,
};
var SITARINDIAN = {
  name: "Sitar Indian Restaurant",
  price: "$$",
  address: "116 21st Ave N, Nashville, TN 37203",
  imgLoc: "sitar.png",
  menuUrl: "https://www.sitarindiannashville.com/menu.aspx",
  mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3221.630884807468!2d-86.80372398478328!3d36.15119968008745!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x886467498c3f27e9%3A0xc343d609dc1e13ce!2sSitar%20Indian%20Cuisine!5e0!3m2!1sen!2sus!4v1666507380641!5m2!1sen!2sus",
  isGetApp: true,
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
  lat: 36.15120857083662,
  long: -86.80154298729808,
};
var SUNANDFORK = {
  name: "Sun & Fork",
  price: "$$",
  address: "2525 West End Ave, Nashville, TN 37203",
  imgLoc: "sunandfork.png",
  menuUrl: "https://sunandfork.com/menu/",
  mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3221.854331563826!2d-86.81295467263405!3d36.145759916401886!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x886467f8cce1acaf%3A0x2cf8efbd204745f1!2sSun%20%26%20Fork!5e0!3m2!1sen!2sus!4v1666507497991!5m2!1sen!2sus",
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
  lat: 36.14573771959386,
  long: -86.80846163155606,
};
var WENDYS = {
  name: "Wendy's",
  price: "$",
  address: "2603 West End Ave, Nashville, TN 37203",
  imgLoc: "wendys.png",
  menuUrl: 'https://order.wendys.com/categories?site=menu',
  mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d51549.67266807636!2d-86.84578547892235!3d36.1457547990152!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x886466badd0420f3%3A0x4c748060902ea1e0!2sWendy&#39;s!5e0!3m2!1sen!2sus!4v1666507535365!5m2!1sen!2sus",
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
  lat: 36.14567,
  long: -86.81002,
};
var CAFECOCO = {
  name: "Cafe Coco",
  price: "$",
  address: "210 Louise Ave, Nashville, TN 37203",
  imgLoc: "cafecoco.png",
  menuUrl: "https://www.cafecoco.com/menu-items",
  mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3221.6010363835244!2d-86.8071377847833!3d36.15192628008725!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x886466beee104c83%3A0xf4fc9520f4897f45!2sCaf%C3%A9%20Coco%20-%20Elliston%20Place!5e0!3m2!1sen!2sus!4v1666507631207!5m2!1sen!2sus",
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
  lat: 36.1519186970644,
  long: -86.80495572129875,
};
var ELLISTONPLACESODASHOP = {
  name: "Elliston Place Soda Shop",
  price: "$",
  address: "2105 Elliston Pl, Nashville, TN 37203",
  imgLoc: "ellistonplace.png",
  menuUrl: "https://www.ellistonplacesodashop.com/menu",
  mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3221.6055716027163!2d-86.80550998478324!3d36.151815880087234!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x886466be43725bd3%3A0xa250d22cbd81d978!2sElliston%20Place%20Soda%20Shop!5e0!3m2!1sen!2sus!4v1666507721246!5m2!1sen!2sus",
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
  lat: 36.15182635764799,
  long: -86.80338036576215,
};
var FRUTTABOWLS = {
  name: "Frutta Bowls",
  price: "$$",
  address: "2424 Elliston Pl, Nashville, TN 37203",
  imgLoc: "fruttabowl.png",
  menuUrl: "https://fruttabowls.com/",
  mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d51545.69250941223!2d-86.83834079102705!3d36.15181076235519!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x886467a23347e751%3A0xc6abc7b4dcb381d3!2sFrutta%20Bowls!5e0!3m2!1sen!2sus!4v1666507782000!5m2!1sen!2sus",
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
  lat: 36.1481379725879,
  long: -86.8083653701096,
};
var ILOVESUSHI = {
  name: "I Love Sushi",
  price: "$$",
  address: "2300 Elliston Pl, Nashville, TN 37203",
  imgLoc: "ilovesushi.png",
  menuUrl: "https://www.ilovesushinashville.com/menu",
  mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3221.67563182504!2d-86.80792218478335!3d36.150110380087604!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x886467d9797ef477%3A0x6e59e4d8d9b2aa40!2sI%20Love%20Sushi!5e0!3m2!1sen!2sus!4v1666507832902!5m2!1sen!2sus",
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
  lat: 36.150061440899464,
  long: -86.80574469875738,
};
var JAMBA = {
  name: "Jamba",
  price: "$",
  address: "2314 Elliston Pl, Nashville, TN 37203",
  imgLoc: "jamba.png",
  menuUrl: "https://www.jamba.com/menu#menu",
  mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d51546.8134727686!2d-86.84075299103972!3d36.150105262452755!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x886466bc1f648c7b%3A0x1bd8562fbaa90553!2sJamba!5e0!3m2!1sen!2sus!4v1666508315891!5m2!1sen!2sus",
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
  lat: 36.149652532194395,
  long: -86.8064012849776,
};
var JETSPIZZA = {
  name: "Jet's Pizza",
  price: "$",
  address: "214 25th Ave N, Nashville, TN 37203",
  imgLoc: "jetspizza.png",
  menuUrl: "https://orderjets.hungerrush.com/Order/Menu/138#pizza",
  mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d51546.82017372216!2d-86.84075302145044!3d36.15009506701692!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x886466bc0b9b84bb%3A0x9cb6928c719ff648!2sJet&#39;s%20Pizza!5e0!3m2!1sen!2sus!4v1666508396370!5m2!1sen!2sus",
  isGetApp: true,
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
  lat: 36.14852364818687,
  long: -86.8090601700091,
};
var MICHAELANGELOSPIZZA = {
  name: "Michaelangelo's Pizza",
  price: "$",
  address: "205 22nd Ave N, Nashville, TN 37203",
  imgLoc: "michaelangelo.png",
  menuUrl: "https://www.mymichaelangelospizza.com/",
  mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3221.606095932885!2d-86.80856117263255!3d36.15180311639613!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x886466be435f2729%3A0xc9aec4da7f476a9c!2sMichaelangelo&#39;s%20Pizza%20-%20Nashville%20Midtown!5e0!3m2!1sen!2sus!4v1666508429881!5m2!1sen!2sus",
  isGetApp: true,
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
  lat: 36.15180412888943,
  long: -86.80403482470817,
};
var OSCARSTACOSHOP = {
  name: "Oscar's Taco Shop",
  price: "$",
  address: "2323 Elliston Pl, Nashville, TN 37203",
  imgLoc: "oscarstacoshop.png",
  menuUrl: "https://www.toasttab.com/oscars-taco-shop-vandy-2323-elliston-place/v3/",
  mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d25772.84919283532!2d-86.82388209088118!3d36.15180182204951!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88646740c3800c29%3A0x3daf1389b6c0a667!2sOscar&#39;s%20Taco%20Shop%20at%20Vandy!5e0!3m2!1sen!2sus!4v1666508472977!5m2!1sen!2sus",
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
  lat: 36.148860390079754,
  long: -86.80625266871377,
};
var POKEBROS = {
  name: "Poke Bros",
  price: "$$",
  address: "2414 Elliston Pl, Nashville, TN 37203",
  imgLoc: "pokebros.png",
  menuUrl: "https://eatpokebros.com/menu/",
  mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3221.750123955634!2d-86.81258597263344!3d36.148296916399346!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x886467e627ac011f%3A0x4bcb7a16d4770890!2sPoke%20Bros.!5e0!3m2!1sen!2sus!4v1666508517490!5m2!1sen!2sus",
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
  lat: 36.14830317479013,
  long: -86.80811755643651,
};
var ROMAPIZZAANDPASTA = {
  name: "Roma Pizza & Pasta",
  price: "$",
  address: "2418 Elliston Pl, Nashville, TN 37203",
  imgLoc: "romapizza.png",
  menuUrl: "https://www.romapizzanashvilletn.com/",
  mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d103079.26143234422!2d-86.91918149904042!3d36.16103232928812!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x886466bbbd7bf3db%3A0xbf82e0cfea110e40!2sRoma%20Pizza%20%26%20Pasta!5e0!3m2!1sen!2sus!4v1666508594438!5m2!1sen!2sus",
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
  lat: 36.14828,
  long: -86.808225,
};
var SATAYTHAIGRILL = {
  name: "Satay Thai Grill",
  price: "$",
  address: "2412 Elliston Pl, Nashville, TN 37203",
  imgLoc: "satay.png",
  menuUrl: "https://www.thaisataynashville.com/menu",
  mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3221.7498446362392!2d-86.81250777263342!3d36.14830371639948!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x886466bb8e8b3493%3A0x9476f99a805a80cd!2sThai%20Satay!5e0!3m2!1sen!2sus!4v1666508637009!5m2!1sen!2sus",
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
  lat: 36.148266500874314,
  long: -86.80799961688714,
};
var SWEETDOTS = {
  name: "Sweet Dots",
  price: "$$",
  address: "2217 Elliston Pl, Nashville, TN 37203",
  imgLoc: "sweetdots.png",
  menuUrl: "https://www.sweetdots.com/menu",
  mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3221.6299235533434!2d-86.80619608478334!3d36.151223080087405!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x886467e210407c0b%3A0x488fc534226db8a!2sSweet%20Dots!5e0!3m2!1sen!2sus!4v1666508669833!5m2!1sen!2sus",
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
  lat: 36.15125,
  long: -86.804,
};
var JPCAFE = {
  name: "JP Cafe",
  price: "$$",
  address: "41 Peabody St, Nashville, TN 37210",
  imgLoc: "jpcafe.png",
  menuUrl: "https://www.ubereats.com/store/jp-cafe/IfJDzVHRSxS3mdPCNZbhlg",
  mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3221.3598062860146!2d-86.77073128478314!3d36.157798080085904!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8864679547a66b37%3A0xbe0a8909627ebb3!2sJP%20Cafe!5e0!3m2!1sen!2sus!4v1666508717352!5m2!1sen!2sus",
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
  lat: 36.15784949442509,
  long: -86.76858508040135,
};
var HOLYSMOKES = {
  name: "Holy Smokes",
  price: "$",
  address: "300 24th Ave S, Nashville, TN 37212",
  imgLoc: "holysmokes.png",
  menuUrl: "http://holysmokesbbqoftn.letseat.at/menu",
  mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2278.228608312787!2d-86.80610242786256!3d36.14460431224727!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8864672094fc4e85%3A0x7b7f16a2e042b30f!2sHoly%20Smokes%20Kosher!5e0!3m2!1sen!2sus!4v1666508766949!5m2!1sen!2sus",
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
  lat: 36.14464077446511,
  long: -86.80405703399119,
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
  { value: "breakfast", label: "Breakfast" },
  { value: "dessert", label: "Dessert" },
  { value: "drinks", label: "Drinks" },
  { value: "seafood", label: "Seafood" },
  { value: "pizza", label: "Pizza" },
  { value: "mexican", label: "Mexican" },
  { value: "american", label: "American" },
  { value: "italian", label: "Italian" },
  { value: "asian", label: "East Asian" },
  { value: "indian", label: "Indian" },
  { value: "healthy", label: "Healthy" },
  { value: "get", label: "Available on GET App" },
];

//options for sorts
const sortOptions = [
  { value: "price", label: "Price (increasing)" },
  { value: "pricedec", label: "Price (decreasing)" },
];

function App() {
  //state for categories
  const [selectedCategory, setSelectedCategory] = useState("all");
  //state for sort by
  const [selectedSort, setSelectedSort] = useState("price");
  //states for user lat and long
  const [userLat, setUserLat] = useState(null);
  const [userLong, setUserLong] = useState(null);

  // Retriving the user's current latitude and longitude
  useEffect(() => {
    if ("geolocation" in navigator) {
      console.log("Available");
      navigator.geolocation.getCurrentPosition(function (position) {
        setUserLat(position.coords.latitude);
        setUserLong(position.coords.longitude);
        console.log("Latitude is :", position.coords.latitude);
        console.log("Longitude is :", position.coords.longitude);
      });
    } else {
      console.log("Not Available");
    }
  }, []);

  return (
    <div className="App">
      {/* Top-left hamburger menu side bar */}
      <div class="hamburger-menu">
        <input id="menu__toggle" type="checkbox" />
        <label class="menu__btn" for="menu__toggle">
          <span></span>
        </label>
        <h1 id="title">Taste the Nash</h1>
        <div id="taste"></div>
        <ul class="menu__box">
          <li>
            <a class="menu__item" href="#top">
              Home
            </a>
          </li>
          <li>
            <a class="menu__item" href="#sortSection">
              Sort
            </a>
          </li>
          <li>
            <a class="menu__item" href="#aboutUsSection">
              About
            </a>
          </li>
        </ul>
      </div>
      {/* Main Google map with restaurant markers */}
      <div id="things">
        <iframe
          src="https://www.google.com/maps/d/u/0/embed?mid=11MSZMur_QnNCaeMNLguURSVG0_dRA5E&ehbc=2E312F"
          width="1000rem"
          height="700rem"
          href="map"
        ></iframe>
      </div>

      {/*Restaurant component stuff*/}
      <div id="dropdowns">
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
          <h2 id="sortSection">Sort by</h2>
          <Select
            defaultValue={selectedSort}
            onChange={(v) => {
              setSelectedSort(v.value);
            }}
            options={sortOptions}
          />
        </div>
      </div>

      {/*Increasing Price*/}
      {selectedSort == "price" &&
        sortedRestaurantArray.map((restaurant) => {
          if (
            selectedCategory == "all" ||
            (restaurant.isBreakfast && selectedCategory == "breakfast") ||
            (restaurant.isDrinks && selectedCategory == "drinks") ||
            (restaurant.isSeafood && selectedCategory == "seafood") ||
            (restaurant.isPizza && selectedCategory == "pizza") ||
            (restaurant.isMexican && selectedCategory == "mexican") ||
            (restaurant.isItalian && selectedCategory == "italian") ||
            (restaurant.isAmerican && selectedCategory == "american") ||
            (restaurant.isAsian && selectedCategory == "asian") ||
            (restaurant.isIndian && selectedCategory == "indian") ||
            (restaurant.isHealthy && selectedCategory == "healthy") ||
            (restaurant.isDessert && selectedCategory == "dessert") ||
            (restaurant.isGetApp && selectedCategory == "get")
          )
            return (
              <div className="bottomBoxes">
                <Restaurant
                  name={restaurant.name}
                  restaurant={restaurant}
                  userLat={userLat}
                  userLong={userLong}
                  menu={restaurant.menuUrl}
                  mapUrl={restaurant.mapUrl}
                />
              </div>
            );
        })}

      {/*Decreasing Price*/}
      {selectedSort == "pricedec" &&
        sortedRestaurantArrayDecresasing.map((restaurant) => {
          if (
            selectedCategory == "all" ||
            (restaurant.isBreakfast && selectedCategory == "breakfast") ||
            (restaurant.isDrinks && selectedCategory == "drinks") ||
            (restaurant.isSeafood && selectedCategory == "seafood") ||
            (restaurant.isPizza && selectedCategory == "pizza") ||
            (restaurant.isMexican && selectedCategory == "mexican") ||
            (restaurant.isItalian && selectedCategory == "italian") ||
            (restaurant.isAmerican && selectedCategory == "american") ||
            (restaurant.isAsian && selectedCategory == "asian") ||
            (restaurant.isIndian && selectedCategory == "indian") ||
            (restaurant.isHealthy && selectedCategory == "healthy") ||
            (restaurant.isDessert && selectedCategory == "dessert") ||
            (restaurant.isGetApp && selectedCategory == "get")
          )
            return (
              <div className="bottomBoxes">
                <Restaurant
                  name={restaurant.name}
                  restaurant={restaurant}
                  userLat={userLat}
                  userLong={userLong}
                  menu={restaurant.menuUrl}
                  mapUrl={restaurant.mapUrl}
                />
              </div>
            );
        })}

      {/* "About Us" section at the bottom of the page */}
      <div className="breakFoot"></div>
      <div className="aboutUs">
        <p className="fillerText">About Us</p>
      </div>
      <div className="aboutUsTitle" id="aboutUsSection">
      about us 
      </div>
      <div className="aboutUsBody">
      <div className="initials">KT:</div>
        <img className="linkedin" src={linkedinicon} />
        <div className="initials">GW:</div>
        <img className="linkedin" src={linkedinicon}/>
        <p className="aboutUsText">
          This project was envisioned and built by <br></br>
          Kiera Thomas, George Wang, Sarah Besser, and Justin Munoz <br></br>
          during VandyHacks IX. Connect with us on LinkedIn!
        </p>
        <div className="initials">SB:</div>
        <img className="linkedin" src={linkedinicon}/>
        <div className="initials">JM:</div>
        <img className="linkedin" src={linkedinicon}/>
      </div>
    </div>
  );
}

export default App;
