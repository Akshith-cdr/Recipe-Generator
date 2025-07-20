import React from "react";
import Markdown from "react-markdown";
import rehypeRaw from "rehype-raw";

function ClaudeRecipe({ recipe, loading = false }) {
  if (loading) {
    return (
      <section className="recipe-section">
        <div className="loading">
          <div className="loading-spinner"></div>
          <h3>TemptAItion is cooking...</h3>
          <p>Generating your perfect recipe!</p>
        </div>
      </section>
    );
  }

  const enhanceRecipe = (recipeText) => {
    if (!recipeText) return "";

    let cleanedRecipe = recipeText
      .replace(/##\s+Ingredients/g, "Ingredients")
      .replace(/##\s+Instructions/g, "Instructions")
      .replace(/##\s+([^\n]+)/g, "$1")
      .replace(/Ingredients:(\s*)/g, "")
      .replace(/Instructions:(\s*)/g, "");

    let enhancedRecipe = cleanedRecipe.replace(
      /(Ingredients[\s\S]*?)(?=Instructions|Directions|Steps|Method|Preparation|$)/g,
      '<div class="recipe-ingredients-section"><h2>Ingredients</h2>$1</div>'
    );

    enhancedRecipe = enhancedRecipe.replace(
      /(Instructions|Directions|Steps|Method|Preparation)[\s\S]*?(?=Notes|Tips|Serving|$)/g,
      '<div class="recipe-instructions-section"><h2>$1</h2>$&</div>'
    );

    return enhancedRecipe;
  };

  return (
    <section className="recipe-section">
      <h2>TemptAItion Recommends</h2>
      <div className="suggested-recipe-container">
        <Markdown
          rehypePlugins={[rehypeRaw]}
          components={{
            h2: ({ node, ...props }) => <h2 {...props} />,
            ul: ({ node, ...props }) => (
              <ul className="ingredients-list-formatted" {...props} />
            ),
            ol: ({ node, ...props }) => (
              <ol className="instructions-list-formatted" {...props} />
            ),
          }}
        >
          {enhanceRecipe(recipe)}
        </Markdown>
      </div>
    </section>
  );
}

export default ClaudeRecipe;
