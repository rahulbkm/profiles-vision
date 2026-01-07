import { useNavigate, useLocation } from 'react-router-dom';
import '../styles/Sidebar.css';

function Sidebar() {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <nav className="sidebar">
      <div className="sidebar-section">
        <div className="sidebar-section-title">GET STARTED</div>
        <button className="sidebar-item">Home</button>
        <button className="sidebar-item truncated">Search admin sett...</button>
        <button className="sidebar-item truncated">Guided channel s...</button>
      </div>

      <div className="sidebar-section">
        <div className="sidebar-section-title">CUSTOMER SUPPORT</div>
        <button className="sidebar-item">Overview</button>
        <button className="sidebar-item">User management</button>
        <button className="sidebar-item">AI Agents</button>
        <button 
          className={`sidebar-item ${location.pathname === '/' || location.pathname.startsWith('/chat-channels') ? 'active' : ''}`}
          onClick={() => navigate('/')}
        >
          Channels
        </button>
        <button className="sidebar-item">Intent</button>
        <button className="sidebar-item">Queues</button>
        <button className="sidebar-item">Routing</button>
        <button 
          className={`sidebar-item ${location.pathname.startsWith('/profiles') || location.pathname.startsWith('/channel-profiles') || location.pathname.startsWith('/routing-profiles') ? 'active' : ''}`}
          onClick={() => navigate('/profiles')}
        >
          Profiles
        </button>
        <button className="sidebar-item">Case settings</button>
        <button className="sidebar-item">Customer settings</button>
        <button className="sidebar-item truncated">Quality managem...</button>
      </div>

      <div className="sidebar-section">
        <div className="sidebar-section-title">SUPPORT EXPERIENCE</div>
        <button className="sidebar-item">Overview</button>
        <button className="sidebar-item">Workspaces</button>
        <button className="sidebar-item">Productivity</button>
        <button className="sidebar-item">Knowledge</button>
        <button className="sidebar-item">Collaboration</button>
      </div>

      <div className="sidebar-section">
        <div className="sidebar-section-title">OPERATIONS</div>
        <button className="sidebar-item">Overview</button>
        <button className="sidebar-item">Insights</button>
        <button className="sidebar-item truncated">Workforce manag...</button>
        <button className="sidebar-item">Calendar</button>
      </div>
    </nav>
  );
}

export default Sidebar;
