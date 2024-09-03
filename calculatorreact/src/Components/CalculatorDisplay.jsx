import React, { useState } from "react";

export default function CounterDisplay() {
  const [btn, setBtn] = useState("");
  const[result,setResult]=useState(""); // Use ref to store the result

  function handleButtonClick(value) {
    if (value === "C") {
      setBtn("");
      setResult(""); // Clear the result
    } else if (value === "=") {
      try {
      setResult(eval(btn).toString()); // Update the result using ref
      } catch (error) {
       setResult("Error");
      }
    } else {
      setBtn((prev) => prev + value);
    }
  }

  return (
    <>
      <h1>React Calculator</h1>
      <input type="text" value={btn} readOnly />
      <div>{result}</div> {/* Use ref to display the result */}
      <button onClick={() => handleButtonClick("7")}>7</button>
      <button onClick={() => handleButtonClick("8")}>8</button>
      <button onClick={() => handleButtonClick("9")}>9</button>
      <button onClick={() => handleButtonClick("+")}>+</button>
      <br />
      <button onClick={() => handleButtonClick("4")}>4</button>
      <button onClick={() => handleButtonClick("5")}>5</button>
      <button onClick={() => handleButtonClick("6")}>6</button>
      <button onClick={() => handleButtonClick("-")}>-</button>
      <br />
      <button onClick={() => handleButtonClick("1")}>1</button>
      <button onClick={() => handleButtonClick("2")}>2</button>
      <button onClick={() => handleButtonClick("3")}>3</button>
      <button onClick={() => handleButtonClick("*")}>*</button>
      <br />
      <button onClick={() => handleButtonClick("C")}>C</button>
      <button onClick={() => handleButtonClick("0")}>0</button>
      <button onClick={() => handleButtonClick("/")}>/</button>
      <button onClick={() => handleButtonClick("=")}>=</button>
    </>
  );
}
