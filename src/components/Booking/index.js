import React from "react";

const Booking = ({ handleTimeSelector }) => {
  const arr = [
    "8:00AM",
    "9:00AM",
    "10:00AM",
    "11:00AM",
    "12:00PM",
    "1:00PM",
    "2:00PM",
    "3:00PM",
    "4:00PM",
    "5:00PM",
    "6:00PM",
    "7:00PM",
    "8:00PM",
  ];
  return (
    <div className="container mt-3 d-flex flex-wrap justify-content-center">
      {arr.map((time, idx) => {
        return (
          <button
            key={idx}
            id={idx}
            type="button"
            className="btn btn-outline-danger m-1"
            onClick={() => handleTimeSelector(time)}
          >
            {time}
          </button>
        );
      })}
    </div>
  );
};

export default Booking;
