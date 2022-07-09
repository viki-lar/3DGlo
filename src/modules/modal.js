import { animate } from "./helpers";

const modal = () => {
  const modalBtn = document.querySelectorAll(".popup-btn");
  const modal = document.querySelector(".popup");
  const modalCloseBtn = modal.querySelector(".popup-close");

  const modalWindow = document.querySelector(".popup-content");
  let reqestId;

  //вызов модульного окна при нажатии на кнопку

  modalBtn.forEach((item) => {
    item.addEventListener("click", () => {
      let count = 0;

      // проверка экрана устройства
      if (screen.width <= 768) {
        modal.style.display = "block";
      } else {
        // анимация

        modal.style.display = "block";
        animate({
          duration: 1000,
          timing(timeFraction) {
            return Math.pow(timeFraction, 2);
          },
          draw(progress) {
            const windowInnerHeight = document.documentElement.clientHeight;
            modalWindow.style.top =
              progress * (windowInnerHeight / 2 - 200) + "px";
          },
        });

        // const open = () => {
        //   modal.style.display = "block";
        //   reqestId = requestAnimationFrame(open);
        //   modalWindow.style.top = "0 px";

        //   if (count < 200) {
        //     count += +5;
        //     modalWindow.style.top = count + "px";
        //   } else {
        //     cancelAnimationFrame(reqestId);
        //   }
        // };
        // open();
      }
    });
  });

  //закрытие модального окна по клику мимо и при нажатии на кнопку закрыть

  modal.addEventListener("click", (e) => {
    if (
      !e.target.closest(".popup-content") ||
      e.target.classList.contains("popup-close")
    ) {
      modal.style.display = "none";
    }
  });
};

export default modal;
