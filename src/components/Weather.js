import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import Today from './Today'
import Forecast from './Forecast'
import Search from './Search'
import { Row } from './common/Row'

const Weather = ({ data }) => {
  const todaysWeather = data.slice(0, 1)
  const forecast = data.slice(1)
  return (
    <WeatherWrapper>
      {todaysWeather.map(i => (
        <Today
          key={i.dt}
          temp={i.temp}
          description={i.weather[0].description}
          humidity={i.humidity} />
      ))}

      <ForecastWrapper>
        {forecast.map((i) => (
          <Forecast
            key={i.dt}
            date={i.dt}
            icon={i.weather[0].icon}
            low={i.temp.min}
            high={i.temp.max} />
        ))}
      </ForecastWrapper>
    </WeatherWrapper>
  )
}

const WeatherWrapper = styled.div`
  border: 3px solid rgba(0, 0, 0, .5);
  border-radius: 15px;
  background-color: #4A90E2;
`

const ForecastWrapper = styled(Row) `
  background-color: #fff;
  justify-content: space-evenly;
  padding: 10px 0;
  border-bottom-left-radius: 15px;
  border-bottom-right-radius: 15px;

  > div:not(:first-child) { 
    border-left: 1px solid rgba(0, 0, 0, .2);
    padding-left: 25px;
  }
`

Weather.propTypes = {
  data: PropTypes.array
}

export default Weather