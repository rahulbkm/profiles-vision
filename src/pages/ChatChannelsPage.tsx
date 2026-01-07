import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { chatChannelsData, ChatChannel } from '../data/chatChannels';
import '../styles/ChatChannelsPage.css';

function ChatChannelsPage() {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');

  const filteredChannels = chatChannelsData.filter(channel =>
    channel.channelName.toLowerCase().includes(searchTerm.toLowerCase()) ||
    channel.channelProfile.toLowerCase().includes(searchTerm.toLowerCase()) ||
    channel.routingProfile.toLowerCase().includes(searchTerm.toLowerCase()) ||
    channel.owner.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="chat-channels-page">
      <div className="page-toolbar">
        <div className="toolbar-left">
          <button className="toolbar-button primary" onClick={() => navigate('/chat-channels/new')}>
            <span>+</span> Add chat channel
          </button>
          <button className="toolbar-button">
            <span>↻</span> Refresh
          </button>
        </div>
        <input
          type="text"
          className="toolbar-search"
          placeholder="Search channels"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      <div className="breadcrumb">
        <span 
          className="breadcrumb-link" 
          onClick={() => navigate('/')}
        >
          Channels
        </span>
        <span className="breadcrumb-separator">/</span>
        <span className="breadcrumb-current">Chat channels</span>
      </div>

      <table className="data-table">
        <thead>
          <tr>
            <th>
              <div className="sortable">
                Channel Name
                <span className="sort-icon">▲</span>
              </div>
            </th>
            <th>Channel profile</th>
            <th>Routing profile</th>
            <th>Owner</th>
            <th>CreatedOn</th>
          </tr>
        </thead>
        <tbody>
          {filteredChannels.map((channel: ChatChannel) => (
            <tr key={channel.id}>
              <td>
                <Link 
                  to={`/chat-channels/${channel.id}`}
                  style={{ color: '#0078d4', cursor: 'pointer', textDecoration: 'none' }}
                >
                  {channel.channelName}
                </Link>
              </td>
              <td>{channel.channelProfile}</td>
              <td>{channel.routingProfile}</td>
              <td>{channel.owner}</td>
              <td>{channel.createdOn}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ChatChannelsPage;
