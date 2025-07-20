import React from "react";
import IngredientsList from "./components/IngredientsList";
import ClaudeRecipe from "./components/ClaudeRecipe";
import getRecipeFromGemini from "./ai.js";

function Content() {
  const [ingredients, setIngredients] = React.useState([
    "Chicken",
    "All the main Spices",
    "Oil",
    "Rice",
    "Sauces",
  ]);
  const [recipe, setRecipe] = React.useState("");
  const [loading, setLoading] = React.useState(false);

  async function getRecipe() {
    setLoading(true); // Start loading
    try {
      const recipeMarkdown = await getRecipeFromGemini(ingredients);
      setRecipe(recipeMarkdown);
    } catch (error) {
      console.error("Error generating recipe:", error);
    } finally {
      setLoading(false); // Stop loading regardless of success or failure
    }
  }

  function addIngredient(formData) {
    const newIngredient = formData.get("ingredient");
    setIngredients((prevIngredients) => [...prevIngredients, newIngredient]);
  }

  return (
    <main>
      <form action={addIngredient} className="add-ingredient-form">
        <input
          type="text"
          aria-label="Add ingredient"
          placeholder="e.g. oregano"
          name="ingredient"
        />
        <button>Add ingredient</button>
      </form>
      {ingredients.length > 0 && (
        <IngredientsList ingredients={ingredients} getRecipe={getRecipe} />
      )}
      {/* Pass loading state to ClaudeRecipe and display it even when recipe is empty */}
      {(loading || recipe) && (
        <ClaudeRecipe recipe={recipe} loading={loading} />
      )}
    </main>
  );
}

export default Content;
