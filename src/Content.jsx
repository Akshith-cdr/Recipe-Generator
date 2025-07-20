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

/*
1. You have 2 options for what you can pass in to a state setter function (e.g. `setCount'). What are they?

A.    1. Pass the new version of state that we want to use as the replacement for the old version of state.

      2. Pass a callback function. Must return what we want the new value of state to be. Will receive the old version of state as a parameter so we can use it to help determine what we want the new value of state to be.

2. When would you want to pass the first option (from answer above) to the state setter function?

A.   Whenever we don't really care about (or need) the old value, we simply want to set a new value.

3. When would you want to pass the second option (from answer above) to the state setter function?

A.   Whenever we do care about the previous value in state and need it to help us determine what the new value should be.
*/
