import React from "react";
import "./components/styles/api.module.css";
import { BrowserRouter, Route } from "react-router-dom";
import Book from "./components/Book";
import Top from "./components/top";


const App: React.FC = () => {
  return (
    <div>
      <BrowserRouter>
        <Route path="/top">{Top()}</Route>
        <Route path="/book">{Book()}</Route>
      </BrowserRouter>
    </div>
  );
};

export default App;
