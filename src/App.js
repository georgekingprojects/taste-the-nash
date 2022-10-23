import campusbackground from "./campusbackground.png";
import "./App.css";
import Restaurant from "./Restaurant.js";
import React, { useState, useEffect } from "react";
import Select from "react-select";
import { db } from "./firebase";
import "@fontsource/niconne";

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
  menuUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5419.122697370997!2d-86.80339793532193!3d36.13662165747132!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8864669f0694a49d%3A0xdf3d71804ee65e8e!2sBiscuit%20Love%20(Hillsboro%20Village)!5e0!3m2!1sen!2sus!4v1666504687026!5m2!1sen!2sus",
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
  name: "Donato's Pizza",
  price: "$$",
  address: "1915 Broadway, Nashville, TN 37203",
  imgLoc: "donatos.png",
  menuUrl: "https://www.donatos.com/location?redirect=/menu/pizza",
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
  name: "Papa John's Pizza",
  price: "$",
  address: "2316 West End Ave, Nashville, TN 37203",
  imgLoc: "papajohns.png",
  menuUrl: "https://www.papajohns.com/order/menu",
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
  menuUrl: "https://www.cafecoco.com/menu-items",
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
  memuUrl: "https://fruttabowls.com/",
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
  //state for categories
  const [selectedCategory, setSelectedCategory] = useState("all");
  //state for sort by
  const [selectedSort, setSelectedSort] = useState("price");
  //states for user lat and long
  const [userLat, setUserLat] = useState(null);
  const [userLong, setUserLong] = useState(null);

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
      <div class="hamburger-menu">
        <input id="menu__toggle" type="checkbox" />
        <label class="menu__btn" for="menu__toggle">
          <span></span>
        </label>
        <h1 id="title">Taste the Nash</h1>
      <div id="taste"></div>
      <ul class="menu__box">
        <li><a class="menu__item" href="#top">Home</a></li>
        <li><a class="menu__item" href="#sortSection">Sort</a></li>
        <li><a class="menu__item" href="#aboutUsSection">About</a></li>
      </ul>
      </div>
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
              <div className="bottomBoxes">
                <Restaurant
                  name={restaurant.name}
                  restaurant={restaurant}
                  userLat={userLat}
                  userLong={userLong}
                  menu={restaurant.menuUrl}
                />
              </div>
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
              <div className="bottomBoxes">
                <Restaurant
                  name={restaurant.name}
                  restaurant={restaurant}
                  userLat={userLat}
                  userLong={userLong}
                  menu={restaurant.menuUrl}
                />
              </div>
            );
        })}


        <div className="breakFoot">
        </div>
        <div className="aboutUs">
        <p className="fillerText">
            About Us
            </p>
          </div>
          <div className="aboutUsTitle" id="aboutUsSection">
              about us
          </div>
          <div className="aboutUsBody">
            <div className="rectangle"> 
              textinside rec
            </div>
          </div>
      </div>
  
  );
}

export default App;
