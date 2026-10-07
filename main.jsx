import React from "react";
import { createRoot } from "react-dom/client";
import * as AppModule from "./App_Turunan_Eksponensial_Logaritma.jsx";

const App = AppModule.default ?? Object.values(AppModule)[0];

createRoot(document.getElementById("root")).render(<App />);
