const validate = () => {
  const calcItem = document.querySelectorAll(".calc-block >input");
  let userName = document.querySelectorAll("input[name = user_name]");

  const message = document.querySelectorAll("input[name = user_message]");
  const email = document.querySelectorAll("input[name = user_email]");
  const phone = document.querySelectorAll("input[name = user_phone]");

  //проверка калькулятора
  calcItem.forEach((item) => {
    item.addEventListener("input", (e) => {
      e.target.value = e.target.value.replace(/\D+/, "");
    });
  });

  // проверка модальных окон

  //проверка ввода текста
  userName.forEach((name) => {
    name.addEventListener("input", (e) => {
      e.target.value = e.target.value.replace(/[^а-я -]/gi, "");
    });
  });

  message.forEach((item) => {
    item.addEventListener("input", (e) => {
      e.target.value = e.target.value.replace(/[^а-я -]/gi, "");
    });
  });

  //проверка ввода email
  email.forEach((item) => {
    item.addEventListener("input", (e) => {
      e.target.value = e.target.value.replace(/[^\w@-_.!~*]/gi, "");
    });
  });

  //проверка ввода телефона
  phone.forEach((item) => {
    item.addEventListener("input", (e) => {
      e.target.value = e.target.value.replace(/[^()-\d]/g, "");
    });
  });
};
export default validate;
