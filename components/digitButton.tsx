import React, { useState } from "react";


type digitButtonProps = {
  digit?: number;
  operation?: string;
  setCalculationOnScreen: React.Dispatch<React.SetStateAction<string>>;
  calculationOnScreen: string;
};

const DigitButton = (props: digitButtonProps) => {
  //   let [calculationOnScreen, setCalculationOnScreen] = useState<string>("");
  //   let [calculatedValue, setCalculatedValue] = useState<number>(-1);
  let [clicked , setClicked] = useState<boolean>(false)

  const handleCalculationOnScreen = () => {
    setClicked(!clicked)
    setClicked(!clicked)
    if (props.calculationOnScreen === "" && props.operation) {
      alert("First input some digits before an operation");
    } else if (
      props.calculationOnScreen.includes("NaN") ||
      props.calculationOnScreen.includes("Infinity")
    ) {
      alert("Clear the screen first to continue entering digits");
    } else if (props.digit) {
      props.setCalculationOnScreen(
        props.calculationOnScreen + props.digit.toString()
      );
    } else if (props.digit === 0) {
      props.setCalculationOnScreen(
        props.calculationOnScreen + props.digit.toString()
      );
    } else if (
      props.operation &&
      props.operation !== "Clear" &&
      props.operation !== "="
    ) {
      props.setCalculationOnScreen(props.calculationOnScreen + props.operation);
    } else if (props.operation === "Clear") {
      props.setCalculationOnScreen("");
    } else {
      // eslint-disable-next-line no-eval
      const result = eval(props.calculationOnScreen);
      props.setCalculationOnScreen(result);
    }
  };

  return (
    <div>
    <button onClick={handleCalculationOnScreen} style={{ backgroundColor: clicked ? "white" : "grey", width: "50px", height: "50px",}}>
      {props.digit ?? props.operation}
    </button>
  </div>
    
  );
};

export default DigitButton;
