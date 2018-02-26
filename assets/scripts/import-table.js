'use strict';
//Anrop med javascript
var ajax = new XMLHttpRequest();
//denna anropas när anropet görs
ajax.onreadystatechange = function () {
    if (this.readyState === 4 && this.status === 200) {
        var response = JSON.parse(this.response);
        console.log(response);
        var time = new Array(5);
        var weather = new Array(5);
        var temp = new Array(5);
        var wind = new Array(5);
        for (var get = 0; get < 5; get++) {
            time[get] = new Date(response.list[get].dt_txt).getHours() + ":00";
            if(time[get].length<5){
                time[get] = '0' + time[get];
            }
            weather[get] = (response.list[get].weather[0].description).charAt(0).toUpperCase() + response.list[get].weather[0].description.substring(1, response.list[get].weather[0].description.length);
            temp[get] = (Number(response.list[get].main.temp) - 273.15).toFixed(0) + '&#176;C';
            wind[get] = response.list[get].wind.speed.toFixed(0) + 'm/s';
        }
        createWeatherTable(time,weather,temp,wind);
    }
}

var city = 'nynashamn';
var apikey = '7e483fda3799b98fc867a6231f62d3ed';
ajax.open('GET', 'https://api.openweathermap.org/data/2.5/forecast?q=' + city +
    '&APPID=' + apikey, true);
ajax.send();

function createWeatherTable(time,weather,temp,wind) {
    var weatherTable = new WeatherTable({
        table: '.table-weather',
        thead: ['Klocka', 'Väder', 'Värme', 'Vind'],
        tbody: [
            [time[0], weather[0], temp[0], wind[0]],
            [time[1], weather[1], temp[1], wind[1]],
            [time[2], weather[2], temp[2], wind[2]],
            [time[3], weather[3], temp[3], wind[3]],
            [time[4], weather[4], temp[4], wind[4]],
        ],
        color: 'thead-dark'
    });

    weatherTable.updateTable();
}
var trainButton = document.getElementById('train-search');

trainButton.addEventListener('click', (event) => {
    var trainTable = new TrainTable({
        table: '.table-trains',
        thead: ['Nr', 'Avgår', 'Ankommer'],
        tbody: [
            ['42', '10:25', '11:23'],
            ['42', '12:25', '13:23'],
            ['42', '14:25', '15:23'],
        ],
        color: 'thead-dark',
        status: 'inga problem i trafiken',
        caption: ''
    });
    trainTable.updateTable();
    trainTable.updateCaption();
    event.preventDefault();
});
