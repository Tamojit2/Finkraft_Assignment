import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Loginpage from './components/Loginpage';
import FetchData from './components/FetchData';

function App() {
  return (
    <div className="App">

<Router>
      <Routes>
        <Route path="/dashboard" element={<FetchData />} />
        <Route path="/" element={<Loginpage />} />
      </Routes>
</Router>
      
    </div>
  );
}

export default App;
