import React from "react";
import Markdown from "react-markdown";
import rehypeRaw from "rehype-raw";

function ClaudeRecipe({
  recipe,
  loading = false,
  onRegenerate,
  canRegenerate,
}) {
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

      {/* Regenerate button at the bottom */}
      {canRegenerate && (
        <div className="recipe-footer-actions">
          <button
            onClick={onRegenerate}
            className="regenerate-btn"
            title="Generate a different recipe with the same ingredients"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z" />
            </svg>
            Try Another Recipe
          </button>
          <p className="regenerate-help-text">
            Not quite what you're looking for? Generate another recipe with the
            same ingredients!
          </p>
        </div>
      )}
    </section>
  );
}

export default ClaudeRecipe;
