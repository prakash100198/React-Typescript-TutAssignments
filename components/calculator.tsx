import { useState } from "react";
import DigitButton from "./digitButton";
// import GridLayout from "react-grid-layout";

function Calculator() {
  const digits = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  const operations = ["+", "-", "*", "/", "Clear", "="];
  let [calculationOnScreen, setCalculationOnScreen] = useState<string>("");

  return (
    <>
      <center>
        <h1>{"Calculator\n"}</h1>
        {calculationOnScreen}
        {/* <CalculatorScreen expression={calculationOnScreen} /> */}
      </center>
      {digits.map((digit) => {
        
        return (
          <div>
            <DigitButton
              digit={digit}
              setCalculationOnScreen={setCalculationOnScreen}
              calculationOnScreen={calculationOnScreen}
            />
          </div>
        );
      })}
      {operations.map((operation) => {
        return (
          <center>
            <DigitButton
              operation={operation}
              setCalculationOnScreen={setCalculationOnScreen}
              calculationOnScreen={calculationOnScreen}
            />
          </center>
        );
      })}
    </>
  );
}

export default Calculator;
