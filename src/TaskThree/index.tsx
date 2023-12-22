import React, { useState } from 'react';
import { Capitalize, Truncate } from '../utils/utils';

const TaskThree = () => {
  const [originalString, setOriginalString] = useState<string>('');
  const [truncateLength, setTruncateLength] = useState<number>(7);

  const capitalizedString: string = Capitalize(originalString);
  const truncatedString: string = Truncate(originalString, truncateLength);

  return (
    <>
      <div className='task'>
        <main>
          <label htmlFor="inputString">Enter a string:</label>
          <input
            type="text"
            id="inputString"
            value={originalString}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setOriginalString(e.target.value)}
          />

          <label htmlFor="truncateLength">Truncate Length:</label>
          <input
            type="number"
            id="truncateLength"
            value={truncateLength}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setTruncateLength(Number(e.target.value))}
          />

          <p>Original string: {originalString}</p>
          <p>Capitalized string: {capitalizedString}</p>
          <p>Truncated string: {truncatedString}</p>
        </main>
      </div>
    </>
  );
}

export default TaskThree;
