import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/EditChannelProfilePage.css';

function CreateChannelProfilePage() {
  const navigate = useNavigate();
  
  const [profileName, setProfileName] = useState('');
  const [profileDescription, setProfileDescription] = useState('');
  const [preChatSurvey, setPreChatSurvey] = useState(false);
  const [postChatSurvey, setPostChatSurvey] = useState(false);
  const [fileAttachments, setFileAttachments] = useState(true);
  const [customerWaitTime, setCustomerWaitTime] = useState('5 minutes');
  const [autoCloseAfterInactivity, setAutoCloseAfterInactivity] = useState('30 minutes');
  const [conversationMode, setConversationMode] = useState('Live Agent');
  const [authenticatedChat, setAuthenticatedChat] = useState(false);

  const handleSaveAndClose = () => {
    // Basic validation
    if (!profileName.trim()) {
      alert('Please enter a profile name');
      return;
    }

    console.log('Creating new channel profile:', {
      profileName,
      profileDescription,
      preChatSurvey,
      postChatSurvey,
      fileAttachments,
      customerWaitTime,
      autoCloseAfterInactivity,
      conversationMode,
      authenticatedChat
    });
    alert('Channel profile created successfully!');
    navigate('/channel-profiles');
  };

  return (
    <div className="edit-channel-profile-page">
      {/* Top toolbar */}
      <div className="edit-toolbar">
        <div className="toolbar-left">
          <button 
            className="toolbar-button back-button" 
            onClick={() => navigate('/channel-profiles')}
          >
            ← Back
          </button>
          <button className="toolbar-button save-button" onClick={handleSaveAndClose}>
            <span className="save-icon">💾</span> Save and close
          </button>
        </div>
      </div>

      {/* Page header */}
      <div className="page-header">
        <h1 className="page-title">Create New Channel Profile</h1>
        <p className="page-subtitle">Configure a new channel profile</p>
      </div>

      {/* Main content */}
      <div className="main-content">
        <div className="profile-config">
          <h2 className="section-title">Channel Profile Configuration</h2>

          {/* Configuration form */}
          <div className="form-section">
            <div className="form-group">
              <label className="form-label">
                Profile name<span className="required">*</span>
              </label>
              <input 
                type="text" 
                className="form-input" 
                value={profileName}
                onChange={(e) => setProfileName(e.target.value)}
                placeholder="Enter profile name"
              />
            </div>

            <div className="form-group">
              <label className="form-label">
                Description
              </label>
              <input 
                type="text" 
                className="form-input" 
                value={profileDescription}
                onChange={(e) => setProfileDescription(e.target.value)}
                placeholder="Enter profile description"
              />
            </div>

            <div className="form-group">
              <label className="form-label">
                Pre-chat survey
              </label>
              <div className="toggle-container">
                <label className="toggle-switch">
                  <input 
                    type="checkbox" 
                    checked={preChatSurvey}
                    onChange={(e) => setPreChatSurvey(e.target.checked)}
                  />
                  <span className="toggle-slider"></span>
                </label>
                <span className="toggle-label">{preChatSurvey ? 'Enabled' : 'Disabled'}</span>
              </div>
            </div>

            <div className="form-group">
              <label className="form-label">
                Post-chat survey
              </label>
              <div className="toggle-container">
                <label className="toggle-switch">
                  <input 
                    type="checkbox" 
                    checked={postChatSurvey}
                    onChange={(e) => setPostChatSurvey(e.target.checked)}
                  />
                  <span className="toggle-slider"></span>
                </label>
                <span className="toggle-label">{postChatSurvey ? 'Enabled' : 'Disabled'}</span>
              </div>
            </div>

            <div className="form-group">
              <label className="form-label">
                File attachments
              </label>
              <div className="toggle-container">
                <label className="toggle-switch">
                  <input 
                    type="checkbox" 
                    checked={fileAttachments}
                    onChange={(e) => setFileAttachments(e.target.checked)}
                  />
                  <span className="toggle-slider"></span>
                </label>
                <span className="toggle-label">{fileAttachments ? 'Enabled' : 'Disabled'}</span>
              </div>
            </div>

            <div className="form-group">
              <label className="form-label">
                Customer wait time
              </label>
              <input 
                type="text" 
                className="form-input" 
                value={customerWaitTime}
                onChange={(e) => setCustomerWaitTime(e.target.value)}
              />
            </div>

            <div className="form-group">
              <label className="form-label">
                Auto-close after inactivity
              </label>
              <input 
                type="text" 
                className="form-input" 
                value={autoCloseAfterInactivity}
                onChange={(e) => setAutoCloseAfterInactivity(e.target.value)}
              />
            </div>

            <div className="form-group">
              <label className="form-label">
                Conversation mode
              </label>
              <select 
                className="form-select"
                value={conversationMode}
                onChange={(e) => setConversationMode(e.target.value)}
              >
                <option>Live Agent</option>
                <option>Hybrid</option>
                <option>Bot-first</option>
              </select>
            </div>

            <div className="form-group">
              <label className="form-label">
                Authenticated chat
              </label>
              <div className="toggle-container">
                <label className="toggle-switch">
                  <input 
                    type="checkbox" 
                    checked={authenticatedChat}
                    onChange={(e) => setAuthenticatedChat(e.target.checked)}
                  />
                  <span className="toggle-slider"></span>
                </label>
                <span className="toggle-label">{authenticatedChat ? 'Enabled' : 'Disabled'}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CreateChannelProfilePage;
