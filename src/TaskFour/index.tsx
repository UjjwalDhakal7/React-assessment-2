import React, { useState, useCallback, useEffect } from 'react';
import { formatNumberWithCommas } from '../utils/utils';

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

  return (
    <div>
      <div>
        <label>
          Input Number:
          <input type="number" name="inputNumber" value={inputNumber} onChange={handleInputChange} />
        </label>
      </div>
      <div>
        <label>
          Precision:
          <input type="number" name="precision" value={precision} onChange={handleInputChange} />
        </label>
      </div>
      <p>Formatted Thousands : {formattedThousands}</p>
      <p>Formatted Lakhs: {formattedLakhs}</p>
      <p>Rounded Result: {roundedResult}</p>
    </div>
  );
};

export default NumberFormat;
