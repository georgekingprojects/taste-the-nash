import Popup from "./Popup.js";
import React, { useState, useEffect } from "react";

function Restaurant(props) {
  const [isOpen, setIsOpen] = useState(false);

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
  return (
    <div id="boxes">
      <div className="restaurantBox" onClick={togglePopup}>
        <h3>{props.name}</h3>
        {d && <p>Distance: {d} miles</p>}
      </div>

      {isOpen && (
        <Popup
          content={
            <>
              <div className="restaurantTitle">
                <b> {props.name} </b>
              </div>
              <p>Address: {props.restaurant.address}</p>
              <p>Price Rating: {props.restaurant.price}</p>
              <button className="popupButton"> Text Me Directions! </button>
              {}
            </>
          }
          handleClose={togglePopup}
        />
      )}
    </div>
  );
}

export default Restaurant;
