import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faSearch,
  faHeart,
  faShoppingCart,
  faStar,
  faTshirt,
  faSocks,
  faHatCowboy,
  faGem
} from '@fortawesome/free-solid-svg-icons';
import '../../styles/dashboard/home.css';

const DashboardHome = () => {
  const [featuredClothes] = useState([
    { 
      id: 1, 
      name: 'Premium Cotton T-Shirt', 
      price: 29.99, 
      rating: 4.8,
      reviews: 128,
      image: 'tshirt.jpg',
      sizes: ['S', 'M', 'L', 'XL']
    },
    { 
      id: 2, 
      name: 'Slim Fit Jeans', 
      price: 59.99, 
      rating: 4.5,
      reviews: 89,
      image: 'jeans.jpg',
      sizes: ['30', '32', '34', '36']
    },
    { 
      id: 3, 
      name: 'Casual Hoodie', 
      price: 49.99, 
      rating: 4.7,
      reviews: 245,
      image: 'hoodie.jpg',
      sizes: ['S', 'M', 'L', 'XL']
    },
  ]);

  const [categories] = useState([
    { id: 1, name: 'Men', icon: faTshirt, count: 156 },
    { id: 2, name: 'Women', icon: faGem, count: 284 },
    { id: 3, name: 'Accessories', icon: faHatCowboy, count: 198 },
    { id: 4, name: 'Footwear', icon: faSocks, count: 145 },
  ]);

  return (
    <div className="user-dashboard">
      {/* Hero Section */}
      <div className="hero-section">
        <h1>Discover Your Style</h1>
        <p>Explore our latest collection of trendy fashion</p>
        <div className="search-container">
          <FontAwesomeIcon icon={faSearch} className="search-icon" />
          <input 
            type="text" 
            placeholder="Search for clothes, accessories..." 
            className="search-input"
          />
          <button className="search-button">Search</button>
        </div>
      </div>

      {/* Categories */}
      <section className="categories-section">
        <div className="section-header">
          <h2>Shop by Category</h2>
          <button className="view-all">View All Categories</button>
        </div>
        <div className="categories-grid">
          {categories.map(category => (
            <div key={category.id} className="category-card">
              <FontAwesomeIcon icon={category.icon} className="category-icon" />
              <h3>{category.name}</h3>
              <p>{category.count} Items</p>
              <button className="browse-button">Browse Collection</button>
            </div>
          ))}
        </div>
      </section>

      {/* Featured Products */}
      <section className="featured-section">
        <div className="section-header">
          <h2>New Arrivals</h2>
          <button className="view-all">View All</button>
        </div>
        <div className="products-grid">
          {featuredClothes.map(product => (
            <div key={product.id} className="product-card">
              <div className="product-image">
                <img src={`/src/assets/images/products/${product.image}`} alt={product.name} />
                <button className="wishlist-button">
                  <FontAwesomeIcon icon={faHeart} />
                </button>
              </div>
              <div className="product-details">
                <h3>{product.name}</h3>
                <div className="product-rating">
                  <FontAwesomeIcon icon={faStar} className="star-icon" />
                  <span>{product.rating}</span>
                  <span className="reviews">({product.reviews} reviews)</span>
                </div>
                <div className="sizes-grid">
                  {product.sizes.map((size, index) => (
                    <button key={index} className="size-button">{size}</button>
                  ))}
                </div>
                <div className="product-price">
                  <span className="price">${product.price}</span>
                  <button className="add-to-cart">
                    <FontAwesomeIcon icon={faShoppingCart} />
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Special Offers */}
      <section className="offers-section">
        <div className="offer-card seasonal">
          <div className="offer-content">
            <h3>Summer Collection</h3>
            <p>Get ready for summer with our latest styles</p>
            <button className="offer-button">Shop Now</button>
          </div>
        </div>
        <div className="offer-card discount">
          <div className="offer-content">
            <h3>Student Discount</h3>
            <p>20% off with valid student ID</p>
            <button className="offer-button">Learn More</button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default DashboardHome; 