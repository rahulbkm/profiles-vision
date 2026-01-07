import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { routingProfilesData, RoutingProfile } from '../data/routingProfiles';
import '../styles/RoutingProfilesPage.css';

function RoutingProfilesPage() {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');

  const filteredProfiles = routingProfilesData.filter(profile =>
    profile.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    profile.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
    profile.configurations.routingMethod.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Generate mock created dates
  const getCreatedDate = (index: number) => {
    const dates = [
      '2024-01-10',
      '2024-02-15',
      '2024-03-08',
      '2024-04-12',
      '2024-05-20',
      '2024-06-25',
      '2024-07-01'
    ];
    return dates[index] || '2024-01-01';
  };

  return (
    <div className="routing-profiles-page">
      <div className="page-toolbar">
        <div className="toolbar-left">
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
        <span className="breadcrumb-current">Routing profiles</span>
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
            <th>Routing Method</th>
            <th>Created On</th>
          </tr>
        </thead>
        <tbody>
          {filteredProfiles.map((profile: RoutingProfile, index: number) => (
            <tr key={profile.id}>
              <td>
                <Link 
                  to={`/routing-profiles/${profile.id}`}
                  style={{ color: '#0078d4', cursor: 'pointer', textDecoration: 'none' }}
                >
                  {profile.name}
                </Link>
              </td>
              <td>{profile.description}</td>
              <td>{profile.configurations.routingMethod}</td>
              <td>{getCreatedDate(index)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default RoutingProfilesPage;
