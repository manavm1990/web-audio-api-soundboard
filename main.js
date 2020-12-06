import "./styles/index.css";
import { Main } from "./components";

const root = document.getElementById("root");

const render = () => {
  console.log("render");
  root.innerHTML = Main();
};

render();
