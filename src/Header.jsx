import { NavLink } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import temptationLogo from "./assets/temptation-logo.png";
import "./styles/Header.css";

function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const menuRef = useRef(null);
  const menuButtonRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (
        mobileMenuOpen &&
        menuRef.current &&
        !menuRef.current.contains(event.target) &&
        menuButtonRef.current &&
        !menuButtonRef.current.contains(event.target)
      ) {
        setMobileMenuOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [mobileMenuOpen]);

  const toggleMobileMenu = () => {
    console.log("Toggling menu. Current state:", mobileMenuOpen);
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <header>
      <div className="navbar-container">
        <NavLink to="/" className="logo-container">
          <img
            src={temptationLogo}
            alt="TemptAItion Logo"
            className="logo-img"
          />
        </NavLink>

        <nav className="nav-links">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? "nav-link active" : "nav-link"
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/recipes"
            className={({ isActive }) =>
              isActive ? "nav-link active" : "nav-link"
            }
          >
            Recipes
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive ? "nav-link active" : "nav-link"
            }
          >
            About
          </NavLink>
        </nav>

        <div className="nav-actions">
          <button
            ref={menuButtonRef}
            onClick={toggleMobileMenu}
            style={{
              background: "transparent",
              border: "none",
              cursor: "pointer",
              padding: "8px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              style={{
                transform: mobileMenuOpen ? "rotate(90deg)" : "none",
                transition: "transform 0.3s ease",
              }}
            >
              <line x1="3" y1="12" x2="21" y2="12"></line>
              <line x1="3" y1="6" x2="21" y2="6"></line>
              <line x1="3" y1="18" x2="21" y2="18"></line>
            </svg>
          </button>
        </div>
      </div>

      {mobileMenuOpen && (
        <div
          ref={menuRef}
          style={{
            position: "fixed",
            top: "70px",
            right: "0",
            width: "280px",
            height: "calc(100vh - 70px)",
            backgroundColor: "white",
            boxShadow: "-2px 0 10px rgba(0, 0, 0, 0.1)",
            zIndex: 1000,
            padding: "20px",
            transition: "transform 0.3s ease",
            transform: mobileMenuOpen ? "translateX(0)" : "translateX(100%)",
          }}
        >
          <nav
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "20px",
            }}
          >
            <NavLink
              to="/"
              onClick={() => setMobileMenuOpen(false)}
              style={({ isActive }) => ({
                color: isActive ? "#d94e33" : "#2c2116",
                textDecoration: "none",
                fontSize: "18px",
                fontWeight: isActive ? "600" : "500",
                padding: "10px 0",
                borderBottom: "1px solid #eee",
              })}
            >
              Home
            </NavLink>
            <NavLink
              to="/recipes"
              onClick={() => setMobileMenuOpen(false)}
              style={({ isActive }) => ({
                color: isActive ? "#d94e33" : "#2c2116",
                textDecoration: "none",
                fontSize: "18px",
                fontWeight: isActive ? "600" : "500",
                padding: "10px 0",
                borderBottom: "1px solid #eee",
              })}
            >
              Recipes
            </NavLink>
            <NavLink
              to="/about"
              onClick={() => setMobileMenuOpen(false)}
              style={({ isActive }) => ({
                color: isActive ? "#d94e33" : "#2c2116",
                textDecoration: "none",
                fontSize: "18px",
                fontWeight: isActive ? "600" : "500",
                padding: "10px 0",
                borderBottom: "1px solid #eee",
              })}
            >
              About
            </NavLink>
          </nav>
        </div>
      )}

      {mobileMenuOpen && (
        <div
          onClick={() => setMobileMenuOpen(false)}
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            zIndex: 999,
          }}
        />
      )}
    </header>
  );
}

export default Header;
