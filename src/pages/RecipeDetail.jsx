import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import "../styles/RecipeDetail.css";
import RECIPES from "../data/recipes"


function RecipeDetail() {
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    
    window.scrollTo(0, 0);

    const foundRecipe = RECIPES.find((r) => r.id === parseInt(id));

    if (foundRecipe) {
      setRecipe(foundRecipe);
      setLoading(false);
    } else {
      navigate("/recipes");
    }
  }, [id, navigate]);

  const handleBackToRecipes = () => {
    navigate(-1);
  };

  if (loading) {
    return (
      <main className="recipe-detail-page">
        <div className="loading">
          <div className="loading-spinner"></div>
          <h3>Loading recipe...</h3>
        </div>
      </main>
    );
  }

  return (
    <main className="recipe-detail-page">
      <button className="back-button" onClick={handleBackToRecipes}>
        &larr; Back to Recipes
      </button>
    
      <div className="recipe-header">
        <div className="recipe-header-content">
          <span className="cuisine-badge">{recipe.cuisine}</span>
          <h1>{recipe.title}</h1>
          <p className="recipe-description">{recipe.description}</p>

          <div className="recipe-info">
            <div className="recipe-info-card">
              <span className="value">{recipe.prepTime}</span>
              <span className="label">Prep Time</span>
            </div>
            <div className="recipe-info-card">
              <span className="value">{recipe.cookTime}</span>
              <span className="label">Cook Time</span>
            </div>
            <div className="recipe-info-card">
              <span className="value">{recipe.difficulty}</span>
              <span className="label">Difficulty</span>
            </div>
          </div>
        </div>

        <div className="recipe-image">
          <img src={recipe.image} alt={recipe.title} />
        </div>
      </div>

      <div className="recipe-content">
        <div className="recipe-ingredients-section">
          <h2>Ingredients</h2>
          <ul className="ingredients-list-formatted">
            {recipe.ingredients.map((ingredient, index) => (
              <li key={index}>{ingredient}</li>
            ))}
          </ul>
        </div>

        <div className="recipe-instructions-section">
          <h2>Instructions</h2>
          <ol className="instructions-list-formatted">
            {recipe.instructions?.map((step, index) => (
              <li key={index}>{step}</li>
            ))}
          </ol>
        </div>
      </div>
    </main>
  );
}

export default RecipeDetail;
