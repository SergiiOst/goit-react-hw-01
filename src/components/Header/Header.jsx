const Header = () => {
  return (
    <header className="header">
      <div className="container header-container">
        <nav className="nav">
          <a href="./index.html" className="logo-header">
            Web<span className="logo-studio-nav">Studio</span>
          </a>
          <ul className="nav-list">
            <li>
              <a href="./index.html" className="nav-link current">
                Studio
              </a>
            </li>
            <li>
              <a href="" className="nav-link">
                Portfolio
              </a>
            </li>
            <li>
              <a href="" className="nav-link">
                Contacts
              </a>
            </li>
          </ul>
        </nav>
        <address className="address">
          <ul className="address-list">
            <li>
              <a href="mailto:info@devstudio.com" className="address-link">
                info@devstudio.com
              </a>
            </li>
            <li>
              <a href="tel:+110001111111" className="address-link">
                +11 (000) 111-11-11
              </a>
            </li>
          </ul>
        </address>
      </div>
    </header>
  );
};

export default Header;
