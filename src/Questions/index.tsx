
import React from "react";
import './index.css'

interface QuestionsProps {
    title: string;
    question: string[];
    requirements: string[];
}

const Questions: React.FC<QuestionsProps> = ({ title, question, requirements }: QuestionsProps) => {
    return (
        <div className="questions-main">
            <h2>{title}</h2>
            <p>{question}</p>
            <h3>Requirements</h3>
            <ul>
                {requirements.map((requirement, index) => (
                    <li key={index}>{requirement}</li>
                ))}
            </ul>
        </div>
    );
};

export default Questions;
