const modal = () => {
  const modalBtn = document.querySelectorAll(".popup-btn");
  const modal = document.querySelector(".popup");
  const modalCloseBtn = modal.querySelector(".popup-close");

  const modalWindow = document.querySelector(".popup-content");
  let reqestId;
  let count = 0;

  //вызов модульного окна при нажатии на кнопку

  modalBtn.forEach((item) => {
    item.addEventListener("click", () => {
      // проверка экрана устройства
      if (screen.width <= 768) {
        modal.style.display = "block";
      } else {
        modal.style.display = "block";
        // анимация
        const open = () => {
          reqestId = requestAnimationFrame(open);
          modalWindow.style.top = "0 px";

          if (count < 200) {
            count += +2;
            modalWindow.style.top = count + "px";
          } else {
            cancelAnimationFrame(reqestId);
          }
        };
        open();
      }
    });
  });

  //закрытие окна при нажатии на кнопку закрыть
  modalCloseBtn.addEventListener("click", () => {
    modal.style.display = "none";
  });

  //анимация
};

export default modal;
