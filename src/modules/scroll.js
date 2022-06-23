const scroll = () => {
  const scrollBtn = document.querySelector("main > a");
  const menuItem = document.querySelectorAll("menu>ul>li>a");
  const scrollArr = [...menuItem, scrollBtn];
  console.log(scrollArr);

  scrollArr.forEach((link) => {
    link.addEventListener("click", (event) => {
      // прерывание стандартного действия при клике на ссылку
      event.preventDefault();
      // получаем id для секции
      const id = link.getAttribute("href").substring(1);
      const section = document.getElementById(id);

      if (section) {
        section.scrollIntoView({
          behavior: "smooth",
          block: "center",
          inline: "center",
        });
      }
    });
  });
};
export default scroll;
