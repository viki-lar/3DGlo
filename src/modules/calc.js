import { animate } from "./helpers";

const calc = (price = 100) => {
  const calcBlock = document.querySelector(".calc-block");
  const calcType = document.querySelector(".calc-type");
  const calcSquare = document.querySelector(".calc-square");
  const calcCount = document.querySelector(".calc-count");
  const calcDay = document.querySelector(".calc-day");
  const total = document.getElementById("total");
  let reqestId;
  let count = 0;

  const countCalc = () => {
    const calcTypeValue = +calcType.options[calcType.selectedIndex].value;
    const calcSquareValue = calcSquare.value;
    let totalValue = 0;
    let calcCountValue = 1;
    let calcDayValue = 1;

    // проверка на количество помещений
    if (calcCount.value > 1) {
      calcCountValue += +calcCount.value / 10;
    }
    // проверка на количество дней
    if (calcDay.value < 5 && calcDay.value) {
      calcDayValue = 2;
    } else if (calcDay.value < 10 && calcDay.value) {
      calcDayValue = 1.5;
    }

    // рассчет при обязательных полях
    if (calcTypeValue && calcSquareValue) {
      totalValue =
        price * calcTypeValue * calcSquareValue * calcCountValue * calcDayValue;

      // анимация

      const changeTotal = () => {
        reqestId = requestAnimationFrame(changeTotal);

        if (count < totalValue) {
          count += +30;
          total.textContent = count;
        } else {
          count = 0;
          cancelAnimationFrame(reqestId);
        }
      };
      changeTotal();
    } else {
      totalValue = 0;
    }

    //вывод итога
    total.textContent = totalValue;
  };

  calcBlock.addEventListener("input", (e) => {
    if (
      e.target === calcType ||
      e.target === calcSquare ||
      e.target === calcCount ||
      e.target === calcDay
    ) {
      countCalc();
    }
  });
};

export default calc;
