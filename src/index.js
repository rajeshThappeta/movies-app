import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import MovieContextProvider from "./contexts/MovieContextProvider";
import ThemeContextProvider from "./contexts/ThemeContextProvider";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <MovieContextProvider>
    <ThemeContextProvider>
      <App />
    </ThemeContextProvider>
  </MovieContextProvider>
);
