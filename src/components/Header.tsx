import '../styles/Header.css';

function Header() {
  return (
    <header className="header">
      <div className="header-left">
        <span className="header-brand">Dynamics 365</span>
        <span className="header-title">Copilot Service admin center</span>
      </div>
      <div className="header-center">
        <input 
          type="text" 
          className="header-search" 
          placeholder="Search"
        />
      </div>
      <div className="header-right">
        <button className="header-icon" title="Ideas">💡</button>
        <button className="header-icon" title="Add">+</button>
        <button className="header-icon" title="Settings">⚙️</button>
        <button className="header-icon" title="Help">?</button>
        <button className="header-icon" title="Feedback">😊</button>
        <div className="header-avatar">AU</div>
      </div>
    </header>
  );
}

export default Header;
