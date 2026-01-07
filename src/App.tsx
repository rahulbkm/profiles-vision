import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import ChannelsPage from './pages/ChannelsPage';
import ChatChannelsPage from './pages/ChatChannelsPage';
import EditChatChannelPage from './pages/EditChatChannelPage';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<ChannelsPage />} />
          <Route path="/chat-channels" element={<ChatChannelsPage />} />
          <Route path="/chat-channels/:channelId" element={<EditChatChannelPage />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
