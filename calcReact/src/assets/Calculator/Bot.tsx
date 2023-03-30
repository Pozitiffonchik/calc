import Calculate from "./Calculate";
import CalculatorCSS from "./calculator.module.css";

function Bot() {
  return (
    <div className={CalculatorCSS.row}>
      <div
        className={`${CalculatorCSS.cube} ${CalculatorCSS.onclick}`}
        id="1"
        onClick={Calculate}
      >
        1
      </div>
      <div
        className={`${CalculatorCSS.cube} ${CalculatorCSS.onclick}`}
        id="2"
        onClick={Calculate}
      >
        2
      </div>
      <div
        className={`${CalculatorCSS.cube} ${CalculatorCSS.onclick}`}
        id="3"
        onClick={Calculate}
      >
        3
      </div>
      <div
        className={`${CalculatorCSS.cube} ${CalculatorCSS.onclick}`}
        id="-"
        onClick={Calculate}
      >
        -
      </div>
    </div>
  );
}
export default Bot;
