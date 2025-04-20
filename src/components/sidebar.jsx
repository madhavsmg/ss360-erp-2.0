import { Link } from 'react-router-dom';

export default function Sidebar() {
  return (
    <aside style={{ width: '200px', background: '#eee', padding: '1rem', height: '100vh' }}>
      <h3>SS360 ERP</h3>
      <nav>
        <ul style={{ listStyle: 'none', padding: 0 }}>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/inventory">Inventory</Link>
          </li>
          <li>
            <Link to="/pos">POS</Link>
          </li>
        </ul>
      </nav>
    </aside>
  );
}
