const menu = () => {
  const menubtn = document.querySelector(".menu");
  const menu = document.querySelector("menu");
  const closeBtn = menu.querySelector(".close-btn");
  const menuItem = menu.querySelectorAll("ul>li>a");

  const handleMenu = () => {
    menu.classList.toggle("active-menu");
  };

  menubtn.addEventListener("click", handleMenu);
  closeBtn.addEventListener("click", handleMenu);
  menuItem.forEach((item) => {
    item.addEventListener("click", handleMenu);
  });
};

export default menu;
