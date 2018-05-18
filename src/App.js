import React, { Component } from 'react'
import styled from 'styled-components'
import './App.css'
import { getWeatherByCity } from './api/weather'
import Search from './components/Search'
import Weather from './components/Weather'
import Error from './components/Error'

class App extends Component {
  state = {
    city: 'Sandpoint',
    error: '',
    weatherData: [],
    testing: true
  };

  componentDidMount() {
    this.state.testing && this.handleSearch('Sandpoint')
  }


  searchWeather = () => {
    const { city } = this.state
    getWeatherByCity(city)
      .then(weatherData => {
        if (weatherData.cod === '200') {
          this.setState(state => {
            return {
              ...state,
              weatherData: weatherData.list
            }
          })
        } else {
          this.setState(state => {
            return {
              ...state,
              err: weatherData.message
            }
          })
        }
      })
  }

  handleSearch = async (city) => {
    await this.setState(state => {
      return {
        ...state,
        city
      }
    })
    this.searchWeather()
  }

  render() {
    const { city, weatherData, error } = this.state
    error && <Error error={error} />
    return (
      <Wrapper>
        {!city
          ? <Search handleSearch={this.handleSearch} />
          : <Weather data={weatherData} />
        }
      </Wrapper>
    )
  }
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 60vh;
`

export default App
