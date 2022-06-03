import React from "react";
import MainChat from "./component/mainChat/mainChat";
// import { MainChatbar } from "./containers/container";
import { Route, Routes } from "react-router-dom";
import Join from "./component/join/join";
// import Join from "./containers/container";
import hotkeys from "hotkeys-js";
import { BrowserRouter } from "react-router-dom";

function App() {
  hotkeys("ctrl+r,f5, ctrl+f5 ,ctrl+f4", (e) => {
    e.preventDefault();
  });
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Join />} />
          <Route path="/chat" element={<MainChat />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
