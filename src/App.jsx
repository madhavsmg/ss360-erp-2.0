import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import InventoryPage from './modules/Inventory/inventoryPage';
import POSPage from './modules/POS/posPage';
import Sidebar from './components/sidebar';

function App() {
  return (
    <Router>
      <div style={{ display: 'flex' }}>
        <Sidebar />
        <main style={{ padding: '1rem', flex: 1 }}>
          <Routes>
            <Route path="/" element={<h2>Welcome to SS360 ERP 2.0</h2>} />
            <Route path="/inventory" element={<InventoryPage />} />
            <Route path="/pos" element={<POSPage />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
