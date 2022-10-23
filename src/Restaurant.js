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
  const [buttonText, setButtonText] = useState("Show Reviews");

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

              <form onSubmit={handleSubmit}>
                <label>Leave a Review!</label>
                <input
                  type="text"
                  placeholder="Name..."
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />

                <input
                  type="text"
                  placeholder="Review..."
                  value={review}
                  onChange={(e) => setReview(e.target.value)}
                />

                <button type="submit">Submit</button>
              </form>
              <div>
                <h3>Reviews</h3>
                <button
                  onClick={() => {
                    if (seeReviews) {
                      setSeeReviews(false);
                      setButtonText("Show Reviews");
                    } else {
                      setSeeReviews(true);
                      setButtonText("Hide Reviews");
                    }
                  }}
                >
                  {buttonText}
                </button>
                {seeReviews &&
                  reviews &&
                  reviews.map((review) => {
                    return (
                      <div>
                        <p>Name: {review.name}</p>
                        <p>Review: {review.review}</p>
                      </div>
                    );
                  })}
              </div>
              {!reviews[0] && seeReviews && <p>No reviews yet.</p>}
              <button className="popupButton"> Text Me Directions! </button>
            </>
          }
          handleClose={togglePopup}
        />
      )}
    </div>
  );
}

export default Restaurant;
