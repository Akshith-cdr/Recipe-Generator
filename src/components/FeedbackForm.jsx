import React, { useState } from "react";
import { supabase } from "../supabase";
import "../styles/FeedbackForm.css";
import Box from "@mui/material/Box";
import Rating from "@mui/material/Rating";
import Typography from "@mui/material/Typography";

const FeedbackForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    feedback_type: "suggestion",
    message: "",
    rating: null,
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const { data, error } = await supabase.from("feedback").insert([
        {
          ...formData,
          page_url: window.location.pathname,
        },
      ]);

      if (error) throw error;

      setSubmitted(true);
      setFormData({
        name: "",
        email: "",
        feedback_type: "suggestion",
        message: "",
        rating: null,
      });
    } catch (error) {
      console.error("Error submitting feedback:", error);
      alert("Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (submitted) {
    return (
      <div className="feedback-success">
        <div className="success-icon">
          <svg viewBox="0 0 24 24" width="48" height="48" fill="currentColor">
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
          </svg>
        </div>
        <h3>Thank You!</h3>
        <p>
          Your feedback has been successfully submitted. We'll review it and get
          back to you soon.
        </p>
        <button onClick={() => setSubmitted(false)} className="btn-secondary">
          Submit Another Review
        </button>
      </div>
    );
  }

  return (
    <div className="feedback-container">
      <div className="feedback-header">
        <h2>We Value Your Opinion</h2>
        <p>Help us improve TemptAItion by sharing your experience</p>
      </div>

      <div className="feedback-form">
        <form onSubmit={handleSubmit}>
          <div className="form-row">
            <div className="form-group">
              <label>Your Name</label>
              <input
                type="text"
                placeholder="Enter your name (optional)"
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
              />
            </div>

            <div className="form-group">
              <label>Email Address</label>
              <input
                type="email"
                placeholder="your.email@example.com (optional)"
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
              />
            </div>
          </div>

          <div className="form-group">
            <label>Feedback Category</label>
            <div className="select-wrapper">
              <select
                value={formData.feedback_type}
                onChange={(e) =>
                  setFormData({ ...formData, feedback_type: e.target.value })
                }
              >
                <option value="suggestion">💡 Suggestion</option>
                <option value="bug">🐛 Bug Report</option>
                <option value="compliment">👏 Compliment</option>
                <option value="question">❓ Question</option>
              </select>
            </div>
          </div>

          <div className="form-group">
            <label>How would you rate your experience?</label>
            <div className="rating-section">
              <Rating
                name="rating"
                className="rating-stars"
                value={formData.rating}
                onChange={(event, newValue) => {
                  setFormData({ ...formData, rating: newValue });
                }}
                size="large"
                sx={{
                  "& .MuiRating-iconFilled": {
                    color: "#d4a574",
                  },
                  "& .MuiRating-iconHover": {
                    color: "#b8956a",
                  },
                }}
              />
              <span className="rating-text">
                {formData.rating
                  ? formData.rating === 5
                    ? "Excellent!"
                    : formData.rating === 4
                    ? "Very Good"
                    : formData.rating === 3
                    ? "Good"
                    : formData.rating === 2
                    ? "Fair"
                    : "Needs Improvement"
                  : ""}
              </span>
            </div>
          </div>

          <div className="form-group">
            <label>Tell us more about your experience</label>
            <textarea
              value={formData.message}
              onChange={(e) =>
                setFormData({ ...formData, message: e.target.value })
              }
              required
              rows={4}
              placeholder="Share your thoughts, suggestions, or report any issues you've encountered..."
            />
          </div>

          <button type="submit" disabled={isSubmitting} className="btn-primary">
            {isSubmitting ? (
              <>
                <div className="spinner"></div>
                Submitting...
              </>
            ) : (
              <>
                <svg
                  viewBox="0 0 24 24"
                  width="20"
                  height="20"
                  fill="currentColor"
                >
                  <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z" />
                </svg>
                Submit Feedback
              </>
            )}
          </button>
        </form>
      </div>
    </div>
  );
};

export default FeedbackForm;
