import CalculatorCSS from "./calculator.module.css";

function Result() {
  return (
    <div className={CalculatorCSS.result} id="result">
      0
    </div>
  );
}
export default Result;
