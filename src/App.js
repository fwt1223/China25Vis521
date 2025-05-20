import React from 'react';
import './App.css';
import EChartsChart from './components/EChartsChart.jsx'; 

function App() {
  const barChartOption = {
    xAxis: {
      type: 'category',
      data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
    },
    yAxis: {
      type: 'value'
    },
    series: [
      {
        data: [120, 200, 150, 80, 70, 110, 130],
        type: 'bar'
      }
    ]
  };

  return (
    <div className="App">
      <h1>ECharts Demo in React</h1>
      <EChartsChart option={barChartOption} />
    </div>
  );
}

/*function Square(){
  return <button className="Square">X</button>
}*/

function Square({value}){
  function onClick(){
    console.log(value);
  }
  return (
      <button className="App-link" onClick={onClick}>{value}</button>
  )
}

function Board() {
  return (
    <>
      <div className="board-row">
        <Square value="1" />
        <Square value="2" />
        <Square value="3" />
      </div>
      <div className="board-row">
        <Square value="4" />
        <Square value="5" />
        <Square value="6" />
      </div>
      <div className="board-row">
        <Square value="7" />
        <Square value="8" />
        <Square value="9" />
      </div>
    </>
  );
}

export default App;
