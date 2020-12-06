import { Main } from "./components";
import handlers from "./lib";
import "./styles/index.css";

const root = document.getElementById("root");

const render = () => {
  root.innerHTML = Main();

  handlers();
};

render();
