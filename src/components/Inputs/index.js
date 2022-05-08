import React from "react";
import "./input.css";
const Inputs = ({
  room,
  person,
  discrip,
  handleMeeting,
  handleName,
  handleDiscription,
}) => {
  return (
    <div className=" mainContainer mt-5">
      <div>
        <label className="form-label">Select Room</label>
        <div className="input-group">
          <select
            className="form-select"
            onChange={(event) => handleMeeting(event)}
            value={room}
          >
            <option value="abcd">Select Room</option>
            <option value="Meeting">Meeting Room</option>
            <option value="Training">Training Room</option>
            <option value="Confference">Confference Room</option>
          </select>
        </div>
      </div>
      <div>
        <label className="form-label mt-3">Name</label>
        <div className="input-group ">
          <input
            type="text"
            className="form-control"
            onChange={(event) => handleName(event)}
            value={person}
            placeholder="Enter Your Name"
          />
        </div>
      </div>

      <div>
        <label className="form-label mt-3">Meeting Description</label>
        <div className="input-group ">
          <input
            type="text"
            className="form-control"
            onChange={(event) => handleDiscription(event)}
            value={discrip}
            placeholder="Enter Your Meeting Description"
          />
        </div>
      </div>
    </div>
  );
};

export default Inputs;
