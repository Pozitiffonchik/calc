import Result from "./Result";
import RowTop from "./RowTop";
import RowMid from "./RowMid";
import RowBot from "./RowBot";
import Bot from "./Bot";
import Equal from "./Equal";
import CalculatorCSS from "./calculator.module.css";

function Calculator() {
  return (
    <div className={CalculatorCSS.front}>
      <div className={CalculatorCSS.calc}>
        <Result></Result>
        <RowTop></RowTop>
        <RowMid></RowMid>
        <RowBot></RowBot>
        <Bot></Bot>
        <Equal></Equal>
      </div>
    </div>
  );
}
export default Calculator;
