import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import ChannelsPage from './pages/ChannelsPage';
import ChatChannelsPage from './pages/ChatChannelsPage';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<ChannelsPage />} />
          <Route path="/chat-channels" element={<ChatChannelsPage />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
