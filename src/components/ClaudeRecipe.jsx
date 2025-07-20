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

{
  /* <h2>Chef Claude Recommends:</h2>
        <article className="suggested-recipe-container" aria-live="polite">
          <p>
            Based on the ingredients you have available, I would recommend
            making a simple a delicious <strong>Beef Bolognese Pasta</strong>.
            Here is the recipe:
          </p>
          <h3>Beef Bolognese Pasta</h3>
          <strong>Ingredients:</strong>
          <ul>
            <li>1 lb. ground beef</li>
            <li>1 onion, diced</li>
            <li>3 cloves garlic, minced</li>
            <li>2 tablespoons tomato paste</li>
            <li>1 (28 oz) can crushed tomatoes</li>
            <li>1 cup beef broth</li>
            <li>1 teaspoon dried oregano</li>
            <li>1 teaspoon dried basil</li>
            <li>Salt and pepper to taste</li>
            <li>
              8 oz pasta of your choice (e.g., spaghetti, penne, or linguine)
            </li>
          </ul>
          <strong>Instructions:</strong>
          <ol>
            <li>Bring a large pot of salted water to a boil for the pasta.</li>
            <li>
              In a large skillet or Dutch oven, cook the ground beef over
              medium-high heat, breaking it up with a wooden spoon, until
              browned and cooked through, about 5-7 minutes.
            </li>
            <li>
              Add the diced onion and minced garlic to the skillet and cook for
              2-3 minutes, until the onion is translucent.
            </li>
            <li>Stir in the tomato paste and cook for 1 minute.</li>
            <li>
              Add the crushed tomatoes, beef broth, oregano, and basil. Season
              with salt and pepper to taste.
            </li>
            <li>
              Reduce the heat to low and let the sauce simmer for 15-20 minutes,
              stirring occasionally, to allow the flavors to meld.
            </li>
            <li>
              While the sauce is simmering, cook the pasta according to the
              package instructions. Drain the pasta and return it to the pot.
            </li>
            <li>
              Add the Bolognese sauce to the cooked pasta and toss to combine.
            </li>
            <li>
              Serve hot, garnished with additional fresh basil or grated
              Parmesan cheese if desired.
            </li>
          </ol>
        </article> */
}
