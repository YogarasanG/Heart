import React, { useState } from "react";
import "./booking.css";

function Booking() {
  const [showForm, setShowForm] = useState(false);
  const [bookingConfirmed, setBookingConfirmed] = useState(false);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const handleSlotClick = () => {
    setShowForm(true);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setBookingConfirmed(true);
  };

  return (
    <div>
      {bookingConfirmed ? (
        <div className="confirm">
          <h1>Booking Confirmed</h1>
          <p className="para">
            Your booking has been confirmed.
            <span role="img" aria-label="tick" className="tick">
              ✅
            </span>
          </p>
        </div>
      ) : showForm ? (
        <form onSubmit={handleSubmit} className="booking-form">
          <label className="booking-form label">
            First Name:
            <input
              type="text"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              required
              className="booking-form input"
            />
          </label>
          <br />
          <label className="booking-form label">
            Last Name:
            <input
              type="text"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              required
              className="booking-form input"
            />
          </label>
          <br />
          <label className="booking-form label">
            Email:
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="booking-form input"
            />
          </label>
          <br />
          <label className="booking-form label">
            Phone:
            <input
              type="tel"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              required
              className="booking-form input"
            />
          </label>
          <br />
          <button type="submit" className="booking-form button">
            Submit
          </button>
        </form>
      ) : (
        <div className="soltContainer">
          <button onClick={handleSlotClick} className="slot">
            Monday 10 am-12 pm
          </button>
          <button onClick={handleSlotClick} className="slot">
            Monday 12 pm-02 pm
          </button>
          <button onClick={handleSlotClick} className="slot">
            Monday 03 pm-05 pm
          </button>
          <button onClick={handleSlotClick} className="slot">
            Tuesday 10 am-12 pm
          </button>
          <button onClick={handleSlotClick} className="slot">
            Tuesday 12 pm-02 pm
          </button>
          <button onClick={handleSlotClick} className="slot">
            Tuesday 03 pm-05 pm
          </button>
          <button onClick={handleSlotClick} className="slot">
            Wednesday 10 am-12 pm
          </button>
          <button onClick={handleSlotClick} className="slot">
            Wednesday 12 pm-02 pm
          </button>
          <button onClick={handleSlotClick} className="slot">
            Wednesday 03 pm-05 pm
          </button>
          <button onClick={handleSlotClick} className="slot">
            Thursday 10 am-12 pm
          </button>
          <button onClick={handleSlotClick} className="slot">
            Thursday 12 pm-02 pm
          </button>
          <button onClick={handleSlotClick} className="slot">
            Thursday 03 pm-05 pm
          </button>
        </div>
      )}
    </div>
  );
}

export default Booking;
