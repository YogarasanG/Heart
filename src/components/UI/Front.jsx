import React, { useState } from "react";
import Booking from "../Booking/Booking";
import "../UI/front.css";
import video1 from "../images/0.mp4";

const Front = () => {
  const [showBooking, setShowBooking] = useState(false);
  const handleBookClick = () => {
    setShowBooking(true);
  };

  return (
    <div>
      <div className="head">
        <h1>Online appointment booking </h1>
        <h3>Guard Your Heart with Regular Checkups</h3>
      </div>
      <div className="book">
        {showBooking ? (
          <Booking />
        ) : (
          <div className="showcase">
            <div className="right">
              <button onClick={handleBookClick}>Book Now</button>
            </div>
            <div className="heart">
              <video src={video1} autoPlay controls loop></video>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Front;
