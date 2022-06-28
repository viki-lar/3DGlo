const menu = () => {
  const menubtn = document.querySelector(".menu");
  const menu = document.querySelector("menu");
  const body = document.querySelector("body");
  // const closeBtn = menu.querySelector(".close-btn");
  // const menuItem = menu.querySelectorAll("ul>li>a");

  const handleMenu = () => {
    menu.classList.toggle("active-menu");
  };

  // открытие меню
  menubtn.addEventListener("click", (e) => {
    if (e.target.closest(".menu")) {
      handleMenu();
    }
  });

  //закрытие меню при клике на кнопку или на ссылку
  menu.addEventListener("click", (e) => {
    if (e.target.tagName === "A") {
      handleMenu();
    }
  });

  // menubtn.addEventListener("click", handleMenu);
  // closeBtn.addEventListener("click", handleMenu);
  // menuItem.forEach((item) => {
  //   item.addEventListener("click", handleMenu);
  // });
};

export default menu;
