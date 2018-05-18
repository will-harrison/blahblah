import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { format } from 'date-fns'
import { Column } from './common/Column'

const Forecast = ({ date, icon, low, high }) => {
  return (
    <ForecastContainer>
      <div>{format(date * 1000, 'MMM D')}</div>
      <img src={`http://openweathermap.org/img/w/${icon}.png`} alt="" />
      <div>{Math.round(low)}</div>
      <div>{Math.round(high)}</div>
    </ForecastContainer>
  )
}

const ForecastContainer = styled(Column) `
  text-align: center;
`

Forecast.propTypes = {
  date: PropTypes.number,
  icon: PropTypes.string,
  low: PropTypes.number,
  high: PropTypes.number,
}

export default Forecast