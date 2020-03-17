import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import { Radar } from 'react-chartjs-2';

var data: {labels: any, datasets:any[]};
var selectedRow: HTMLElement;

function App() {

  const soccer = require('./soccer_small.json');
  var sorted = soccer.sort((a: any, b: any) => a.Name.localeCompare(b.Name));
  var mapped = sorted.map((a: any) =>
    <tr key={a.Name} id={a.Name} onClick={() => selectPlayer(a)}>
      <td id='col1'>{a.Name}</td>
      <td id='col2'>{a.Nationality}</td>
      <td id='col3'>{a.National_Position}</td>
      <td id='col4'>{a.Club}</td>
      <td id='col5'>{a.Height}</td>
      <td id='col6'>{a.Preffered_Foot}</td>
    </tr>);
  
  data = {labels:['Ball Control', 'Dribbling', 'Aggression', 'Acceleration', 'Speed', 'Shot Power'],datasets:[]};

  return (
    <div className="App">
      <header className="App-header">
        <h1>datavisyn-coding-challenge</h1>
      </header>

      <div className="Table">
        <table>
          <thead className="TableHeader">
            <tr>
              <th id='col1'>Name</th>
              <th id='col2'>Nationality</th>
              <th id='col3'>National Position</th>
              <th id='col4'>Club</th>
              <th id='col5'>Height</th>
              <th id='col6'>Preferred Foot</th>
            </tr>
          </thead>
          <tbody className="TableRows">
            {mapped}
          </tbody>
        </table>
      </div>
 
      <div id="chart"/>
    </div>
  );
}

function selectPlayer(a: any) {

  console.log(a.Name + " selected");

  // row selection
  if(selectedRow != null) {selectedRow.classList.remove("selectedRow");}
  var element = document.getElementById(a.Name);
  if (element != null){
    element.classList.add("selectedRow");
    selectedRow = element;
  }

  var color = 'rgba(37,122,206,1)';

  data.datasets.shift()
  data.datasets.push( {
    label: a.Name,
    backgroundColor: 'rgba(179,181,198,0.2)',
    borderColor: color,
    pointBackgroundColor: color,
    pointBorderColor: '#fff',
    pointHoverBackgroundColor: '#fff',
    pointHoverBorderColor: color,
    data: [a.Ball_Control, a.Dribbling, a.Aggression,a.Acceleration,a.Speed,a.Shot_Power]
  });

  ReactDOM.render(
    <SpiderChart />,
    document.getElementById('chart')
  );
  
}

function SpiderChart() {

  // Spider chart Options
  let options = {
    scale: {
      ticks: {
        suggestedMin: 0,
        suggestedMax: 100
      }
    }  
  }

  return(
    <div className="Details">
        <Radar
          data={data} 
          width={500}
          height={500}        
          options = {options}
        />
      </div>
  )
}

export default App;
