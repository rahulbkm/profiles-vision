import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/ChannelsPage.css';

function ChannelsPage() {
  const navigate = useNavigate();
  const [sectionsExpanded, setSectionsExpanded] = useState({
    manageChannels: true,
    channels: true,
    accounts: false
  });

  const toggleSection = (section: keyof typeof sectionsExpanded) => {
    setSectionsExpanded(prev => ({
      ...prev,
      [section]: !prev[section]
    }));
  };

  return (
    <div className="channels-page">
      <h1 className="page-title">Channels</h1>
      <p className="page-subtitle">
        Adding channels to your support offering is a powerful way to provide personalized service to customers on the channels of their choice.
      </p>

      {/* Manage channels section */}
      <div className="collapsible-section">
        <div 
          className="section-header" 
          onClick={() => toggleSection('manageChannels')}
        >
          <h2>Manage channels</h2>
          <span className={`section-chevron ${!sectionsExpanded.manageChannels ? 'collapsed' : ''}`}>
            ▼
          </span>
        </div>
        {sectionsExpanded.manageChannels && (
          <div className="section-content">
            <div className="channel-item">
              <div className="channel-item-content">
                <div className="channel-item-title">Manage channels</div>
                <div className="channel-item-description">
                  Change the support channels that customer service representatives can use to engage with customers.
                </div>
                <a href="#" className="channel-item-link">Learn more</a>
              </div>
              <div className="channel-item-actions">
                <button className="manage-button">
                  Manage <span className="manage-button-icon">&gt;</span>
                </button>
              </div>
            </div>

            <div className="channel-item">
              <div className="channel-item-content">
                <div className="channel-item-title">Consult and transfer</div>
                <div className="channel-item-description">
                  Consult and transfer work across your organization.
                </div>
                <a href="#" className="channel-item-link">Learn more</a>
              </div>
              <div className="channel-item-actions">
                <button className="manage-button">
                  Manage <span className="manage-button-icon">&gt;</span>
                </button>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Channels section */}
      <div className="collapsible-section">
        <div 
          className="section-header" 
          onClick={() => toggleSection('channels')}
        >
          <h2>Channels</h2>
          <span className={`section-chevron ${!sectionsExpanded.channels ? 'collapsed' : ''}`}>
            ▼
          </span>
        </div>
        {sectionsExpanded.channels && (
          <div className="section-content">
            <div className="channel-item">
              <div className="channel-item-content">
                <div className="channel-item-title">Record</div>
                <div className="channel-item-description">
                  Determine how work items get automatically distributed to representatives.
                </div>
                <a href="#" className="channel-item-link">Learn more</a>
              </div>
              <div className="channel-item-actions">
                <button className="manage-button">
                  Manage <span className="manage-button-icon">&gt;</span>
                </button>
              </div>
            </div>

            <div className="channel-item">
              <div className="channel-item-content">
                <div className="channel-item-title">Chat</div>
                <div className="channel-item-description">
                  Help your customers with chat channels.
                </div>
                <a href="#" className="channel-item-link">Learn more</a>
              </div>
              <div className="channel-item-actions">
                <button 
                  className="manage-button"
                  onClick={() => navigate('/chat-channels')}
                >
                  Manage <span className="manage-button-icon">&gt;</span>
                </button>
              </div>
            </div>

            <div className="channel-item">
              <div className="channel-item-content">
                <div className="channel-item-title">Web Engagement</div>
                <div className="channel-item-description">
                  Choose how your customers engage with your chat channels on your site.
                </div>
              </div>
              <div className="channel-item-actions">
                <button className="manage-button">
                  Manage <span className="manage-button-icon">&gt;</span>
                </button>
              </div>
            </div>

            <div className="channel-item">
              <div className="channel-item-content">
                <div className="channel-item-title">Messaging</div>
                <div className="channel-item-description">
                  Help your customers with SMS and social media digital messaging channels.
                </div>
                <a href="#" className="channel-item-link">Learn more</a>
              </div>
              <div className="channel-item-actions">
                <button className="manage-button">
                  Manage <span className="manage-button-icon">&gt;</span>
                </button>
              </div>
            </div>

            <div className="channel-item">
              <div className="channel-item-content">
                <div className="channel-item-title">Voice</div>
                <div className="channel-item-description">
                  Help your customers with voice channels.
                </div>
                <a href="#" className="channel-item-link">Learn more</a>
              </div>
              <div className="channel-item-actions">
                <button className="manage-button">
                  Manage <span className="manage-button-icon">&gt;</span>
                </button>
              </div>
            </div>

            <div className="channel-item">
              <div className="channel-item-content">
                <div className="channel-item-title">Voice update</div>
                <div className="channel-item-description">
                  Update your voice resources to the latest version.
                </div>
                <a href="#" className="channel-item-link">Learn more</a>
              </div>
              <div className="channel-item-actions">
                <button className="manage-button">
                  Manage <span className="manage-button-icon">&gt;</span>
                </button>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Accounts section */}
      <div className="collapsible-section">
        <div 
          className="section-header" 
          onClick={() => toggleSection('accounts')}
        >
          <h2>Accounts</h2>
          <span className={`section-chevron ${!sectionsExpanded.accounts ? 'collapsed' : ''}`}>
            ▼
          </span>
        </div>
      </div>
    </div>
  );
}

export default ChannelsPage;
