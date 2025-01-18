import { useState } from 'react';
import { getUsername } from '../../utils/auth';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faSearch, 
  faHeart, 
  faShoppingCart, 
  faUser 
} from '@fortawesome/free-solid-svg-icons';
import '../../styles/layout/navbar.css';

const Navbar = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const username = getUsername();

  return (
    <nav className="navbar">
      <div className="nav-brand">
        <h1>StyleStore</h1>
      </div>

      <div className="search-bar">
        <input
          type="text"
          placeholder="Search for products..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <button className="search-button">
          <FontAwesomeIcon icon={faSearch} />
        </button>
      </div>

      <div className="nav-actions">
        <button className="icon-button">
          <FontAwesomeIcon icon={faHeart} />
          <span className="badge">0</span>
        </button>
        <button className="icon-button">
          <FontAwesomeIcon icon={faShoppingCart} />
          <span className="badge">0</span>
        </button>
        <div className="user-menu">
          <div className="avatar">
            <FontAwesomeIcon icon={faUser} />
          </div>
          <span>{username}</span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar; 