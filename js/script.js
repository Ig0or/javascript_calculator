class Calculator {
    constructor() {
        this.numbers = document.querySelectorAll(".numbers");
        this.operators = document.querySelectorAll(".operators");
        this.result = document.querySelector("#result");
        this.calc = document.querySelector("#calc");

        this.handleClick();
    }

    eventNumber(number) {
        number.addEventListener("click", function (event) {
            if (calc.innerText == ">") {
                calc.innerText = event.target.innerText;
            } else {
                calc.innerText += event.target.innerText;
            }
        });
    }

    eventOperators(operator) {
        function verifyNotTwoOperators() {
            if (
                !calc.innerText.includes("%") &&
                !calc.innerText.includes("/") &&
                !calc.innerText.includes("*") &&
                !calc.innerText.includes("-") &&
                !calc.innerText.includes("+")
            ) {
                return true;
            }
        }

        function calculate() {
            let operators = ["**", "%", "/", "*", "-", "+"];
            let calcValue = calc.innerText;
            let number1 = "";
            let number2 = "";
            let indexOperator;

            for (let operator of operators) {
                if (calcValue.indexOf(operator) !== -1) {
                    indexOperator = calcValue.indexOf(operator);
                    number1 = calcValue.slice(0, indexOperator);
                    number2 = calcValue.slice(
                        indexOperator + 1,
                        calcValue.length
                    );
                }
            }

            let total;
            if (calcValue[indexOperator] === "%") {
                total = Number(number1) % Number(number2);
                calc.innerText = ">";
                result.innerText = total;
            } else if (calcValue[indexOperator] === "/") {
                total = Number(number1) / Number(number2);
                calc.innerText = ">";
                result.innerText = total.toFixed(2);
            } else if (calcValue[indexOperator] === "*") {
                total = Number(number1) * Number(number2);
                calc.innerText = ">";
                result.innerText = total;
            } else if (calcValue[indexOperator] === "-") {
                total = Number(number1) - Number(number2);
                calc.innerText = ">";
                result.innerText = total;
            } else if (calcValue[indexOperator] === "+") {
                total = Number(number1) + Number(number2);
                calc.innerText = ">";
                result.innerText = total;
            }
        }

        operator.addEventListener("click", function (event) {
            let typeOperator = event.target.innerText;
            if (typeOperator === "=") {
                calculate();
            } else if (typeOperator === "C") {
                calc.innerText = ">";
                result.innerText = "0";
            } else {
                if (verifyNotTwoOperators() && calc.innerText[0] !== ">") {
                    calc.innerText += `${typeOperator}`;
                }
            }
        });
    }

    handleClick() {
        this.numbers.forEach(this.eventNumber);
        this.operators.forEach(this.eventOperators);
    }
}

let calculator = new Calculator();
