const RECIPES = [
  {
    id: 1,
    title: "Spaghetti Carbonara",
    cuisine: "Italian",
    description:
      "Classic Roman pasta dish with eggs, cheese, pancetta, and black pepper",
    image:
      "https://images.unsplash.com/photo-1588013273468-315fd88ea34c?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    prepTime: "10 min",
    cookTime: "15 min",
    difficulty: "Easy",
    ingredients: ["Pasta", "Eggs", "Pancetta", "Parmesan", "Black pepper"],
    instructions: [
      "Bring a large pot of salted water to boil and cook pasta until al dente.",
      "In a bowl, whisk together eggs, grated cheese, and black pepper.",
      "In a pan, cook pancetta until crisp, then remove from heat.",
      "Drain pasta and immediately add to the pancetta pan while still hot.",
      "Quickly pour in the egg mixture and stir vigorously to create a creamy sauce.",
      "Serve immediately with extra cheese and black pepper on top.",
    ],
  },
  {
    id: 2,
    title: "Chicken Tikka Masala",
    cuisine: "Indian",
    description: "Grilled chicken chunks in spiced curry sauce",
    image:
      "https://images.unsplash.com/photo-1565557623262-b51c2513a641?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    prepTime: "30 min",
    cookTime: "25 min",
    difficulty: "Medium",
    ingredients: ["Chicken", "Yogurt", "Tomatoes", "Cream", "Spices"],
    instructions: [
      "Cut chicken into bite-sized pieces and marinate in yogurt with spices for 30 minutes.",
      "Heat oil in a large pan and cook marinated chicken pieces until golden brown.",
      "Remove chicken and set aside, then sauté onions in the same pan until softened.",
      "Add tomato paste, garam masala, and other spices, cooking for 2 minutes.",
      "Pour in crushed tomatoes and cream, then simmer for 10 minutes.",
      "Return chicken to the pan and simmer for another 10 minutes until tender.",
      "Garnish with fresh cilantro and serve with rice or naan bread.",
    ],
  },
  {
    id: 3,
    title: "Beef Tacos",
    cuisine: "Mexican",
    description: "Seasoned ground beef in corn tortillas with toppings",
    image:
      "https://images.unsplash.com/photo-1552332386-f8dd00dc2f85?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    prepTime: "15 min",
    cookTime: "15 min",
    difficulty: "Easy",
    ingredients: [
      "Ground beef",
      "Taco shells",
      "Cheese",
      "Lettuce",
      "Tomatoes",
    ],
    instructions: [
      "Heat a large skillet over medium-high heat and brown the ground beef.",
      "Drain excess fat and add taco seasoning with a splash of water.",
      "Simmer for 5 minutes until the beef is well-coated and heated through.",
      "Warm taco shells in the oven or microwave according to package directions.",
      "Dice tomatoes and shred lettuce for fresh toppings.",
      "Fill each taco shell with seasoned beef and top with cheese, lettuce, and tomatoes.",
      "Serve immediately with salsa, sour cream, or hot sauce as desired.",
    ],
  },
  {
    id: 4,
    title: "Pad Thai",
    cuisine: "Thai",
    description: "Stir-fried rice noodles with eggs, tofu, and bean sprouts",
    image:
      "https://images.unsplash.com/photo-1559314809-0d155014e29e?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    prepTime: "20 min",
    cookTime: "15 min",
    difficulty: "Medium",
    ingredients: ["Rice noodles", "Tofu", "Eggs", "Bean sprouts", "Peanuts"],
    instructions: [
      "Soak rice noodles in warm water until soft, then drain and set aside.",
      "Cut tofu into cubes and pan-fry until golden brown on all sides.",
      "Beat eggs and scramble them in the same pan, then push to one side.",
      "Add drained noodles to the pan along with pad thai sauce and toss everything together.",
      "Stir in bean sprouts and cook for 2-3 minutes until they're slightly tender.",
      "Add fried tofu back to the pan and mix gently to combine all ingredients.",
      "Serve hot garnished with crushed peanuts, lime wedges, and fresh herbs.",
    ],
  },
  {
    id: 5,
    title: "Greek Salad",
    cuisine: "Mediterranean",
    description:
      "Fresh vegetables, olives, and feta cheese with olive oil dressing",
    image:
      "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    prepTime: "15 min",
    cookTime: "0 min",
    difficulty: "Easy",
    ingredients: ["Cucumber", "Tomatoes", "Olives", "Feta cheese", "Olive oil"],
    instructions: [
      "Wash and dice cucumbers into bite-sized pieces, leaving skin on for texture.",
      "Cut tomatoes into wedges and arrange them in a large serving bowl.",
      "Add diced cucumbers and pitted olives to the bowl with tomatoes.",
      "Crumble feta cheese over the vegetables in generous chunks.",
      "Drizzle with extra virgin olive oil and a splash of red wine vinegar.",
      "Season with salt, pepper, and dried oregano to taste.",
      "Toss gently to combine all ingredients and serve immediately.",
    ],
  },
  {
    id: 6,
    title: "Sushi Rolls",
    cuisine: "Japanese",
    description: "Rice and fish wrapped in seaweed",
    image:
      "https://images.unsplash.com/photo-1579871494447-9811cf80d66c?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    prepTime: "40 min",
    cookTime: "15 min",
    difficulty: "Advanced",
    ingredients: ["Sushi rice", "Nori", "Fish", "Vegetables", "Soy sauce"],
    instructions: [
      "Cook sushi rice according to package directions and season with rice vinegar.",
      "Allow rice to cool to room temperature while you prepare other ingredients.",
      "Slice fish into thin strips and julienne vegetables like cucumber and avocado.",
      "Place a sheet of nori on a bamboo sushi mat, shiny side down.",
      "Spread a thin layer of seasoned rice over the nori, leaving a 1-inch border at the top.",
      "Add fish and vegetables in a line across the center of the rice.",
      "Using the mat, roll the sushi tightly from bottom to top, sealing with water.",
      "Slice the roll into 8 pieces using a sharp, wet knife and serve with soy sauce.",
    ],
  },
  {
    id: 7,
    title: "Butter Chicken",
    cuisine: "Indian",
    description: "Creamy tomato-based curry with tender chicken pieces",
    image:
      "https://media.istockphoto.com/id/639390540/photo/indian-butter-chicken.webp?a=1&b=1&s=612x612&w=0&k=20&c=xZvd8MXsgpCBN-QyW1PdNMes0K55UMLQgbhnKNF30HE=",
    prepTime: "20 min",
    cookTime: "30 min",
    difficulty: "Medium",
    ingredients: [
      "Chicken thighs",
      "Yogurt",
      "Tomato puree",
      "Heavy cream",
      "Butter",
      "Garam masala",
      "Ginger",
      "Garlic",
    ],
    instructions: [
      "Marinate chicken in yogurt, lemon juice, and spices for at least 1 hour.",
      "Grill or bake chicken until slightly charred but not fully cooked.",
      "Melt butter in a pan and sauté onions until golden brown.",
      "Add ginger-garlic paste and cook for 1 minute until fragrant.",
      "Stir in tomato puree and cook for 5 minutes until oil separates.",
      "Add cream, butter, and garam masala, simmering for 5 minutes.",
      "Add grilled chicken and simmer for 10 minutes until fully cooked.",
      "Garnish with fresh cream and coriander leaves before serving.",
    ],
  },
  {
    id: 8,
    title: "Korean BBQ Bulgogi",
    cuisine: "Korean",
    description: "Marinated grilled beef with Asian flavors",
    image:
      "https://media.istockphoto.com/id/1499678498/photo/close-up-of-korean-bbq-on-grill-and-side-dishes.webp?a=1&b=1&s=612x612&w=0&k=20&c=X0JjK8aBP0-ggsqVBLm60f7g3i8uYDI9llBIh8yAU9o=",
    prepTime: "120 min",
    cookTime: "10 min",
    difficulty: "Medium",
    ingredients: ["Beef ribeye", "Soy sauce", "Pear", "Garlic", "Sesame oil"],
    instructions: [
      "Freeze beef for 30 minutes, then slice paper-thin against the grain.",
      "Grate Asian pear and mix with soy sauce, minced garlic, and sesame oil.",
      "Add brown sugar, rice wine, and grated ginger to the marinade.",
      "Marinate sliced beef for at least 2 hours or overnight.",
      "Heat a grill pan or outdoor grill to high heat.",
      "Cook marinated beef for 2-3 minutes per side until caramelized.",
      "Serve with steamed rice, lettuce wraps, and kimchi.",
    ],
  },
  {
    id: 9,
    title: "Paella Valenciana",
    cuisine: "Spanish",
    description: "Traditional Spanish rice dish with chicken and seafood",
    image:
      "https://images.unsplash.com/photo-1534080564583-6be75777b70a?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    prepTime: "25 min",
    cookTime: "30 min",
    difficulty: "Medium",
    ingredients: ["Rice", "Chicken", "Shrimp", "Saffron", "Bell peppers"],
    instructions: [
      "Heat olive oil in a large paella pan and season chicken pieces.",
      "Brown chicken on all sides, then remove and set aside.",
      "Sauté diced bell peppers and onions until softened.",
      "Add rice and stir to coat with oil for 2 minutes.",
      "Pour in hot chicken broth mixed with saffron threads.",
      "Return chicken to pan, add shrimp and simmer for 18-20 minutes.",
      "Let rest for 5 minutes before serving with lemon wedges.",
    ],
  },
  {
    id: 10,
    title: "Moroccan Tagine",
    cuisine: "Moroccan",
    description: "Slow-cooked stew with lamb, apricots, and warm spices",
    image:
      "https://images.unsplash.com/photo-1512058564366-18510be2db19?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    prepTime: "15 min",
    cookTime: "120 min",
    difficulty: "Medium",
    ingredients: ["Lamb", "Apricots", "Cinnamon", "Almonds", "Onions"],
    instructions: [
      "Cut lamb into large chunks and brown in a tagine or heavy pot.",
      "Add sliced onions and cook until golden and caramelized.",
      "Stir in ground cinnamon, ginger, and saffron threads.",
      "Add dried apricots and enough broth to barely cover the meat.",
      "Cover and simmer gently for 1.5-2 hours until lamb is tender.",
      "Toast almonds in a dry pan until golden brown.",
      "Serve tagine over couscous, garnished with toasted almonds and fresh herbs.",
    ],
  },
  {
    id: 11,
    title: "Brazilian Feijoada",
    cuisine: "Brazilian",
    description: "Traditional black bean stew with pork and sausage",
    image:
      "https://nowinrio.com/wp-content/uploads/2023/06/Brazilian-Feijoada-1.jpg",
    prepTime: "30 min",
    cookTime: "180 min",
    difficulty: "Hard",
    ingredients: ["Black beans", "Pork shoulder", "Sausage", "Bacon", "Orange"],
    instructions: [
      "Soak black beans overnight, then drain and rinse thoroughly.",
      "In a large pot, brown cubed pork shoulder and sliced sausage.",
      "Add soaked beans, diced bacon, and bay leaves to the pot.",
      "Cover with water and bring to a boil, then reduce heat and simmer.",
      "Cook for 2-3 hours, stirring occasionally and adding water as needed.",
      "Season with salt, pepper, and a pinch of orange zest.",
      "Serve with white rice, orange slices, and farofa (toasted cassava flour).",
    ],
  },
  {
    id: 12,
    title: "Masala Dosa",
    cuisine: "Indian",
    description: "Crispy rice crepe stuffed with spiced potato filling",
    image:
      "https://imgs.search.brave.com/wchFTYOj10t4AfWm2YqFTK0NDAYkXexxNGZJDJxBwLk/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90My5m/dGNkbi5uZXQvanBn/LzEyLzQ1LzMwLzY0/LzM2MF9GXzEyNDUz/MDY0ODVfUjVSQ2Iz/RzQwMkE3YnFRSEFT/YU1CNVNXOUFnZmpK/N0kuanBn",
    prepTime: "8 hr (fermentation)",
    cookTime: "20 min",
    difficulty: "Advanced",
    ingredients: [
      "Rice",
      "Urad dal",
      "Fenugreek seeds",
      "Potatoes",
      "Onions",
      "Mustard seeds",
      "Curry leaves",
      "Turmeric",
    ],
    instructions: [
      "Soak rice and dal separately for 4-6 hours, then grind into batter.",
      "Mix batter with salt and let ferment overnight.",
      "For filling: boil and mash potatoes.",
      "Temper mustard seeds, curry leaves, and onions in oil.",
      "Add turmeric and mashed potatoes, mixing well.",
      "Heat dosa pan and spread batter thinly in circular motion.",
      "Drizzle oil and cook until crisp, then add potato filling.",
      "Fold dosa and serve with coconut chutney and sambar.",
    ],
  },
  {
    id: 13,
    title: "Turkish Kebab",
    cuisine: "Turkish",
    description: "Grilled seasoned meat skewers with yogurt sauce",
    image:
      "https://images.unsplash.com/photo-1529006557810-274b9b2fc783?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    prepTime: "60 min",
    cookTime: "15 min",
    difficulty: "Medium",
    ingredients: ["Ground lamb", "Yogurt", "Cumin", "Paprika", "Mint"],
    instructions: [
      "Mix ground lamb with grated onion, garlic, cumin, and paprika.",
      "Knead the mixture for 5 minutes until sticky and well-combined.",
      "Form into long sausage shapes around flat metal skewers.",
      "Grill over hot charcoal or broil in oven for 5-7 minutes per side.",
      "Mix yogurt with minced garlic, salt, and chopped mint for sauce.",
      "Serve kebabs with warm flatbread, yogurt sauce, and grilled vegetables.",
      "Garnish with sumac and fresh parsley if desired.",
    ],
  },
  {
    id: 14,
    title: "Palak Paneer",
    cuisine: "Indian",
    description: "Creamy spinach curry with soft paneer cheese cubes",
    image:
      "https://media.istockphoto.com/id/2147564917/photo/palak-paneer-with-basmati-rice-and-salad.webp?a=1&b=1&s=612x612&w=0&k=20&c=lyvsWawZ2UNgtwRtW8C4F7Uj7h4jNobtAEDeP5whc48=",
    prepTime: "15 min",
    cookTime: "25 min",
    difficulty: "Medium",
    ingredients: [
      "Paneer cubes",
      "Fresh spinach",
      "Onions",
      "Tomatoes",
      "Garlic",
      "Ginger",
      "Cumin seeds",
      "Garam masala",
    ],
    instructions: [
      "Blanch spinach in boiling water for 2 minutes, then blend into puree.",
      "Heat oil in a pan and fry paneer cubes until golden, then set aside.",
      "Temper cumin seeds in oil until they crackle.",
      "Sauté onions until translucent, then add ginger-garlic paste.",
      "Add chopped tomatoes and cook until soft and mushy.",
      "Pour in spinach puree and simmer for 10 minutes.",
      "Add garam masala, salt, and fried paneer cubes.",
      "Cook for 5 more minutes and finish with a dollop of fresh cream.",
    ],
  },
  {
    id: 15,
    title: "British Fish & Chips",
    cuisine: "British",
    description: "Beer-battered fish with crispy chips and mushy peas",
    image:
      "https://images.unsplash.com/photo-1641145723321-689e26a97784?q=80&w=1652&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    prepTime: "20 min",
    cookTime: "25 min",
    difficulty: "Medium",
    ingredients: ["White fish", "Potatoes", "Beer", "Flour", "Peas"],
    instructions: [
      "Cut potatoes into thick chips and soak in cold water for 30 minutes.",
      "Drain and pat dry, then fry at 300°F for 5 minutes until soft but not brown.",
      "Mix flour with beer to make a thick batter and season with salt.",
      "Pat fish fillets dry and coat in batter, letting excess drip off.",
      "Fry fish at 375°F for 4-5 minutes until golden and crispy.",
      "Return chips to the oil and fry at 375°F until golden and crisp.",
      "Serve with mushy peas (mashed cooked peas with butter) and tartar sauce.",
    ],
  },
  {
    id: 16,
    title: "Rogan Josh",
    cuisine: "Indian",
    description: "Aromatic lamb curry from Kashmir with rich gravy",
    image:
      "https://imgs.search.brave.com/DFgUjOvZzSiCT0vu3h0PjuTpwVBvCV7zTr3O0Q1SM8s/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTQ0/MDMzMzk2NC9waG90/by9sYW1iLXJvZ2Fu/LWdvc2h0LW11dHRv/bi1rb3JtYS1rYXJh/aGktd2l0aC13aGl0/ZS1yaWNlLXNlcnZl/ZC1pbi1kaXNoLWlz/b2xhdGVkLW9uLXRh/YmxlLXNpZGUuanBn/P3M9NjEyeDYxMiZ3/PTAmaz0yMCZjPXpP/cHNfLWJjbTl2QnF2/SmhFNFlPbC1vOXI1/V3RPM09vU1VmZzBn/cEhtQ2c9",
    prepTime: "20 min",
    cookTime: "90 min",
    difficulty: "Hard",
    ingredients: [
      "Lamb pieces",
      "Yogurt",
      "Onions",
      "Ginger",
      "Garlic",
      "Kashmiri red chili",
      "Fennel powder",
      "Asafoetida",
    ],
    instructions: [
      "Marinate lamb in yogurt and spices for at least 2 hours.",
      "Heat oil in a heavy-bottomed pot and brown the lamb pieces.",
      "Remove lamb and sauté onions until caramelized.",
      "Add ginger-garlic paste and cook for 2 minutes.",
      "Mix in all dry spices and cook until fragrant.",
      "Return lamb to the pot and add water to cover.",
      "Simmer covered for 1-1.5 hours until lamb is tender.",
      "Finish with garam masala and garnish with fresh coriander.",
    ],
  },
  {
    id: 17,
    title: "German Sauerbraten",
    cuisine: "German",
    description: "Traditional pot roast marinated in vinegar and spices",
    image:
      "https://images.unsplash.com/photo-1544025162-d76694265947?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    prepTime: "30 min",
    cookTime: "210 min",
    difficulty: "Hard",
    ingredients: [
      "Beef roast",
      "Vinegar",
      "Juniper berries",
      "Ginger",
      "Cloves",
    ],
    instructions: [
      "Combine vinegar, water, onions, and spices to make a marinade.",
      "Place beef roast in marinade and refrigerate for 3-5 days, turning daily.",
      "Remove beef and pat dry, reserving the marinade.",
      "Brown the beef on all sides in a heavy pot with oil.",
      "Add strained marinade and simmer covered for 3 hours until tender.",
      "Remove beef and thicken sauce with crushed gingersnaps.",
      "Slice beef and serve with sauce, red cabbage, and potato dumplings.",
    ],
  },
  {
    id: 18,
    title: "Lebanese Hummus",
    cuisine: "Lebanese",
    description: "Creamy chickpea dip with tahini and olive oil",
    image:
      "https://media.istockphoto.com/id/1160233750/photo/vegan-food-plate-with-hummus-ready-to-serve.webp?a=1&b=1&s=612x612&w=0&k=20&c=8BJePvWbNw4TAkvFFb4SHFj60XCibFBwxII9t43FcWs=",
    prepTime: "10 min",
    cookTime: "0 min",
    difficulty: "Easy",
    ingredients: ["Chickpeas", "Tahini", "Lemon juice", "Garlic", "Olive oil"],
    instructions: [
      "Drain canned chickpeas, reserving some of the liquid.",
      "Combine chickpeas, tahini, lemon juice, and garlic in a food processor.",
      "Blend until smooth, adding reserved chickpea liquid as needed.",
      "Season with salt and cumin to taste.",
      "Spread hummus in a shallow bowl and create a well in the center.",
      "Drizzle with olive oil and sprinkle with paprika.",
      "Serve with warm pita bread and fresh vegetables for dipping.",
    ],
  },
  {
    id: 19,
    title: "Peruvian Ceviche",
    cuisine: "Peruvian",
    description: "Fresh fish marinated in citrus with onions and peppers",
    image:
      "https://media.istockphoto.com/id/599280682/photo/seafood-shellfish-ceviche-mariscal-typical-dish-peru-latin-america.webp?a=1&b=1&s=612x612&w=0&k=20&c=7anmed7Qd8HapEZrIEFyFpDSmroXmnTMK_MiEWhaXoo=",
    prepTime: "30 min",
    cookTime: "0 min",
    difficulty: "Easy",
    ingredients: ["White fish", "Lime", "Red onion", "Aji peppers", "Cilantro"],
    instructions: [
      "Cut fresh white fish into small cubes and place in a glass bowl.",
      "Cover fish completely with freshly squeezed lime juice.",
      "Add thinly sliced red onion and minced aji peppers.",
      "Marinate in refrigerator for 15-20 minutes until fish turns opaque.",
      "Drain most of the lime juice and mix in chopped cilantro.",
      "Season with salt and serve immediately with boiled sweet potato and corn.",
      "Garnish with additional cilantro leaves if desired.",
    ],
  },
  {
    id: 20,
    title: "Ethiopian Injera",
    cuisine: "Ethiopian",
    description: "Sourdough flatbread with spiced lentil stew",
    image:
      "https://media.istockphoto.com/id/1623061250/photo/ethiopian-injera-topped-with-meat-vegetables-greens-close-up-on-the-wooden-board-horizontal.webp?a=1&b=1&s=612x612&w=0&k=20&c=MwbtrP0BH3wI_5iqScpPNUfEnYe4u5Wp52lTDtcTajs=",
    prepTime: "15 min",
    cookTime: "45 min",
    difficulty: "Medium",
    ingredients: ["Teff flour", "Lentils", "Berbere spice", "Onions", "Garlic"],
    instructions: [
      "Mix teff flour with water to make a thin batter and let ferment for 2-3 days.",
      "Heat a large non-stick skillet and pour batter to form a thin pancake.",
      "Cook covered for 2-3 minutes until surface is bubbly and edges lift easily.",
      "Remove injera and let cool on a clean cloth.",
      "For the stew: sauté onions, garlic, and berbere spice in oil.",
      "Add cooked lentils and simmer with water for 15 minutes.",
      "Serve injera with lentil stew, using the bread to scoop up the stew.",
    ],
  },
  {
    id: 21,
    title: "Chana Masala",
    cuisine: "Indian",
    description: "Spicy chickpea curry with aromatic Indian spices",
    image:
      "https://media.istockphoto.com/id/1295943731/photo/chana-masala-or-chole-in-black-bowl-on-dark-slate-table-top-indian-cuisine-veg-chickpeas.webp?a=1&b=1&s=612x612&w=0&k=20&c=y4piCUqh4PL5-UgQrGhG41fZpFYwmdQfoGCSISag19E=",
    prepTime: "10 min",
    cookTime: "30 min",
    difficulty: "Easy",
    ingredients: [
      "Chickpeas",
      "Onions",
      "Tomatoes",
      "Ginger",
      "Garlic",
      "Cumin powder",
      "Coriander powder",
      "Amchur (dry mango powder)",
    ],
    instructions: [
      "Soak chickpeas overnight or use canned chickpeas.",
      "Pressure cook chickpeas until tender (skip if using canned).",
      "Heat oil in a pan and sauté onions until golden brown.",
      "Add ginger-garlic paste and cook for 1 minute.",
      "Add chopped tomatoes and cook until oil separates.",
      "Mix in all dry spices and cook for 2 minutes.",
      "Add cooked chickpeas with some water and simmer for 15 minutes.",
      "Finish with amchur powder and garnish with fresh coriander.",
    ],
  },
  {
    id: 22,
    title: "Beef Bourguignon",
    cuisine: "French",
    description: "Slow-cooked beef stew with red wine and vegetables",
    image:
      "https://images.unsplash.com/photo-1574484284002-952d92456975?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    prepTime: "20 min",
    cookTime: "180 min",
    difficulty: "Advanced",
    ingredients: ["Beef chuck", "Red wine", "Carrots", "Onions", "Mushrooms"],
    instructions: [
      "Cut beef chuck into large cubes and season with salt and pepper.",
      "Brown the beef in a heavy Dutch oven with olive oil, then set aside.",
      "Sauté diced onions and carrots until softened, about 5 minutes.",
      "Add tomato paste and cook for 1 minute, then pour in red wine.",
      "Return beef to the pot and add enough beef broth to cover.",
      "Add bay leaves, thyme, and bring to a simmer, then cover and cook for 2.5 hours.",
      "Add mushrooms in the last 30 minutes and serve with crusty bread.",
    ],
  },
  {
    id: 23,
    title: "Vietnamese Pho",
    cuisine: "Vietnamese",
    description: "Aromatic beef noodle soup with herbs and spices",
    image:
      "https://plus.unsplash.com/premium_photo-1694707235473-71d3f4626c89?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    prepTime: "20 min",
    cookTime: "240 min",
    difficulty: "Hard",
    ingredients: [
      "Beef bones",
      "Rice noodles",
      "Star anise",
      "Cilantro",
      "Lime",
    ],
    instructions: [
      "Roast beef bones in the oven at 400°F for 45 minutes until browned.",
      "Transfer bones to a large pot and cover with water.",
      "Add charred onion, ginger, star anise, and cinnamon stick.",
      "Simmer gently for 3-4 hours, skimming foam regularly.",
      "Strain broth and season with fish sauce and salt.",
      "Cook rice noodles according to package directions.",
      "Serve hot broth over noodles with raw beef slices, herbs, and lime.",
    ],
  },
  {
    id: 24,
    title: "Lasagna",
    cuisine: "Italian",
    description: "Layered pasta dish with meat sauce, cheese, and bechamel",
    image:
      "https://images.unsplash.com/photo-1574894709920-11b28e7367e3?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.1.0",
    prepTime: "45 min",
    cookTime: "50 min",
    difficulty: "Medium",
    ingredients: [
      "Lasagna sheets",
      "Ground beef",
      "Tomato sauce",
      "Mozzarella",
      "Parmesan",
      "Bechamel sauce",
      "Onions",
      "Garlic",
    ],
    instructions: [
      "Make a rich meat sauce by browning ground beef with onions and garlic.",
      "Add tomato sauce, herbs, and simmer for 30 minutes until thickened.",
      "Prepare bechamel sauce by whisking flour, butter, and milk until smooth.",
      "In a baking dish, layer meat sauce, lasagna sheets, and bechamel.",
      "Sprinkle grated mozzarella and parmesan between layers.",
      "Repeat layers, finishing with cheese on top.",
      "Bake at 375°F for 45-50 minutes until golden and bubbling.",
      "Let rest for 15 minutes before slicing and serving.",
    ],
  },
  {
    id: 25,
    title: "Enchiladas Verdes",
    cuisine: "Mexican",
    description:
      "Corn tortillas filled with chicken and covered in green sauce",
    image:
      "https://images.unsplash.com/photo-1534352956036-cd81e27dd615?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.1.0",
    prepTime: "30 min",
    cookTime: "25 min",
    difficulty: "Medium",
    ingredients: [
      "Corn tortillas",
      "Shredded chicken",
      "Tomatillos",
      "Jalapeños",
      "Sour cream",
      "Queso fresco",
      "Cilantro",
      "Onion",
    ],
    instructions: [
      "Make salsa verde by boiling tomatillos and jalapeños, then blending with cilantro and onion.",
      "Shred cooked chicken and mix with some of the salsa verde.",
      "Soften corn tortillas by quickly heating them in a skillet with oil.",
      "Fill each tortilla with chicken mixture and roll tightly.",
      "Place rolled enchiladas in a baking dish and cover with remaining salsa verde.",
      "Top with crumbled queso fresco and bake at 350°F for 20 minutes.",
      "Garnish with sliced avocado, cilantro, and a drizzle of Mexican crema.",
      "Serve hot with rice and beans on the side.",
    ],
  },
  {
    id: 26,
    title: "Samosa",
    cuisine: "Indian",
    description: "Crispy pastry triangles filled with spiced potatoes and peas",
    image:
      "https://images.unsplash.com/photo-1601050690597-df0568f70950?q=80&w=1471&auto=format&fit=crop&ixlib=rb-4.1.0",
    prepTime: "40 min",
    cookTime: "25 min",
    difficulty: "Hard",
    ingredients: [
      "All-purpose flour",
      "Potatoes",
      "Green peas",
      "Cumin seeds",
      "Coriander powder",
      "Garam masala",
      "Green chilies",
      "Amchur (dry mango powder)",
    ],
    instructions: [
      "Make dough by mixing flour, salt, and oil, then adding water to form a stiff dough.",
      "Boil, peel, and mash potatoes, then mix with cooked peas.",
      "Heat oil and temper cumin seeds, adding ginger and green chilies.",
      "Add mashed potato mixture with spices and cook until well combined.",
      "Divide dough into balls and roll into circles, cutting each in half.",
      "Form cones with the half-circles and fill with potato mixture.",
      "Seal edges with water and deep fry until golden brown and crispy.",
      "Serve hot with mint chutney and tamarind sauce.",
    ],
  },
  {
    id: 27,
    title: "Tom Yum Goong",
    cuisine: "Thai",
    description: "Hot and sour shrimp soup with lemongrass and lime",
    image:
      "https://images.unsplash.com/photo-1548943487-a2e4e43b4853?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0",
    prepTime: "15 min",
    cookTime: "20 min",
    difficulty: "Medium",
    ingredients: [
      "Shrimp",
      "Lemongrass",
      "Kaffir lime leaves",
      "Galangal",
      "Thai bird's eye chilies",
      "Mushrooms",
      "Fish sauce",
      "Lime juice",
    ],
    instructions: [
      "Bring broth to a simmer and add bruised lemongrass, sliced galangal, and lime leaves.",
      "Simmer for 10 minutes to infuse the flavors into the broth.",
      "Add mushrooms and cook for 3 minutes until softened.",
      "Add shrimp and cook just until they turn pink, about 2-3 minutes.",
      "Remove from heat and stir in fish sauce, lime juice, and chili paste.",
      "Adjust seasoning with more fish sauce or lime juice to taste.",
      "Garnish with fresh cilantro leaves and sliced chilies.",
      "Serve hot as an appetizer or with steamed rice as a main course.",
    ],
  },
  {
    id: 28,
    title: "Tempura",
    cuisine: "Japanese",
    description: "Light and crispy battered seafood and vegetables",
    image:
      "https://images.unsplash.com/photo-1651328236028-77b585d3f4e5?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    prepTime: "20 min",
    cookTime: "15 min",
    difficulty: "Medium",
    ingredients: [
      "Shrimp",
      "Assorted vegetables",
      "Rice flour",
      "Egg",
      "Ice water",
      "Dashi",
      "Soy sauce",
      "Mirin",
    ],
    instructions: [
      "Prepare vegetables by cutting into thin, even pieces that will cook quickly.",
      "Peel and devein shrimp, leaving the tails on for presentation.",
      "Make batter by mixing egg with ice-cold water, then gently folding in flour.",
      "Heat oil to 350°F in a deep pot or wok.",
      "Dip each ingredient in batter and immediately fry until light golden and crisp.",
      "Work in small batches to maintain oil temperature.",
      "Drain on paper towels and serve immediately while hot and crispy.",
      "Serve with tentsuyu dipping sauce made from dashi, soy sauce, and mirin.",
    ],
  },
  {
    id: 29,
    title: "Moussaka",
    cuisine: "Mediterranean",
    description: "Layered eggplant casserole with meat sauce and béchamel",
    image:
      "https://media.istockphoto.com/id/1136417746/photo/moussaka-with-minced-meat.webp?a=1&b=1&s=612x612&w=0&k=20&c=jmuJzfgasVDioWwyzoFiXhxLYKNk-i64R_GqR80pNic=",
    prepTime: "45 min",
    cookTime: "60 min",
    difficulty: "Hard",
    ingredients: [
      "Eggplants",
      "Ground lamb",
      "Tomatoes",
      "Onions",
      "Cinnamon",
      "Flour",
      "Milk",
      "Eggs",
    ],
    instructions: [
      "Slice eggplants and salt them to draw out moisture, then pat dry.",
      "Brush eggplant slices with olive oil and bake until soft and golden.",
      "Make meat sauce by browning ground lamb with onions, garlic, and spices.",
      "Add tomatoes and simmer until thickened, about 30 minutes.",
      "Prepare béchamel sauce by making a roux, adding milk, and cooking until thick.",
      "Layer eggplant, meat sauce, and potatoes in a baking dish.",
      "Top with béchamel sauce mixed with beaten eggs and grated cheese.",
      "Bake at 350°F for 45 minutes until golden and set.",
    ],
  },
  {
    id: 30,
    title: "Bibimbap",
    cuisine: "Korean",
    description: "Rice bowl topped with vegetables, meat, egg, and gochujang",
    image:
      "https://images.unsplash.com/photo-1553163147-622ab57be1c7?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0",
    prepTime: "30 min",
    cookTime: "20 min",
    difficulty: "Medium",
    ingredients: [
      "Short-grain rice",
      "Beef sirloin",
      "Spinach",
      "Bean sprouts",
      "Carrots",
      "Shiitake mushrooms",
      "Eggs",
      "Gochujang (Korean chili paste)",
    ],
    instructions: [
      "Cook rice according to package directions until fluffy.",
      "Marinate thinly sliced beef in soy sauce, sesame oil, and garlic.",
      "Prepare vegetables by blanching spinach and bean sprouts briefly.",
      "Sauté carrots and mushrooms separately with a pinch of salt.",
      "Cook marinated beef until just done, retaining some juices.",
      "Fry eggs sunny-side up, keeping yolks runny.",
      "Assemble bowls with rice on the bottom, arranging vegetables and beef in sections.",
      "Top with fried egg and serve with gochujang sauce on the side.",
    ],
  },
  {
    id: 31,
    title: "Boeuf Bourguignon",
    cuisine: "French",
    description: "Classic French beef stew braised in red wine",
    image:
      "https://media.istockphoto.com/id/663905528/photo/beef-bourguignon-in-a-casserole-on-black-stone.webp?a=1&b=1&s=612x612&w=0&k=20&c=0tgejayppAnzdSyD0lYjhAJyQJK1qKy7j0-8bSiPNtc=",
    prepTime: "30 min",
    cookTime: "180 min",
    difficulty: "Medium",
    ingredients: [
      "Beef chuck",
      "Bacon",
      "Red wine",
      "Pearl onions",
      "Carrots",
      "Mushrooms",
      "Thyme",
      "Bay leaves",
    ],
    instructions: [
      "Cut beef into 2-inch cubes and dry thoroughly with paper towels.",
      "Cook bacon in a Dutch oven until crispy, then remove and set aside.",
      "Brown beef in batches in the bacon fat until seared on all sides.",
      "Add chopped onions and carrots, cooking until slightly softened.",
      "Return beef and bacon to the pot, then add wine, broth, and herbs.",
      "Simmer covered for 2.5-3 hours until beef is fork-tender.",
      "Sauté mushrooms and pearl onions separately, then add to the stew.",
      "Serve hot with crusty bread, mashed potatoes, or buttered noodles.",
    ],
  },
  {
    id: 32,
    title: "Coq au Vin",
    cuisine: "French",
    description: "Chicken braised with wine, mushrooms, and bacon",
    image:
      "https://media.istockphoto.com/id/162245436/photo/french-dinner.webp?a=1&b=1&s=612x612&w=0&k=20&c=5r0F33_kzdlyViU__73lEDp6OV9YWSME-YO4flD-ltI=",
    prepTime: "25 min",
    cookTime: "90 min",
    difficulty: "Medium",
    ingredients: [
      "Chicken thighs and legs",
      "Red wine",
      "Bacon",
      "Pearl onions",
      "Mushrooms",
      "Garlic",
      "Thyme",
      "Bay leaf",
    ],
    instructions: [
      "Cook bacon in a large Dutch oven until crispy, then set aside.",
      "Season chicken pieces with salt and pepper.",
      "Brown chicken in bacon fat until golden on all sides.",
      "Add onions and garlic, cooking until lightly caramelized.",
      "Pour in red wine and add herbs, bringing to a simmer.",
      "Cover and cook for 1 hour until chicken is tender.",
      "Sauté mushrooms separately and add to the pot in the last 15 minutes.",
      "Serve garnished with fresh parsley and the reserved crispy bacon.",
    ],
  },
  {
    id: 33,
    title: "Banh Mi",
    cuisine: "Vietnamese",
    description: "Vietnamese sandwich with meat, pickled vegetables, and herbs",
    image:
      "https://media.istockphoto.com/id/1256921788/photo/banh-mi-sandwich-classic-japanese-vietnamese-or-thai-cuisine-favorite-variety-of-sandwiches.webp?a=1&b=1&s=612x612&w=0&k=20&c=rAulMWqTlAnBi_sNauCVqHmwYLGyz-gCI6pQSCyPSg4=",
    prepTime: "20 min",
    cookTime: "15 min",
    difficulty: "Easy",
    ingredients: [
      "French baguette",
      "Pork belly or chicken",
      "Daikon radish",
      "Carrots",
      "Cucumber",
      "Cilantro",
      "Jalapeño",
      "Mayonnaise",
    ],
    instructions: [
      "Pickle julienned carrots and daikon in a mixture of vinegar, sugar, and salt.",
      "Marinate pork with lemongrass, garlic, fish sauce, and sugar, then grill or roast.",
      "Slice baguette lengthwise and toast lightly for a crispy exterior.",
      "Spread mayonnaise mixed with sriracha on the inside of the bread.",
      "Layer thinly sliced meat, pickled vegetables, cucumber, and jalapeño.",
      "Add fresh cilantro and mint leaves for brightness.",
      "Press sandwich together firmly before slicing in half.",
      "Serve immediately while bread is still crisp and fillings are fresh.",
    ],
  },
];

export default RECIPES;