import React, { useState } from "react";
import { CgClose, CgMenu } from "react-icons/cg";
import { FaSearch } from "react-icons/fa"; 
import styled from "styled-components";
import { NavLink } from "react-router-dom";

const Navbar = ({ onSearch }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearchChange = (e) => {
    const query = e.target.value;
    setSearchQuery(query);
    onSearch(query); 
  };

  const handleNavLinkClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setMenuOpen(false);
  };

  return (
    <NavWrapper>
      <div className="nav-container">
        <NavLink to="/" className="logo" onClick={handleNavLinkClick}>
          <img src="/images/logo3.png" alt="Logo" />
        </NavLink>

        <div className={menuOpen ? "nav-links open" : "nav-links"}>
          <NavLink to="/" onClick={handleNavLinkClick}>Home</NavLink>
          <NavLink to="/chapters" onClick={handleNavLinkClick}>Shlokas</NavLink>
          <NavLink to="/about" onClick={handleNavLinkClick}>About</NavLink>
          <NavLink to="/contact" onClick={handleNavLinkClick}>Contact Us</NavLink>
        </div>

        <div className="search-bar">
          <div className="search-wrapper">
            <FaSearch className="search-icon" />
            <input
              type="text"
              placeholder="Search Shlokas..."
              value={searchQuery}
              onChange={handleSearchChange}
            />
          </div>
        </div>

        <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <CgClose /> : <CgMenu />}
        </button>
      </div>
    </NavWrapper>
  );
};

export default Navbar;

const NavWrapper = styled.nav`
  background-color: #f8f9fa;
  padding: 1rem 2rem;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  position: fixed;
  width: 100%;
  top: 0;
  left: 0;
  z-index: 1000;

  .nav-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 1200px;
    margin: auto;
  }

  .logo img {
    height: 60px;
  }

  .nav-links {
    display: flex;
    gap: 2rem;
  }

  .nav-links a {
    text-decoration: none;
    color: #333;
    font-size: 1.2rem;
    font-weight: 600;
    transition: color 0.3s;
  }

  .nav-links a:hover {
    color: #ff5733;
  }

  .search-bar {
    display: flex;
    align-items: center;
  }

  .search-wrapper {
    display: flex;
    align-items: center;
    border: 1px solid #ccc;
    border-radius: 20px;
    padding: 0.5rem 1rem;
    background: white;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  }

  .search-icon {
    color: #555;
    font-size: 1rem;
    margin-right: 10px;
  }

  .search-bar input {
    border: none;
    outline: none;
    font-size: 1rem;
    width: 220px;
    color: #000;
    font-weight: bold; /* ✅ Bold text */
  }

  .search-bar input::placeholder {
    color: #888;
  }

  .menu-toggle {
    display: none;
    background: none;
    border: none;
    font-size: 2rem;
    cursor: pointer;
    color: #333;
  }

  @media (max-width: 768px) {
    .nav-container {
      flex-direction: column;
    }

    .nav-links {
      display: ${props => (props.menuOpen ? "flex" : "none")};
      flex-direction: column;
      align-items: center;
    }

    .menu-toggle {
      display: block;
    }

    .search-bar input {
      width: 180px;
    }
  }
`;
