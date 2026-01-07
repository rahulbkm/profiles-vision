import { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { chatChannelsData } from '../data/chatChannels';
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
            className={`nav-item ${activeTab === 'general' ? 'active' : ''}`}
            onClick={() => setActiveTab('general')}
          >
            General Configuration
          </button>
          <button 
            className={`nav-item ${activeTab === 'color' ? 'active' : ''}`}
            onClick={() => setActiveTab('color')}
          >
            Color Settings
          </button>
          <button 
            className={`nav-item ${activeTab === 'header' ? 'active' : ''}`}
            onClick={() => setActiveTab('header')}
          >
            Header
          </button>
          <button 
            className={`nav-item ${activeTab === 'widget' ? 'active' : ''}`}
            onClick={() => setActiveTab('widget')}
          >
            Chat widget
          </button>
          <button 
            className={`nav-item ${activeTab === 'behaviors' ? 'active' : ''}`}
            onClick={() => setActiveTab('behaviors')}
          >
            Behaviors
          </button>
          <button 
            className={`nav-item ${activeTab === 'user' ? 'active' : ''}`}
            onClick={() => setActiveTab('user')}
          >
            User features
          </button>
          <button 
            className={`nav-item ${activeTab === 'notifications' ? 'active' : ''}`}
            onClick={() => setActiveTab('notifications')}
          >
            Notifications
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
          {activeTab !== 'general' && (
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
