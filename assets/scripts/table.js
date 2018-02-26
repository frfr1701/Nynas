function Table(data) {
  this.table = document.querySelector(data.table);
  //går igenom varje rad i objektets data del och skickar till prepareRow
  prepareBody(data.tbody);
  prepareHead(data.thead);

  function prepareHead(datathead) {
    var tr = document.createElement('tr');
    datathead.forEach(col => {
      var th = document.createElement('th');
      th.innerHTML = col;
      th.setAttribute('scope', 'col');
      tr.appendChild(th);
    });
    this.thead = document.createElement('thead');
    this.thead.className = data.color;
    this.thead.appendChild(tr);
  }

  function prepareBody(datatbody) {
    var temp = [];
    datatbody.forEach(row => {
      var tr = document.createElement('tr');
      row.forEach(col => {
        var td = document.createElement('td');
        td.innerHTML = col;
        tr.appendChild(td);
      });
      temp.push(tr);
    });
    this.tbody = document.createElement('tbody');
    temp.forEach(row => {
      this.tbody.appendChild(row);
    });
  }
}

Table.prototype.updateTable = function () {
  this.table.innerHTML = "";
  this.table.appendChild(thead);
  this.table.appendChild(tbody);
}

WeatherTable.prototype = Object.create(Table.prototype);
WeatherTable.prototype.constructor = WeatherTable;

function WeatherTable(container) {
  Table.call(this, {
    table: container.table,
    thead: container.thead,
    tbody: container.tbody,
    color: container.color
  });
}


//trainTable ärver från Table
TrainTable.prototype = Object.create(WeatherTable.prototype);
TrainTable.prototype.constructor = TrainTable;

//ska skapa funktioner till trainTable specifikt och weatherTable samt ärva 
function TrainTable(container) {
  Table.call(this, {
    table: container.table,
    thead: container.thead,
    tbody: container.tbody,
    color: container.color
  });
  this.table = document.querySelector(container.table);
  this.tfoot = document.createElement('tfoot');
  this.caption = document.createElement('caption');
  prepareTFoot(this.tfoot);
  prepareCaption(this.caption);
  
  function prepareTFoot(tfootcontainer){
    var td = document.createElement('td');
    td.innerHTML = container.status;
    td.setAttribute('colspan','3');
    tfootcontainer.appendChild(td);
  }
  function prepareCaption(captioncontainer){
    var trainGetInfo = document.getElementById('train-get-info');
    captioncontainer.innerHTML = 'Åker från: ' + trainGetInfo.value;
  }
}

TrainTable.prototype.updateTFoot = function () {
  this.table.appendChild(this.tfoot);
}
TrainTable.prototype.updateCaption = function () {
  this.table.appendChild(this.caption);
}