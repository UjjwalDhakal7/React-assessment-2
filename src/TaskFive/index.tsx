import React, { useState } from 'react';
import './index.css'
import Container from '../Components/Container';
import Questions from '../Questions';

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

  const Title = "5. Task: Convert Temperature";
  const Question = ["This is an example question. What is the answer?"];
  const Requirements = ["There should be 3 inputs for kelvin, celsius and fahrenheit\, even if one value of input changes then there should be change in other inputs.",
                          "Display and input should be same",
                          "Inputs should not be empty"];


  return (
    < Container>
    <Questions
      title={Title}
      question={Question}
      requirements={Requirements}
    />
    <div>
      <h3>Enter temperature :</h3>
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
    </Container>
  );
};

export default TaskFive;
