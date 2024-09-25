import React, { lazy } from "react";
import "./assets/css/global.css";

const MyRouter = lazy(() => import("./routes/index"));

function App() {
  return <MyRouter />;
}

export default App;
