import React, { useState } from "react";
import "../styles/AboutPage.css";

function AboutPage() {
  const [reviewName, setReviewName] = useState("");
  const [reviewEmail, setReviewEmail] = useState("");
  const [reviewMessage, setReviewMessage] = useState("");
  const [reviewSubmitted, setReviewSubmitted] = useState(false);

  const handleSubmitReview = (e) => {
    e.preventDefault();
    // Here you would typically send the review to your backend
    console.log("Review submitted:", {
      reviewName,
      reviewEmail,
      reviewMessage,
    });
    setReviewSubmitted(true);

    // Reset form
    setReviewName("");
    setReviewEmail("");
    setReviewMessage("");

    // Reset submitted state after 3 seconds
    setTimeout(() => setReviewSubmitted(false), 3000);
  };

  return (
    <main className="about-page">
      <section className="about-hero">
        <div className="hero-overlay">
          <h1 className="page-title">Where Culinary Magic Happens</h1>
          <p className="hero-tagline">Transforming Ingredients into Memories</p>
        </div>
      </section>

      <section className="culinary-journey">
        <div className="journey-card">
          <div className="card-icon">
            <svg className="seedling-icon" viewBox="0 0 24 24" width="48" height="48">
              <path fill="currentColor" d="M12 6.5c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 7c3.31 0 6-2.69 6-6 0-2.97-2.17-5.43-5-5.91V1c0-.55-.45-1-1-1S11 .45 11 1v.59c-2.83.48-5 2.94-5 5.91 0 3.31 2.69 6 6 6z" />
              <path fill="currentColor" d="M13 15.9V19h5v2H6v-2h5v-3.1c-6-1.1-6-9.9 0-11 1.33-1 3.67-1 5 0 6 1.1 6 9.9 0 11z" />
            </svg>
          </div>
          <h2>From Garden to Table</h2>
          <p>
            Our recipes celebrate the journey of each ingredient, honoring
            traditions while embracing innovation in every dish we showcase.
          </p>
        </div>

        <div className="journey-card">
          <div className="card-icon">
            <svg className="cooking-icon" viewBox="0 0 24 24" width="48" height="48">
              <path fill="currentColor" d="M8.1 13.34l2.83-2.83L3.91 3.5c-1.56 1.56-1.56 4.09 0 5.66l4.19 4.18zm6.78-1.81c1.53.71 3.68.21 5.27-1.38 1.91-1.91 2.28-4.65.81-6.12-1.46-1.46-4.2-1.1-6.12.81-1.59 1.59-2.09 3.74-1.38 5.27L3.7 19.87l1.41 1.41L12 14.41l6.88 6.88 1.41-1.41L13.41 13l1.47-1.47z" />
            </svg>
          </div>
          <h2>Crafted with Passion</h2>
          <p>
            Behind every recipe is a story of dedication, experimentation, and
            the pure joy that comes from creating something extraordinary.
          </p>
        </div>

        <div className="journey-card">
          <div className="card-icon">
            <svg className="globe-icon" viewBox="0 0 24 24" width="48" height="48">
              <path fill="currentColor" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z" />
            </svg>
          </div>
          <h2>Global Flavors, Local Heart</h2>
          <p>
            We curate dishes from across the world while ensuring each can be
            recreated in your kitchen with accessible ingredients.
          </p>
        </div>
      </section>

      <section className="ingredients-showcase">
        <h2 className="section-title">The Art of Ingredient Alchemy</h2>
        <div className="ingredients-grid">
          <div className="ingredient-item herbs">
            <span>Fresh Herbs</span>
          </div>
          <div className="ingredient-item spices">
            <span>Exotic Spices</span>
          </div>
          <div className="ingredient-item produce">
            <span>Seasonal Produce</span>
          </div>
          <div className="ingredient-item grains">
            <span>Artisanal Grains</span>
          </div>
        </div>
        <p className="ingredients-caption">
          We believe in the power of quality ingredients to transform ordinary
          meals into extraordinary culinary experiences.
        </p>
      </section>

      <section className="chef-philosophy">
        <div className="philosophy-content">
          <h2>Our Culinary Philosophy</h2>
          <blockquote>
            "Cooking is not about convenience and it's not about shortcuts. Our
            kitchen is a place where we can be creative and playful. It's where
            we connect with our food, ourselves, and each other."
          </blockquote>
          <p className="philosophy-signature">— The TemptAItion Team</p>
        </div>
      </section>

      <section className="our-kitchen">
        <div className="kitchen-images">
          <div className="kitchen-image img1"></div>
          <div className="kitchen-image img2"></div>
          <div className="kitchen-image img3"></div>
        </div>
        <div className="kitchen-text">
          <h2>Behind the Scenes</h2>
          <p>
            Our virtual kitchen is where culinary traditions meet modern
            innovation. Each recipe is tested multiple times by our passionate
            team of food enthusiasts to ensure perfect results in your home
            kitchen.
          </p>
          <p>
            We source inspiration from grandmothers' handwritten recipe cards,
            chef's secret techniques, and the vibrant street food scenes around
            the world.
          </p>
        </div>
      </section>

      <section className="review-section">
        <h2>Share Your Feedback</h2>
        <p>We'd love to hear about your experience with TemptAItion!</p>

        {reviewSubmitted && (
          <div className="success-message">
            Thank you for your feedback! We appreciate your input.
          </div>
        )}

        <form className="review-form" onSubmit={handleSubmitReview}>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              value={reviewName}
              onChange={(e) => setReviewName(e.target.value)}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              value={reviewEmail}
              onChange={(e) => setReviewEmail(e.target.value)}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="message">Your Feedback</label>
            <textarea
              id="message"
              rows="5"
              value={reviewMessage}
              onChange={(e) => setReviewMessage(e.target.value)}
              required
            ></textarea>
          </div>

          <button type="submit" className="submit-button">
            Submit Feedback
          </button>
        </form>
      </section>
    </main>
  );
}

export default AboutPage;
