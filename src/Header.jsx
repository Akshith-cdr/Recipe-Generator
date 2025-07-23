import { NavLink } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import { useAuth } from "./contexts/AuthContext";
import temptationLogo from "./assets/temptation-logo.png";

function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { user, signOut } = useAuth();
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
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const handleSignOut = async () => {
    await signOut();
    setMobileMenuOpen(false);
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
          {user && (
            <NavLink
              to="/profile"
              className={({ isActive }) =>
                isActive ? "nav-link active" : "nav-link"
              }
            >
              Profile
            </NavLink>
          )}
        </nav>

        <div className="nav-actions">
          {user ? (
            <div className="user-menu">
              <span className="user-greeting">
                Hi, {user.user_metadata?.name || user.email}!
              </span>
              <button onClick={handleSignOut} className="auth-btn sign-out">
                Sign Out
              </button>
            </div>
          ) : (
            <div className="auth-buttons">
              <NavLink to="/login" className="auth-btn login">
                Login
              </NavLink>
              <NavLink to="/signup" className="auth-btn signup">
                Sign Up
              </NavLink>
            </div>
          )}

          <button
            ref={menuButtonRef}
            onClick={toggleMobileMenu}
            className={`menu-btn ${mobileMenuOpen ? "active" : ""}`}
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
            >
              <line x1="3" y1="12" x2="21" y2="12"></line>
              <line x1="3" y1="6" x2="21" y2="6"></line>
              <line x1="3" y1="18" x2="21" y2="18"></line>
            </svg>
          </button>
        </div>
      </div>

      <div
        ref={menuRef}
        className={`mobile-menu ${mobileMenuOpen ? "active" : ""}`}
      >
        <nav className="mobile-nav">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? "mobile-nav-link active" : "mobile-nav-link"
            }
            onClick={() => setMobileMenuOpen(false)}
          >
            Home
          </NavLink>
          <NavLink
            to="/recipes"
            className={({ isActive }) =>
              isActive ? "mobile-nav-link active" : "mobile-nav-link"
            }
            onClick={() => setMobileMenuOpen(false)}
          >
            Recipes
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive ? "mobile-nav-link active" : "mobile-nav-link"
            }
            onClick={() => setMobileMenuOpen(false)}
          >
            About
          </NavLink>
          {user && (
            <NavLink
              to="/profile"
              className={({ isActive }) =>
                isActive ? "mobile-nav-link active" : "mobile-nav-link"
              }
              onClick={() => setMobileMenuOpen(false)}
            >
              Profile
            </NavLink>
          )}
          {user ? (
            <button
              onClick={handleSignOut}
              className="mobile-nav-link sign-out-mobile"
            >
              Sign Out
            </button>
          ) : (
            <>
              <NavLink
                to="/login"
                className="mobile-nav-link"
                onClick={() => setMobileMenuOpen(false)}
              >
                Login
              </NavLink>
              <NavLink
                to="/signup"
                className="mobile-nav-link"
                onClick={() => setMobileMenuOpen(false)}
              >
                Sign Up
              </NavLink>
            </>
          )}
        </nav>
      </div>

      {mobileMenuOpen && (
        <div
          className={`mobile-menu-overlay ${mobileMenuOpen ? "active" : ""}`}
          onClick={() => setMobileMenuOpen(false)}
        />
      )}
    </header>
  );
}

export default Header;
