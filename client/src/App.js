import { Route, Routes} from 'react-router-dom';
import './App.css';
import AdminDashboard from './Pages/AdminDashboard';
import { Toaster } from 'react-hot-toast';

function App() {
  return (
    <div className="App">
      <div><Toaster/></div>
        <Routes>
          <Route path='/admin/*' element={<AdminDashboard/>} />
        </Routes>
      
      
      
    </div>
  );
}

export default App;
