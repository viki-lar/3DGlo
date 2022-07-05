import timer from "./modules/timer";
import menu from "./modules/menu";
import modal from "./modules/modal";
import scroll from "./modules/scroll";
import validate from "./modules/validate";
import tabs from "./modules/tabs";
import slider from "./modules/slider";
import calc from "./modules/calc";
// import helpers.js from "./modules/helpers.js";

timer("24 june 2022");
menu();
modal();
scroll();
validate();
tabs();
slider(".portfolio-content", ".portfolio-item");
calc();
