import Sidebar from './components/Sidebar'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import './App.css';
import Dashboard from './Pages/Dashboard';
import Analytics from './Pages/Analytics';
import Customers from './Pages/Customers';
import Order from './Pages/Order';
import Products from './Pages/Products';


function App() {
  return (
    <BrowserRouter>
    
    <Sidebar>
      <Routes>
        {/* <Route path="/" element={<Login/>} /> */}
        <Route path="/" element={<Dashboard/>} />
        <Route path="/MyProfile" element={<Analytics/>} />
        <Route path="/OrganizatonDetails" element={<Customers/>} />
        <Route path="/OrganizationChart" element={<Order/>} />
        <Route path="/GraphConfiguration" element={<Products/>} />
    
        
      </Routes>
    </Sidebar>
    </BrowserRouter>
   
  );
}

export default App;
