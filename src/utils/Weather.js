const utoolslib = require('utoolslib');
const { fetch } = utoolslib.tools;
class Weather {
  static getCurrent() {
    return fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=Kyiv&appid=${process.env.OPEN_WEATHER_API_KEY}&lang=ru&units=metric`
    );
  }
}
module.exports = Weather;
