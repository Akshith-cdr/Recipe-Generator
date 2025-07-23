import React from "react";
import IngredientsList from "../components/IngredientsList";
import ClaudeRecipe from "../components/ClaudeRecipe";
import getRecipeFromGemini from "../ai.js";
import { Link } from "react-router-dom";

function HomePage() {
  const [ingredients, setIngredients] = React.useState([]);
  const [recipe, setRecipe] = React.useState("");
  const [loading, setLoading] = React.useState(false);
  const [recipeHistory, setRecipeHistory] = React.useState([]);

  async function getRecipe(isRegeneration = false) {
    setLoading(true);

    if (isRegeneration && recipe) {
      setRecipeHistory((prev) => [...prev, recipe]);
    }

    setTimeout(() => {
      window.scrollTo({
        top: document.documentElement.scrollHeight,
        behavior: "smooth",
      });
    }, 300);

    try {
      const recipeMarkdown = await getRecipeFromGemini(ingredients);
      setRecipe(recipeMarkdown);
    } catch (error) {
      console.error("Error generating recipe:", error);
      setRecipe(
        "Sorry, there was an error generating your recipe. Please try again."
      );
    } finally {
      setLoading(false);
    }
  }

  async function regenerateRecipe() {
    await getRecipe(true);
  }

  function addIngredient(formData) {
    const newIngredient = formData.get("ingredient");
    if (newIngredient.trim()) {
      setIngredients((prevIngredients) => [...prevIngredients, newIngredient]);
    }
  }

  function clearAll() {
    setIngredients([]);
    setRecipe("");
    setRecipeHistory([]);
  }

  return (
    <main className="home-page">
      <section className="welcome-section">
        <div className="welcome-content">
          <div className="welcome-icon">
            <img
              src="/src/assets/spoon_and_knife.svg"
              alt="Spoon and Knife"
              width={80}
              height={80}
              style={{ display: "block" }}
            />
          </div>
          <h1>Create Your Own Recipe</h1>
          <p>
            Add ingredients you have on hand, and let AI craft a delicious
            recipe for you!
          </p>
        </div>
        <div className="food-decoration food-decoration-1">🍅</div>
        <div className="food-decoration food-decoration-2">🥦</div>
        <div className="food-decoration food-decoration-3">🧄</div>
        <div className="food-decoration food-decoration-4">🌶️</div>
        <div className="food-decoration food-decoration-5">🧀</div>
        <div className="food-decoration food-decoration-6">🥕</div>
      </section>

      <form action={addIngredient} className="add-ingredient-form">
        <input
          type="text"
          aria-label="Add ingredient"
          placeholder="e.g. oregano"
          name="ingredient"
        />
        <button>Add ingredient</button>
      </form>

      {ingredients.length > 0 ? (
        <IngredientsList
          ingredients={ingredients}
          getRecipe={() => getRecipe(false)}
          clearAll={clearAll}
        />
      ) : (
        <div className="empty-ingredients-guide">
          <div className="empty-state-illustration">
            <img
              src="https://media.gettyimages.com/id/882314790/photo/fresh-vegetables-ready-for-cooking-shot-on-rustic-wooden-table.jpg?s=612x612&w=0&k=20&c=CYFR6NepVgBjBqZorQieRYTr42OlURdfj9C93IUYUtA="
              alt="Cooking ingredients"
            />
          </div>
          <h2>Get Started!</h2>
          <p>Add at least 4 ingredients to generate a custom recipe.</p>
          <div className="suggestion-chips">
            <button onClick={() => setIngredients(["Chicken"])}>
              🍗 Chicken
            </button>
            <button onClick={() => setIngredients(["Pasta"])}>🍝 Pasta</button>
            <button onClick={() => setIngredients(["Vegetables"])}>
              🥦 Vegetables
            </button>
            <button onClick={() => setIngredients(["Rice"])}>🍚 Rice</button>
          </div>
          <p className="or-divider">or</p>
          <Link to="/recipes" className="browse-link">
            Browse our recipe collection
          </Link>
        </div>
      )}

      {ingredients.length > 0 && ingredients.length < 4 && (
        <div className="ingredients-counter">
          <p>
            Add {4 - ingredients.length} more ingredient
            {ingredients.length === 3 ? "" : "s"} to generate a recipe!
          </p>
          <div className="progress-indicator">
            <div
              className="progress-bar"
              style={{ width: `${(ingredients.length / 4) * 100}%` }}
            ></div>
          </div>
        </div>
      )}

      {(loading || recipe) && (
        <ClaudeRecipe
          recipe={recipe}
          loading={loading}
          onRegenerate={regenerateRecipe}
          canRegenerate={!loading && recipe && ingredients.length >= 4}
          ingredients={ingredients}
        />
      )}
    </main>
  );
}

export default HomePage;
