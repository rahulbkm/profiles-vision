import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/ProfilesPage.css';

function ProfilesPage() {
  const navigate = useNavigate();
  const [sectionsExpanded, setSectionsExpanded] = useState({
    profileTypes: true
  });

  const toggleSection = (section: keyof typeof sectionsExpanded) => {
    setSectionsExpanded(prev => ({
      ...prev,
      [section]: !prev[section]
    }));
  };

  return (
    <div className="profiles-page">
      <h1 className="page-title">Profiles</h1>
      <p className="page-subtitle">
        Profiles help you manage configurations that determine channel behavior and routing strategies for your customer support operations.
      </p>

      {/* Profile types section */}
      <div className="collapsible-section">
        <div 
          className="section-header" 
          onClick={() => toggleSection('profileTypes')}
        >
          <h2>Profile types</h2>
          <span className={`section-chevron ${!sectionsExpanded.profileTypes ? 'collapsed' : ''}`}>
            ▼
          </span>
        </div>
        {sectionsExpanded.profileTypes && (
          <div className="section-content">
            <div className="profile-item">
              <div className="profile-item-content">
                <div className="profile-item-title">Channel profiles</div>
                <div className="profile-item-description">
                  Manage channel profile configurations that determine chat channel behavior and settings.
                </div>
              </div>
              <div className="profile-item-actions">
                <button 
                  className="manage-button"
                  onClick={() => navigate('/channel-profiles')}
                >
                  Manage <span className="manage-button-icon">&gt;</span>
                </button>
              </div>
            </div>

            <div className="profile-item">
              <div className="profile-item-content">
                <div className="profile-item-title">Routing profiles</div>
                <div className="profile-item-description">
                  Manage routing profile configurations that control how work items are distributed to agents.
                </div>
              </div>
              <div className="profile-item-actions">
                <button 
                  className="manage-button"
                  onClick={() => navigate('/routing-profiles')}
                >
                  Manage <span className="manage-button-icon">&gt;</span>
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default ProfilesPage;
