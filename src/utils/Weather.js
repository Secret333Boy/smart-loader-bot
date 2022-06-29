const utoolslib = require('utoolslib');
const { fetch } = utoolslib.tools;
class Weather {
  static getCurrent({ lat, lon }) {
    return fetch(
      `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${process.env.OPEN_WEATHER_API_KEY}&lang=ru&units=metric`
    );
  }
}
module.exports = Weather;
