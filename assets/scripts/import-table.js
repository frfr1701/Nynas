var weatherTable = new WeatherTable({
    table: '.table-weather',
    thead:  ['Klocka','Väder','Värme', 'Vind'],
    tbody: [
        ['09:00','Moln','16&#176;C','3m/s'],
        ['12:00','Sol','18&#176;C','4m/s'],
        ['15:00','Sol','20&#176;C','2m/s'],
        ['18:00','Regn','19&#176;C','3m/s'],
        ['21:00','Moln','17&#176;C','1m/s'],
    ],
    color: 'thead-dark'
});

weatherTable.updateTable();

var trainButton = document.getElementById('train-search');

trainButton.addEventListener('click', (event) => {
    var trainTable = new TrainTable({
        table: '.table-trains',
        thead: ['Nr','Avgår','Ankommer'],
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

