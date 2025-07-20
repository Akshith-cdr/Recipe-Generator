const GEMINI_API_KEY = import.meta.env.VITE_GEMINI_API_KEY;

const SYSTEM_PROMPT = `You are an assistant that receives a list of ingredients that a user has 
                        and suggests a recipe they could make with some or all of those ingredients. 
                        You don't need to use every ingredient they mention in your recipe. The 
                        recipe can include additional ingredients they didn't mention, but try not
                        to include too many extra ingredients. Format your response in markdown to
                        make it easier to render to a web page`;

async function getRecipeFromGemini(ingredientsArr) {
  const ingredientsString = ingredientsArr.join(", ");

  console.log("API Key exists:", !!GEMINI_API_KEY);
  console.log("Calling Gemini API with ingredients:", ingredientsString);

  try {
    const response = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent?key=${GEMINI_API_KEY}`,
      {
        headers: {
          "Content-Type": "application/json",
        },
        method: "POST",
        body: JSON.stringify({
          contents: [
            {
              parts: [
                {
                  text: `${SYSTEM_PROMPT}\n\nI have these ingredients: ${ingredientsString}. Please give me a recipe you'd recommend I make!`,
                },
              ],
            },
          ],
          generationConfig: {
            temperature: 0.7,
            topK: 1,
            topP: 1,
            maxOutputTokens: 1000,
          },
          safetySettings: [
            {
              category: "HARM_CATEGORY_HARASSMENT",
              threshold: "BLOCK_MEDIUM_AND_ABOVE",
            },
          ],
        }),
      }
    );

    console.log("Response status:", response.status);

    if (!response.ok) {
      const errorText = await response.text();
      console.log("Error response:", errorText);
      throw new Error(`Gemini API failed with status ${response.status}`);
    }

    const result = await response.json();
    console.log("Gemini API result:", result);

    if (result.error) {
      throw new Error(result.error.message);
    }

    const generatedRecipe =
      result.candidates?.[0]?.content?.parts?.[0]?.text ||
      "Sorry, couldn't generate a recipe.";

    return generatedRecipe;
  } catch (error) {
    console.error("Gemini API Error:", error);
    return getFallbackRecipe(ingredientsArr);
  }
}

function getFallbackRecipe(ingredientsArr) {
  const ingredientsString = ingredientsArr.join(", ");

  return `# 🍳 TemptAItion's Special Recipe

## Ingredients:
${ingredientsArr
  .map((ing) => `- ${ing.charAt(0).toUpperCase() + ing.slice(1)}`)
  .join("\n")}
- 2 tablespoons olive oil
- Salt and black pepper to taste
- 1 medium onion, diced
- 2 garlic cloves, minced

## Instructions:

### Preparation (5 minutes)
1. **Wash and prep** all ingredients
2. **Dice the onion** and mince the garlic
3. **Heat olive oil** in a large skillet over medium heat

### Cooking (15-20 minutes)
4. **Sauté aromatics:** Add onion and garlic, cook for 2-3 minutes until fragrant
5. **Add main ingredients:** Add ${ingredientsArr[0]} and cook for 5-7 minutes
6. **Combine everything:** Add ${ingredientsArr
    .slice(1)
    .join(", ")} and mix well
7. **Season generously:** Add salt and pepper to taste
8. **Finish cooking:** Continue for 8-10 minutes, stirring occasionally

### Final Touch
9. **Taste and adjust:** Check seasoning and add more if needed
10. **Serve immediately:** Transfer to serving plates while hot

## Chef's Tips:
- 👨‍🍳 **Don't overcrowd the pan** - cook in batches if needed
- 🌿 **Fresh herbs** like parsley or basil make excellent garnish
- 🍋 **A squeeze of lemon** brightens up the flavors
- 🔥 **Medium heat** prevents burning while ensuring even cooking

## Nutritional Benefits:
This recipe combines ${ingredientsArr.join(
    ", "
  )} to create a balanced, flavorful meal packed with nutrients and natural goodness.

**Prep Time:** 5 minutes | **Cook Time:** 20 minutes | **Serves:** 2-4

*Fallback recipe - API temporarily unavailable* ⚠️`;
}

export default getRecipeFromGemini;
