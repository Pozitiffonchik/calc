let n1 = "";
let n2 = "";
let operation = "";
let f1 = 1;

function Calculate(event) {
  const result = document.getElementById("result");
  let currentId = event.currentTarget.id;
  let operations = ["+", "-", "/", "*", "AC", "="];
  doOperation();
  number();
  Result();
  Equal();

  function number() {
    if (f1 === 1 && !operations.includes(currentId)) {
      n1 += currentId;
    } else if (!operations.includes(currentId)) {
      n2 += currentId;
    }
  }

  function doOperation() {
    if (operations.includes(currentId)) {
      operation = "";
      f1 = 2;
      operation = currentId;
    }
    if (currentId === "AC") {
      Ac();
    }
  }

  function Result() {
    if (f1 === 1) {
      result.innerHTML = n1;
    } else {
      result.innerHTML = n2;
    }
  }
  function Ac() {
    f1 = 1;
    n1 = "";
    n2 = "";
    Result();
  }
  function Equal() {
    if (currentId === "=") {
      console.log(n1, operation, n2);
      console.log(Number(n1) + Number(n2));
      f1 = 1;
    }
  }
}

export default Calculate;
