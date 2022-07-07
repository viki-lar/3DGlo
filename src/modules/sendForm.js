const sendForm = ({ formId, someElem = [] }) => {
  const form = document.getElementById(formId);
  const statusBlock = document.createElement("div");
  const loadText = "Загрузка...";
  const errorText = "Ошибка ...";
  const successText = "Спасибо! Наш менеджер свяжется с Вами";

  const userMessage = (input, message) => {
    // создание элементов
    const newDiv = document.createElement("div");
    newDiv.style.cssText = `color:red; font-size:12px`;
    newDiv.textContent = message;
    input.after(newDiv);
  };

  const deleteMessage = (input) => {
    newDiv.remove();
  };

  // валидация
  const validate = (list) => {
    let success = true;

    list.forEach((input) => {
      // проверка на пустой ввод
      if (!input.value) {
        success = false;
      } else {
        // проверка имени
        if (input.name === "user_name") {
          if (/[^а-я -]/gi.test(input.value)) {
            success = false;
            userMessage(input, "Введите сообщение на кириллице");
            input.style.border = "2px solid red";
          }

          //  проверка e-mail
        } else if (input.name === "user_email") {
          if (/[^\w@-_.!~*]/gi.test(input.value)) {
            success = false;
            userMessage(input, "Введите e-mail");
            input.style.border = "2px solid red";
          }
          // проверка телефона
        } else if (input.name === "user_phone") {
          if (/[^()-\d]/g.test(input.value)) {
            success = false;
            userMessage(input, "Введите телефон");
            input.style.border = "2px solid red";
            // проверка сообщения
          } else if (input.name === "user_message") {
            if (/[^а-я -]/gi.test(input.value)) {
              success = false;
              userMessage(input, "Введите сообщение на кириллице");
              input.style.border = "2px solid red";
            }
          }
        }
      }
    });
    console.log(success);
    return success;
  };

  // создание post запроса

  const sendData = (data) => {
    return fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    }).then((res) => res.json());
  };

  const submitForm = () => {
    // создание объекта из  данных введеднных в форму
    const formData = new FormData(form);
    const formBody = {};
    const formElements = form.querySelectorAll("input");

    formData.forEach((val, key) => {
      formBody[key] = val;
    });

    // добавление данных в объект

    someElem.forEach((elem) => {
      const element = document.getElementById(elem.id);
      if (elem.type === "block") {
        formBody[elem.id] = element.textContent;
      } else if (elem.type === "input") {
        formBody[elem.id] = element.value;
      }
    });

    // проверка на валидация форм
    if (validate(formElements)) {
      // вывод сообщения о загрузке данных
      statusBlock.textContent = loadText;
      form.append(statusBlock);
      // отправка данных
      sendData(formBody)
        .then((data) => {
          // вывод сообщения об успешной отправке
          statusBlock.textContent = successText;
          // очистка полей ввода
          formElements.forEach((input) => {
            input.value = "";
          });
        })
        //вывод ошибки
        .catch((error) => {
          statusBlock.textContent = errorText;
        });
    } else {
      alert("Данные не отправлены");
    }
  };

  try {
    if (!form) {
      throw new Error("верните форму!");
    }

    form.addEventListener("submit", (e) => {
      e.preventDefault();
      submitForm();
    });
  } catch (error) {
    console.log(error.message);
  }
};

export default sendForm;
