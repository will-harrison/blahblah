import React, { Component } from "react";
import "./App.css";
import { getWeatherByCity } from './api/weather'
import Search from "./components/Search";

class App extends Component {
  state = {
    city: null,
    err: null
  };

  searchWeather = () => {
    const { city } = this.state
    getWeatherByCity()
  }

  handleSearch = (city) => {
    this.setState(state => {
      return {
        ...state,
        city
      }
    })
  }

  render() {
    const { city } = this.state;

    return (
      <div>
        {!city
          ? <Search handleSearch={this.handleSearch} />
          : <div>City</div>
        }
      </div>
    )
  }
}

export default App;
