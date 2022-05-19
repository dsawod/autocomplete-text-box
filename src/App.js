import logo from './logo.svg';
import './App.css';
import MajorUSCities from './MajorUSCities';
import countries from './countries';
import AutoCompleteText from './AutoCompleteText';

function App() {
  return (
    <div className="App">
      <div className="App-Component">
        Major US Cities
        <AutoCompleteText items={MajorUSCities} />
        <br />
        Countries
        <AutoCompleteText items={countries} />
      </div>
    </div>
  );
}

export default App;
