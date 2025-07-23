import React from "react";
import { useAuth } from "../contexts/AuthContext";
import { useNavigate } from "react-router-dom";

const SaveRecipeButton = ({ title, recipeContent, ingredients }) => {
  const { user, saveRecipe } = useAuth();
  const navigate = useNavigate();

  const handleSaveRecipe = async () => {
    try {
      if (!user) {
        navigate("/login");
        return;
      }

      await saveRecipe(title, recipeContent, ingredients);
      alert("Recipe saved successfully!");
    } catch (error) {
      if (error.message.includes("sign in")) {
        navigate("/login");
      } else {
        alert("Error saving recipe: " + error.message);
      }
    }
  };

  return (
    <button onClick={handleSaveRecipe} className="save-recipe-btn">
      {user ? "Save Recipe" : "Sign in to Save"}
    </button>
  );
};

export default SaveRecipeButton;
