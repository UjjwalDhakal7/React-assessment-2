import React, { useState } from 'react';

const TaskFive: React.FC = () => {
  const [kelvin, setKelvin] = useState<string>('');
  const [celsius, setCelsius] = useState<string>('');
  const [fahrenheit, setFahrenheit] = useState<string>('');

  const handleKelvinChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const inputDegree = event.target.value;
    if (inputDegree !== '') {
      setKelvin(inputDegree);
      const kelvinValue = parseFloat(inputDegree);
      setCelsius((kelvinValue - 273.15).toFixed(2));
      setFahrenheit(((kelvinValue - 273.15) * 9 / 5 + 32).toFixed(2));
    } else {
      setKelvin('');
      setCelsius('');
      setFahrenheit('');
    }
  };

  const handleCelsiusChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const inputDegree = event.target.value;
    if (inputDegree !== '') {
      setCelsius(inputDegree);
      const celsiusValue = parseFloat(inputDegree);
      setKelvin((celsiusValue + 273.15).toFixed(2));
      setFahrenheit((celsiusValue * 9 / 5 + 32).toFixed(2));
    } else {
      setKelvin('');
      setCelsius('');
      setFahrenheit('');
    }
  };

  const handleFahrenheitChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const inputDegree = event.target.value;
    if (inputDegree !== '') {
      setFahrenheit(inputDegree);
      const fahrenheitValue = parseFloat(inputDegree);
      setCelsius(((fahrenheitValue - 32) * 5 / 9).toFixed(2));
      setKelvin(((fahrenheitValue - 32) * 5 / 9 + 273.15).toFixed(2));
    } else {
      setKelvin('');
      setCelsius('');
      setFahrenheit('');
    }
  };

  return (
    <div>
      <h2>Task 5 : Convert Temperature</h2>
      <label>
        Kelvin:
        <input type="text" value={kelvin} onChange={handleKelvinChange} />
      </label>
      <label>
        Celsius:
        <input type="text" value={celsius} onChange={handleCelsiusChange} />
      </label>
      <label>
        Fahrenheit:
        <input type="text" value={fahrenheit} onChange={handleFahrenheitChange} />
      </label>
    </div>
  );
};

export default TaskFive;
