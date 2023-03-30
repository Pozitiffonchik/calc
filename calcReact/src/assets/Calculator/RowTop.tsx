import Calculate from "./Calculate";
import CalculatorCSS from "./calculator.module.css";

function RowTop() {
  return (
    <div className={CalculatorCSS.row}>
      <div
        className={`${CalculatorCSS.double_cube} ${CalculatorCSS.onclick}`}
        id="AC"
        onClick={Calculate}
      >
        AC
      </div>
      <div className={`${CalculatorCSS.cube} ${CalculatorCSS.onclick}`}>
        DEL
      </div>
      <div className={`${CalculatorCSS.cube} ${CalculatorCSS.onclick}`} id="/">
        /
      </div>
    </div>
  );
}
export default RowTop;
