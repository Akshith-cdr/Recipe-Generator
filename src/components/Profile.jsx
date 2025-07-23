import React, { useState, useEffect } from "react";
import { useAuth } from "../contexts/AuthContext";
import { useNavigate } from "react-router-dom";
import "../styles/profile.css";

function Profile() {
  const { user, signOut, getSavedRecipes, deleteRecipe } = useAuth();
  const [savedRecipes, setSavedRecipes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showAllRecipes, setShowAllRecipes] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (user) {
      loadSavedRecipes();
    }
  }, [user]);

  const loadSavedRecipes = async () => {
    try {
      setLoading(true);
      const { data, error } = await getSavedRecipes();
      if (error) throw error;
      setSavedRecipes(data || []);
    } catch (error) {
      console.error("Error loading recipes:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleSignOut = async () => {
    try {
      await signOut();
      navigate("/");
    } catch (error) {
      console.error("Error signing out:", error);
    }
  };

  const handleDeleteRecipe = async (e, recipeId) => {
    e.stopPropagation();
    if (!window.confirm("Are you sure you want to delete this recipe?")) return;

    try {
      const { error } = await deleteRecipe(recipeId);
      if (error) throw error;
      setSavedRecipes((prev) =>
        prev.filter((recipe) => recipe.id !== recipeId)
      );
    } catch (error) {
      console.error("Error deleting recipe:", error);
      alert("Error deleting recipe");
    }
  };

  const handleRecipeClick = (recipe) => {
    navigate(`/saved-recipe/${recipe.id}`, {
      state: {
        recipe: {
          id: recipe.id,
          title: recipe.title,
          content: recipe.recipe_content,
          ingredients: recipe.ingredients,
          createdAt: recipe.created_at,
        },
      },
    });
  };

  const displayedRecipes = showAllRecipes
    ? savedRecipes
    : savedRecipes.slice(0, 5);

  if (loading) {
    return (
      <div className="profile-page">
        <div className="profile-loading">
          <div className="spinner"></div>
          <p>Loading profile...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="profile-page">
      <div className="profile-container">
        <div className="profile-header">
          <div className="profile-info">
            <div className="profile-avatar">
              <span>
                {(user.user_metadata?.name
                  ? user.user_metadata.name.charAt(0)
                  : user.email?.charAt(0)
                ).toUpperCase() || "U"}
              </span>
            </div>
            <div className="profile-details">
              <h1>{user.user_metadata?.name || user.email}</h1>
              <div className="profile-stats">
                <div className="stat-item">
                  <span className="stat-label">Email:</span>
                  <span className="stat-value">{user.email}</span>
                </div>
                <div className="stat-item">
                  <span className="stat-label">Member Since:</span>
                  <span className="stat-value">
                    {new Date(user.created_at).toLocaleDateString()}
                  </span>
                </div>
                <div className="stat-item">
                  <span className="stat-label">Recipes Saved:</span>
                  <span className="stat-value">{savedRecipes.length}</span>
                </div>
              </div>
            </div>
          </div>
          <button onClick={handleSignOut} className="sign-out-btn">
            Sign Out
          </button>
        </div>

        <div className="saved-recipes-section">
          <h2>Your Saved Recipes</h2>
          {savedRecipes.length === 0 ? (
            <div className="no-recipes">
              <p>
                No recipes saved yet. Start cooking and save your favorites!
              </p>
              <button onClick={() => navigate("/")} className="go-cook-btn">
                Start Cooking
              </button>
            </div>
          ) : (
            <>
              <div className="recipes-grid">
                {displayedRecipes.map((recipe) => (
                  <div
                    key={recipe.id}
                    className="recipe-card"
                    onClick={() => handleRecipeClick(recipe)}
                  >
                    <div className="recipe-header">
                      <h3>{recipe.title}</h3>
                      <div className="recipe-actions">
                        <button
                          onClick={(e) => handleDeleteRecipe(e, recipe.id)}
                          className="delete-btn"
                        >
                          ×
                        </button>
                      </div>
                    </div>

                    <div className="recipe-meta">
                      <span>
                        Saved on{" "}
                        {new Date(recipe.created_at).toLocaleDateString()}
                      </span>
                    </div>
                  </div>
                ))}
              </div>

              {savedRecipes.length > 5 && (
                <div className="show-more-container">
                  <button
                    onClick={() => setShowAllRecipes(!showAllRecipes)}
                    className="show-more-btn"
                  >
                    {showAllRecipes
                      ? "Show Less"
                      : `Show More (${savedRecipes.length - 5} more)`}
                  </button>
                </div>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default Profile;
