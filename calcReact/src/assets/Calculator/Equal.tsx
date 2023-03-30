import Calculate from "./Calculate";
import CalculatorCSS from "./calculator.module.css";

function Equal() {
  return (
    <div className={CalculatorCSS.row}>
      <div
        className={`${CalculatorCSS.cube} ${CalculatorCSS.onclick}`}
        id="."
        onClick={Calculate}
      >
        .
      </div>
      <div
        className={`${CalculatorCSS.cube} ${CalculatorCSS.onclick}`}
        id="0"
        onClick={Calculate}
      >
        0
      </div>
      <div
        className={`${CalculatorCSS.double_cube} ${CalculatorCSS.onclick}`}
        id="="
        onClick={Calculate}
      >
        =
      </div>
    </div>
  );
}
export default Equal;
