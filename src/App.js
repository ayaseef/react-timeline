import React from 'react';
import logo from './logo.svg';
import './App.css';
import timelineData from './data/timeline.json';
import Timeline from './components/Timeline';
const events = timelineData
function App() {
  console.log(timelineData);
  return (
    <div className="App">
      <header className="App-header">
      <h1 className="App-title">{events.person}'s story</h1>
      </header>
      <main className="App-main">
        <Timeline events={timelineData.events}/>
      </main>
    </div>
  );
}
export default App;
