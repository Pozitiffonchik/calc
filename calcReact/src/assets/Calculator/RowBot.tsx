import CalculatorCSS from "./calculator.module.css";
import Calculate from "./Calculate";
function RowBot() {
  return (
    <div className={CalculatorCSS.row}>
      <div
        className={`${CalculatorCSS.cube} ${CalculatorCSS.onclick}`}
        id="4"
        onClick={Calculate}
      >
        4
      </div>
      <div
        className={`${CalculatorCSS.cube} ${CalculatorCSS.onclick}`}
        id="5"
        onClick={Calculate}
      >
        5
      </div>
      <div
        className={`${CalculatorCSS.cube} ${CalculatorCSS.onclick}`}
        id="6"
        onClick={Calculate}
      >
        6
      </div>
      <div
        className={`${CalculatorCSS.cube} ${CalculatorCSS.onclick}`}
        id="+"
        onClick={Calculate}
      >
        +
      </div>
    </div>
  );
}
export default RowBot;
