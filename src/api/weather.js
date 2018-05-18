const BaseURL = (city = '') => `http://samples.openweathermap.org/data/2.5/forecast?q=${city},us&appid=82967109852974c2642ff72bd8f8856c`

export const getWeatherByCity = city => {
  return fetch(BaseURL(city))
    .then(res => res.json())
    .catch(err => console.log(err))
};
