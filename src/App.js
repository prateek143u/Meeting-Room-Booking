import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import "./App.css";
import Inputs from "./components/Inputs/";
import Booking from "./components/Booking/";
const App = () => {
  const [data, setData] = useState([]);
  const [value, onChange] = useState(new Date());
  const [room, setRoom] = useState("");
  const [person, setPerson] = useState("");
  const [discrip, setDiscrip] = useState("");
  const [timeSelected, setTimeSelected] = useState(null);

  const handleMeeting = (event) => {
    setRoom(event.target.value);
    // console.log(event.target.value);
  };
  const handleName = (event) => {
    setPerson(event.target.value);
    // console.log(event.target.value);
  };
  const handleDiscription = (event) => {
    setDiscrip(event.target.value);
    // console.log(event.target.value);
  };

  const handleTimeSelector = (time) => {
    //search for selected time

    setTimeSelected(time);
    // console.log("Time selected is:" + time);
  };

  const bookRoom = () => {
    let flag = true;
    data.map((elem) => {
      if (
        elem.room === room &&
        elem.timeSelected === timeSelected &&
        elem.dt === value.toLocaleDateString()
      ) {
        alert("Already booked");
        flag = false;
      }
      return <h1>No</h1>;
    });
    if (flag) {
      if (
        room !== "" &&
        person !== "" &&
        discrip !== "" &&
        timeSelected !== null
      ) {
        const d = {
          room: room,
          person: person,
          discription: discrip,
          dt: value.toLocaleDateString(),
          timeSelected: timeSelected
        };
        setData([...data, d]);
        alert("Booked");
        setRoom("");
        setPerson("");
        setDiscrip("");
        setTimeSelected(null);
      } else {
        alert("Check all fields or reselect Room!");
      }
    }
  };

  return (
    <div className="App">
      <div className="mt-3">
        <h1 className="fw-bolder text-decoration-underline" id="h1tag">
          Meeting Room Booking
        </h1>
        <Inputs
          room={room}
          person={person}
          discrip={discrip}
          handleMeeting={handleMeeting}
          handleName={handleName}
          handleDiscription={handleDiscription}
        />
        <div className="calender_container">
          <Calendar className="mt-3" onChange={onChange} value={value} />
        </div>
      </div>
      <Booking handleTimeSelector={handleTimeSelector} />
      <button className="btn btn-danger m-3" onClick={() => bookRoom()}>
        BOOK APPOINTMENT
      </button>
      <div className="container">
        <table class="table table-hover">
          <thead class="table-danger">
            <tr>
              <th scope="col">Sr.</th>
              <th scope="col">Room</th>
              <th scope="col">Name</th>
              <th scope="col">Date</th>
              <th scope="col">Time</th>
            </tr>
          </thead>
          <tbody>
            {data.map((element, id) => (
              <tr>
                <td scope="row">{id + 1}</td>
                <td>{element.room}</td>
                <td>{element.person}</td>
                <td>{element.dt}</td>
                <td>{element.timeSelected}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
export default App;
