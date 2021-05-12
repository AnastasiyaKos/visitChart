import React from 'react';
import './App.css';
import {Route} from "react-router-dom";
import MainPage from "./components/MainPage/MainPage";


function App() {
  return (
    <div className="App">
        <Route exact path='/'
               render={() => <MainPage/>} />
    </div>
  );
}

export default App;
