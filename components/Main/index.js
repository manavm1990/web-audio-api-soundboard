import store from "/store";
import Instrument from "./Instrument";
import "./index.css";

const renderInstruments = (instruments) =>
  instruments.map((instrument) => `${Instrument(instrument)}`).join("\n");

export default () => `
  <main class="flex justify-between">
    ${renderInstruments(store.instruments)}
  </main>
`;
