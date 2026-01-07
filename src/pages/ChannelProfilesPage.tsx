import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { channelProfilesData, ChannelProfile } from '../data/channelProfiles';
import '../styles/ChannelProfilesPage.css';

function ChannelProfilesPage() {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');

  const filteredProfiles = channelProfilesData.filter(profile =>
    profile.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    profile.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
    profile.configurations.conversationMode.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Generate mock created dates
  const getCreatedDate = (index: number) => {
    const dates = [
      '2024-01-15',
      '2024-02-20',
      '2024-03-10',
      '2024-04-05',
      '2024-05-12',
      '2024-06-18'
    ];
    return dates[index] || '2024-01-01';
  };

  return (
    <div className="channel-profiles-page">
      <div className="page-toolbar">
        <div className="toolbar-left">
          <button className="toolbar-button primary" onClick={() => navigate('/channel-profiles/new')}>
            <span>+</span> Add channel profile
          </button>
          <button className="toolbar-button">
            Copy
          </button>
          <button className="toolbar-button">
            <span>↻</span> Refresh
          </button>
        </div>
        <input
          type="text"
          className="toolbar-search"
          placeholder="Search profiles"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      <div className="breadcrumb">
        <span 
          className="breadcrumb-link" 
          onClick={() => navigate('/profiles')}
        >
          Profiles
        </span>
        <span className="breadcrumb-separator">/</span>
        <span className="breadcrumb-current">Channel profiles</span>
      </div>

      <table className="data-table">
        <thead>
          <tr>
            <th>
              <div className="sortable">
                Name
                <span className="sort-icon">▲</span>
              </div>
            </th>
            <th>Description</th>
            <th>Conversation Mode</th>
            <th>Created On</th>
          </tr>
        </thead>
        <tbody>
          {filteredProfiles.map((profile: ChannelProfile, index: number) => (
            <tr key={profile.id}>
              <td>
                <Link 
                  to={`/channel-profiles/${profile.id}`}
                  style={{ color: '#0078d4', cursor: 'pointer', textDecoration: 'none' }}
                >
                  {profile.name}
                </Link>
              </td>
              <td>{profile.description}</td>
              <td>{profile.configurations.conversationMode}</td>
              <td>{getCreatedDate(index)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ChannelProfilesPage;
