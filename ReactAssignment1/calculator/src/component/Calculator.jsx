import React, { useState } from 'react';
const Calculator = () => {
  const [num1, setNum1] = useState('');
  const [num2, setNum2] = useState('');
  const [result, setResult] = useState(null);
  const handleCalculation = (operation) => {
    const number1 = parseFloat(num1);
    const number2 = parseFloat(num2);
    if (isNaN(number1) || isNaN(number2)) {
      setResult('Invalid input');
      return;
    }
    let calcResult;
    switch (operation) {
      case 'add':
        calcResult = number1 + number2;
        break;
      case 'subtract':
        calcResult = number1 - number2;
        break;
      case 'multiply':
        calcResult = number1 * number2;
        break;
      case 'divide':
        calcResult = number1 / number2;
        break;
      default:
        calcResult = 'Unknown operation';
    }
    setResult(calcResult);
  };
  return (
    <div>
      <div>
        <input
          type="number"
          value={num1}
          onChange={(e) => setNum1(e.target.value)}
          placeholder="Enter first number"
        />
        <input
          type="number"
          value={num2}
          onChange={(e) => setNum2(e.target.value)}
          placeholder="Enter second number"
        />
      </div>
      <div>
        <button onClick={() => handleCalculation('add')}>Add</button>
        <button onClick={() => handleCalculation('subtract')}>Subtract</button>
        <button onClick={() => handleCalculation('multiply')}>Multiply</button>
        <button onClick={() => handleCalculation('divide')}>Divide</button>
      </div>
      <div>
        {result !== null && (
          <h3>Result: {result}</h3>
        )}
      </div>
    </div>
  );
};
export default Calculator;