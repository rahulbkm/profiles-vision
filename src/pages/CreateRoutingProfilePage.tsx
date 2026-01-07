import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { WorkClassificationRuleset } from '../data/routingProfiles';
import { queuesData } from '../data/queues';
import { capacityProfilesData } from '../data/capacityProfiles';
import { workClassificationRulesetsData } from '../data/workClassificationRulesets';
import { routeToQueueRulesetsData } from '../data/routeToQueueRulesets';
import '../styles/EditRoutingProfilePage.css';

function CreateRoutingProfilePage() {
  const navigate = useNavigate();
  
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [workClassification, setWorkClassification] = useState<WorkClassificationRuleset[]>([]);
  const [routeToQueueRules, setRouteToQueueRules] = useState<{ id: string; name: string; url: string } | null>(null);
  const [fallbackQueue, setFallbackQueue] = useState('');
  const [ruleHitPolicy, setRuleHitPolicy] = useState<'hit-first' | 'hit-all'>('hit-first');
  const [workDistributionMode, setWorkDistributionMode] = useState<'push' | 'pick'>('push');
  const [capacityProfile, setCapacityProfile] = useState('');
  const [allowedPresences, setAllowedPresences] = useState<('available' | 'busy' | 'DND' | 'offline')[]>(['available']);
  const [defaultSkillMatchingAlgorithm, setDefaultSkillMatchingAlgorithm] = useState<'closest-match' | 'exact-match' | 'none'>('none');
  const [afterCallWorkMode, setAfterCallWorkMode] = useState<'always-block' | 'do-not-block' | 'custom-time'>('always-block');
  const [customTimeSeconds, setCustomTimeSeconds] = useState<number>(60);
  const [showWorkDistribution, setShowWorkDistribution] = useState(true);

  const handleSaveAndClose = () => {
    // Basic validation
    if (!name.trim()) {
      alert('Please enter a profile name');
      return;
    }
    if (!fallbackQueue) {
      alert('Please select a fallback queue');
      return;
    }
    if (!capacityProfile) {
      alert('Please select a capacity profile');
      return;
    }

    console.log('Creating new routing profile:', {
      name,
      description,
      workClassification,
      routeToQueueRules,
      fallbackQueue,
      ruleHitPolicy,
      workDistributionMode,
      capacityProfile,
      allowedPresences,
      defaultSkillMatchingAlgorithm,
      afterCallWorkMode,
      customTimeSeconds
    });
    alert('Routing profile created successfully!');
    navigate('/routing-profiles');
  };

  const handleAddWorkClassification = () => {
    if (workClassification.length >= 10) {
      alert('Maximum 10 work classification rulesets allowed');
      return;
    }
    const available = workClassificationRulesetsData.filter(
      r => !workClassification.find(wc => wc.id === r.id)
    );
    if (available.length > 0) {
      setWorkClassification([...workClassification, available[0]]);
    }
  };

  const handleRemoveWorkClassification = (id: string) => {
    setWorkClassification(workClassification.filter(wc => wc.id !== id));
  };

  const handlePresenceToggle = (presence: 'available' | 'busy' | 'DND' | 'offline') => {
    if (allowedPresences.includes(presence)) {
      setAllowedPresences(allowedPresences.filter(p => p !== presence));
    } else {
      setAllowedPresences([...allowedPresences, presence]);
    }
  };

  return (
    <div className="edit-routing-profile-page">
      {/* Top toolbar */}
      <div className="edit-toolbar">
        <div className="toolbar-left">
          <button 
            className="toolbar-button back-button" 
            onClick={() => navigate('/routing-profiles')}
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
        <h1 className="page-title">Create New Routing Profile</h1>
        <p className="page-subtitle">Configure a new routing profile</p>
      </div>

      <div className="content-area">
        {/* Basic Information */}
        <div className="form-section">
          <h2 className="section-title">Basic Information</h2>
          
          <div className="form-group">
            <label className="form-label">
              Name<span className="required">*</span>
            </label>
            <input 
              type="text" 
              className="form-input" 
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter profile name"
            />
          </div>

          <div className="form-group">
            <label className="form-label">Description</label>
            <textarea 
              className="form-textarea" 
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              rows={3}
              placeholder="Enter profile description"
            />
          </div>
        </div>

        {/* Work Classification */}
        <div className="form-section">
          <h2 className="section-title">Work Classification (Optional)</h2>
          <p className="section-description">Add up to 10 work classification rulesets</p>
          
          {workClassification.map((ruleset) => (
            <div key={ruleset.id} className="ruleset-item">
              <a href={ruleset.url} className="ruleset-link">{ruleset.name}</a>
              <button 
                className="remove-button"
                onClick={() => handleRemoveWorkClassification(ruleset.id)}
              >
                ✕
              </button>
            </div>
          ))}
          
          {workClassification.length < 10 && (
            <button 
              className="add-button"
              onClick={handleAddWorkClassification}
            >
              + Add work classification ruleset
            </button>
          )}
        </div>

        {/* Route to Queue Rules */}
        <div className="form-section">
          <h2 className="section-title">Route to Queue Rules</h2>
          
          {routeToQueueRules ? (
            <div className="ruleset-item">
              <a href={routeToQueueRules.url} className="ruleset-link">{routeToQueueRules.name}</a>
              <button 
                className="change-button"
                onClick={() => {
                  const newRuleset = routeToQueueRulesetsData.find(r => r.id !== routeToQueueRules.id);
                  if (newRuleset) setRouteToQueueRules(newRuleset);
                }}
              >
                Change
              </button>
            </div>
          ) : (
            <button 
              className="add-button"
              onClick={() => {
                if (routeToQueueRulesetsData.length > 0) {
                  setRouteToQueueRules(routeToQueueRulesetsData[0]);
                }
              }}
            >
              + Add route to queue ruleset
            </button>
          )}
        </div>

        {/* Fallback Queue */}
        <div className="form-section">
          <h2 className="section-title">Fallback Queue</h2>
          
          <div className="form-group">
            <label className="form-label">
              Select Queue<span className="required">*</span>
            </label>
            <select 
              className="form-select"
              value={fallbackQueue}
              onChange={(e) => setFallbackQueue(e.target.value)}
            >
              <option value="">Select a queue...</option>
              {queuesData.map(queue => (
                <option key={queue.id} value={queue.name}>
                  {queue.name}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Rule-hit Policy */}
        <div className="form-section">
          <h2 className="section-title">Rule-hit Policy</h2>
          
          <div className="radio-group">
            <label className="radio-label">
              <input 
                type="radio" 
                name="ruleHitPolicy" 
                value="hit-first"
                checked={ruleHitPolicy === 'hit-first'}
                onChange={(e) => setRuleHitPolicy(e.target.value as 'hit-first')}
              />
              <span>Hit First</span>
            </label>
            <label className="radio-label">
              <input 
                type="radio" 
                name="ruleHitPolicy" 
                value="hit-all"
                checked={ruleHitPolicy === 'hit-all'}
                onChange={(e) => setRuleHitPolicy(e.target.value as 'hit-all')}
              />
              <span>Hit All</span>
            </label>
          </div>
        </div>

        {/* Work Distribution Settings */}
        <div className="form-section collapsible">
          <div 
            className="section-header-collapsible"
            onClick={() => setShowWorkDistribution(!showWorkDistribution)}
          >
            <h2 className="section-title">Work Distribution Settings</h2>
            <span className="collapse-icon">{showWorkDistribution ? '▼' : '▶'}</span>
          </div>
          
          {showWorkDistribution && (
            <div className="collapsible-content">
              {/* Work Distribution Mode */}
              <div className="form-group">
                <label className="form-label">
                  Work Distribution Mode<span className="required">*</span>
                </label>
                <div className="radio-group">
                  <label className="radio-label">
                    <input 
                      type="radio" 
                      name="workDistributionMode" 
                      value="push"
                      checked={workDistributionMode === 'push'}
                      onChange={(e) => setWorkDistributionMode(e.target.value as 'push')}
                    />
                    <span>Push</span>
                  </label>
                  <label className="radio-label">
                    <input 
                      type="radio" 
                      name="workDistributionMode" 
                      value="pick"
                      checked={workDistributionMode === 'pick'}
                      onChange={(e) => setWorkDistributionMode(e.target.value as 'pick')}
                    />
                    <span>Pick</span>
                  </label>
                </div>
              </div>

              {/* Capacity Profile */}
              <div className="form-group">
                <label className="form-label">
                  Capacity Profile<span className="required">*</span>
                </label>
                <select 
                  className="form-select"
                  value={capacityProfile}
                  onChange={(e) => setCapacityProfile(e.target.value)}
                >
                  <option value="">Select a capacity profile...</option>
                  {capacityProfilesData.map(cp => (
                    <option key={cp.id} value={cp.name}>
                      {cp.name}
                    </option>
                  ))}
                </select>
              </div>

              {/* Allowed Presences */}
              <div className="form-group">
                <label className="form-label">
                  Allowed Presences<span className="required">*</span>
                </label>
                <div className="checkbox-group">
                  <label className="checkbox-label">
                    <input 
                      type="checkbox"
                      checked={allowedPresences.includes('available')}
                      onChange={() => handlePresenceToggle('available')}
                    />
                    <span>Available</span>
                  </label>
                  <label className="checkbox-label">
                    <input 
                      type="checkbox"
                      checked={allowedPresences.includes('busy')}
                      onChange={() => handlePresenceToggle('busy')}
                    />
                    <span>Busy</span>
                  </label>
                  <label className="checkbox-label">
                    <input 
                      type="checkbox"
                      checked={allowedPresences.includes('DND')}
                      onChange={() => handlePresenceToggle('DND')}
                    />
                    <span>DND</span>
                  </label>
                  <label className="checkbox-label">
                    <input 
                      type="checkbox"
                      checked={allowedPresences.includes('offline')}
                      onChange={() => handlePresenceToggle('offline')}
                    />
                    <span>Offline</span>
                  </label>
                </div>
              </div>

              {/* Default Skill Matching Algorithm */}
              <div className="form-group">
                <label className="form-label">
                  Default Skill Matching Algorithm<span className="required">*</span>
                </label>
                <select 
                  className="form-select"
                  value={defaultSkillMatchingAlgorithm}
                  onChange={(e) => setDefaultSkillMatchingAlgorithm(e.target.value as 'closest-match' | 'exact-match' | 'none')}
                >
                  <option value="closest-match">Closest Match</option>
                  <option value="exact-match">Exact Match</option>
                  <option value="none">None</option>
                </select>
              </div>

              {/* After Call Work */}
              <div className="form-group">
                <label className="form-label">
                  After Call Work<span className="required">*</span>
                </label>
                <div className="radio-group">
                  <label className="radio-label">
                    <input 
                      type="radio" 
                      name="afterCallWork" 
                      value="always-block"
                      checked={afterCallWorkMode === 'always-block'}
                      onChange={(e) => setAfterCallWorkMode(e.target.value as 'always-block')}
                    />
                    <span>Always Block</span>
                  </label>
                  <label className="radio-label">
                    <input 
                      type="radio" 
                      name="afterCallWork" 
                      value="do-not-block"
                      checked={afterCallWorkMode === 'do-not-block'}
                      onChange={(e) => setAfterCallWorkMode(e.target.value as 'do-not-block')}
                    />
                    <span>Do Not Block</span>
                  </label>
                  <label className="radio-label">
                    <input 
                      type="radio" 
                      name="afterCallWork" 
                      value="custom-time"
                      checked={afterCallWorkMode === 'custom-time'}
                      onChange={(e) => setAfterCallWorkMode(e.target.value as 'custom-time')}
                    />
                    <span>Custom Time</span>
                  </label>
                </div>
                
                {afterCallWorkMode === 'custom-time' && (
                  <div className="custom-time-input">
                    <input 
                      type="number" 
                      className="form-input small" 
                      value={customTimeSeconds}
                      onChange={(e) => setCustomTimeSeconds(Number(e.target.value))}
                      min="1"
                    />
                    <span className="time-unit">seconds</span>
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default CreateRoutingProfilePage;
