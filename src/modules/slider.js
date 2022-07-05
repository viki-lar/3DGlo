const slider = (sliderClass, slideClass) => {
  const sliderBlock = document.querySelector(sliderClass);
  const slides = document.querySelectorAll(slideClass);
  const liBlock = document.querySelector(".portfolio-dots");
  const timeInterval = 2000;
  let currentSlide = 0;
  let interval;

  // проверка на наличие классов
  if (sliderBlock != null && slides.length > 0) {
    //создание пагинации
    slides.forEach((slide) => {
      const newDot = document.createElement("li");
      newDot.classList.add("dot");
      liBlock.append(newDot);
    });

    const dots = document.querySelectorAll(".dot");

    //переключение на следующий слайд
    const prevSlide = (elems, index, strClass) => {
      elems[index].classList.remove(strClass);
    };
    //переключение на предыдущий слайд
    const nextSlide = (elems, index, strClass) => {
      elems[index].classList.add(strClass);
    };

    // автоматическое переключение слайдов и пагинации
    const autoSlide = () => {
      prevSlide(slides, currentSlide, "portfolio-item-active");
      prevSlide(dots, currentSlide, "dot-active");
      currentSlide++;
      if (currentSlide >= slides.length) {
        currentSlide = 0;
      }
      nextSlide(slides, currentSlide, "portfolio-item-active");
      nextSlide(dots, currentSlide, "dot-active");
    };

    //запуск автоматического переключения
    const startSlide = (timer = 1500) => {
      interval = setInterval(autoSlide, timer);
    };
    const stopSlide = () => {
      clearInterval(interval);
    };

    //переключение по кнопкам и пагинации
    sliderBlock.addEventListener("click", (e) => {
      e.preventDefault();

      if (!e.target.matches(".dot,.portfolio-btn")) {
        return;
      }

      prevSlide(slides, currentSlide, "portfolio-item-active");
      prevSlide(dots, currentSlide, "dot-active");

      if (e.target.matches("#arrow-right")) {
        currentSlide++;
      } else if (e.target.matches("#arrow-left")) {
        currentSlide--;
      } else if (e.target.classList.contains("dot")) {
        {
          dots.forEach((dot, index) => {
            if (e.target === dot) {
              currentSlide = index;
            }
          });
        }
      }

      //проверка счетчика и длины массива со слайдами
      if (currentSlide >= slides.length) {
        currentSlide = 0;
      }
      if (currentSlide < 0) {
        currentSlide = slides.length - 1;
      }

      nextSlide(slides, currentSlide, "portfolio-item-active");
      nextSlide(dots, currentSlide, "dot-active");
    });

    //остановка слайдера при наведении на кнопки
    sliderBlock.addEventListener(
      "mouseenter",
      (e) => {
        if (e.target.matches(".dot, .portfolio-btn")) {
          stopSlide();
        }
      },
      true
    );

    //запуск слайдера после наведения на кнопки

    sliderBlock.addEventListener(
      "mouseleave",
      (e) => {
        if (e.target.matches(".dot, .portfolio-btn")) {
          startSlide(timeInterval);
        }
      },
      true
    );

    startSlide(timeInterval);
  } else {
    return;
  }
};

export default slider;
