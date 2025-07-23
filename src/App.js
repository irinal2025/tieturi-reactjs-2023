//React-sovellus on tässä
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { ButtonGroup, Button } from "react-bootstrap";


import CurrentWeatherScreen from "./Screens/CurrentWeatherScreen"
import ForecastScreen from "./Screens/ForecastScreen"
import PersonTable from "./Screens/PersonTable"
import SettingsScreen from "./Screens/SettingsScreen"

const App = () => {
  return(
    <div>
      <BrowserRouter>
        <div>
          <Routes>
            <Route path="/" element={<CurrentWeatherScreen/>}></Route>
            <Route path="/forecast"  element={<ForecastScreen/>}></Route>
            <Route path="/persons" element={<PersonTable/>}></Route>
            <Route path="/settings" element={<SettingsScreen/>}></Route>
          </Routes>
          <ButtonGroup>
            <Link to="/"><Button variant="dark">Current Weather</Button></Link>
            <Link to="/forecast"><Button variant="dark">Forecast</Button></Link>
            <Link to="/persons"><Button variant="dark">Persons</Button></Link>
            <Link to="/settings"><Button variant="dark">Settings</Button></Link>
          </ButtonGroup>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;