import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import City from "./City";

import "./App.css";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <div className="App">
      <h1>Challenge</h1>
      <p>
        Send a property name and temperature to the City component and display
        the properties in the City component
      </p>

      <City value={19} city="Tokyo" />
      <City value={24} city="Paris" />
      <City value={10} city="Vancouver" />
    </div>
  </StrictMode>
);
