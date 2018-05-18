import React from 'react';
import PropTypes from 'prop-types';

const CityWeather = props => {
  const {} = props;
  return (
    <CityWeatherContainer>
      
    </CityWeatherContainer>
  );
};

CityWeather.propTypes = {
  weather: PropTypes.object
}

const CityWeatherContainer = styled.div`

`

export default CityWeather