import { useState } from "react";
import CompOne from "./ComponentOne";
import CompTwo from "./ComponentTwo";
import "./index.css";
import Container from "../Components/Container";
import Questions from "../Questions";

function TaskOne() {
  const [toggleState, setToggleState] = useState<boolean>(false);
  const toggleComponent = () => {
    setToggleState((prevState) => !prevState);
  };

  const Title = "1. Task: Toggle Component visibility";
  const Question = ["Create a utility function that toggles a boolean state variable when called. Use this utility in a React component to toggle the visibility of a certain element."];
  const Requirements = ["Create a new React component with a boolean state variable (isVisible).",
                       "Implement a button that toggles the isVisible state using the utility function.",
                       "Style the component to visually represent its visibility state."];

  return (
    <>
    < Container >
    <Questions
      title={Title}
      question={Question}
      requirements={Requirements}
    />
    <div className="main">
      <h3>Toggle to change component</h3>
      <label className="switch">
        <input type="checkbox" id="toggleButton" onChange={toggleComponent} />
        <label htmlFor="toggleButton" className="toggle">
          <span className="slider"></span>
      </label>
      </label>
      {toggleState ? <CompOne /> : <CompTwo />}
    </div>
    </Container >
    </>
  );
}
export default TaskOne;

