import React, { useRef } from "react";
import Main from "./pages/Main";
import { BrowserRouter } from "react-router-dom";

function App() {
  const refContainer = useRef(null);
  const refCounter = useRef(0);
  return (
    <BrowserRouter>
      <Main />
    </BrowserRouter>
  );
}

export default App;
