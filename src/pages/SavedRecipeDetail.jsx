import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import "../styles/SavedRecipeDetail.css";

function SavedRecipeDetail() {
  const location = useLocation();
  const navigate = useNavigate();
  const { recipe } = location.state || {};

  if (!recipe) {
    navigate("/profile");
    return null;
  }

  const handleBackToProfile = () => {
    navigate("/profile");
  };

  const cleanTitle = recipe.title.replace(/^#+\s*/, "");

  return (
    <main className="saved-recipe-detail-page">
      <button className="back-button" onClick={handleBackToProfile}>
        &larr; Back to Profile
      </button>

      <div className="saved-recipe-detail-card">
        <div className="saved-recipe-header">
          <span className="saved-recipe-badge">Saved Recipe</span>
          <div className="saved-recipe-title">{cleanTitle}</div>
          <div className="saved-recipe-date">
            Saved on {new Date(recipe.createdAt).toLocaleDateString()}
          </div>
          <div className="saved-recipe-info">
            <div className="saved-recipe-info-card">
              <span className="value">{recipe.ingredients.length}</span>
              <span className="label">Ingredients</span>
            </div>
            <div className="saved-recipe-info-card">
              <span className="value">AI Generated</span>
              <span className="label">Source</span>
            </div>
            <div className="saved-recipe-info-card">
              <span className="value">Personalized</span>
              <span className="label">Type</span>
            </div>
          </div>
        </div>

        <div className="saved-recipe-content">
          <div className="saved-recipe-section">
            <h2>Ingredients</h2>
            <ul className="saved-recipe-ingredients-list">
              {recipe.ingredients.map((ingredient, index) => (
                <li key={index}>{ingredient}</li>
              ))}
            </ul>
          </div>

          <div className="saved-recipe-section">
            <h2>Instructions</h2>
            <div className="saved-recipe-instructions">
              <ReactMarkdown>{recipe.content}</ReactMarkdown>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default SavedRecipeDetail;
