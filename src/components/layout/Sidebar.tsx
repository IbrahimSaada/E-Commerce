import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faHome,
  faThLarge,
  faShoppingBag,
  faHeart,
  faUser,
  faCog,
  faSignOutAlt,
  faChevronLeft,
  faChevronRight
} from '@fortawesome/free-solid-svg-icons';
import '../../styles/layout/sidebar.css';

const Sidebar = () => {
  const [isExpanded, setIsExpanded] = useState(true);

  return (
    <aside className={`sidebar ${isExpanded ? 'expanded' : 'collapsed'}`}>
      <button 
        className="toggle-button"
        onClick={() => setIsExpanded(!isExpanded)}
      >
        <FontAwesomeIcon icon={isExpanded ? faChevronLeft : faChevronRight} />
      </button>

      <div className="sidebar-content">
        <nav className="sidebar-nav">
          <Link to="/dashboard" className="nav-item">
            <FontAwesomeIcon icon={faHome} />
            <span>Home</span>
          </Link>
          <Link to="/categories" className="nav-item">
            <FontAwesomeIcon icon={faThLarge} />
            <span>Categories</span>
          </Link>
          <Link to="/orders" className="nav-item">
            <FontAwesomeIcon icon={faShoppingBag} />
            <span>Orders</span>
          </Link>
          <Link to="/wishlist" className="nav-item">
            <FontAwesomeIcon icon={faHeart} />
            <span>Wishlist</span>
          </Link>
          <Link to="/profile" className="nav-item">
            <FontAwesomeIcon icon={faUser} />
            <span>Profile</span>
          </Link>
          <Link to="/settings" className="nav-item">
            <FontAwesomeIcon icon={faCog} />
            <span>Settings</span>
          </Link>
        </nav>

        <div className="sidebar-footer">
          <button className="logout-button">
            <FontAwesomeIcon icon={faSignOutAlt} />
            <span>Logout</span>
          </button>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar; 