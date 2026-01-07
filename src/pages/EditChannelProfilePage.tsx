import { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { channelProfilesData } from '../data/channelProfiles';
import '../styles/EditChannelProfilePage.css';

function EditChannelProfilePage() {
  const { profileId } = useParams<{ profileId: string }>();
  const navigate = useNavigate();
  
  const profile = channelProfilesData.find(p => p.id === profileId);
  
  const [preChatSurvey, setPreChatSurvey] = useState(profile?.configurations.preChatSurvey || false);
  const [postChatSurvey, setPostChatSurvey] = useState(profile?.configurations.postChatSurvey || false);
  const [fileAttachments, setFileAttachments] = useState(profile?.configurations.fileAttachments || false);
  const [customerWaitTime, setCustomerWaitTime] = useState(profile?.configurations.customerWaitTime || '5 minutes');
  const [autoCloseAfterInactivity, setAutoCloseAfterInactivity] = useState(profile?.configurations.autoCloseAfterInactivity || '30 minutes');
  const [conversationMode, setConversationMode] = useState(profile?.configurations.conversationMode || 'Live Agent');
  const [authenticatedChat, setAuthenticatedChat] = useState(profile?.configurations.authenticatedChat || false);

  if (!profile) {
    return <div>Channel profile not found</div>;
  }

  const handleSaveAndClose = () => {
    console.log('Saving channel profile:', {
      profileId,
      preChatSurvey,
      postChatSurvey,
      fileAttachments,
      customerWaitTime,
      autoCloseAfterInactivity,
      conversationMode,
      authenticatedChat
    });
    alert('Channel profile saved successfully!');
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
        <h1 className="page-title">{profile.name}</h1>
        <p className="page-subtitle">{profile.description}</p>
      </div>

      {/* Main content */}
      <div className="main-content">
        <div className="profile-config">
          <h2 className="section-title">Channel Profile Configuration</h2>

          {/* Configuration form */}
          <div className="form-section">
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

export default EditChannelProfilePage;
