import Popup from "./Popup.js";
import React, { useState, useEffect } from "react";
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import {
  doc,
  setDoc,
  addDoc,
  collection,
  query,
  where,
  getDocs,
} from "firebase/firestore";
import { db } from "./firebase";

function Restaurant(props) {
  const [isOpen, setIsOpen] = useState(false);

  const [name, setName] = useState("");
  const [review, setReview] = useState("");
  const [reviews, setReviews] = useState([]);

  const [seeReviews, setSeeReviews] = useState(false);
  const [buttonText, setButtonText] = useState("Show Recommendations");

  {/* Calculating distance from restaurants using latitude and longitude */}
  let lat2 = 0;
  let long2 = 0;
  let d = null;
  if (
    props.restaurant.lat &&
    props.restaurant.long &&
    props.userLat &&
    props.userLong
  ) {
    lat2 = props.restaurant.lat / 57.29577951;
    long2 = props.restaurant.long / 57.29577951;
    d =
      Math.round(
        3963.0 *
          Math.acos(
            Math.sin(props.userLat / 57.29577951) * Math.sin(lat2) +
              Math.cos(props.userLat / 57.29577951) *
                Math.cos(lat2) *
                Math.cos(long2 - props.userLong / 57.29577951)
          ) *
          10
      ) / 10;
  }

  const togglePopup = () => {
    setIsOpen(!isOpen);
  };

  async function readReviews() {
    let str = props.name;
    str = str.replace(/\s+/g, "");
    str = str.toLowerCase();

    const q = query(collection(db, str));

    const querySnapshot = await getDocs(q);
    let items = await [];
    await querySnapshot.forEach((doc) => {
      items.push(doc.data());
    });

    await setReviews(items);
  }

  async function handleSubmit(e) {
    e.preventDefault();

    if (name == "") {
      alert("Please include a name!");
      return;
    }

    if (review == "") {
      alert("Please leave a review!");
      return;
    }

    let str = props.name;
    str = str.replace(/\s+/g, "");
    str = str.toLowerCase();

    await addDoc(collection(db, str), {
      name: name,
      review: review,
    });

    setName("");
    setReview("");
  }

  useEffect(() => {
    //readReviews();
    if (seeReviews) {
      readReviews();
    }
  }, [seeReviews]);

  return (
    <div id="boxes">
      <div className="restaurantBox" onClick={togglePopup}>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-evenly",
            marginTop: "-10px",
          }}
        >
          {/* Icons for each restaurant in the blue boxes */}
          <img
            class="imgOnBox"
            src={
              props.name == "The Ainsworth"
                ? require("./imgfiles/ainsworth.png")
                : props.name == "Anzie Blue"
                ? require("./imgfiles/anzieblue.png")
                : props.name == "Banh Mi and Roll+"
                ? require("./imgfiles/banhmiroll.png")
                : props.name == "Barista Parlor"
                ? require("./imgfiles/baristaparlor.jpg")
                : props.name == "Biscuit Love"
                ? require("./imgfiles/biscuitlove.png")
                : props.name == "Bombay Palace"
                ? require("./imgfiles/bombaypalace.png")
                : props.name == "Cabana Taps"
                ? require("./imgfiles/cabanataps.png")
                : props.name == "Cafe Coco"
                ? require("./imgfiles/cafecoco.png")
                : props.name == "Central BBQ"
                ? require("./imgfiles/centralbbq.png")
                : props.name == "Chili's Grill & Bar"
                ? require("./imgfiles/chilis.png")
                : props.name == "Chuy's"
                ? require("./imgfiles/chuys.png")
                : props.name == "Crab Fever"
                ? require("./imgfiles/crabfever.png")
                : props.name == "Donato's Pizza"
                ? require("./imgfiles/donatos.png")
                : props.name == "Elliston Place Soda Shop"
                ? require("./imgfiles/ellistonplace.png")
                : props.name == "Fable Lounge"
                ? require("./imgfiles/fable.png")
                : props.name == "Frutta Bowls"
                ? require("./imgfiles/fruttabowl.png")
                : props.name == "Grain & Berry"
                ? require("./imgfiles/grainandberry.png")
                : props.name == "The Grilled Cheeserie"
                ? require("./imgfiles/grilledcheeserie.png")
                : props.name == "Helen's Hot Chicken"
                ? require("./imgfiles/helenshotchicken.png")
                : props.name == "Holy Smokes"
                ? require("./imgfiles/holysmokes.png")
                : props.name == "Hopdoddy Burger Bar"
                ? require("./imgfiles/hopdoddy.png")
                : props.name == "I Love Sushi"
                ? require("./imgfiles/ilovesushi.png")
                : props.name == "Inchin's Bamboo Garden"
                ? require("./imgfiles/inchins.png")
                : props.name == "Jamba"
                ? require("./imgfiles/jamba.png")
                : props.name == "Jeni's Splendid Ice Creams"
                ? require("./imgfiles/jenis.png")
                : props.name == "Jet's Pizza"
                ? require("./imgfiles/jetspizza.png")
                : props.name == "JP Cafe"
                ? require("./imgfiles/jpcafe.png")
                : props.name == "Koi Sushi & Thai"
                ? require("./imgfiles/koisushi.jpeg")
                : props.name == "JP Cafe"
                ? require("./imgfiles/jpcafe.png")
                : props.name == "Meet Noodles"
                ? require("./imgfiles/meetnoodles.png")
                : props.name == "Mellow Mushroom"
                ? require("./imgfiles/mellowmushroom.png")
                : props.name == "Michaelangelo's Pizza"
                ? require("./imgfiles/michaelangelo.png")
                : props.name == "Nada"
                ? require("./imgfiles/nada.png")
                : props.name == "Nicoletto's Italian Kitchen"
                ? require("./imgfiles/nicolettos.png")
                : props.name == "Oscar's Taco Shop"
                ? require("./imgfiles/oscarstacoshop.png")
                : props.name == "Papa John's Pizza"
                ? require("./imgfiles/papajohns.png")
                : props.name == "Poke Bros"
                ? require("./imgfiles/pokebros.png")
                : props.name == "Roma Pizza & Pasta"
                ? require("./imgfiles/romapizza.png")
                : props.name == "Sarabha's Creamery"
                ? require("./imgfiles/sarabhas.png")
                : props.name == "Satay Thai Grill"
                ? require("./imgfiles/satay.png")
                : props.name == "Shokku Ramen"
                ? require("./imgfiles/shokkuramen.png")
                : props.name == "Sitar Indian Restaurant"
                ? require("./imgfiles/sitar.png")
                : props.name == "The Slider House"
                ? require("./imgfiles/sliderhouse.png")
                : props.name == "Sun & Fork"
                ? require("./imgfiles/sunandfork.png")
                : props.name == "Sweet Dots"
                ? require("./imgfiles/sweetdots.png")
                : props.name == "Taco Mama"
                ? require("./imgfiles/tacomama.png")
                : props.name == "Urban Cookhouse"
                ? require("./imgfiles/urbancookhouse.png")
                : props.name == "The Urban Juicer"
                ? require("./imgfiles/urbanjuicer.png")
                : props.name == "Wendy's"
                ? require("./imgfiles/wendys.png")
                : "None"
            }
          />
          <h3>
            {props.name}
            <br />
            {d && <p style={{ fontSize: 12 }}>Distance: {d} miles</p>}
          </h3>
        </div>
      </div>

      {isOpen && (
        <Popup
          content={
            <>
            {/* Icons for each restaurant in the pop-up boxes */}
              <img
                class="popupImg"
                src={
                  props.name == "The Ainsworth"
                    ? require("./imgfiles/ainsworth.png")
                    : props.name == "Anzie Blue"
                    ? require("./imgfiles/anzieblue.png")
                    : props.name == "Banh Mi and Roll+"
                    ? require("./imgfiles/banhmiroll.png")
                    : props.name == "Barista Parlor"
                    ? require("./imgfiles/baristaparlor.jpg")
                    : props.name == "Biscuit Love"
                    ? require("./imgfiles/biscuitlove.png")
                    : props.name == "Bombay Palace"
                    ? require("./imgfiles/bombaypalace.png")
                    : props.name == "Cabana Taps"
                    ? require("./imgfiles/cabanataps.png")
                    : props.name == "Cafe Coco"
                    ? require("./imgfiles/cafecoco.png")
                    : props.name == "Central BBQ"
                    ? require("./imgfiles/centralbbq.png")
                    : props.name == "Chili's Grill & Bar"
                    ? require("./imgfiles/chilis.png")
                    : props.name == "Chuy's"
                    ? require("./imgfiles/chuys.png")
                    : props.name == "Crab Fever"
                    ? require("./imgfiles/crabfever.png")
                    : props.name == "Donato's Pizza"
                    ? require("./imgfiles/donatos.png")
                    : props.name == "Elliston Place Soda Shop"
                    ? require("./imgfiles/ellistonplace.png")
                    : props.name == "Fable Lounge"
                    ? require("./imgfiles/fable.png")
                    : props.name == "Frutta Bowls"
                    ? require("./imgfiles/fruttabowl.png")
                    : props.name == "Grain & Berry"
                    ? require("./imgfiles/grainandberry.png")
                    : props.name == "The Grilled Cheeserie"
                    ? require("./imgfiles/grilledcheeserie.png")
                    : props.name == "Helen's Hot Chicken"
                    ? require("./imgfiles/helenshotchicken.png")
                    : props.name == "Holy Smokes"
                    ? require("./imgfiles/holysmokes.png")
                    : props.name == "Hopdoddy Burger Bar"
                    ? require("./imgfiles/hopdoddy.png")
                    : props.name == "I Love Sushi"
                    ? require("./imgfiles/ilovesushi.png")
                    : props.name == "Inchin's Bamboo Garden"
                    ? require("./imgfiles/inchins.png")
                    : props.name == "Jamba"
                    ? require("./imgfiles/jamba.png")
                    : props.name == "Jeni's Splendid Ice Creams"
                    ? require("./imgfiles/jenis.png")
                    : props.name == "Jet's Pizza"
                    ? require("./imgfiles/jetspizza.png")
                    : props.name == "JP Cafe"
                    ? require("./imgfiles/jpcafe.png")
                    : props.name == "Koi Sushi & Thai"
                    ? require("./imgfiles/koisushi.jpeg")
                    : props.name == "JP Cafe"
                    ? require("./imgfiles/jpcafe.png")
                    : props.name == "Meet Noodles"
                    ? require("./imgfiles/meetnoodles.png")
                    : props.name == "Mellow Mushroom"
                    ? require("./imgfiles/mellowmushroom.png")
                    : props.name == "Michaelangelo's Pizza"
                    ? require("./imgfiles/michaelangelo.png")
                    : props.name == "Nada"
                    ? require("./imgfiles/nada.png")
                    : props.name == "Nicoletto's Italian Kitchen"
                    ? require("./imgfiles/nicolettos.png")
                    : props.name == "Oscar's Taco Shop"
                    ? require("./imgfiles/oscarstacoshop.png")
                    : props.name == "Papa John's Pizza"
                    ? require("./imgfiles/papajohns.png")
                    : props.name == "Poke Bros"
                    ? require("./imgfiles/pokebros.png")
                    : props.name == "Roma Pizza & Pasta"
                    ? require("./imgfiles/romapizza.png")
                    : props.name == "Sarabha's Creamery"
                    ? require("./imgfiles/sarabhas.png")
                    : props.name == "Satay Thai Grill"
                    ? require("./imgfiles/satay.png")
                    : props.name == "Shokku Ramen"
                    ? require("./imgfiles/shokkuramen.png")
                    : props.name == "Sitar Indian Restaurant"
                    ? require("./imgfiles/sitar.png")
                    : props.name == "The Slider House"
                    ? require("./imgfiles/sliderhouse.png")
                    : props.name == "Sun & Fork"
                    ? require("./imgfiles/sunandfork.png")
                    : props.name == "Sweet Dots"
                    ? require("./imgfiles/sweetdots.png")
                    : props.name == "Taco Mama"
                    ? require("./imgfiles/tacomama.png")
                    : props.name == "Urban Cookhouse"
                    ? require("./imgfiles/urbancookhouse.png")
                    : props.name == "The Urban Juicer"
                    ? require("./imgfiles/urbanjuicer.png")
                    : props.name == "Wendy's"
                    ? require("./imgfiles/wendys.png")
                    : "None"
                }
              />

              <div className="restaurantTitle">
                <b> {props.name} </b>
              </div>
              <div>
              <p> <b>Address: </b>{props.restaurant.address}</p>
              <p> <b>Price Rating: </b>{props.restaurant.price}</p>
              <a href={props.menu} target="_blank">
                <button className="buttonMenu">
                  <span>See Menu</span>
                </button>
              </a>
              </div>
              

              {/* Recommendation input boxes and buttons*/}
              <form onSubmit={handleSubmit}>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    width: "35%",
                    float: "right",
                    paddingRight: "7rem",
                  }}
                >
                    <label>
                      <h3>Leave a Recommendation!</h3>
                    </label>
                    <input style = {{margin: "0.3rem", width: "90%"}}
                      type="text"
                      placeholder="Name..."
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                    />
                    <textarea
                      style={{
                        width: "90%",
                        margin: "0.5rem",
                      }}
                      placeholder="Recommendation e.g. Beef Taco, etc..."
                      cols="40"
                      rows="5"
                      type="text"
                      value={review}
                      onChange={(e) => setReview(e.target.value)}
                    >

                    </textarea>
                  <button type="submit" style = {{width: "90%", position: "relative", left: "2%"}}>Submit</button>
                </div>
              </form>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  width: "25%",
                  alignItems: "center",
                  justifyContent: "center",
                  margin: "auto",
                }}
              >
                <h3 className="menuRecs">Menu Recommendations</h3>
                <button className="showRec"
                  onClick={() => {
                    if (seeReviews) {
                      setSeeReviews(false);
                      setButtonText("Show Recommendations");
                    } else {
                      setSeeReviews(true);
                      setButtonText("Hide Recommendations");
                    }
                  }}
                >
                  {buttonText}
                </button>
                {seeReviews &&
                  reviews &&
                  reviews.map((review) => {
                    return (
                      <div
                        style={{
                          borderStyle: "solid",
                          borderWidth: "2px",
                          borderRadius: 5,
                          marginTop: 1,
                        }}
                      >
                        <p>Name: {review.name}</p>
                        <p>Recommendation: {review.review}</p>
                      </div>
                    );
                  })}
                {!reviews[0] && seeReviews && <p>No recommendations yet.</p>}
                {/* Adding maps to the popup boxes*/}
                <iframe id="popupmap" 
                      src={props.mapUrl}
                      width="600px"
                      height="300px"
                      href="map"
                      align="left"
                    ></iframe>
              </div>

            </>
          }
          handleClose={togglePopup}
        />
      )}
    </div>
  );
}

export default Restaurant;
