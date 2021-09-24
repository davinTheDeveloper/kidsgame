import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import WordChoices from './WordChoices/WordChoices';


function App() {



  return (

    <div className="App">

    <Router>
    <div className="AppContainer">
    <Route exact path="/">
    <WordChoices />
    </Route>
    </div>

    </Router>

    </div>

  );
}

export default App;