import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../styles/RecipesPage.css";
import RECIPES from "../data/recipes";

function RecipesPage() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [filteredRecipes, setFilteredRecipes] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  const cuisines = [
    "All",
    "Italian",
    "Indian",
    "Mexican",
    "Thai",
    "Mediterranean",
    "Japanese",
    "French",
    "Korean",
    "Spanish",
    "Moroccan",
    "Brazilian",
    "Vietnamese",
    "Turkish",
    "Ethiopian",
    "British",
    "Peruvian",
    "German",
    "Lebanese",
  ];

  useEffect(() => {
    let results = RECIPES;

    if (activeFilter !== "All") {
      results = results.filter((recipe) => recipe.cuisine === activeFilter);
    }

    if (searchTerm.trim() !== "") {
      const searchLower = searchTerm.toLowerCase();
      results = results.filter(
        (recipe) =>
          recipe.title.toLowerCase().includes(searchLower) ||
          recipe.description.toLowerCase().includes(searchLower) ||
          recipe.ingredients.some((ingredient) =>
            ingredient.toLowerCase().includes(searchLower)
          )
      );
    }

    setFilteredRecipes(results);
  }, [activeFilter, searchTerm]);

  return (
    <main className="recipes-page">
      <h1 className="page-title">Explore Recipes</h1>

      <div className="search-container">
        <div className="search-bar">
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
            className="search-icon"
          >
            <circle cx="11" cy="11" r="8"></circle>
            <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
          </svg>
          <input
            type="text"
            placeholder="Search recipes by name, ingredients..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="search-input"
          />
          {searchTerm && (
            <button
              className="clear-search"
              onClick={() => setSearchTerm("")}
              aria-label="Clear search"
            >
              ✕
            </button>
          )}
        </div>
      </div>

      <div className="cuisine-filters">
        {cuisines.map((cuisine) => (
          <button
            key={cuisine}
            className={`cuisine-filter ${
              activeFilter === cuisine ? "active" : ""
            }`}
            onClick={() => setActiveFilter(cuisine)}
          >
            {cuisine}
          </button>
        ))}
      </div>

      {filteredRecipes.length > 0 ? (
        <div className="recipes-grid">
          {filteredRecipes.map((recipe) => (
            <Link
              to={`/recipes/${recipe.id}`}
              key={recipe.id}
              className="recipe-card"
            >
              <div className="recipe-image-container">
                <img src={recipe.image} alt={recipe.title} />
                <span className="cuisine-tag">{recipe.cuisine}</span>
              </div>
              <div className="recipe-content">
                <h2>{recipe.title}</h2>
                <p>{recipe.description}</p>
                <div className="recipe-meta">
                  <span>
                    <i className="meta-icon">⏱️</i> {recipe.prepTime} prep
                  </span>
                  <span>
                    <i className="meta-icon">🍳</i> {recipe.cookTime} cook
                  </span>
                  <span>
                    <i className="meta-icon">📊</i> {recipe.difficulty}
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      ) : (
        <div className="no-results">
          <p>No recipes found matching your search criteria.</p>
          <button
            className="reset-filters-btn"
            onClick={() => {
              setActiveFilter("All");
              setSearchTerm("");
            }}
          >
            Reset Filters
          </button>
        </div>
      )}
    </main>
  );
}

export default RecipesPage;