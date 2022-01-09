import './App.css';
import Topmenu from './components/Topmenu';
import Sidebar from './components/Sidebar';
import Home from './pages/Home';
import Users from './pages/Users';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

const App = () => {
  return (
    <div className="App">
      <Topmenu />
      <div className='container'>
        <Sidebar />
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/users" element={<Users />} />
            </Routes>
          </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
