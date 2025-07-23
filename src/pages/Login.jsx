import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const { signIn } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!email || !password) {
      setError("Please fill in all fields");
      return;
    }

    setLoading(true);
    setError("");

    try {
      const { error } = await signIn(email, password);
      if (error) {
        setError(error.message);
      } else {
        navigate("/");
      }
    } catch (err) {
      setError("An unexpected error occurred");
    } finally {
      setLoading(false);
    }
  };

  const handleBackClick = () => {
    navigate("/");
  };

  return (
    <div className="auth-layout">
      <div className="auth-main">
        <div className="auth-container">
          <div className="auth-image-panel">
            <button
              className="auth-back-btn"
              onClick={handleBackClick}
              aria-label="Back to home"
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M19 12H5M12 5L5 12L12 19"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>

          <div className="auth-form-panel">
            <div className="auth-card">
              <div className="auth-header">
                <h1>Welcome Back</h1>
                <p>
                  Today is a new day. It's your day. You shape it. Sign in to
                  start managing your projects.
                </p>
              </div>

              {error && (
                <div className="auth-error">
                  <span className="error-icon">⚠</span>
                  <span>{error}</span>
                </div>
              )}

              <form onSubmit={handleSubmit} className="auth-form">
                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <div className="input-wrapper">
                    <input
                      type="email"
                      id="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Example@email.com"
                      disabled={loading}
                      className={error && !email ? "error" : ""}
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="password">Password</label>
                  <div className="input-wrapper">
                    <input
                      type="password"
                      id="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      placeholder="At least 8 characters"
                      disabled={loading}
                      className={error && !password ? "error" : ""}
                    />
                  </div>
                  <div className="forgot-password">
                    <a href="#" onClick={(e) => e.preventDefault()}>
                      Forgot Password?
                    </a>
                  </div>
                </div>

                <button
                  type="submit"
                  className={`auth-btn primary ${loading ? "loading" : ""}`}
                  disabled={loading}
                >
                  {loading ? (
                    <>
                      <span className="spinner"></span>
                      Signing In...
                    </>
                  ) : (
                    "Sign in"
                  )}
                </button>
              </form>

              <div className="auth-footer">
                <p>
                  Don't you have an account?
                  <Link to="/signup" className="auth-link">
                    Sign up
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
