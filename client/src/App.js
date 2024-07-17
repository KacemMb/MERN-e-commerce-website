import './App.css';
import AdminDashboard from './Pages/AdminDashboard';
import { Toaster } from 'react-hot-toast';

function App() {
  return (
    <div className="App">
      <div><Toaster/></div>
      <AdminDashboard />
    </div>
  );
}

export default App;
