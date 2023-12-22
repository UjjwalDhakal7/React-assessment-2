import { useState } from "react";
import CompOne from "./ComponentOne";
import CompTwo from "./ComponentTwo";
import "./index.css";
import Navbar from "../Navbar";
import Home from "../Home";

function TaskOne() {
  const [toggleState, setToggleState] = useState<boolean>(false);
  const toggleComponent = () => {
    setToggleState((prevState) => !prevState);
  };
  return (
    <>
    <Home />
    <div className="main">
      <label className="switch">
        <input type="checkbox" id="toggleButton" onChange={toggleComponent} />
        <label htmlFor="toggleButton" className="toggle">
          <span className="slider"></span>
      </label>
      </label>
      {toggleState ? <CompOne /> : <CompTwo />}
    </div>
    </>
  );
}
export default TaskOne;