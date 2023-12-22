import React, { useState } from 'react';
import { formatDate } from '../utils/utils';

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

  return (
    <div>
      <h2>Task 2 : Format date :</h2>
      <form>
        <label>
          Choose Date:
          <input type="date" value={selectedDate.toISOString().slice(0, 10)} onChange={handleDateChange} />
        </label>
        <br />
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
  );
};

export default TaskTwo;
