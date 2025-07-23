import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";

function Signup() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const { signUp, signIn } = useAuth();
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const getPasswordStrength = (password) => {
    if (password.length === 0)
      return { strength: 0, text: "", color: "#e5e7eb" };
    if (password.length < 6)
      return { strength: 25, text: "Weak", color: "#ef4444" };
    if (password.length < 8)
      return { strength: 50, text: "Fair", color: "#f59e0b" };
    if (password.match(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/))
      return { strength: 100, text: "Strong", color: "#22c55e" };
    return { strength: 75, text: "Good", color: "#3b82f6" };
  };

  const passwordStrength = getPasswordStrength(formData.password);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (
      !formData.name ||
      !formData.email ||
      !formData.password ||
      !formData.confirmPassword
    ) {
      setError("Please fill in all fields");
      return;
    }

    if (formData.password !== formData.confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    if (formData.password.length < 6) {
      setError("Password must be at least 6 characters");
      return;
    }

    setLoading(true);
    setError("");

    try {
      const { error: signUpError } = await signUp(
        formData.email,
        formData.password,
        {
          name: formData.name,
        }
      );

      if (signUpError) {
        setError(signUpError.message);
        return;
      }

      const { error: signInError } = await signIn(
        formData.email,
        formData.password
      );

      if (signInError) {
        console.error("Auto sign-in failed:", signInError);
        navigate("/login");
        return;
      }

      navigate("/");
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
                <h1>Welcome to TemptAItion</h1>
                <p>
                  Today is a new day, it's your day. You shape it. Sign up to
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
                  <label htmlFor="name">Name</label>
                  <div className="input-wrapper">
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Example name"
                      disabled={loading}
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <div className="input-wrapper">
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Example@email.com"
                      disabled={loading}
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="password">Password</label>
                  <div className="input-wrapper">
                    <input
                      type="password"
                      id="password"
                      name="password"
                      value={formData.password}
                      onChange={handleChange}
                      placeholder="At least 8 characters"
                      disabled={loading}
                    />
                  </div>
                  {formData.password && (
                    <div className="password-strength">
                      <div className="strength-bar">
                        <div
                          className="strength-fill"
                          style={{
                            width: `${passwordStrength.strength}%`,
                            backgroundColor: passwordStrength.color,
                          }}
                        ></div>
                      </div>
                      <span
                        className="strength-text"
                        style={{ color: passwordStrength.color }}
                      >
                        {passwordStrength.text}
                      </span>
                    </div>
                  )}
                </div>

                <div className="form-group">
                  <label htmlFor="confirmPassword">Confirm Password</label>
                  <div className="input-wrapper">
                    <input
                      type="password"
                      id="confirmPassword"
                      name="confirmPassword"
                      value={formData.confirmPassword}
                      onChange={handleChange}
                      placeholder="At least 8 characters"
                      disabled={loading}
                    />
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
                      Creating Account...
                    </>
                  ) : (
                    "Sign up"
                  )}
                </button>
              </form>

              <div className="auth-footer">
                <p>
                  Already have an account?
                  <Link to="/login" className="auth-link">
                    Sign in
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

export default Signup;
