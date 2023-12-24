import React, { useState } from 'react';
import { formatDate } from '../utils/utils';
import './index.css'
import Container from '../Components/Container';
import Questions from '../Questions';

const TaskTwo: React.FC = () => {
  const [selectedDate, setSelectedDate] = useState<Date>(new Date());
  const [dateFormat, setDateFormat] = useState<string>('MM/DD/YYYY');

  const handleDateChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newDate = new Date(event.target.value);
    setSelectedDate(newDate);
  };

  const handleFormatChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setDateFormat(event.target.value);
  };

  const Title = "2. Task: Format Date";
    const Question = ["Develop a utility function that takes a JavaScript Date object and returns a formatted date string (e.g., \"MM/DD/YYYY\")."];
    const Requirements = ["Create a React component with a state variable storing a Date object.",
                          "Use the utility function to display the formatted date on the component.",
                          "Include a form or input to allow users to change the date and date format. List of Date Format: Date Format Types"];

  return (
    < Container>
    <Questions
      title={Title}
      question={Question}
      requirements={Requirements}
    />
    <div>
      <h3>Choose your date format :</h3>
      <form>
        <label>
          Choose Date:
          <input type="date" value={selectedDate.toISOString().slice(0, 10)} onChange={handleDateChange} />
        </label>
        <br /><br />
        <label>
          Choose Date Format:
          <select value={dateFormat} onChange={handleFormatChange}>
            <option value="MM/DD/YYYY">MM/DD/YYYY</option>
            <option value="YYYY/MM/DD">YYYY/MM/DD</option>
            <option value="YYYY/MMM/DD">YYYY/MMM/DD</option>
          </select>
        </label>
      </form>
      <p>Formatted Date: {formatDate(selectedDate, dateFormat)}</p>
    </div>
    </Container>
  );
};

export default TaskTwo;
