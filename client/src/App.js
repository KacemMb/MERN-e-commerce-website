import { Route, Routes} from 'react-router-dom';
import './App.css';
import AdminDashboard from './Pages/AdminDashboard';
import Login from './Pages/Login';
import { Toaster } from 'react-hot-toast';
import Auth from './Pages/Auth';


function App() {
  return (
    <div className="App">
      <div><Toaster/></div>
        <Routes>
          <Route path='/admin/*' element={<AdminDashboard/>} />
          <Route path='/auth/*' element={<Auth/>} />
          <Route path='/login' element={<Login/>} />

        </Routes>
      
      
      
    </div>
  );
}

export default App;
