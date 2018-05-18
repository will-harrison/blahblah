const BaseURL = (city = '') => `https://api.openweathermap.org/data/2.5/forecast/daily?q=${city},us&units=imperial&cnt=6&appid=82967109852974c2642ff72bd8f8856c`

export const getWeatherByCity = (city) => {
  return fetch(BaseURL(city))
    .then(res => res.json())
    .catch(err => { throw `${err}` })
}
