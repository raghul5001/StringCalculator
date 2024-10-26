import React, { useState } from 'react';
import add from '../utils/stringCalculator'; 
import './StringCalculator.css'; 


const StringCalculator = () => {
  const [input, setInput] = useState("");
  const [result, setResult] = useState(null);
  const [showResult, setShowResult] = useState(false); 

  const handleCalculate = () => {
    try {
      console.log('Input before calculation:', input); 

      const sum = add(input); 
      setResult(sum); 
      setShowResult(true); 
    } catch (error) {
      setResult(error.message); 
      setShowResult(true); 
    }
  };

  return (
    <div className="container">
      <h1>String Calculator</h1>
      <input 
        type="text" 
        value={input} 
        onChange={(e) => setInput(e.target.value)} 
        placeholder="Enter numbers" 
      />
      <button onClick={handleCalculate}>Calculate</button>
      <div className={`result ${showResult ? 'show' : ''}`}>Result: {result}</div>
    </div>
  );
};

export default StringCalculator;
