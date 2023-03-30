import CalculatorCSS from "./calculator.module.css";
import Calculate from "./Calculate";

function RowMid() {
  return (
    <div className={CalculatorCSS.row}>
      <div
        className={`${CalculatorCSS.cube} ${CalculatorCSS.onclick}`}
        id="7"
        onClick={Calculate}
      >
        7
      </div>
      <div
        className={`${CalculatorCSS.cube} ${CalculatorCSS.onclick}`}
        id="8"
        onClick={Calculate}
      >
        8
      </div>
      <div
        className={`${CalculatorCSS.cube} ${CalculatorCSS.onclick}`}
        id="9"
        onClick={Calculate}
      >
        9
      </div>
      <div
        className={`${CalculatorCSS.cube} ${CalculatorCSS.onclick}`}
        id="*"
        onClick={Calculate}
      >
        *
      </div>
    </div>
  );
}
export default RowMid;
