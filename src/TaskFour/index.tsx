import React, { useState, useCallback, useEffect } from 'react';
import { formatNumberWithCommas } from '../utils/utils';
import './index.css';
import Container from '../Components/Container';
import Questions from '../Questions';

const NumberFormat: React.FC = () => {
  const [inputNumber, setInputNumber] = useState<number>(0);
  const [precision, setPrecision] = useState<number>(2);
  const [formattedThousands, setFormattedThousands] = useState<string>('');
  const [formattedLakhs, setFormattedLakhs] = useState<string>('');
  const [roundedResult, setRoundedResult] = useState<number | null>(null);

  const roundNumber = useCallback(
    (number: number, precision: number): number => {
      const factor = Math.pow(10, precision);
      return Math.round(number * factor) / factor;
    },
    []
  );

  useEffect(() => {
    const formattedTh = formatNumberWithCommas(inputNumber, 'thousands');
    setFormattedThousands(formattedTh);

    const formattedLk = formatNumberWithCommas(inputNumber, 'lakhs');
    setFormattedLakhs(formattedLk);

    const rounded = roundNumber(inputNumber, precision);
    setRoundedResult(rounded);
  }, [inputNumber, precision, formatNumberWithCommas, roundNumber]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    if (name === 'inputNumber') {
      setInputNumber(parseFloat(value));
    } else if (name === 'precision') {
      setPrecision(parseInt(value));
    }
  };

  const Title = "4. Task: Number Formatting Functions";
  const Question = ["Task 7.1: Develop a utility function to format a number with commas as a specific separator.",
                    "Task 7.2: Implement a function to round a number to a specified number of decimal places.",
                    "Task 7.3: Create a function to convert a numeric amount to a currency format"];
  const Requirements = ["There should be input for format",
                        "There should be input for specified precision",
                        "There should be input for selection of currency",
                        "Precision should affect in all three task"];

  return (
    < Container>
    <Questions
      title={Title}
      question={Question}
      requirements={Requirements}
    />
    <div>
      <h3>Enter amount :</h3>
      <div>
        <label>
          Input Number:
          <input type="number" name="inputNumber" value={inputNumber} onChange={handleInputChange} />
        </label>
      </div><br></br>
      <div>
        <label>
          Precision:
          <input type="number" name="precision" value={precision} onChange={handleInputChange} />
        </label>
      </div><br></br>
      <p>Formatted Thousands : {formattedThousands}</p>
      <p>Formatted Lakhs: {formattedLakhs}</p>
      <p>Rounded Result: {roundedResult}</p>
    </div>
    </Container>
  );
};

export default NumberFormat;
