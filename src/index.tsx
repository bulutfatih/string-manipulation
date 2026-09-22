import ReactDOM from "react-dom/client";
import App from "./App";

import "./style.scss";

const rootElement = document.getElementById("root");
if (!rootElement) throw new Error("Application root was not found");
const root = ReactDOM.createRoot(rootElement);
root.render(<App />);
