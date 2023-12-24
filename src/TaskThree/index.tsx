import React, { useState } from 'react';
import { Capitalize, Truncate } from '../utils/utils';
import Container from '../Components/Container';
import Questions from '../Questions';

const TaskThree = () => {
  const [originalString, setOriginalString] = useState<string>('');
  const [truncateLength, setTruncateLength] = useState<number>(7);

  const capitalizedString: string = Capitalize(originalString);
  const truncatedString: string = Truncate(originalString, truncateLength);

  const Title = "3. Task: String Manipulation";
  const Question = ["Task 5.1: Create a utility function that takes a string as input and returns a new string with the letter capitalized. Apply this utility in a React component.",
                   "Task 5.2: Create a utility function to truncate a given string to a specified length."];
  const Requirements = ["Develop a React component with a state variable for a string.",
                        "Implement an input to allow users to change the string.",
                        "Create one input for truncate length.",
                        "Validation for length of the string.",
                        "Use the utility function to display the strings."];

  return (
    <>
      < Container>
      <Questions
      title={Title}
      question={Question}
      requirements={Requirements}
    />
      <div className='task'>
        <h3>Fill the inputs </h3>
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
      </Container>
    </>
  );
}

export default TaskThree;
