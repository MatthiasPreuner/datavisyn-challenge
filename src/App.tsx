import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Radar } from 'react-chartjs-2';

function App() {

  const soccer = require('./soccer_small.json');
  var sorted = soccer.sort((a: any, b: any) => a.Name.localeCompare(b.Name));
  var mapped = sorted.map((a: any) =>
    <tr onClick={() => showDetails(a)}>
      <td>{a.Name}</td>
      <td>{a.Nationality}</td>
      <td>{a.National_Position}</td>
      <td>{a.Club}</td>
      <td>{a.Height}</td>
      <td>{a.Preffered_Foot}</td>
    </tr>);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>

      <div className="Table">
        <table id="table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Nationality</th>
              <th>National Position</th>
              <th>Club</th>
              <th>Height</th>
              <th>Preferred Foot</th>
            </tr>
          </thead>
          <tbody>
            {mapped}
          </tbody>
        </table>
      </div>
 
      
      <div className="Details">
        <h1>Name23</h1>
        <Radar
          data={data} 
          width={500}
          height={500}
          options={{ maintainAspectRatio: false }}
        />
      </div>

    </div>
  );
}

const data = {
  labels: ['Ball Control', 'Dribbling', 'Aggression', 'Acceleration', 'Speed', 'Shot Power'],
  datasets: [
    {
      // label: 'Player1',
      backgroundColor: 'rgba(179,181,198,0.2)',
      borderColor: 'rgba(179,181,198,1)',
      pointBackgroundColor: 'rgba(179,181,198,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(179,181,198,1)',
      data: [65, 59, 90, 81, 56, 55]
    },
    // {
    //   label: 'My Second dataset',
    //   backgroundColor: 'rgba(255,99,132,0.2)',
    //   borderColor: 'rgba(255,99,132,1)',
    //   pointBackgroundColor: 'rgba(255,99,132,1)',
    //   pointBorderColor: '#fff',
    //   pointHoverBackgroundColor: '#fff',
    //   pointHoverBorderColor: 'rgba(255,99,132,1)',
    //   data: [28, 48, 40, 19, 96, 27]
    // }
  ]
};

function showDetails(a: any) {
  console.log(a.Name + " selected");


}

export default App;
