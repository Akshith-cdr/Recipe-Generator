import React from "react";
import { Link } from "react-router-dom";
import temptationLogo from "../assets/temptation-logo.png";

function AuthLayout({ children }) {
  return (
    <div className="auth-layout">
      <nav className="auth-navbar">
        <div className="auth-nav-container">
          <Link to="/" className="auth-logo">
            <img
              src={temptationLogo}
              alt="TemptAItion"
              className="auth-logo-img"
            />
          </Link>
          <div className="auth-nav-links">
            <Link to="/" className="back-to-home">
              ← Back to Home
            </Link>
          </div>
        </div>
      </nav>

      <main className="auth-main">{children}</main>
    </div>
  );
}

export default AuthLayout;
