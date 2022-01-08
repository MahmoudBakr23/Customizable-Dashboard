import './App.css';
import Topmenu from './components/Topmenu';
import Sidebar from './components/Sidebar';
import Home from './pages/Home';

const App = () => {
  return (
    <div className="App">
      <Topmenu />
      <div className='container'>
        <Sidebar />
        <Home />
      </div>
    </div>
  );
}

export default App;
