import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import ChannelsPage from './pages/ChannelsPage';
import ChatChannelsPage from './pages/ChatChannelsPage';
import EditChatChannelPage from './pages/EditChatChannelPage';
import CreateChatChannelPage from './pages/CreateChatChannelPage';
import ProfilesPage from './pages/ProfilesPage';
import ChannelProfilesPage from './pages/ChannelProfilesPage';
import EditChannelProfilePage from './pages/EditChannelProfilePage';
import CreateChannelProfilePage from './pages/CreateChannelProfilePage';
import RoutingProfilesPage from './pages/RoutingProfilesPage';
import RoutingProfilePlaceholderPage from './pages/RoutingProfilePlaceholderPage';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<ChannelsPage />} />
          <Route path="/chat-channels" element={<ChatChannelsPage />} />
          <Route path="/chat-channels/new" element={<CreateChatChannelPage />} />
          <Route path="/chat-channels/:channelId" element={<EditChatChannelPage />} />
          <Route path="/profiles" element={<ProfilesPage />} />
          <Route path="/channel-profiles" element={<ChannelProfilesPage />} />
          <Route path="/channel-profiles/new" element={<CreateChannelProfilePage />} />
          <Route path="/channel-profiles/:profileId" element={<EditChannelProfilePage />} />
          <Route path="/routing-profiles" element={<RoutingProfilesPage />} />
          <Route path="/routing-profiles/:profileId" element={<RoutingProfilePlaceholderPage />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
