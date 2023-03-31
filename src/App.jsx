import React from "react";

import { Outlet } from "react-router-dom";
import Aside from "./components/Aside";
import Header from "./components/Header";

const App = () => {


  return (
    <div>
      <div className="App">
        <main className="main-container">
          <div className="container">
            <header className="header">
             <Header />
            </header>
            {/* header */}
            <Aside />
            {/* aside */}

            <Outlet />
          </div>
          {/* container */}
        </main>
      </div>
    </div>
  );
};

export default App;
