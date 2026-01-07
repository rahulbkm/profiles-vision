import { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { chatChannelsData } from '../data/chatChannels';
import { channelProfilesData, ChannelProfile } from '../data/channelProfiles';
import { routingProfilesData, RoutingProfile } from '../data/routingProfiles';
import '../styles/EditChatChannelPage.css';

function EditChatChannelPage() {
  const { channelId } = useParams<{ channelId: string }>();
  const navigate = useNavigate();
  
  const channel = chatChannelsData.find(ch => ch.id === channelId);
  
  const [activeTab, setActiveTab] = useState('general');
  const [windowSize, setWindowSize] = useState('default');
  const [width, setWidth] = useState('360');
  const [height, setHeight] = useState('560');
  const [sliderValue, setSliderValue] = useState(20);
  const [selectedChannelProfile, setSelectedChannelProfile] = useState<ChannelProfile | null>(null);
  const [selectedRoutingProfile, setSelectedRoutingProfile] = useState<RoutingProfile | null>(null);
  const [channelConfigExpanded, setChannelConfigExpanded] = useState(true);

  if (!channel) {
    return <div>Channel not found</div>;
  }

  return (
    <div className="edit-channel-page">
      {/* Top toolbar */}
      <div className="edit-toolbar">
        <div className="toolbar-left">
          <button 
            className="toolbar-button back-button" 
            onClick={() => navigate('/chat-channels')}
          >
            ← Back
          </button>
          <button className="toolbar-button save-button">
            <span className="save-icon">💾</span> Save and close
          </button>
          <a href="#" className="toolbar-link">Download configuration</a>
        </div>
      </div>

      {/* Page header */}
      <div className="page-header">
        <h1 className="page-title">Editing Live Chat Widget</h1>
        <p className="page-subtitle">Title: Let's Chat!</p>
      </div>

      <div className="content-wrapper">
        {/* Left sidebar navigation */}
        <div className="sidebar-nav">
          <button 
            className="nav-item nav-parent"
            onClick={() => setChannelConfigExpanded(!channelConfigExpanded)}
          >
            <span>Channel configuration</span>
            <span className={`nav-chevron ${channelConfigExpanded ? 'expanded' : ''}`}>▶</span>
          </button>
          {channelConfigExpanded && (
            <>
              <button 
                className={`nav-item nav-sub-item ${activeTab === 'general' ? 'active' : ''}`}
                onClick={() => setActiveTab('general')}
              >
                General configuration
              </button>
              <button 
                className={`nav-item nav-sub-item ${activeTab === 'color' ? 'active' : ''}`}
                onClick={() => setActiveTab('color')}
              >
                Color settings
              </button>
              <button 
                className={`nav-item nav-sub-item ${activeTab === 'header' ? 'active' : ''}`}
                onClick={() => setActiveTab('header')}
              >
                Header
              </button>
              <button 
                className={`nav-item nav-sub-item ${activeTab === 'widget' ? 'active' : ''}`}
                onClick={() => setActiveTab('widget')}
              >
                Chat widget
              </button>
            </>
          )}
          <button 
            className={`nav-item ${activeTab === 'channel-profile' ? 'active' : ''}`}
            onClick={() => setActiveTab('channel-profile')}
          >
            Channel profile
          </button>
          <button 
            className={`nav-item ${activeTab === 'routing-profile' ? 'active' : ''}`}
            onClick={() => setActiveTab('routing-profile')}
          >
            Routing profile
          </button>
        </div>

        {/* Main content area */}
        <div className="main-content">
          {activeTab === 'general' && (
            <div className="general-config">
              <h2 className="section-title">General Configuration</h2>

              {/* Channel details subsection */}
              <div className="form-section">
                <h3 className="subsection-title">Channel details</h3>
                
                <div className="form-group">
                  <label className="form-label">
                    Name<span className="required">*</span>
                  </label>
                  <input 
                    type="text" 
                    className="form-input" 
                    defaultValue={channel.channelName}
                  />
                </div>

                <div className="form-group">
                  <label className="form-label">
                    Language<span className="required">*</span>
                  </label>
                  <select className="form-select">
                    <option>English - United States</option>
                  </select>
                </div>

                <div className="form-group">
                  <label className="form-label">
                    Type<span className="required">*</span>
                  </label>
                  <select className="form-select" disabled>
                    <option>Messaging</option>
                  </select>
                </div>

                <div className="form-group">
                  <label className="form-label">
                    Channel<span className="required">*</span>
                  </label>
                  <select className="form-select" disabled>
                    <option>Chat</option>
                  </select>
                </div>

                <div className="form-group">
                  <label className="form-label">Workstream</label>
                  <a href="#" className="form-link">Contact center live chat workstream</a>
                </div>
              </div>

              {/* Window Size and Position subsection */}
              <div className="form-section">
                <h3 className="subsection-title">Window Size and Position</h3>
                
                <div className="form-group">
                  <label className="form-label">
                    Window Size<span className="required">*</span>
                  </label>
                  <div className="radio-group">
                    <label className="radio-label">
                      <input 
                        type="radio" 
                        name="windowSize" 
                        value="default"
                        checked={windowSize === 'default'}
                        onChange={(e) => setWindowSize(e.target.value)}
                      />
                      <span>Default</span>
                    </label>
                    <label className="radio-label">
                      <input 
                        type="radio" 
                        name="windowSize" 
                        value="compact"
                        checked={windowSize === 'compact'}
                        onChange={(e) => setWindowSize(e.target.value)}
                      />
                      <span>Compact</span>
                    </label>
                    <label className="radio-label">
                      <input 
                        type="radio" 
                        name="windowSize" 
                        value="custom"
                        checked={windowSize === 'custom'}
                        onChange={(e) => setWindowSize(e.target.value)}
                      />
                      <span>Custom</span>
                    </label>
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label className="form-label">Width</label>
                    <input 
                      type="text" 
                      className="form-input small" 
                      value={width}
                      onChange={(e) => setWidth(e.target.value)}
                    />
                  </div>
                  <div className="form-group">
                    <label className="form-label">Height</label>
                    <input 
                      type="text" 
                      className="form-input small" 
                      value={height}
                      onChange={(e) => setHeight(e.target.value)}
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label className="form-label">
                    Position<span className="required">*</span>
                  </label>
                  <select className="form-select">
                    <option>Bottom right</option>
                  </select>
                </div>
              </div>

              {/* Distance From Corners subsection */}
              <div className="form-section">
                <h3 className="subsection-title">Distance From Corners</h3>
                
                <div className="form-group">
                  <label className="form-label">
                    Window Position<span className="required">*</span>
                  </label>
                  <label className="form-label secondary">Amount (px)</label>
                  <div className="slider-container">
                    <input 
                      type="range" 
                      className="form-slider" 
                      min="0" 
                      max="100" 
                      value={sliderValue}
                      onChange={(e) => setSliderValue(Number(e.target.value))}
                    />
                    <span className="slider-value">{sliderValue}</span>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Placeholder for other tabs */}
          {activeTab === 'channel-profile' && (
            <div className="profile-config">
              <h2 className="section-title">Channel Profile</h2>
              
              {/* Help text banner */}
              <div className="info-banner">
                <p className="info-banner-text">
                  All channel experience related configurations will be driven by the profile attached to this channel.
                </p>
                <p className="info-banner-text">
                  A channel profile can optionally be associated with a queue for more granular control.
                </p>
              </div>

              {/* Channel profile selection */}
              <div className="form-section">
                <div className="form-group">
                  <label className="form-label">
                    Select Channel Profile<span className="required">*</span>
                  </label>
                  <select 
                    className="form-select"
                    value={selectedChannelProfile?.id || ''}
                    onChange={(e) => {
                      const profile = channelProfilesData.find(p => p.id === e.target.value);
                      setSelectedChannelProfile(profile || null);
                    }}
                  >
                    <option value="">Select a channel profile...</option>
                    {channelProfilesData.map(profile => (
                      <option key={profile.id} value={profile.id}>
                        {profile.name}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Create new profile CTA */}
                <button 
                  className="create-profile-btn"
                  onClick={() => alert('Create new channel profile functionality coming soon!')}
                >
                  <span>+</span> Create new channel profile
                </button>
              </div>

              {/* Profile configuration summary */}
              {selectedChannelProfile && (
                <div className="profile-summary-card">
                  <h3 className="profile-summary-title">
                    Configuration Summary: {selectedChannelProfile.name}
                  </h3>
                  <p className="profile-description">
                    {selectedChannelProfile.description}
                  </p>
                  
                  <div className="config-grid">
                    <div className="config-item">
                      <span className="config-label">Pre-chat Survey</span>
                      <span className={`config-value ${selectedChannelProfile.configurations.preChatSurvey ? 'enabled' : 'disabled'}`}>
                        {selectedChannelProfile.configurations.preChatSurvey ? 'Enabled' : 'Disabled'}
                      </span>
                    </div>
                    
                    <div className="config-item">
                      <span className="config-label">Post-chat Survey</span>
                      <span className={`config-value ${selectedChannelProfile.configurations.postChatSurvey ? 'enabled' : 'disabled'}`}>
                        {selectedChannelProfile.configurations.postChatSurvey ? 'Enabled' : 'Disabled'}
                      </span>
                    </div>
                    
                    <div className="config-item">
                      <span className="config-label">File Attachments</span>
                      <span className={`config-value ${selectedChannelProfile.configurations.fileAttachments ? 'enabled' : 'disabled'}`}>
                        {selectedChannelProfile.configurations.fileAttachments ? 'Enabled' : 'Disabled'}
                      </span>
                    </div>
                    
                    <div className="config-item">
                      <span className="config-label">Customer Wait Time</span>
                      <span className="config-value">
                        {selectedChannelProfile.configurations.customerWaitTime}
                      </span>
                    </div>
                    
                    <div className="config-item">
                      <span className="config-label">Auto-close After Inactivity</span>
                      <span className="config-value">
                        {selectedChannelProfile.configurations.autoCloseAfterInactivity}
                      </span>
                    </div>
                    
                    <div className="config-item">
                      <span className="config-label">Conversation Mode</span>
                      <span className="config-value">
                        {selectedChannelProfile.configurations.conversationMode}
                      </span>
                    </div>
                    
                    <div className="config-item">
                      <span className="config-label">Authenticated Chat</span>
                      <span className={`config-value ${selectedChannelProfile.configurations.authenticatedChat ? 'enabled' : 'disabled'}`}>
                        {selectedChannelProfile.configurations.authenticatedChat ? 'Enabled' : 'Disabled'}
                      </span>
                    </div>
                  </div>
                </div>
              )}
            </div>
          )}

          {activeTab === 'routing-profile' && (
            <div className="profile-config">
              <h2 className="section-title">Routing Profile</h2>
              
              {/* Help text banner */}
              <div className="info-banner">
                <p className="info-banner-text">
                  All routing decisions will be driven by the profile attached to this channel.
                </p>
              </div>

              {/* Routing profile selection */}
              <div className="form-section">
                <div className="form-group">
                  <label className="form-label">
                    Select Routing Profile<span className="required">*</span>
                  </label>
                  <select 
                    className="form-select"
                    value={selectedRoutingProfile?.id || ''}
                    onChange={(e) => {
                      const profile = routingProfilesData.find(p => p.id === e.target.value);
                      setSelectedRoutingProfile(profile || null);
                    }}
                  >
                    <option value="">Select a routing profile...</option>
                    {routingProfilesData.map(profile => (
                      <option key={profile.id} value={profile.id}>
                        {profile.name}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Create new profile CTA */}
                <button 
                  className="create-profile-btn"
                  onClick={() => navigate('/routing-profiles/new')}
                >
                  <span>+</span> Create new routing profile
                </button>
              </div>

              {/* Profile configuration summary */}
              {selectedRoutingProfile && (
                <div className="profile-summary-card">
                  <h3 className="profile-summary-title">
                    Configuration Summary: {selectedRoutingProfile.name}
                  </h3>
                  <p className="profile-description">
                    {selectedRoutingProfile.description}
                  </p>
                  
                  <div className="config-grid">
                    {/* Work Classification */}
                    {selectedRoutingProfile.configurations.workClassification.length > 0 && (
                      <div className="config-item full-width">
                        <span className="config-label">Work Classification</span>
                        <div className="config-value">
                          {selectedRoutingProfile.configurations.workClassification.map((ruleset, index) => (
                            <span key={ruleset.id}>
                              <a href={ruleset.url} className="config-link">{ruleset.name}</a>
                              {index < selectedRoutingProfile.configurations.workClassification.length - 1 && ', '}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}
                    
                    {/* Route to Queue Rules */}
                    {selectedRoutingProfile.configurations.routeToQueueRules && (
                      <div className="config-item full-width">
                        <span className="config-label">Route to Queue Rules</span>
                        <span className="config-value">
                          <a href={selectedRoutingProfile.configurations.routeToQueueRules.url} className="config-link">
                            {selectedRoutingProfile.configurations.routeToQueueRules.name}
                          </a>
                        </span>
                      </div>
                    )}
                    
                    <div className="config-item">
                      <span className="config-label">Fallback Queue</span>
                      <span className="config-value">
                        {selectedRoutingProfile.configurations.fallbackQueue}
                      </span>
                    </div>
                    
                    <div className="config-item">
                      <span className="config-label">Rule-hit Policy</span>
                      <span className="config-value">
                        {selectedRoutingProfile.configurations.ruleHitPolicy === 'hit-first' ? 'Hit First' : 'Hit All'}
                      </span>
                    </div>
                    
                    <div className="config-item">
                      <span className="config-label">Work Distribution Mode</span>
                      <span className="config-value">
                        {selectedRoutingProfile.configurations.workDistributionSettings.workDistributionMode === 'push' ? 'Push' : 'Pick'}
                      </span>
                    </div>
                    
                    <div className="config-item">
                      <span className="config-label">Capacity Profile</span>
                      <span className="config-value">
                        {selectedRoutingProfile.configurations.workDistributionSettings.capacityProfile}
                      </span>
                    </div>
                    
                    <div className="config-item">
                      <span className="config-label">Allowed Presences</span>
                      <span className="config-value">
                        {selectedRoutingProfile.configurations.workDistributionSettings.allowedPresences.join(', ')}
                      </span>
                    </div>
                    
                    <div className="config-item">
                      <span className="config-label">Default Skill Matching</span>
                      <span className="config-value">
                        {selectedRoutingProfile.configurations.workDistributionSettings.defaultSkillMatchingAlgorithm === 'closest-match' ? 'Closest Match' : 
                         selectedRoutingProfile.configurations.workDistributionSettings.defaultSkillMatchingAlgorithm === 'exact-match' ? 'Exact Match' : 'None'}
                      </span>
                    </div>
                    
                    <div className="config-item">
                      <span className="config-label">After Call Work</span>
                      <span className="config-value">
                        {selectedRoutingProfile.configurations.workDistributionSettings.afterCallWork.mode === 'always-block' ? 'Always Block' :
                         selectedRoutingProfile.configurations.workDistributionSettings.afterCallWork.mode === 'do-not-block' ? 'Do Not Block' :
                         `Custom Time (${selectedRoutingProfile.configurations.workDistributionSettings.afterCallWork.customTimeSeconds}s)`}
                      </span>
                    </div>
                  </div>
                </div>
              )}
            </div>
          )}

          {activeTab !== 'general' && activeTab !== 'channel-profile' && activeTab !== 'routing-profile' && (
            <div className="placeholder-content">
              <h2 className="section-title">
                {activeTab.charAt(0).toUpperCase() + activeTab.slice(1)} Configuration
              </h2>
              <p>Content for {activeTab} tab will be displayed here.</p>
            </div>
          )}
        </div>
      </div>

      {/* Bottom right chat widget preview */}
      <div className="chat-widget-preview">
        <div className="chat-bubble">
          <div className="chat-bubble-header">Let's chat</div>
          <div className="chat-bubble-status">We're online.</div>
        </div>
      </div>
    </div>
  );
}

export default EditChatChannelPage;
