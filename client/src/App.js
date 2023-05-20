import './App.css';
import React from "react"
import { Route } from 'react-router-dom';
import { Activities } from './components/Activities/activities'
import Landing from './components/Landing/Landing'
import { MainPage } from './components/MainPage/MainPage'
import CountryId from './components/CountryById/CountryById'

function App() {
  return (
    <div className="App">
        <Route exact path="/" component={Landing} />
        <Route exact path="/countries" component={MainPage}/>
        <Route path ="/activities"component={Activities} />
        <Route exact path="/countries/:id" component={CountryId} />
    </div>
  );
}

export default App;