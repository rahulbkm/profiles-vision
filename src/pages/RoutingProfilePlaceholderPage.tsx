import { useNavigate } from 'react-router-dom';
import '../styles/RoutingProfilePlaceholderPage.css';

function RoutingProfilePlaceholderPage() {
  const navigate = useNavigate();

  return (
    <div className="routing-profile-placeholder-page">
      {/* Top toolbar */}
      <div className="placeholder-toolbar">
        <div className="toolbar-left">
          <button 
            className="toolbar-button back-button" 
            onClick={() => navigate('/routing-profiles')}
          >
            ← Back
          </button>
        </div>
      </div>

      {/* Page content */}
      <div className="placeholder-content">
        <div className="placeholder-card">
          <h1 className="placeholder-title">Routing profile details coming soon</h1>
          <p className="placeholder-text">
            The routing profile configuration page is currently under development.
          </p>
        </div>
      </div>
    </div>
  );
}

export default RoutingProfilePlaceholderPage;
