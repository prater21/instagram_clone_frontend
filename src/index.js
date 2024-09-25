import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { RecoilRoot } from "recoil";
// import { AppProvider } from "./context/appContext";

const root = ReactDOM.createRoot(document.getElementById("root"));

const appHeight = () => {
  const doc = document.documentElement;
  doc.style.setProperty("--app-height", `${window.innerHeight}px`);
};
window.addEventListener("resize", appHeight);
appHeight();

root.render(
  <RecoilRoot>
    {/* <AppProvider> */}
    <App />
    {/* </AppProvider> */}
  </RecoilRoot>
);
