import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Row } from './common/Row'
import { Column } from './common/Column'

const Today = ({ temp, description, humidity }) => {
  return (
    <TodayWrapper>
      <Temp>
        {Math.round(temp.day)}
        <Degrees>&deg;</Degrees>
      </Temp>
      <DetailsWrapper>
        <Fahrenheit>F</Fahrenheit>
        <Description>{description}</Description>
        <Humidity>{humidity}% Humidity</Humidity>
      </DetailsWrapper>
    </TodayWrapper>
  )
}

const TodayWrapper = styled(Row) `
  padding: 50px;
`

const DetailsWrapper = styled(Column) `
  padding: 30px 15px 0;
`

const Temp = styled(Row) `
  font-size: 20rem;
  color: #fff;
`

const Degrees = styled.div`
  font-size: 7rem;
  margin-top: 70px;
`

const Fahrenheit = styled.div`
  font-size: 2rem;
  margin-top: 70px;
  color: #fff;
`

const Description = styled.div`
  color: #fff;
  font-size: 1.5rem;
  text-transform: capitalize;
`

const Humidity = styled.div`
  color: #fff;
  font-size: 1rem;
  text-transform: capitalize;
`

Today.propTypes = {
  temp: PropTypes.object,
  description: PropTypes.string,
  humidity: PropTypes.number
}

export default Today