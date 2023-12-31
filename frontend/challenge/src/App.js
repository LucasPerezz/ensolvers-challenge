import './App.css';
import Home from './components/Home/Home';
import SearchNote from './components/SearchNote/SearchNote';
import {Context} from './context/Context';

function App() {
  return (
    <div className="App">
      <Context>
        <SearchNote />
        <Home />
      </Context>
    </div>
  );
}

export default App;
