import React from "react";
import FeedbackForm from "../components/FeedbackForm";
import "../styles/AboutPage.css";
import seedlingIcon from "../assets/seedling.svg";
import globeIcon from "../assets/globe.svg";

function AboutPage() {
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
            <img
              src={seedlingIcon}
              alt="Seedling Icon"
              className="seedling-icon"
              width="48"
              height="48"
            />
          </div>
          <h2>From Garden to Table</h2>
          <p>
            Our recipes celebrate the journey of each ingredient, honoring
            traditions while embracing innovation in every dish we showcase.
          </p>
        </div>

        <div className="journey-card">
          <div className="card-icon">
            <svg
              className="cooking-icon"
              viewBox="0 0 24 24"
              width="48"
              height="48"
            >
              <path
                fill="currentColor"
                d="M8.1 13.34l2.83-2.83L3.91 3.5c-1.56 1.56-1.56 4.09 0 5.66l4.19 4.18zm6.78-1.81c1.53.71 3.68.21 5.27-1.38 1.91-1.91 2.28-4.65.81-6.12-1.46-1.46-4.2-1.1-6.12.81-1.59 1.59-2.09 3.74-1.38 5.27L3.7 19.87l1.41 1.41L12 14.41l6.88 6.88 1.41-1.41L13.41 13l1.47-1.47z"
              />
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
            <img
              src={globeIcon}
              alt="Globe Icon"
              className="globe-icon"
              width="48"
              height="48"
            />
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
        <FeedbackForm />
      </section>
    </main>
  );
}

export default AboutPage;
