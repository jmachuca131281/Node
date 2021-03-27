const axios = require('axios');

const getClima = async ( lat, lng ) => {
    const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${ lat }&lon=${ lng }&appid=6065d07444ea404c9040e9e44e27f517&units=metric`)
    return resp.data.main.temp;
}

module.exports = {
    getClima
}
