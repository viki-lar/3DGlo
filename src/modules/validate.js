const validate = () => {
  const calcItem = document.querySelectorAll(".calc-block >input");
  const userName = document.querySelectorAll("form [type=text]");
  //достаём forms с атрибутом [placeholder="Ваше сообщение"]
  const message = document.querySelector('form [placeholder="Ваше сообщение"]');
  //достаём forms с атрибутом [type=text]
  const email = document.querySelectorAll("form [type=email]");
  //достаём forms с атрибутом [type=tel]
  const phone = document.querySelectorAll("form [type=tel]");

  //проверка калькулятора
  calcItem.forEach((item) => {
    item.addEventListener("input", (e) => {
      e.target.value = e.target.value.replace(/\D+/, "");
    });
  });

  // // проверка модальных окон

  //перевод в верхний регистр первой буквы, а остальные в нижний регистр
  const validSimbols = (str) => {
    //исправляем первый символ
    str = str.replace(/\S+/gi, (word) => {
      word = word.split("");
      console.log(word.length);
      for (let i = 0; i < word.length; i++) {
        if (i === 0) {
          word[i].toUpperCase();
          word[i] = word[i].toUpperCase();
        } else {
          word[i] = word[i].toLowerCase();
        }
      }
      word = word.join("");
      return word;
    });

    return str;
  };

  //функция проверки двойных и более пробелов в строчке и исправление на один пробел
  const validSpace = (str) => {
    // console.log(event.target.value.match(/(\s\s)+/gi))
    if (/\s\s/gi.test(str)) {
      do {
        str = str.replace(/(\s\s)/gi, (str) => {
          return " ";
        });
      } while (/\s\s/gi.test(str));
      //Дополнительно удалим пробел в начале и в конце строки
      str = str.replace(/^\s/i, "");
      str = str.replace(/\s$/gi, "");
    }
    return str;
  };

  //проверка ввода текста
  userName.forEach((name) => {
    name.addEventListener("input", (e) => {
      e.target.value = e.target.value.replace(/[^а-я -]/gi, "");
    });
  });

  //функция вешает на инпуты форм события blur и проверяет правильность ввода [type=text]
  userName.forEach((textInput) => {
    textInput.addEventListener("blur", (event) => {
      //если в тексте встречаются двойные и более пробелы,то менять на один пробел
      event.target.value = validSpace(event.target.value);
      //перевод первого символа в верхнйи регистр, а остальных в нижний
      event.target.value = validSimbols(event.target.value);
    });
  });

  message.addEventListener("input", (e) => {
    e.target.value = e.target.value.replace(/[^а-я -]/gi, "");
  });

  //проверка ввода email
  email.forEach((item) => {
    item.addEventListener("input", (e) => {
      e.target.value = e.target.value.replace(
        /[^a-zA-Z0-9\@\-\_\.\!\~\*\']/gi,
        ""
      );
    });
  });

  //проверка ввода телефона
  phone.forEach((item) => {
    item.addEventListener("input", (e) => {
      e.target.value = e.target.value.replace(/[^()-\d]/g, "");
    });
  });
};

// // валидация
// const validateForm = (elem) => {
//   let success = true;
//   let userName = elem.querySelector("input[name = user_name]");
//   const message = elem.querySelector("input[name = user_message]");
//   const email = elem.querySelector("input[name = user_email]");
//   const phone = elem.querySelector("input[name = user_phone]");
//   let nameSuccess = false;
//   let messageSuccess = false;
//   let phoneSuccess = false;
//   let emailSuccess = false;

//   console.log(userName );

//   //сообщение об ошибке
//   const userMessage = (input, message) => {
//     // создание элементов
//     const newDiv = document.createElement("div");
//     newDiv.classList.add("eror");
//     newDiv.style.cssText = `color:red; font-size:12px`;
//     input.after(newDiv);
//     input.style.border = "2px solid red";
//     newDiv.textContent = message;
//   };

//   //убрать сообщение об ошибке
//   // const deleteMessage = () => {
//   //   const newDiv = document.querySelectorAll(".eror");
//   //   newDiv.forEach((elem) => {
//   //     elem.textContent = "";
//   //   });
//   // };

//   userName.addEventListener("input", () => {
//     if (!/[^а-я -]/gi.test(userName.value) && userName.value != "") {
//       nameSuccess = true;
//     } else {
//       nameSuccess = false;
//       userMessage(userName, "Введите имя на кириллице");
//     }
//     console.log(nameSuccess);
//   });

//   message.addEventListener("input", () => {
//     if (!/[^а-я -]/gi.test(message.value)) {
//       messageSuccess = true;
//     } else {
//       messageSuccess = false;
//       userMessage(message, "Введите сообщение  на кириллице");
//     }
//     console.log(messageSuccess);
//   });

//   phone.addEventListener("input", () => {
//     if (!/[^()-\d]/g.test(phone.value)) {
//       phoneSuccess = true;
//     } else {
//       phoneSuccess = false;
//       userMessage(phone, "Введите телефон");
//     }
//     console.log(phoneSuccess);
//   });

//   email.addEventListener("input", () => {
//     if (!/[^\w@-_.!~*]/gi.test(email.value)) {
//       emailSuccess = true;
//     } else {
//       emailSuccess = false;
//       userMessage(email, "Введите e-mail");
//     }
//     console.log(emailSuccess);
//   });

//   if (
//     emailSuccess == true &&
//     phoneSuccess == true &&
//     messageSuccess == true &&
//     nameSuccess == true
//   ) {
//     success = true;
//   } else {
//     success = false;
//   }
//   return success;
// };

// export { validateForm };
export default validate;
