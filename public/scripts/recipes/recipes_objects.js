const recipes = {
  // Possible Categories:
  // snacks
  // breakfast
  // lunch
  // dinner
  // dessert
  // appetizers
  // drinks
  // salads
  // soups
  // vegan
  // vegetarian
  // keto_and_low_carb
  // side_dishes
  // gluten_free
  // quick_and_easy
  // holidays_and_special_occasions

  // 1 BEETROOT CHIPS
  beetroot_chips: {
    title: "Beetroot Chips",
    category: [
      "snacks",
      "side_dishes",
      "appetizers",
      "vegetarian",
      "vegan",
      "gluten_free",
    ],
    img_src: "/public/images/recipes/beetroot_chips/beetroot_chips.jpg",
    description:
      "A crispy and healthy alternative to regular chips, perfect as a snack or side dish.",
    prep_time: "10 mins",
    cook_time: "45 mins",
    total_time: "55 mins",
    servings: "4",
    ingredients: [
      "2 large beetroots",
      "2-3 tablespoons olive oil <a href='https://amzn.to/4gVpL0c' target='_blank'>(Amazon EU/UK)</a> or <a href='https://amzn.to/47SOaPT' target='_blank'>(Amazon US/Can)</a>",
      "Salt or seasoning of your choice",
    ],
    method: [
      "Preheat the oven to 150°C. Using a mandolin slicer, slice the beetroots into 1 mm thick rounds.",
      "Place the beetroot slices into a large bowl. Drizzle with olive oil and sprinkle salt or your preferred seasoning. Toss gently to ensure all slices are evenly coated. Leave the mixture to marinate for at least 45 minutes.",
      "Arrange the slices in a single layer on a baking tray lined with parchment paper <a href='https://amzn.to/4h3rfWi' target='_blank'>(Amazon US/Can) </a> or <a href='https://amzn.to/3ZRoO2D' target='_blank'>(Amazon EU/UK)</a>. Bake for 45-50 minutes, checking regularly to ensure they don't burn. The chips will crisp up as they cool.",
      "Remove the chips from the oven and allow them to cool slightly. Enjoy as a healthy snack!",
    ],
    nutrition: {
      calories: "100 kcal",
      carbs: "15g",
      fibre: "5g",
      protein: "2g",
      fat: "1g",
    },
    date_added: "2024-10-01",
  },

  // 2 PARSNIP CHIPS
  parsnip_chips: {
    title: "Parsnip Chips",
    category: [
      "snacks",
      "side_dishes",
      "appetizers",
      "vegetarian",
      "vegan",
      ,
      "gluten_free",
    ],
    img_src: "/public/images/recipes/parsnip_chips/parsnip_chips.jpg",
    description:
      "Crispy and golden parsnip chips, a tasty alternative to regular chips, served with hummus.",
    prep_time: "10 mins",
    cook_time: "30 mins",
    total_time: "40 mins",
    servings: "4",
    ingredients: [
      "2 large parsnips",
      "2-3 tablespoons olive oil <a href='https://amzn.to/4gVpL0c' target='_blank'>(Amazon EU/UK)</a> or <a href='https://amzn.to/47SOaPT' target='_blank'>(Amazon US/Can) Amazon</a>",
      "1 teaspoon onion powder (or seasoning of your choice)",
      "Salt, to taste",
      "Hummus, for serving",
    ],
    method: [
      "Preheat the oven to 160°C. Using a mandolin slicer, thinly slice the parsnips to less than 1 mm thickness.",
      "Arrange the parsnip slices individually on a baking tray lined with parchment paper <a href='https://amzn.to/4h3rfWi' target='_blank'>(Amazon US/Can) </a> or <a href='https://amzn.to/3ZRoO2D' target='_blank'>(Amazon EU/UK)</a>. Ensure they do not overlap.",
      "Lightly brush each slice with olive oil and sprinkle with onion powder and a pinch of salt.",
      "Bake in the preheated oven for 30 minutes. After 30 minutes, check the chips and remove any that are crisp and golden. Leave the remaining chips to bake for a few more minutes, checking frequently to prevent burning.",
      "Allow the chips to cool slightly and serve with a side of hummus for dipping.",
    ],
    nutrition: {
      calories: "120 kcal",
      carbs: "18g",
      fibre: "6g",
      protein: "3g",
      fat: "5g",
    },
    date_added: "2024-09-28",
  },

  // 3 CHOCOLATE
  chocolate_raw: {
    title: "Homemade 100% Cocoa Chocolate",
    category: [
      "snacks",
      "dessert",
      "vegetarian",
      "vegan",
      "keto_and_low_carb",
      "gluten_free",
    ],
    img_src: "/public/images/recipes/chocolate_raw/chocolate_raw.jpg",
    description:
      "A rich and intense chocolate made from pure cocoa nibs, perfect for those who prefer unsweetened treats. Optional to add sugar for sweetness.",
    prep_time: "15 mins",
    cook_time: "10 mins",
    total_time: "25 mins",
    servings: "6",
    ingredients: [
      "200g 100% cocoa nibs <a href='https://amzn.to/3ZLUJ4J' target='_blank'> (Amazon EU/UK)</a> or <a href='https://amzn.to/3ZSnxbN' target='_blank'>(Amazon US/Can)</a>.",
      "1 teaspoon vanilla essence <a href='https://amzn.to/3Yhyoeb' target='_blank'>(Amazon EU/UK)</a>, <a href='https://amzn.to/4dH7OzB' target='_blank'>(Amazon US/Can)</a>)",
      "Optional: sugar or sweetener to taste",
    ],
    method: [
      "Grind the cocoa nibs in a food processor until as smooth as possible. It may not turn into a liquid but will become a fine, smooth powder.",
      "Set up a double boiler over medium heat. Add the ground cocoa nibs to the top of the boiler and heat gently until the nibs melt into a pourable liquid.",
      "Once melted, stir in the vanilla essence. If you prefer a sweeter chocolate, add sugar or sweetener at this stage.",
      "Pour the melted chocolate into moulds of your choice and allow it to set at room temperature or in the fridge.",
      "Once set, enjoy your homemade chocolate, or store it in an airtight container for later use.",
      "For more details, the science of chocolate and health and a hilarious look into the bitterness, visit <a href='/views/layouts/recipes/science/chocolate.html'>here</a>.",
    ],
    nutrition: {
      calories: "140 kcal",
      carbs: "6g",
      fibre: "4g",
      protein: "2g",
      fat: "12g",
    },
    date_added: "2024-09-29",
  },

  // 4 CHICKEN AND MUSHROOM BAKE
  chicken_mushroom_bake: {
    title: "Chicken and Mushroom Bake",
    category: ["dinner", "lunch", "gluten_free"],
    img_src:
      "/public/images/recipes/chicken_mushroom_bake/chicken_mushroom_bake.jpg", // Placeholder image
    description:
      "A hearty and delicious chicken and mushroom bake with layers of sweet potato, perfect for a filling and healthy dinner or lunch.",
    prep_time: "15 mins",
    cook_time: "40 mins",
    total_time: "55 mins",
    servings: "4",
    ingredients: [
      "2 tsp sunflower oil",
      "1 large onion, finely chopped",
      "2 carrots, cleaned and diced",
      "150g chestnut mushrooms, sliced",
      "300ml chicken, mushroom, or vegetable stock",
      "1 tbsp freshly chopped oregano or dried oregano <a href='https://amzn.to/3Y1LQl4' target='_blank'>(Amazon US/Can)</a> or <a href='https://amzn.to/3Ym0qp0' target='_blank'>(Amazon EU/UK)</a>",
      "Pinch white pepper",
      "1 heaped tsp psyllium husk <a href='https://amzn.to/3zYWqBb' target='_blank'>(Amazon EU/UK)</a> or <a href='https://amzn.to/3NcDeDh' target='_blank'>(Amazon US/Can)</a> (as a cornflour substitute) mixed with 25ml skimmed milk",
      "300g cold cooked skinless chicken, cubed (mix of brown and white meat)",
      "300g sweet potato, peeled and very thinly sliced",
    ],
    method: [
      "Preheat the oven to 180°C/gas 4. Add the oil to a pan, then add the onion and stir regularly for 5 minutes until browned.",
      "Add the carrots first and then the mushrooms, and stir regularly for 3–4 minutes, until softened.",
      "Stir in the stock, oregano, and pepper, and bring to the boil. Add a lid to the pan, reduce heat, and simmer for 5 minutes.",
      "Mix the cornflour and milk together. Next, bring the stock back to the boil and slowly stir in the cornflour mixture until the sauce thickens, then stir for another 2 minutes.",
      "Now, stir in the cooked chicken pieces, then add the mixture to an ovenproof dish.",
      "Evenly layer the sweet potato on top and bake in the oven for 25–40 minutes until lightly browned.",
    ],
    nutrition: {
      calories: "320 kcal", // Approximation
      carbs: "35g", // Due to carrots and sweet potato
      fibre: "7g", // Vegetables contribute to this
      protein: "25g", // Chicken is the main contributor
      fat: "10g", // From sunflower oil and chicken
    },
    date_added: "2024-10-02",
  },

  // 5 SAVOURY LUNCH WAFFLES
  savoury_lunch_waffles: {
    title: "Savoury Lunch Waffles",
    category: ["lunch", "vegetarian", "keto_and_low_carb", "quick_and_easy"],
    img_src:
      "/public/images/recipes/savoury_lunch_waffles/savoury_lunch_waffles.jpg", // Placeholder image
    description:
      "These savoury waffles are perfect for a quick lunch or snack. Made with almond flour, eggs, and cheese, they're low-carb, gluten-free, and packed with flavour. Enjoy on their own or with your favourite dipping sauce.",
    prep_time: "5 mins",
    cook_time: "10 mins",
    total_time: "15 mins",
    servings: "2",
    ingredients: [
      "120g almond flour <a href='https://amzn.to/3U7dqfp' target='_blank'>(Amazon EU/UK)</a>, <a href='https://amzn.to/3U6eekP' target='_blank'>(Amazon US/Can)</a>",
      "2 eggs",
      "½ teaspoon baking powder",
      "1 small onion, finely chopped",
      "Some grated cheese (your favourite type, like cheddar or mozzarella)",
    ],
    method: [
      "In a medium-sized mixing bowl, combine the almond flour, eggs, baking powder, chopped onion, and grated cheese. Stir thoroughly until the mixture is well-combined.",
      "Preheat your waffle iron according to the manufacturer’s instructions.",
      "Once the waffle iron is hot, lightly grease it to prevent sticking.",
      "Pour a portion of the batter into the waffle iron, spreading it evenly, and cook according to your waffle iron’s settings (usually 3-5 minutes) until golden brown and crisp.",
      "Repeat with the remaining batter.",
      "Serve the savoury waffles warm, either on their own or with a side of your favourite dip, like sour cream, salsa, or guacamole.",
    ],
    nutrition: {
      calories: "250 kcal", // Approximation
      carbs: "6g", // From almond flour and onion
      fibre: "3g", // Almond flour contributes
      protein: "14g", // From eggs and cheese
      fat: "19g", // Mostly from almond flour and cheese
    },
    date_added: "2024-10-02",
  },

  // 6 ALMOND PANCAKES WITH GREEK YOGURT, STRAWBERRIES, AND COCOA NIBS
  almond_pancakes: {
    title: "Almond Pancakes with Greek Yogurt, Strawberries, and Cocoa Nibs",
    category: [
      "breakfast",
      "lunch",
      "vegetarian",
      "keto_and_low_carb",
      "quick_and_easy",
      "dessert",
    ],
    img_src: "/public/images/recipes/almond_pancakes/almond_pancakes.jpg", // Placeholder image
    description:
      "Delicious low-carb almond flour pancakes, topped with creamy Greek yogurt, fresh strawberries, and crunchy cocoa nibs. Perfect for a healthy breakfast or light lunch.",
    prep_time: "5 mins",
    cook_time: "10 mins",
    total_time: "15 mins",
    servings: "2",
    ingredients: [
      "120g almond flour <a href='https://amzn.to/3U7dqfp' target='_blank'>(Amazon EU/UK)</a>, <a href='https://amzn.to/3U6eekP' target='_blank'>(Amazon US/Can)</a>",
      "2 eggs",
      "½ teaspoon baking powder",
      "1 small onion, finely chopped (optional if you want to omit savoury taste)",
      "Some grated cheese (optional, for a more savoury twist)",
    ],
    method: [
      "In a medium-sized bowl, combine the almond flour, eggs, baking powder, and optionally, onion and cheese if making savoury pancakes. Stir until well combined.",
      "Heat a lightly oiled frying pan over medium heat.",
      "Spoon the batter into the pan to form small pancakes, using about 2-3 tablespoons per pancake.",
      "Cook each side for about 2-3 minutes, until golden brown and cooked through.",
      "Remove from the pan and repeat with the remaining batter.",
      "Top the pancakes with Greek yogurt, fresh strawberries, and cocoa nibs for a perfect sweet combination. You can also drizzle with honey for an extra touch of sweetness.",
    ],
    nutrition: {
      calories: "300 kcal", // Approximation including toppings
      carbs: "12g", // Includes strawberries and cocoa nibs
      fibre: "5g", // From almond flour and strawberries
      protein: "18g", // Eggs, almond flour, and Greek yogurt contribute to this
      fat: "21g", // From almond flour, eggs, and yogurt
    },
    date_added: "2024-10-02",
  },

  // 7 SHIRATAKE NOODLE RAMEN SOUP
  shiratake_noodle_ramen_soup: {
    title: "Shiratake Noodle Ramen Soup",
    category: ["dinner", "lunch", "gluten_free", "keto_and_low_carb", "soups"],
    img_src:
      "/public/images/recipes/shiratake_noodle_ramen_soup/shiratake_noodle_ramen_soup.jpg", // Placeholder image
    description:
      "A light, low-carb alternative to traditional ramen, made with shiratake noodles, fresh vegetables, and a flavourful broth. This recipe is perfect for a healthy and filling lunch or dinner.",
    prep_time: "10 mins",
    cook_time: "20 mins",
    total_time: "30 mins",
    servings: "2",
    ingredients: [
      "1 litre chicken or vegetable stock (use low-sodium options if preferred)",
      "1 tbsp fresh ginger, finely grated",
      "2 garlic cloves, finely chopped",
      "1 tbsp reduced-sodium soy sauce <a href='https://amzn.to/48cj31F' target='_blank'>(Amazon)</a>",
      "1 tbsp miso paste <a href='https://amzn.to/3XRVlD9' target='_blank'>(Amazon EU)</a> or <a href='https://amzn.to/3TVdwqu' target='_blank'>(Amazon US/Can)</a> (ensure it’s low in sugar)",
      "1 pack shiratake noodles <a href='https://amzn.to/3Ybhlua' target='_blank'>(Amazon EU)</a> or <a href='https://amzn.to/4eMv5Rw' target='_blank'>(Amazon US/Can)</a> (instead of traditional ramen noodles)",
      "150g mushrooms, sliced",
      "100g spinach",
      "1 carrot, julienned",
      "2 spring onions, finely sliced",
      "200g cooked chicken breast (or tofu for a vegetarian option)",
      "1 soft-boiled egg (optional)",
      "Chilli flakes or sesame seeds to garnish (optional)",
    ],
    method: [
      "Bring the stock to a simmer in a large pan. Add the ginger, garlic, and soy sauce, allowing the flavours to blend for a few minutes.",
      "Stir in the miso paste and mushrooms, and cook for another 5 minutes until the mushrooms are tender.",
      "Add the carrot and spinach, cooking just until the spinach wilts.",
      "Rinse and drain the shiratake noodles, then add them to the soup. Cook for 2-3 minutes.",
      "Divide the noodles and vegetables between bowls. Add the cooked chicken or tofu and pour over the hot broth.",
      "Top each bowl with spring onions, a soft-boiled egg (optional), and garnish with chilli flakes or sesame seeds if desired.",
    ],
    nutrition: {
      calories: "250 kcal", // Approximation
      carbs: "12g", // From vegetables and miso paste
      fibre: "4g", // Vegetables and shiratake noodles contribute to this
      protein: "25g", // From chicken/tofu and egg
      fat: "8g", // From chicken, tofu, and egg
    },
    date_added: "2024-10-02",
  },

  // 8 CHICKEN PAD THAI
  chicken_pad_thai: {
    title: "Chicken Pad Thai",
    category: ["dinner", "lunch", "gluten_free"],
    img_src: "/public/images/recipes/chicken_pad_thai/chicken_pad_thai.jpg", // Placeholder image
    description:
      "A delicious low-carb version of the classic Pad Thai made with chicken and shirataki noodles. Perfect for a nutritious and filling meal.",
    prep_time: "15 mins",
    cook_time: "20 mins",
    total_time: "35 mins",
    servings: "4",
    ingredients: [
      "200g chicken breast, thinly sliced",
      "200g shiratake noodles <a href='https://amzn.to/3Ybhlua' target='_blank'>(Amazon EU)</a> or <a href='https://amzn.to/4eMv5Rw' target='_blank'>(Amazon US/Can)</a> (or bean noodles <a href='https://amzn.to/3Ymf2Vr' target='_blank'>(Amazon)</a>, cooked, rinsed, and drained)",
      "1 tablespoon olive oil <a href='https://amzn.to/4gVpL0c' target='_blank'>(Amazon EU/UK)</a> or <a href='https://amzn.to/47SOaPT' target='_blank'>(Amazon US/Can)</a>",
      "2 cloves garlic, minced",
      "1 small red onion, thinly sliced",
      "1 red bell pepper, julienned",
      "1 small carrot, julienned",
      "1 cup broccoli florets, small pieces",
      "1 cup shredded cabbage (preferably red for more fibre)",
      "1 cup bean sprouts",
      "2 eggs, lightly beaten",
      "3 spring onions, chopped",
      "¼ cup fresh coriander, chopped",
      "2 tablespoons chopped peanuts, for garnish (optional)",
    ],
    method: [
      "<strong>Sauce Preparation:</strong>",
      "3 tablespoons tamari <a href='https://amzn.to/3TQEsYf' target='_blank'>(Amazon EU)</a> or <a href='https://amzn.to/4dyPFnp' target='_blank'>(Amazon US/Can)</a> (or low-sodium soy sauce)",
      "2 tablespoons fish sauce",
      "2 tablespoons lime juice",
      "1 tablespoon peanut butter (natural, unsweetened) <a href='https://amzn.to/3NmnhKD' target='_blank'>(Amazon EU/UK)</a> or <a href='https://amzn.to/4eW0kd1' target='_blank'>(Amazon US/Can)</a>",
      "1 tablespoon tamarind paste <a href='https://amzn.to/4eU5NRL' target='_blank'>(Amazon EU)</a> or <a href='https://amzn.to/3XW18aK' target='_blank'>(Amazon US/Can)</a>",
      "1-2 tablespoons Sriracha or chilli paste, to taste (add more for extra heat)",
      "<strong>Main Dish Preparation:</strong>",
      "Prepare the Sauce: In a small bowl, mix all the Pad Thai sauce ingredients. Adjust the sweetness and spiciness according to your taste. For a family-friendly version, separate the sauce into two bowls and add extra Sriracha or chilli paste to one for yourself. Set both aside.",
      "Cook the Chicken: Heat 1 tablespoon of olive oil in a large pan or wok over medium-high heat. Add the chicken slices and cook until no longer pink, around 5-7 minutes. Remove from the pan and set aside.",
      "Stir-fry the Vegetables: In the same pan, add a little more oil if needed, and sauté the garlic and onion until fragrant. Add the broccoli florets and shredded cabbage, stir-frying for 3-4 minutes until they begin to soften but remain crisp.",
      "Add the Noodles: Add the shirataki noodles and continue stir-frying with the vegetables for another 2-3 minutes. The noodles should be heated through and well-mixed with the vegetables.",
      "If you're using bean noodles, which are a good source of fibre and protein, then cook them to instructions and add them in the same manner.",
      "Scramble the Eggs: Push the noodle-vegetable mixture to one side of the pan. Pour the beaten eggs into the other side and scramble them until cooked. Once done, mix them into the noodles and vegetables.",
      "Combine and Season: Return the cooked chicken to the pan, pour the family-friendly Pad Thai sauce over everything, and toss to coat well. Remove a portion for the family, then add the spicy sauce you prepared for yourself, tossing everything until well combined and heated through.",
      "Add Final Ingredients: Add the bean sprouts and most of the spring onions, tossing everything together. Cook for another minute until the bean sprouts are slightly wilted.",
      "Garnish and Serve: Remove from heat and serve hot, garnished with chopped peanuts, fresh coriander, and the remaining spring onions. Add a lime wedge on the side for extra zing.",
    ],
    tips: [
      "For Spicy Lovers: You can also add sliced fresh chilli or chilli flakes during cooking to increase the heat.",
      "Vegetable Variations: Feel free to add more high-fibre vegetables like bok choy, green beans, or even kale for added nutrition.",
      "Customise the Protein: You can substitute the chicken with tofu or shrimp if you like.",
      "Tamarind paste is essential for authentic flavour and can be found in local Asian supermarkets.",
      "Be cautious with the sugar content, as fish sauce typically contains some sugar.",
    ],
    nutrition: {
      calories: "350 kcal",
      carbs: "20g",
      fibre: "8g",
      protein: "30g",
      fat: "15g",
    },
    date_added: "2024-10-02",
  },

  // 9 WARM BEAN SALSA
  warm_bean_salsa: {
    title: "Warm Bean Salsa with Parsnip Chips",
    category: ["snacks", "side_dishes", "vegetarian", "vegan", "gluten_free"],
    img_src: "/public/images/recipes/warm_bean_salsa/warm_bean_salsa.jpg",
    description:
      "A delicious warm bean salsa, spiced to perfection and served with crispy parsnip chips. A great diabetic-friendly snack or side dish.",
    prep_time: "10 mins",
    cook_time: "15 mins",
    total_time: "25 mins",
    servings: "4",
    ingredients: [
      "1 can (400g) mixed beans (red kidney beans, white beans)",
      "1 small tin of corn kernels (about 100g, drained)",
      "1 tin of chopped tomatoes (400g)",
      "2 tablespoons tomato paste",
      "1 small onion, finely chopped",
      "2 cloves garlic, minced",
      "1 teaspoon smoked paprika <a href='https://amzn.to/480hOCV' target='_blank'>(Amazon US/Can)</a> or <a href='https://amzn.to/3ZVTQql' target='_blank'>(Amazon EU/UK)</a>",
      "1 teaspoon ground cumin <a href='https://amzn.to/3A4aut9' target='_blank'>(Amazon EU/UK)</a> or <a href='https://amzn.to/4eWRf3F' target='_blank'>(Amazon US/Can)</a>",
      "1 teaspoon red chilli powder <a href='https://amzn.to/3BTvSSo' target='_blank'>(Amazon EU/UK)</a> or <a href='https://amzn.to/4dLbOyU' target='_blank'>(Amazon US/Can)</a> (adjust for heat preference)",
      "1 teaspoon dried oregano <a href='https://amzn.to/3Y1LQl4' target='_blank'>(Amazon US/Can)</a> or <a href='https://amzn.to/3Ym0qp0' target='_blank'>(Amazon EU/UK)</a>",
      "Salt and pepper, to taste",
      "1 tablespoon olive oil <a href='https://amzn.to/4gVpL0c' target='_blank'>(Amazon EU/UK)</a> or <a href='https://amzn.to/47SOaPT' target='_blank'>(Amazon US/Can)</a>, for sautéing",
    ],
    method: [
      "Sauté the onions and garlic: In a large pan, heat the olive oil over medium heat. Add the finely chopped onion and minced garlic, sautéing until softened and fragrant, about 3-4 minutes.",
      "Add the spices: Stir in the smoked paprika, cumin, chilli powder, and oregano. Cook for another minute, allowing the spices to bloom.",
      "Combine the beans and corn: Add the tinned beans (rinsed and drained) and corn kernels, stirring them into the onion and spice mixture.",
      "Stir in the tomatoes: Pour in the tinned tomatoes and tomato paste. Stir everything together and reduce the heat to low. Let the salsa simmer for 10-15 minutes, stirring occasionally, until it thickens slightly.",
      "Season to taste: Add salt and pepper to taste. Adjust the spices if necessary for heat or flavour. For a bit of sweetness to balance the heat, a small pinch of erythritol or a drop of stevia can be added (optional).",
      "Serve: Remove from heat and serve hot with <a href='/views/layouts/recipes/recipe_pages/parsnip_chips.html'>parsnip chips</a>.",
    ],
    tips: [
      "Adjust the heat: If you prefer a milder salsa, reduce the chilli powder, or omit it. If you enjoy more heat, feel free to add a chopped jalapeño when sautéing the onions or increase the amount of chilli powder.",
      "Beans variety: You can swap the red and white kidney beans for black beans or pinto beans if you prefer.",
      "Diabetic-friendly: Keep an eye on the portion of corn, as it contains higher carbs compared to other vegetables.",
    ],
    nutrition: {
      calories: "160 kcal",
      carbs: "30g",
      fibre: "10g",
      protein: "8g",
      fat: "4g",
    },
    date_added: "2024-10-02",
  },

  // 10 BACON AND EGGS WITH SWEET POTATO FRIES AND BROCCOLI
  bacon_eggs_fries_broccoli: {
    title: "Bacon and Eggs with Sweet Potato Fries and Broccoli",
    category: [
      "breakfast",
      "lunch",
      "keto_low_carb",
      "gluten_free",
      "dinner",
      "quick_and_easy",
    ],
    img_src:
      "/public/images/recipes/bacon_eggs_fries_broccoli/bacon_eggs_fries_broccoli.jpg",
    description:
      "A hearty breakfast of crispy bacon and eggs cooked in their own fat, paired with roasted sweet potato fries and steamed broccoli for added fibre. Perfect for an indulgent treat with some nutritious sides.",
    prep_time: "10 mins",
    cook_time: "30 mins",
    total_time: "40 mins",
    servings: "2",
    ingredients: [
      "4 rashers of bacon (choose a leaner cut for a healthier option)",
      "2 eggs",
      "1 large sweet potato, mandolin sliced into fries",
      "1 tablespoon olive oil <a href='https://amzn.to/4gVpL0c' target='_blank'>(Amazon EU/UK)</a> or <a href='https://amzn.to/47SOaPT' target='_blank'>(Amazon US/Can)</a>",
      "Salt, to taste",
      "200g broccoli florets",
    ],
    method: [
      "Prepare the Sweet Potato Fries: Preheat the oven to 180°C. Place the mandolin-sliced sweet potato in a bowl, drizzle with olive oil and a pinch of salt, then let it sit for 10 minutes. Spread the fries out on a baking tray lined with <a href='https://amzn.to/4h3rfWi' target='_blank'>North American parchment paper</a> or <a href='https://amzn.to/3ZRoO2D' target='_blank'>European parchment paper </a>and bake for about 30 minutes, or until slightly crispy.",
      "Cook the Bacon: While the fries are baking, heat a non-stick pan over medium heat. Add the bacon rashers and cook slowly to render the fat. Cook the bacon until it's crispy and browned to your liking. Remove from the pan and set aside, leaving the rendered fat in the pan.",
      "Fry the Eggs: Using the bacon fat left in the pan, crack the eggs into the pan and fry them until the whites are set, but the yolks remain runny, about 2-3 minutes. You can cook them longer if you prefer your eggs fully cooked.",
      "Steam the Broccoli: While the eggs are cooking, steam the broccoli florets in a separate pot for about 5-7 minutes, or until tender but still vibrant green.",
      "Serve: Plate the bacon and eggs with the sweet potato fries on the side. Add the steamed broccoli for extra fibre. Enjoy this balanced meal of protein, healthy fats, and a dose of veggies.",
    ],
    tips: [
      "Treat yourself: While bacon isn't the healthiest choice, it's okay to enjoy a treat like this once in a while. Cooking the eggs in the rendered bacon fat adds flavour without additional oils.",
      "Sweet potato fries: For an even crispier result, try flipping the fries halfway through baking or broiling them for the last few minutes.",
      "Add variety: You can swap the broccoli for other high-fibre veggies like spinach, kale, or green beans.",
    ],
    nutrition: {
      calories: "450 kcal",
      carbs: "30g",
      fibre: "6g",
      protein: "25g",
      fat: "25g",
    },
    date_added: "2024-10-03",
  },

  // 11 BULGUR WHEAT WITH TOMATO AND BASIL SAUCE AND CHICKEN
  bulgur_tomato_basil_chicken: {
    title: "Bulgur Wheat with Tomato and Basil Sauce and Chicken",
    category: ["lunch", "dinner", "gluten_free"],
    img_src:
      "/public/images/recipes/bulgur_tomato_basil_chicken/bulgur_tomato_basil_chicken.jpg",
    description:
      "A wholesome dish of bulgur wheat cooked in a flavourful mushroom stock, topped with pre-cooked chicken and a rich tomato and basil sauce. Ideal for a healthy lunch or dinner, packed with protein and fibre.",
    prep_time: "10 mins",
    cook_time: "20 mins",
    total_time: "30 mins",
    servings: "2",
    ingredients: [
      "100g bulgur wheat",
      "300ml mushroom stock (or vegetable stock for a milder flavour)",
      "200g pre-cooked chicken, sliced or shredded",
      "400g crushed tomatoes (tinned)",
      "1 small onion, finely chopped",
      "2 cloves garlic, minced",
      "1 tablespoon olive oil <a href='https://amzn.to/4gVpL0c' target='_blank'>(Amazon EU/UK)</a> or <a href='https://amzn.to/47SOaPT' target='_blank'>(Amazon US/Can)</a>",
      "1 teaspoon dried basil <a href='https://amzn.to/3Nold4X' target='_blank'>(Amazon EU/UK)</a> or <a href='https://amzn.to/3AbwQZM' target='_blank'>(Amazon US/Can)</a>",
      "1 teaspoon dried marjoram <a href='https://amzn.to/4f11ALW' target='_blank'>(Amazon EU/UK)</a> or <a href='https://amzn.to/3BOyAcc' target='_blank'>(Amazon US/Can)</a>",
      "Salt and pepper, to taste",
    ],
    method: [
      "Cook the Bulgur Wheat: In a saucepan, bring the mushroom stock to a boil. Add the bulgur wheat, reduce the heat, and simmer for 12-15 minutes until the liquid is absorbed, and the bulgur is tender. Fluff with a fork once cooked.",
      "Prepare the Tomato and Basil Sauce: Heat the olive oil in a pan over medium heat. Add the chopped onion and garlic, sautéing until softened and fragrant, about 3-4 minutes. Stir in the crushed tomatoes, basil, marjoram, salt, and pepper. Let the sauce simmer for 10-15 minutes until it thickens slightly.",
      "Heat the Chicken: While the sauce simmers, warm the pre-cooked chicken in the microwave or in a separate pan.",
      "Serve: Plate the cooked bulgur wheat, top with the sliced or shredded chicken, and pour the tomato and basil sauce generously over the top.",
    ],
    tips: [
      "Make it vegetarian: Swap the chicken for roasted vegetables or a plant-based protein like tofu or chickpeas for a vegetarian version.",
      "Herb variations: If you don’t have marjoram, oregano makes a great substitute.",
      "Extra flavour: Add a pinch of chilli flakes to the sauce for a bit of heat, or stir in a tablespoon of balsamic vinegar for a tangy finish.",
    ],
    nutrition: {
      calories: "400 kcal",
      carbs: "50g",
      fibre: "8g",
      protein: "28g",
      fat: "10g",
    },
    date_added: "2024-10-04",
  },

  // 12 PURE COCOA PEANUT BUTTER CHOCOLATE
  cocoa_peanut_butter_chocolate: {
    title: "Pure Cocoa Peanut Butter Chocolate",
    category: [
      "snacks",
      "dessert",
      "vegetarian",
      "vegan",
      "keto_and_low_carb",
      "gluten_free",
    ],
    img_src:
      "/public/images/recipes/cocoa_peanut_butter_chocolate/cocoa_peanut_butter_chocolate.jpg", // Placeholder image
    description:
      "A rich, intense chocolate made with pure cocoa butter, Valrhona cocoa, and peanut butter. A sugar-free treat perfect for those managing type 2 diabetes or anyone looking for a healthy indulgence. Still bitter, but satisfying for those who appreciate the complex flavours of dark chocolate.",
    prep_time: "10 mins",
    cook_time: "10 mins",
    total_time: "20 mins",
    servings: "6",
    ingredients: [
      "110g cocoa butter (available here on <a href='https://amzn.to/47T15Be' target='_blank'>(US/Can) Amazon</a> or for <a href='https://amzn.to/47Vn9LF' target='_blank'> (EU) Amazon</a>)",
      "60g high-quality cocoa powder (e.g., <a href='https://amzn.to/47YzIWr' target='_blank'>(EU) Valrhona</a> or <a href='https://amzn.to/3TVDuKu' target='_blank'>(US/Can) Valrhona</a>",
      "30g peanut butter <a href='https://amzn.to/3NmnhKD' target='_blank'>(Amazon EU/UK)</a> or <a href='https://amzn.to/4eW0kd1' target='_blank'>(Amazon US/Can)</a> (add more for a stronger peanut flavour)",
    ],
    method: [
      "Set up a double boiler: Fill the bottom pot with water and place the cocoa butter in the top pot. Heat gently until fully melted.",
      "Slowly whisk in the cocoa powder: Once the cocoa butter is melted, slowly whisk in the cocoa powder until completely dissolved and smooth.",
      "Add the peanut butter: Whisk in the peanut butter until fully incorporated and the mixture is smooth.",
      "Pour into a mould or tin: Pour the mixture into a 40cm cake tin (or smaller moulds) to set. The thin layer helps the chocolate achieve a shiny finish.",
      "Let it set: Allow the chocolate to set at room temperature, then break into small pieces for serving. Store in an airtight container to keep it fresh.",
    ],
    tips: [
      "Refined vs. Raw: For a more raw and intense flavour, you can use cacao powder instead of cocoa powder, but since we’re keeping it sugar-free, refined cocoa provides a smoother, less overpowering flavour.",
      "Sweeteners: If the bitterness is too much, feel free to add a diabetic-friendly sweetener like erythritol or stevia. However, it’s good to train your palate to enjoy the natural bitterness and richness of the cocoa.",
      "Texture Boost: For a creamier chocolate, you can add a tablespoon of milk powder during the whisking process. This adds a smoother texture and softens the overall flavour.",
      "Peanut Butter: Feel free to increase the amount of peanut butter for a stronger nutty flavour, or replace it with almond butter for variation.",
      "Moderation: This chocolate is quite rich and satisfying. A little bit goes a long way, so break small pieces to serve.",
    ],
    nutrition: {
      calories: "160 kcal", // Approximation
      carbs: "5g", // Cocoa and peanut butter contribute to this
      fibre: "3g", // From cocoa powder
      protein: "4g", // From peanut butter
      fat: "15g", // Cocoa butter and peanut butter contribute to this
    },
    date_added: "2024-10-04",
  },

  // Hibiscus Tea
  hibiscus_tea: {
    title: "Hibiscus Tea",
    category: [
      "drinks",
      "gluten_free",
      "vegan",
      "vegetarian",
      "keto_and_low_carb",
    ],
    img_src: "/public/images/recipes/hibiscus_tea/hibiscus_tea.jpg", // Image path
    description:
      "A refreshing, slightly tart drink made from dried hibiscus flowers, packed with health benefits. Hibiscus tea is caffeine-free, rich in antioxidants, and helps regulate blood pressure. It's perfect for diabetics and anyone looking for a healthy, hydrating option. Enjoy hot or cold for a tangy, vibrant beverage.",
    prep_time: "5 mins",
    cook_time: "5 mins",
    total_time: "10 mins",
    servings: "4",
    ingredients: [
      "4 cups boiling water",
      "½ cup dried hibiscus flowers (find it on <a href='https://amzn.to/3zOdGsU' target='_blank'>Amazon (US/Can)</a> or <a href='https://amzn.to/4eA4SGm' target='_blank'>Amazon (EU)</a>)",
      "Optional: Stevia (<a href='https://amzn.to/3A1oDr6' target='_blank'>Amazon EU/UK</a>, <a href='https://amzn.to/4dOHjIr' target='_blank'>Amazon US/Can</a>) or erythritol (<a href='https://amzn.to/3NHtIbz' target='_blank'>Amazon EU/UK</a>, <a href='https://amzn.to/3Nl85NJ' target='_blank'>Amazon US/Can</a>) to taste for a sugar-free sweetener",
      "Optional: Fresh mint, lime slices, or cinnamon sticks <a href='https://amzn.to/401RZAr' target='_blank'>(Amazon EU/UK</a>, <a href='https://amzn.to/3YjJGP8' target='_blank'>Amazon US/Can)</a> for garnish",
    ],
    method: [
      "Boil water: In a pot, bring 4 cups of water to a rolling boil.",
      "Steep the hibiscus: Add the dried hibiscus flowers to the boiling water. Let it steep for 5–10 minutes depending on how strong you want the flavour.",
      "Strain: Strain the hibiscus flowers using a fine mesh sieve and pour the tea into your serving cups or a pitcher.",
      "Optional: Add a diabetic-friendly sweetener, like stevia or erythritol, to enhance the flavour without adding sugar. You can also add mint or lime slices for extra refreshment.",
      "Serve: Enjoy it hot, or let it cool and serve over ice for a chilled version. Store any leftovers in the refrigerator.",
    ],
    tips: [
      "Cold Brew: For a milder flavour, try cold brewing. Add hibiscus flowers to a jar of cold water and refrigerate for 8–12 hours. Strain and enjoy chilled.",
      "Flavour Boost: Experiment with flavour additions like ginger, cinnamon, or citrus peels for a unique twist.",
      "Diabetic-Friendly: Hibiscus tea is naturally low in calories and carbs. Adding stevia or erythritol keeps it sweet while maintaining its low glycaemic index, making it perfect for diabetics.",
      "Immune Support: Hibiscus tea is packed with antioxidants like vitamin C, helping to boost your immune system. Add a squeeze of lemon for extra vitamin C.",
      "Blood Pressure Benefits: Hibiscus tea has been shown to help lower blood pressure, making it a heart-healthy drink for people with hypertension, especially beneficial for those managing diabetes.",
    ],
    nutrition: {
      calories: "5 kcal", // Approximation, mostly from hibiscus
      carbs: "1g", // Minimal carbs
      fibre: "0g", // Very minimal
      protein: "0g",
      fat: "0g",
    },
    date_added: "2024-10-06",
  },

  // Greek Mountain Tea
  greek_mountain_tea: {
    title: "Greek Mountain Tea",
    category: [
      "drinks",
      "gluten_free",
      "vegan",
      "vegetarian",
      "keto_and_low_carb",
    ],
    img_src: "/public/images/recipes/greek_mountain_tea/greek_mountain_tea.jpg", // Image path
    description:
      "A traditional herbal tea made from the Sideritis plant, Greek Mountain Tea is known for its soothing properties and is rich in antioxidants. This caffeine-free tea supports digestive and immune health and is traditionally enjoyed hot.",
    prep_time: "5 mins",
    cook_time: "5 mins",
    total_time: "10 mins",
    servings: "2",
    ingredients: [
      "2 cups boiling water",
      "1 tablespoon dried Greek Mountain Tea (buy it on <a href='https://amzn.to/4gTiI8f' target='_blank'>Amazon</a>)",
      "Optional: Honey or lemon to taste for extra flavour",
      "Optional: Stevia (<a href='https://amzn.to/3A1oDr6' target='_blank'>Amazon EU/UK</a>, <a href='https://amzn.to/4dOHjIr' target='_blank'>Amazon US/Can</a>) or erythritol (<a href='https://amzn.to/3NHtIbz' target='_blank'>Amazon EU/UK</a>, <a href='https://amzn.to/3Nl85NJ' target='_blank'>Amazon US/Can</a>) to taste for a sugar-free sweetener",
    ],
    method: [
      "Boil water: In a pot, bring 2 cups of water to a rolling boil.",
      "Steep the tea: Add dried Greek Mountain Tea to the boiling water. Let it steep for 5–7 minutes.",
      "Strain: Remove the tea from the water by straining it through a fine mesh sieve.",
      "Optional: Add honey or a slice of lemon for added sweetness and flavour.",
      "Serve: Pour into cups and enjoy hot. You can also let it cool and serve it chilled for a refreshing alternative.",
    ],
    tips: [
      "Medicinal Properties: Greek Mountain Tea is traditionally used for its anti-inflammatory, antioxidant, and digestive support properties.",
      "Cold Brew: For a cooling summer version, steep the tea in cold water for 6–8 hours in the refrigerator.",
      "Immune Support: Its high levels of flavonoids and antioxidants help strengthen the immune system, especially during cold and flu season.",
      "Digestive Aid: Greek Mountain Tea has been used for centuries to aid digestion and soothe gastrointestinal discomfort.",
    ],
    nutrition: {
      calories: "0 kcal", // Based on the tea alone
      carbs: "0g",
      fibre: "0g",
      protein: "0g",
      fat: "0g",
    },
    date_added: "2024-10-08",
  },

  // TORTILLAS SERVED WITH SPICY BEEF
  tortilla_bites_spicy_beef: {
    title: "Tortilla Bites with Spicy Beef",
    category: ["snacks", "lunch", "keto_and_low_carb", "gluten_free", "dinner"],
    img_src:
      "/public/images/recipes/tortilla_bites_spicy_beef/tortilla_bites_spicy_beef.jpg", // Placeholder image
    description:
      "Spicy beef and white bean nachos on mini almond flour tortillas. These crispy bites are perfect for a low-carb snack or a main course. Customize with your favourite toppings like cheese, sour cream, or avocado.",
    prep_time: "15 mins",
    cook_time: "30 mins",
    total_time: "45 mins",
    servings: "4",
    ingredients: [
      "Mini Almond Flour Tortillas (link to <a href='/views/layouts/recipes/recipe_pages/tortilla_keto.html'>Keto Tortilla Recipe</a>, cut out 8-10cm diameter)",
      "400 g ground beef",
      "1 can white beans, drained and rinsed",
      "1 can (400g) crushed tomatoes",
      "1 small onion, finely chopped",
      "2 cloves garlic, minced",
      "1 tsp cumin <a href='https://amzn.to/3A4aut9' target='_blank'>(Amazon EU/UK)</a> or <a href='https://amzn.to/4eWRf3F' target='_blank'>(Amazon US/Can)</a>",
      "1 tsp smoked paprika <a href='https://amzn.to/3ZVTQql' target='_blank'>(Amazon EU/UK)</a> or <a href='https://amzn.to/480hOCV' target='_blank'>(Amazon US/Can)</a>",
      "½ tsp ground coriander <a href='https://amzn.to/4eXnEHl' target='_blank'>(Amazon EU/UK)</a> or <a href='https://amzn.to/3Ymp60z' target='_blank'>(Amazon US/Can)</a>",
      "¼ tsp ground cinnamon <a href='https://amzn.to/483pOD8' target='_blank'>(Amazon EU/UK)</a> or <a href='https://amzn.to/4f1zyQi' target='_blank'>(Amazon US/Can)</a>",
      "¼ tsp dried marjoram <a href='https://amzn.to/4f11ALW' target='_blank'>(Amazon EU/UK)</a> or <a href='https://amzn.to/3BOyAcc' target='_blank'>(Amazon US/Can)</a>",
      "½ tsp garlic powder <a href='https://amzn.to/400SACg' target='_blank'>(Amazon EU/UK)</a> or <a href='https://amzn.to/4dFMYAE' target='_blank'>(Amazon US/Can)</a>",
      "1 tsp dried basil <a href='https://amzn.to/3Nold4X' target='_blank'>(Amazon EU/UK)</a> or <a href='https://amzn.to/3AbwQZM' target='_blank'>(Amazon US/Can)</a>",
      "Salt and pepper, to taste",
      "Olive oil (for cooking)",
    ],
    method: [
      "Prepare the mini tortillas: Roll out your almond flour tortilla dough, use a round cookie cutter or glass rim to cut out 8-10cm diameter tortillas. Cook in a dry skillet over medium heat for 1-2 minutes per side until lightly browned. Set aside.",
      "Toast the spices: In a large skillet, heat a small amount of olive oil over medium heat. Add the cumin, smoked paprika, coriander, cinnamon, marjoram, basil, and garlic powder. Toast the spices for about 30 seconds, stirring constantly until fragrant. Remove the spices from the pan and set aside.",
      "Cook the beef and onions: In the same skillet, heat a bit more oil, add the chopped onion and minced garlic, and sauté for about 3-4 minutes until softened. Add the ground beef, breaking it up with a spoon, and cook until browned and fully cooked. Return the toasted spices to the pan and mix well.",
      "Add tomatoes and beans: Stir in the crushed tomatoes and white beans. Let the mixture simmer on low heat for about 10 minutes, stirring occasionally to let the flavours meld.",
      "Assemble the nachos: Preheat the oven to 180°C (350°F). Arrange the mini almond flour tortillas on a baking sheet lined with parchment paper (available here: <a href='https://amzn.to/4h3rfWi' target='_blank'>North American parchment paper</a> or <a href='https://amzn.to/3ZRoO2D' target='_blank'>European parchment paper</a>). Spoon the beef and bean mixture on top of each tortilla.",
      "Bake: Bake the assembled nachos for 10 minutes, until the tortillas become crisp and the mixture is heated through.",
      "Optional toppings: Add shredded cheese, sour cream, Greek yogurt, avocado, or your favourite chilli sauce for extra flavour before serving.",
    ],
    tips: [
      "You can replace the beef with ground turkey or chicken for a lighter option.",
      "Add a touch of heat by incorporating chopped fresh chilli or a dash of hot sauce into the beef mixture.",
      "Make a vegetarian version by swapping out the beef for extra beans or lentils.",
      "These bites are perfect for meal prep; store the beef mixture separately and assemble when ready to eat.",
    ],
    nutrition: {
      calories: "300 kcal", // Approximation
      carbs: "15g", // Almond flour tortillas and white beans contribute to this
      fibre: "5g", // From beans and almond flour
      protein: "20g", // From beef and beans
      fat: "15g", // From olive oil and beef
    },
    date_added: "2024-10-05",
  },

  // TORTILLA - KETO
  tortilla_keto: {
    title: "Keto Tortillas",
    category: [
      "snacks",
      "keto_and_low_carb",
      "gluten_free",
      "vegan",
      "vegetarian",
      "dinner",
    ],
    img_src: "/public/images/recipes/tortilla_keto/tortilla_keto.jpg", // Placeholder image
    description:
      "These keto tortillas are soft, pliable, and made with almond flour and psyllium husks for a low-carb, gluten-free alternative to traditional tortillas. Perfect for tacos, wraps, or as a side for your favourite dishes.",
    prep_time: "10 mins",
    cook_time: "10 mins",
    total_time: "20 mins",
    servings: "4 large or 8 small tortillas",
    ingredients: [
      "240 g almond flour <a href='https://amzn.to/3U7dqfp' target='_blank'>(Amazon EU/UK)</a>, <a href='https://amzn.to/3U6eekP' target='_blank'>(Amazon US/Can)</a>",
      "6 tablespoons (about 50 g) psyllium husks (not the powder) <a href='https://amzn.to/3zYWqBb' target='_blank'>(Amazon EU/UK)</a> or <a href='https://amzn.to/3NcDeDh' target='_blank'>(Amazon US/Can)</a>",
      "1 teaspoon (5 g) salt <a href='https://amzn.to/3Nrp0hK' target='_blank'>(Amazon EU/UK)</a> or <a href='https://amzn.to/3U9016P' target='_blank'>(Amazon US/Can)</a>",
      "1 tablespoon (15 ml) olive oil <a href='https://amzn.to/4gVpL0c' target='_blank'>(Amazon EU/UK)</a> or <a href='https://amzn.to/47SOaPT' target='_blank'>(Amazon US/Can)</a>",
      "240 ml warm water (not boiling)",
      "½ teaspoon of baking powder",
    ],
    method: [
      "In a large bowl, mix the almond flour, psyllium husks, and salt. Alternatively, set the bread machine to the pizza dough setting to make the dough.",
      "Add the olive oil and warm water, then mix until fully combined. Let it sit briefly to allow the psyllium to absorb the liquid.",
      "Knead the dough and form it into a ball. Divide it into 4 large or 8 small portions.",
      "Roll out each piece between parchment paper (<a href='https://amzn.to/3NfIlCz' target='_blank'>(EU) Amazon</a> or <a href='https://amzn.to/3XN0WL6' target='_blank'>(US/Can) Amazon</a>) until thin and round.",
      "Cook each tortilla in a heated, non-stick pan for 2-3 minutes on each side, until browned.",
    ],
    tips: [
      "Use a round cookie cutter or glass rim to cut the tortillas into a uniform shape if desired.",
      "These tortillas can be made ahead and stored in the refrigerator for up to a week, or frozen for later use.",
      "Try adding herbs or spices to the dough for extra flavour.",
      "Perfect for tacos, wraps, or even as a base for keto pizzas!",
    ],
    nutrition: {
      calories: "180 kcal", // Approximation per tortilla
      carbs: "3g", // Psyllium husks and almond flour contribute to this
      fibre: "6g", // From psyllium husks and almond flour
      protein: "5g", // From almond flour
      fat: "14g", // From olive oil and almond flour
    },
    date_added: "2024-10-06",
  },

  // Chickpea Fritters
  chickpea_fritters: {
    title: "Chickpea Fritters",
    category: [
      "snacks",
      "gluten_free",
      "vegan",
      "vegetarian",
      "keto_and_low_carb",
    ],
    img_src: "/public/images/recipes/chickpea_fritters/chickpea_fritters.jpg", // Add your image path here
    description:
      "A savoury and crispy chickpea fritter, packed with flavour from cumin, turmeric, and basil. These fritters are a perfect gluten-free, low-carb snack or light meal. Serve on a bed of spinach for added freshness.",
    prep_time: "10 mins",
    cook_time: "8 mins",
    total_time: "18 mins",
    servings: "4",
    ingredients: [
      "2 tsp coconut oil (for cooking)",
      "1 small onion, grated",
      "1 red pepper, finely chopped",
      "1 egg, beaten",
      "1 tsp cumin <a href='https://amzn.to/3A4aut9' target='_blank'>(Amazon EU/UK)</a> or <a href='https://amzn.to/4eWRf3F' target='_blank'>(Amazon US/Can)</a>",
      "1 tsp ground turmeric <a href='https://amzn.to/483gXkS' target='_blank'>(Amazon EU/UK)</a> or <a href='https://amzn.to/486pvYj' target='_blank'>(Amazon US/Can)</a>",
      "1 tsp cardamom <a href='https://amzn.to/4016RyI' target='_blank'>(Amazon EU/UK)</a> or <a href='https://amzn.to/483fyL0' target='_blank'>(Amazon US/Can)</a>",
      "1 red chilli, finely chopped",
      "400g can chickpeas, drained and mashed thoroughly",
      "2 tsp psyllium husk <a href='https://amzn.to/3XYOXtX' target='_blank'>(Amazon EU/UK)</a> or <a href='https://amzn.to/3ND1heR' target='_blank'>(Amazon US/Can)</a>, or 25g graham flour",
      "10g fresh basil, chopped",
      "Salt and pepper, to taste",
      "Bed of spinach to serve",
    ],
    method: [
      "Prepare Ingredients: Grate the onion, finely chop the red pepper, chilli, and basil. Mash the chickpeas.",
      "Mix Ingredients: In a large bowl, combine onion, red pepper, chickpeas, egg, psyllium husk or graham flour, cumin, turmeric, cardamom, basil, and season with salt and pepper.",
      "Form Fritters: Scoop 2 tablespoons of the mixture, form into patties, and slightly flatten.",
      "Cook Fritters: Heat coconut oil in a skillet. Fry the patties for 3-4 minutes on each side until crispy and golden.",
      "Serve: Serve fritters warm on a bed of fresh spinach.",
    ],
    tips: [
      "Serving Suggestion: Garnish with fresh lemon juice or a tangy yogurt sauce for extra flavour.",
      "Storage: Store leftovers in an airtight container for up to 2 days and reheat in a skillet to retain crispiness.",
      "Psyllium Husk: For a gluten-free option, psyllium husk works as a great binder instead of graham flour. Shop here: <a href='https://amzn.to/3XYOXtX' target='_blank'>EU/UK</a>, <a href='https://amzn.to/3ND1heR' target='_blank'>US/Can</a>.",
    ],
    nutrition: {
      calories: "150 kcal",
      carbs: "12g",
      fibre: "4g",
      protein: "5g",
      fat: "8g",
    },
    date_added: "2024-10-08",
  },

  // Chicken Korma
  chicken_korma: {
    title: "Chicken Korma",
    category: ["dinner", "gluten_free", "keto_and_low_carb", "side_dishes"],
    img_src: "/public/images/recipes/chicken_korma/chicken_korma.jpg", // Add your image path here
    description:
      "A rich and aromatic chicken korma with a blend of almonds and cashews, spices, and creamy yoghurt. This low-carb dish is served with microwave poppadums instead of rice, making it perfect for those watching their blood sugar.",
    prep_time: "15 mins",
    cook_time: "25 mins",
    total_time: "40 mins",
    servings: "4",
    ingredients: [
      "500g chicken (boneless, cut into pieces)",
      "1 large onion, sliced",
      "3-4 garlic cloves",
      "1 inch ginger piece",
      "2 tablespoons Greek yoghurt",
      "3 tablespoons oil or ghee <a href='https://amzn.to/3U4Qrlj' target='_blank'>(Amazon EU/UK)</a> or <a href='https://amzn.to/3NlckJp' target='_blank'>(Amazon US/Can)</a>",
      "½ teaspoon ground cardamom <a href='https://amzn.to/4016RyI' target='_blank'>(Amazon EU/UK)</a> or <a href='https://amzn.to/483fyL0' target='_blank'>(Amazon US/Can)</a>",
      "2-3 whole cloves <a href='https://amzn.to/3U6azna' target='_blank'>(Amazon EU/UK)</a> or <a href='https://amzn.to/48lokEx' target='_blank'>(Amazon US/Can)</a>",
      "1 cinnamon stick <a href='https://amzn.to/401RZAr' target='_blank'>(Amazon EU/UK)</a> or <a href='https://amzn.to/3YjJGP8' target='_blank'>(Amazon US/Can)</a> (or ½ tsp ground cinnamon <a href='https://amzn.to/483pOD8' target='_blank'>(Amazon EU/UK)</a> or <a href='https://amzn.to/4f1zyQi' target='_blank'>(Amazon US/Can)</a>)",
      "½ teaspoon ground turmeric <a href='https://amzn.to/483gXkS' target='_blank'>(Amazon EU/UK)</a> or <a href='https://amzn.to/486pvYj' target='_blank'>(Amazon US/Can)</a>",
      "1 teaspoon garam masala <a href='https://amzn.to/3YlriFp' target='_blank'>(Amazon EU/UK)</a> or <a href='https://amzn.to/3zXQMQ0' target='_blank'>(Amazon US/Can)</a>",
      "1 teaspoon ground coriander <a href='https://amzn.to/4eXnEHl' target='_blank'>(Amazon EU/UK)</a> or <a href='https://amzn.to/3Ymp60z' target='_blank'>(Amazon US/Can)</a>",
      "1 teaspoon cumin powder <a href='https://amzn.to/3A4aut9' target='_blank'>(Amazon EU/UK)</a> or <a href='https://amzn.to/4eWRf3F' target='_blank'>(Amazon US/Can)</a>",
      "1 teaspoon red chilli powder <a href='https://amzn.to/3BTvSSo' target='_blank'>(Amazon EU/UK)</a> or <a href='https://amzn.to/4dLbOyU' target='_blank'>(Amazon US/Can)</a> (adjust to taste)",
      "1 tablespoon almonds <a href='https://amzn.to/3BBRSBe' target='_blank'>(Amazon EU/UK)</a> or <a href='https://amzn.to/483oK1Y' target='_blank'>(Amazon US/Can)</a> and cashew nuts <a href='https://amzn.to/3YbaHDc' target='_blank'>(Amazon EU/UK)</a> or <a href='https://amzn.to/3zXsWnm' target='_blank'>(Amazon US/Can)</a> mixed",
      "200 ml water or chicken stock",
      "Salt, to taste",
      "Microwaved poppadums (<a href='https://amzn.to/3Y0tn8p' target='_blank'>Shop here</a>)",
      "Lentils on the side for extra fibre",
    ],
    method: [
      "Prepare the paste: Blend the garlic, ginger, and almond-cashew mix with a little water to make a smooth paste.",
      "Cook the onions: Heat oil or ghee in a pan. Add sliced onions and sauté until golden. Set half aside for garnishing.",
      "Fry the spices: To the remaining onions, add cardamom, cloves, and cinnamon. Fry for 30 seconds.",
      "Add the paste: Stir in the garlic-ginger-nut paste. Fry for 2-3 minutes until the raw smell disappears.",
      "Spice up the korma: Add turmeric, garam masala, ground coriander, cumin, and chilli powder. Cook for another minute.",
      "Add the chicken: Add chicken pieces to the pan. Fry until browned on all sides (5-7 mins).",
      "Mix in the yoghurt: Lower the heat and stir in Greek yoghurt slowly. Stir continuously to prevent curdling.",
      "Simmer: Add water or chicken stock and salt. Cover and let simmer for 15-20 minutes until the chicken is fully cooked and sauce thickens.",
      "Microwave the poppadums for about 45 seconds each until crunchy.",
      "Serve: Garnish with reserved onions and serve with microwaved poppadums and a side of lentils.",
    ],
    tips: [
      "Microwaved Poppadums: These are a great low-carb option compared to rice, offering crunch without spiking blood sugar.",
      "Side Lentils: Serve with lentils for added fibre, which helps in maintaining blood sugar levels.",
      "Swap the Chicken for Lamb: You can make a lamb korma exactly the same way, just replace the chicken with cut lamb.",
    ],
    nutrition: {
      calories: "300 kcal",
      carbs: "10g",
      fibre: "4g",
      protein: "25g",
      fat: "15g",
    },
    date_added: "2024-10-10",
  },

  // Stuffed Peppers and Mushrooms with Lentils and Beef
  stuffed_peppers_mushrooms: {
    title: "Stuffed Bell Peppers and Mushrooms with Lentils and Beef",
    category: ["dinner", "gluten_free", "keto_and_low_carb", ""],
    img_src:
      "/public/images/recipes/stuffed_peppers_mushrooms/stuffed_peppers_mushrooms.jpg", // Add image path here
    description:
      "A hearty dish featuring lentils, lean beef, and roasted vegetables, including peppers and mushrooms, with optional chanterelles and broccoli for added flavour. Topped with fresh mozzarella, this meal is high in fibre and suitable for those managing blood sugar levels.",
    prep_time: "20 mins",
    cook_time: "55 mins",
    total_time: "1 hr 15 mins",
    servings: "4",
    ingredients: [
      "1 small onion, chopped",
      "200g lean beef mince (5% fat)",
      "1 tsp ground cumin <a href='https://amzn.to/3A4aut9' target='_blank'>(Amazon EU/UK)</a> or <a href='https://amzn.to/4eWRf3F' target='_blank'>(Amazon US/Can)</a>",
      "2 cloves garlic, minced",
      "Pinch of cayenne pepper <a href='https://amzn.to/4eY6qto' target='_blank'>(Amazon US/Can)</a> or <a href='https://amzn.to/4054wmv' target='_blank'>(Amazon EU/UK)</a>",
      "1 tsp smoked paprika <a href='https://amzn.to/480hOCV' target='_blank'>(Amazon US/Can)</a> or <a href='https://amzn.to/3ZVTQql' target='_blank'>(Amazon EU/UK)</a>",
      "1 tsp dried oregano <a href='https://amzn.to/3Y1LQl4' target='_blank'>(Amazon US/Can)</a> or <a href='https://amzn.to/3Ym0qp0' target='_blank'>(Amazon EU/UK)</a>",
      "1 tsp dried thyme <a href='https://amzn.to/4eDqCRz' target='_blank'>(Amazon EU/UK)</a> or <a href='https://amzn.to/3BPCtO0' target='_blank'>(Amazon US/Can)</a>",
      "1 tsp dried basil <a href='https://amzn.to/3Nold4X' target='_blank'>(Amazon EU/UK)</a> or <a href='https://amzn.to/3AbwQZM' target='_blank'>(Amazon US/Can)</a>",
      "150g dry black, green, or red lentils (Get black lentils <a href='https://amzn.to/4013194' target='_blank'>(Amazon US/Can)</a> or <a href='https://amzn.to/3XTzviM' target='_blank'>(Amazon EU/UK)</a>; or green lentils <a href='https://amzn.to/3BQ8167' target='_blank'>(Amazon US/Can)</a>)",
      "200g tin chopped tomatoes (or 200g fresh tomatoes, chopped)",
      "1 tbsp tomato purée",
      "2 tbsp mature Cheddar cheese, grated",
      "1 yellow pepper, halved and deseeded",
      "1 red pepper, halved and deseeded",
      "4 large flat mushrooms, hollowed out",
      "Optional: 100g chanterelle mushrooms",
      "Broccoli florets",
      "½ tomatoes",
      "Fresh mozzarella for topping",
      "1 tbsp olive oil <a href='https://amzn.to/4gVpL0c' target='_blank'>(Amazon EU/UK)</a> or <a href='https://amzn.to/47SOaPT' target='_blank'>(Amazon US/Can)</a>",
      "Salt and pepper to taste",
    ],
    method: [
      "Rinse the lentils under cold water and cook in 600ml of water for 20-25 minutes until tender. Drain and set aside.",
      "Preheat the oven to 200°C/gas 6. Heat 1 tbsp olive oil in a pan, add onion and garlic, and fry until softened.",
      "Add beef mince and cook for 5-6 minutes until browned. Stir in cumin, paprika, oregano, thyme, basil, and cayenne. Cook for 1 minute.",
      "Add chopped tomatoes, tomato purée, and lentils. Let simmer for 10 minutes to thicken.",
      "Prepare the peppers, mushrooms, broccoli, and tomatoes. Place them in an ovenproof dish and brush with olive oil.",
      "Stuff peppers and mushrooms with the beef-lentil mix and top with fresh mozzarella. Sprinkle grated Cheddar.",
      "Roast for 45 minutes covered with foil, then remove foil and roast for 10 more minutes until cheese is golden.",
    ],
    tips: [
      "Chanterelle Mushrooms: Add them alongside the peppers for an extra roasted treat.",
      "Mozzarella: Fresh mozzarella provides creaminess with fewer carbs compared to other cheeses. It’s perfect for diabetics.",
      "Lentil Varieties: You can swap brown lentils for black, red, or green depending on your preference.",
      "Shop Lentils: Get black lentils <a href='https://amzn.to/4013194' target='_blank'>US/Can</a>, <a href='https://amzn.to/3XTzviM' target='_blank'>EU/UK</a>; or green lentils <a href='https://amzn.to/3BQ8167' target='_blank'>US/Can</a>.",
    ],
    nutrition: {
      calories: "320 kcal",
      carbs: "20g",
      fibre: "10g",
      protein: "25g",
      fat: "15g",
    },
    date_added: "2024-10-10",
  },

  // Peanut Butter Cookies
  peanut_butter_cookies: {
    title: "Peanut Butter Cookies",
    category: [
      "snacks",
      "gluten_free",
      "keto_and_low_carb",
      "vegetarian",
      "dessert",
    ],
    img_src:
      "/public/images/recipes/peanut_butter_cookies/peanut_butter_cookies.jpg", // Add your image path here
    description:
      "Classic peanut butter cookies with a low-carb twist. Made with almond flour and sweetened with erythritol or monk fruit sweetener, these cookies are perfect for those managing blood sugar or following a keto diet. Optionally, add unsweetened chocolate for a rich treat.",
    prep_time: "5 mins",
    cook_time: "12 mins",
    total_time: "17 mins",
    servings: "12 cookies",
    ingredients: [
      "1 cup natural crunchy peanut butter (unsweetened, no added sugar) <a href='https://amzn.to/3NmnhKD' target='_blank'>(Amazon EU/UK)</a>, <a href='https://amzn.to/3NnLiks' target='_blank'>(Amazon EU/UK)</a>, or <a href='https://amzn.to/4eW0kd1' target='_blank'>(Amazon US/Can)</a>",
      "½ cup erythritol <a href='https://amzn.to/3NHtIbz' target='_blank'>(Amazon EU/UK)</a> or <a href='https://amzn.to/3Nl85NJ' target='_blank'>(Amazon US/Can)</a>, or monk fruit sweetener <a href='https://amzn.to/3Yia381' target='_blank'>(Amazon US/Can)</a> (adjust sweetness as needed)",
      "1 large egg",
      "¼ cup almond flour <a href='https://amzn.to/3U7dqfp' target='_blank'>(Amazon EU/UK)</a> or <a href='https://amzn.to/3U6eekP' target='_blank'>(Amazon US/Can)</a>",
      "½ tsp vanilla extract <a href='https://amzn.to/3Yhyoeb' target='_blank'>(Amazon EU/UK)</a> or <a href='https://amzn.to/4dH7OzB' target='_blank'>(Amazon US/Can)</a>",
      "½ tsp baking soda",
      "A pinch of salt (optional) <a href='https://amzn.to/3Nrp0hK' target='_blank'>(Amazon EU/UK)</a> or <a href='https://amzn.to/3U9016P' target='_blank'>(Amazon US/Can)</a>",
      "Optional: Dark unsweetened chocolate (see <a href='/views/layouts/recipes/recipe_pages/chocolate_raw.html'>this recipe</a>)",
    ],
    method: [
      "Preheat the oven to 180°C (350°F). Line a baking sheet with parchment paper (<a href='https://amzn.to/3NfIlCz' target='_blank'>(EU) Amazon</a> or <a href='https://amzn.to/3XN0WL6' target='_blank'>(US/Can) Amazon</a>).",
      "In a bowl, mix the peanut butter, erythritol (or monk fruit sweetener), and egg until well combined.",
      "Stir in the almond flour, vanilla extract, and baking soda until you have a smooth dough.",
      "Roll the dough into small balls (about 1 inch in diameter) and place them on the baking sheet.",
      "Gently press each ball with a fork to create a criss-cross pattern.",
      "Bake for 10-12 minutes until the cookies are golden at the edges.",
      "Let the cookies cool on the baking sheet for 5 minutes before transferring them to a wire rack to cool completely.",
    ],
    tips: [
      "Adjust Sweetness: I prefer using less erythritol for a more subtle sweetness.",
      "Crunchy Peanut Butter: I prefer crunchy peanut butter for texture <a href='https://amzn.to/3NmnhKD' target='_blank'>(Amazon EU/UK)</a> or <a href='https://amzn.to/4eW0kd1' target='_blank'>(Amazon US/Can)</a>.",
      "Sweetener Options: Use erythritol <a href='https://amzn.to/3NHtIbz' target='_blank'>(Amazon EU/UK)</a> or <a href='https://amzn.to/3Nl85NJ' target='_blank'>(Amazon US/Can)</a>, or monk fruit sweetener <a href='https://amzn.to/3Yia381' target='_blank'>(Amazon US/Can)</a> as a diabetic-friendly alternative to sugar.",
      "Less Sweet Option: I prefer to use far less erythritol in my recipes. If you would like a sweeter cookie, use the ½ cup of erythritol; I used ¼ cup in this recipe.",
      "Optional Chocolate: Add unsweetened dark chocolate or use <a href='/views/layouts/recipes/recipe_pages/chocolate_raw.html'>this chocolate recipe</a> for extra richness.",
      "Optional Chocolate ii: Top the cookies with <a href='/views/layouts/recipes/recipe_pages/cocoa_peanut_butter_chocolate.html'>this unsweetened chocolate</a>, but make the chocolate without the peanut butter",
    ],
    nutrition: {
      calories: "90 kcal",
      carbs: "4g",
      fibre: "1g",
      protein: "4g",
      fat: "7g",
    },
    date_added: "2024-10-11",
  },

  // Kiwi Keto Meat Pie
  meat_pie: {
    title: "Keto Meat Pie",
    category: ["dinner", "gluten_free", "keto_and_low_carb"],
    img_src: "/public/images/recipes/meat_pie/meat_pie.jpg", // Add your image path here
    description:
      "A savoury keto-friendly pie packed with lean beef mince, vegetables, and herbs, encased in a low-carb savoury pie crust. Perfect for those following a low-carb or gluten-free diet.",
    prep_time: "25 mins",
    cook_time: "35 mins",
    total_time: "1 hour",
    servings: "6",
    ingredients: [
      "500g lean beef mince",
      "1 large onion, finely diced",
      "1 clove garlic, crushed",
      "2 large Portobello mushrooms, finely chopped",
      "1 small parsnip, diced",
      "2 stalks celery, sliced",
      "1 handful fresh parsley, finely chopped",
      "1 tablespoon fresh rosemary, finely chopped (or you can try dried rosemary <a href='https://amzn.to/3YnjqDm' target='_blank'>(Amazon EU/UK)</a> or <a href='https://amzn.to/3BFrC9l' target='_blank'>(Amazon US/Can)</a>)",
      "1 tablespoon wholegrain mustard (check for sugar-free) or 1 tsp mustard powder <a href='https://amzn.to/3YxbVdn' target='_blank'>(Amazon EU/UK)</a> or <a href='https://amzn.to/3zN79ih' target='_blank'>(Amazon US/Can)</a>",
      "2 tablespoons tomato paste",
      "1 tablespoon balsamic vinegar <a href='https://amzn.to/3zWcBiN' target='_blank'>(Amazon EU/UK)</a> or <a href='https://amzn.to/3U8Ol3I' target='_blank'>(Amazon US/Can)</a>",
      "1 cup low-sodium, sugar-free beef stock",
      "Salt and pepper to taste",
      "Prepared savoury pie crust (Follow the <a href='/views/layouts/recipes/recipe_pages/savoury_pie_crust.html'>savoury pie crust recipe here</a>)",
    ],
    method: [
      "Sauté Vegetables: Heat a splash of olive oil in a large, lidded frying pan. Fry the onion and garlic until soft. Add the parsnip, mushrooms, and celery, and cook until softened. Stir in parsley and rosemary.",
      "Cook the Beef: Add beef mince and cook until browned. Stir in mustard, vinegar, tomato paste, and beef stock.",
      "Simmer: Let the mixture simmer, covered, for 25-30 minutes. Adjust seasoning with salt and pepper. If too dry, add more stock; if too runny, add a little psyllium husk.",
      "Assemble the Pie: Pour the meat filling into your prepared pie crust. Follow the instructions for pre-baking the crust for crispiness. Add the top dough layer after the filling.",
      "Bake: Preheat oven to 180°C (350°F). Bake the pie for 30-35 minutes until the crust is golden brown.",
    ],
    tips: [
      "Ensure your mustard is sugar-free for keto compliance. Adjust herbs to taste—dried rosemary is an option if fresh is unavailable.",
      "Serve with green beans or a mixed salad for added fibre and a balanced meal.",
    ],
    nutrition: {
      calories: "450 kcal",
      carbs: "10g",
      fibre: "5g",
      protein: "35g",
      fat: "30g",
    },
    date_added: "2024-10-13",
  },

  // Savoury Pie Crust
  savoury_pie_crust: {
    title: "Savoury Pie Crust",
    category: ["gluten_free", "keto_and_low_carb", "dinner", "side_dishes"],
    img_src: "/public/images/recipes/meat_pie/meat_pie.jpg",
    description:
      "A keto-friendly, gluten-free savoury pie crust made with almond flour, perfect for holding your favourite fillings. Crispy, buttery, and low-carb, this crust is ideal for pies like the <a href='/views/layouts/recipes/recipe_pages/meat_pie.html' target='_blank'>Keto Meat Pie</a>.",
    prep_time: "15 mins",
    cook_time: "12 mins (blind bake)",
    total_time: "1 hour",
    servings: "1 pie crust",
    ingredients: [
      "2 cups almond flour <a href='https://amzn.to/3U7dqfp' target='_blank'>(Amazon EU/UK)</a> or <a href='https://amzn.to/3U6eekP' target='_blank'>(Amazon US/Can)</a>",
      "¼ cup quinoa flour <a href='https://amzn.to/3NpULaW' target='_blank'>(Amazon EU/UK)</a> or <a href='https://amzn.to/3ZXlvap' target='_blank'>(Amazon US/Can)</a>, or chickpea flour <a href='https://amzn.to/3zSUPwV' target='_blank'>(Amazon EU/UK)</a> or <a href='https://amzn.to/4eZuIDm' target='_blank'>(Amazon US/Can)</a>",
      "1 tablespoon psyllium husk <a href='https://amzn.to/3zYWqBb' target='_blank'>(Amazon EU)</a> or <a href='https://amzn.to/3NcDeDh' target='_blank'>(Amazon US/Can)</a>",
      "½ teaspoon xanthan gum <a href='https://amzn.to/4eDPoBd' target='_blank'>(Amazon EU/UK)</a> or <a href='https://amzn.to/3ZWOZFo' target='_blank'>(Amazon US/Can)</a>",
      "½ teaspoon salt <a href='https://amzn.to/3Nrp0hK' target='_blank'>(Amazon EU/UK)</a> or <a href='https://amzn.to/3U9016P' target='_blank'>(Amazon US/Can)</a>",
      "½ cup (100g) cold butter, cubed",
      "1 large egg",
      "1 tablespoon cold water (if needed)",
      "Optional: ¼ tsp garlic powder <a href='https://amzn.to/400SACg' target='_blank'>(Amazon EU/UK)</a> or <a href='https://amzn.to/4dFMYAE' target='_blank'>(Amazon US/Can)</a>, or onion powder <a href='https://amzn.to/48d3S8I' target='_blank'>(Amazon EU/UK)</a> or <a href='https://amzn.to/484xQLS' target='_blank'>(Amazon US/Can)</a>",
    ],
    method: [
      "Combine dry ingredients: Mix almond flour, quinoa flour (or chickpea flour), psyllium husk, xanthan gum, and salt.",
      "Cut in the butter: Rub cold butter into the dry mixture until it resembles coarse crumbs.",
      "Add the egg: Stir in the egg until the dough starts to come together. Add cold water if the dough is too dry.",
      "Shape and chill: Shape the dough into a ball, wrap it, and chill for 30-60 minutes.",
      "Roll out and transfer: Roll out between parchment paper, then transfer into a greased pie dish.",
      "Blind bake: Bake the crust for 10-12 minutes to prevent over-browning or fill it directly with your savoury pie filling.",
      "Bake with filling: Once filled, bake for an additional 30-35 minutes until golden brown.",
    ],
    tips: [
      "For extra crispiness, use quinoa flour. Coconut flour can be substituted, but reduce the amount to 2 tablespoons.",
      "Xanthan gum and psyllium husk provide structure, holding the pie together better.",
    ],
    nutrition: {
      calories: "250 kcal",
      carbs: "8g",
      fibre: "4g",
      protein: "6g",
      fat: "22g",
    },
    date_added: "2024-10-13",
  },

  // Crispy Sweet Peas
  crispy_sweet_peas: {
    title: "Crispy Sweet Peas",
    category: ["snacks", "gluten_free", "keto_and_low_carb", "vegan"],
    img_src: "/public/images/recipes/crispy_sweet_peas/crispy_sweet_peas.jpg",
    description:
      "Crunchy, low-carb, and full of flavour, these crispy sweet peas are a delicious and diabetic-friendly snack. Perfect for quick baking or dehydrating, they're a great alternative to potato chips.",
    prep_time: "10 mins",
    cook_time: "20 mins (Quick Oven Method)",
    total_time: "30 mins",
    servings: "4 cups",
    ingredients: [
      "200–400 g fresh or frozen snap peas (approximately up to 4 cups)",
      "1.25 g sea salt (¼ teaspoon) <a href='https://amzn.to/3Nrp0hK' target='_blank'>(Amazon EU/UK)</a> or <a href='https://amzn.to/3U9016P' target='_blank'>(Amazon US/Can)</a>",
      "1.25 g garlic powder <a href='https://amzn.to/400SACg' target='_blank'>(Amazon EU/UK)</a> or <a href='https://amzn.to/4dFMYAE' target='_blank'>(Amazon US/Can)</a>, and/or onion powder <a href='https://amzn.to/48d3S8I' target='_blank'>(Amazon EU/UK)</a> or <a href='https://amzn.to/484xQLS' target='_blank'>(Amazon US/Can)</a>",
      "Optional: 10–12 g nutritional yeast <a href='https://amzn.to/4dQydLk' target='_blank'>(Amazon EU/UK)</a> or <a href='https://amzn.to/3U7fGn6' target='_blank'>(Amazon US/Can)</a>",
      "10–15 ml oil (2–3 teaspoons)",
    ],
    method: [
      "Quick Oven Baking Method: Preheat oven to 175°C (350°F). Toss snap peas with oil, sea salt, and onion or garlic powder. Spread evenly on a baking sheet. Bake for 15 minutes, decrease the temperature to 150°C (300°F) and flipping the peas for even crisping, cook for a further 5 minutes. Enjoy fresh and crispy!",
      "Dehydrator <a href='https://amzn.to/4eZEghG' target='_blank'>(Amazon EU/UK)</a> or <a href='https://amzn.to/3BIPVmK' target='_blank'>(Amazon US/Can)</a> Method: Toss seasoned snap peas, dehydrate at 57–60°C (135–140°F) for 8-10 hours. Let sit at room temperature for 1 hour before packaging.",
      "Slow Oven Method: Preheat oven to 75°C (170°F). Bake snap peas for 5-6 hours, keeping the door propped open slightly. Check after 4 hours.",
    ],
    tips: [
      "For a 'cheesy' flavour, sprinkle on nutritional yeast, which is diabetic-friendly and rich in B vitamins and protein.",
      "For crispier peas, let the baked version sit in a dry environment for a few days.",
    ],
    nutrition: {
      calories: "80 kcal",
      carbs: "10g",
      fibre: "4g",
      protein: "4g",
      fat: "3g",
    },
    date_added: "2024-10-13",
  },

  // Raspberry Cream Cheesecake
  raspberry_cream_cheesecake: {
    title: "Raspberry Cream Cheesecake",
    category: ["dessert", "gluten_free", "keto_and_low_carb"],
    img_src:
      "/public/images/recipes/raspberry_cream_cheesecake/raspberry_cream_cheesecake.jpg",
    description:
      "A light, creamy, and diabetic-friendly cheesecake featuring fresh raspberries and cream cheese, perfect for a low-carb treat.",
    prep_time: "15 mins",
    cook_time: "0 mins (no-bake)",
    total_time: "2 hours 15 mins (including chilling time)",
    servings: "4",
    ingredients: [
      "250 ml heavy whipping cream",
      "125 g fresh or frozen raspberries (1 Swedish punnet)",
      "1 tsp vanilla extract <a href='https://amzn.to/3Yhyoeb' target='_blank'>(Amazon EU/UK)</a> or <a href='https://amzn.to/4dH7OzB' target='_blank'>(Amazon US/Can)</a>",
      "250 g cream cheese, at room temperature",
      "1 tsp unflavoured gelatin powder <a href='https://amzn.to/4dNoHc3' target='_blank'>(Amazon US/Can)</a> or <a href='https://amzn.to/4eEySkc' target='_blank'>(Amazon EU/UK)</a>",
      "2 tbsp water",
      "Optional: 1 lemon, zested and juiced",
    ],
    method: [
      "Raspberry mix: Mash thawed raspberries and set aside.",
      "Bloom gelatin: Sprinkle gelatin over water and let sit for 5 minutes. Heat gently until dissolved, then cool.",
      "Combine: Beat cream cheese with vanilla (and optional lemon), fold in raspberries, then add gelatin.",
      "Whip cream: Beat heavy cream until soft peaks form, then fold into the mixture in two batches.",
      "Chill: Spoon mixture into ramekins, cover, and chill for at least 2 hours.",
    ],
    tips: [
      "Natural sweetness from raspberries helps avoid additional sugars, making this a good choice for diabetics.",
      "For a firmer texture, freeze for a short time before serving.",
    ],
    nutrition: {
      calories: "~320 kcal",
      total_fat: "~32 g",
      protein: "~5 g",
      net_carbs: "~5-6 g",
    },
    date_added: "2024-10-14",
  },

  // Not-Cornbread Cornbread
  not_cornbread: {
    title: "Not-Cornbread Cornbread",
    category: [
      "snacks",
      "gluten_free",
      "keto_and_low_carb",
      "vegan",
      "vegetarian",
    ],
    img_src: "/public/images/recipes/not_cornbread/not_cornbread.jpg",
    description:
      "A keto and diabetic-friendly 'cornbread' made without corn! This savoury bread alternative is perfect for those on a low-carb or gluten-free diet. Customise it with cheese or jalapeños for extra flavour.",
    prep_time: "10 mins",
    cook_time: "25 mins",
    total_time: "35 mins",
    servings: "8 slices",
    ingredients: [
      "1 ½ cups blanched almond flour <a href='https://amzn.to/3U7dqfp' target='_blank'>(Amazon EU/UK)</a> or <a href='https://amzn.to/3U6eekP' target='_blank'>(Amazon US/Can)</a>",
      "¼ cup coconut flour <a href='https://amzn.to/3zXdLL0' target='_blank'>(Amazon EU/UK)</a> or <a href='https://amzn.to/3UaxFZX' target='_blank'>(Amazon US/Can)</a>",
      "1 tsp baking powder (corn-free if needed)",
      "½ tsp sea salt <a href='https://amzn.to/3Nrp0hK' target='_blank'>(Amazon EU/UK)</a> or <a href='https://amzn.to/3U9016P' target='_blank'>(Amazon US/Can)</a>",
      "3 large eggs",
      "⅓ cup milk (or any milk alternative)",
      "¼ cup (60g) melted butter (or ghee <a href='https://amzn.to/3U4Qrlj' target='_blank'>(Amazon EU/UK)</a> or <a href='https://amzn.to/3NlckJp' target='_blank'>(Amazon US/Can)</a> for a paleo version)",
      "Optional: Add-ins like shredded cheese, chopped jalapeños, or herbs",
    ],
    method: [
      "Preheat oven to 165°C (325°F).",
      "Grease a <a href = 'https://amzn.to/4eJ5CsK' target = '_blank' > bread baking tray (EU / UK)</a>, or this <a href = 'https://amzn.to/40bPD1E' target = '_blank'> bread baking tray (US / Can)</a> with oil or butter.",
      "Whisk together almond flour, coconut flour, baking powder, and salt in a bowl.",
      "In a separate bowl, whisk the eggs, milk, and melted butter.",
      "Combine wet ingredients with the dry, mixing until fully incorporated.",
      "Pour the batter into the greased tray and smooth the top.",
      "Bake for 20-25 minutes until the top is golden and springs back when touched.",
    ],
    tips: [
      "For a cheesy version, add ½ cup shredded cheese to the batter.",
      "For a spicy kick, mix in a handful of diced jalapeño before baking.",
    ],
    nutrition: {
      calories: "~190 kcal",
      total_fat: "~15g",
      protein: "~6g",
      net_carbs: "~4g",
    },
    date_added: "2024-10-14",
  },

  // Chutney-Scrambled Eggs with Pickled Onion
  chutney_scrambled_eggs: {
    title: "Chutney-Scrambled Eggs with Pickled Onion",
    category: ["breakfast", "gluten_free", "keto_and_low_carb", "lunch"],
    img_src:
      "/public/images/recipes/chutney_scrambled_eggs/chutney_scrambled_eggs.jpg",
    description:
      "A savoury scrambled egg recipe with caramelised onion, tomato chutney, and pickled onion. Perfect for a low-carb and diabetic-friendly breakfast or lunch.",
    prep_time: "10 mins",
    cook_time: "15 mins",
    total_time: "25 mins",
    servings: "2",
    ingredients: [
      "1 medium red onion",
      "½ leek, finely sliced",
      "1 tablespoon apple cider vinegar <a href='https://amzn.to/3NsCGJA' target='_blank'>(Amazon EU/UK)</a> or <a href='https://amzn.to/48688qe' target='_blank'>(Amazon US/Can)</a>",
      "1 tsp garam masala <a href='https://amzn.to/3YlriFp' target='_blank'>(Amazon EU/UK)</a> or <a href='https://amzn.to/3zXQMQ0' target='_blank'>(Amazon US/Can)</a>",
      "A pinch of salt <a href='https://amzn.to/3Nrp0hK' target='_blank'>(Amazon EU/UK)</a> or <a href='https://amzn.to/3U9016P' target='_blank'>(Amazon US/Can)</a>",
      "4 tomatoes or 1 can crushed tomatoes",
      "4 large eggs",
      "1 tsp dried basil <a href='https://amzn.to/3Nold4X' target='_blank'>(Amazon EU/UK)</a> or <a href='https://amzn.to/3AbwQZM' target='_blank'>(Amazon US/Can)</a>",
      "1 tsp dried marjoram <a href='https://amzn.to/4f11ALW' target='_blank'>(Amazon EU/UK)</a> or <a href='https://amzn.to/3BOyAcc' target='_blank'>(Amazon US/Can)</a>",
      "1 tablespoon olive oil <a href='https://amzn.to/4gVpL0c' target='_blank'>(Amazon EU/UK)</a> or <a href='https://amzn.to/47SOaPT' target='_blank'>(Amazon US/Can)</a>",
      "2 slices of not-cornbread (<a href='/views/layouts/recipes/recipe_pages/not_cornbread.html'>recipe here</a>)",
      "3 tablespoons of fresh coriander or parsley",
    ],
    method: [
      "Pickled Onion: Grate ¼ of the onion, mix with vinegar and salt, and set aside.",
      "Caramelised Onion: Heat olive oil, sauté the rest of the grated onion and leek for 3-4 minutes, then add garam masala. Cook until golden and caramelised.",
      "Tomato Chutney: Move the onions to one side of the pan and then add grated tomatoes. Cook until reduced, then mix the caramelised onion and set aside.",
      "Crisp the Cornbread: Fry slices of not-cornbread in the remaining chutney bits until crispy.",
      "Scrambled Eggs: Mix eggs with basil, marjoram, and salt. Scramble in the same pan as the chutney.",
      "Assembly: Arrange the toasted cornbread slices on the plate, top with the tomato chutney and the pickled onion, sprinkle with fresh coriander or parsley.",
    ],
    tips: [
      "Pickling the onion ahead of time enhances the flavour.",
      "The residual chutney flavours in the pan add depth to the scrambled eggs.",
    ],
    nutrition: {
      calories: "300 kcal",
      protein: "14g",
      carbs: "8g",
      fat: "22g",
    },
    date_added: "2024-10-15",
  },

  // Salmon Patties
  salmon_patties: {
    title: "Sweet Potato and Fibre-Boosted Salmon Patties",
    category: [
      "lunch",
      "dinner",
      "gluten_free",
      "keto_and_low_carb",
      "quick_and_easy",
    ],
    img_src: "/public/images/recipes/salmon_patties/salmon_patties.jpg",
    description:
      "A diabetes-friendly salmon patty recipe using sweet potato and psyllium husk for added fibre, perfect for a healthy and balanced meal.",
    prep_time: "15 mins",
    cook_time: "10 mins",
    total_time: "25 mins",
    servings: "4",
    ingredients: [
      "400g fresh salmon, skin removed, finely chopped or minced",
      "150g cooked sweet potato, mashed",
      "1 egg",
      "2 tablespoons psyllium husk <a href='https://amzn.to/3zYWqBb' target='_blank'>(Amazon EU)</a> or <a href='https://amzn.to/3NcDeDh' target='_blank'>(Amazon US/Can)</a>",
      "1 small red onion, finely chopped",
      "2 cloves garlic, minced",
      "1 tablespoon Dijon mustard <a href='https://amzn.to/3YbBu27' target='_blank'>(Amazon EU/UK)</a> or <a href='https://amzn.to/3zYbSxC' target='_blank'>(Amazon US/Can)</a>",
      "Zest of 1 lemon",
      "2 tablespoons fresh dill, chopped",
      "2 tablespoons fresh parsley, chopped",
      "Salt and pepper, to taste",
      "1 tablespoon olive oil <a href='https://amzn.to/4gVpL0c' target='_blank'>(Amazon EU/UK)</a> or <a href='https://amzn.to/47SOaPT' target='_blank'>(Amazon US/Can)</a>",
    ],
    method: [
      "Cook the salmon: Lightly steam or poach the salmon if you prefer it fully cooked before mixing. You can also use it raw as long as the patties will be cooked through.",
      "Prepare the sweet potato: Boil or roast the sweet potato until soft. Mash it and let it cool slightly.",
      "Combine ingredients: In a large bowl, mix together the minced or chopped salmon, mashed sweet potato, onion, garlic, mustard, lemon zest, dill, and parsley.",
      "Add the binder: Stir in the psyllium husk (or flaxseeds) and the egg. Mix until the mixture holds together. Season with salt and pepper.",
      "Form patties: Shape the mixture into small patties, around 2-3 cm thick. You should get about 6-8 patties, depending on the size.",
      "Rest the patties: Let the patties rest in the fridge for about 15 minutes. This helps the psyllium husk absorb moisture and firm up the mixture.",
      "Cook the patties: Heat the olive oil in a large non-stick frying pan over medium heat. Fry the patties for 3-4 minutes per side, until golden brown and cooked through.",
      "Serve: Serve the salmon patties with a fresh salad or steamed greens for a balanced, diabetes-friendly meal.",
    ],
    tips: [
      "You can make the patties ahead of time and store them in the fridge for up to 24 hours before cooking.",
      "If you're in a hurry, you can use canned salmon, just check that it is natural.",
      "Adding psyllium husk increases fibre, which can help regulate blood sugar. It also acts as a low-carb binder.",
    ],
    nutrition: {
      calories: "280 kcal",
      protein: "20g",
      carbs: "10g",
      fat: "18g",
    },
    date_added: "2024-10-16",
  },

  // Peanut Butter Delight
  peanut_butter_delight: {
    title: "Crunchy Peanut Butter & Raspberry Delight",
    category: [
      "breakfast",
      "snacks",
      "gluten_free",
      "keto_and_low_carb",
      "quick_and_easy",
    ],
    img_src:
      "/public/images/recipes/peanut_butter_delight/peanut_butter_delight.jpg",
    description:
      "A low-carb, diabetes-friendly twist on the classic PB&J sandwich, using not-cornbread and fresh raspberries. Lightly toasted in butter for an extra crispy crunch.",
    prep_time: "5 mins",
    cook_time: "5 mins",
    total_time: "10 mins",
    servings: "1",
    ingredients: [
      "2 slices of not-cornbread (<a href='/views/layouts/recipes/recipe_pages/not_cornbread.html' target='_blank'>recipe here</a>)",
      "2 tablespoons of natural peanut butter <a href='https://amzn.to/3NmnhKD' target='_blank'>(Amazon EU/UK)</a> or <a href='https://amzn.to/4eW0kd1' target='_blank'>(Amazon US/Can)</a>",
      "¼ cup of fresh raspberries, lightly smashed",
      "1 tablespoon of butter or olive oil <a href='https://amzn.to/4gVpL0c' target='_blank'>(Amazon EU/UK)</a> or <a href='https://amzn.to/47SOaPT' target='_blank'>(Amazon US/Can)</a> (for frying)",
    ],
    method: [
      "Prepare the sandwich: Spread peanut butter on one side of both slices of not-cornbread.",
      "Add the smashed raspberries on top of the peanut butter on one slice, spreading them evenly.",
      "Place the second peanut butter-covered slice on top, with the peanut butter side facing inward, to create a sandwich.",
      "Fry the sandwich: Heat the butter in a frying pan over medium heat.",
      "Add the sandwich to the pan and fry for 2-3 minutes on each side, until both sides are golden brown and crispy.",
      "Serve and enjoy: Remove from the pan, slice in half if desired, and enjoy warm for a delightful, crunchy treat.",
    ],
    tips: [
      "You can substitute the butter with olive oil for a healthier fat option.",
      "Try adding a sprinkle of cinnamon <a href='https://amzn.to/483pOD8' target='_blank'>(Amazon EU/UK</a> or <a href='https://amzn.to/4f1zyQi' target='_blank'>Amazon US/Can)</a> to the peanut butter for an extra flavour kick!",
    ],
    nutrition: {
      calories: "300 kcal",
      protein: "12g",
      carbs: "15g",
      fat: "22g",
    },
    date_added: "2024-10-17",
  },

  // Garlic Prawn Fettucini
  garlic_prawn_fettucini: {
    title: "Creamy Garlic Prawn & Rocket Bean Pasta",
    category: ["lunch", "dinner", "gluten_free", "keto_and_low_carb"],
    img_src:
      "/public/images/recipes/garlic_prawn_fettucini/garlic_prawn_fettucini.jpg",
    description:
      "A type 2 diabetes-friendly and high-fibre recipe for those who love prawns or shellfish. Creamy prawns, crispy bacon, and fresh rocket make this a delightful meal.",
    prep_time: "15 mins",
    cook_time: "20 mins",
    total_time: "35 mins",
    servings: "4",
    ingredients: [
      "300g dried bean pasta (high in fibre) <a href='https://amzn.to/3Nq6RRA' target='_blank'>(Amazon)</a>",
      "3 cloves of garlic, peeled and finely sliced",
      "300g raw peeled prawns (e.g., tiger prawns, king prawns, or wild-caught prawns)",
      "5 rashers of bacon, finely sliced",
      "50g Philadelphia cream cheese",
      "50mL white wine or chicken stock",
      "50 mL cream",
      "50g rocket, roughly chopped",
      "15g Parmesan cheese, plus extra for serving",
      "Freshly ground black pepper, to taste",
    ],
    method: [
      "Cook the pasta: Boil the bean pasta in salted water following the packet instructions until al dente. Drain and reserve some of the cooking water.",
      "Prepare the prawns: Butterfly 3 prawns by slicing down their backs. Finely chop the rest of the prawns to help them mix with the sauce.",
      "Cook the bacon: In a large pan over medium heat, fry the bacon until crispy. Remove the bacon and set aside, but keep the bacon fat in the pan.",
      "Cook the prawns: Add the prawns to the pan with the bacon fat. Sauté for 2-3 minutes until pink and cooked through. Stir in the garlic and cook for 1 minute until fragrant. Pour in the wine or stock, and simmer until it reduces.",
      "Make the sauce: Add the Philadelphia cream cheese and stir until melted and smooth. If needed, loosen the sauce with a splash of reserved pasta water or the cream for a creamier consistency.",
      "Finish the dish: Roughly chop the rocket and bacon. Add most of it to the pan, tossing everything together until well mixed. Season with black pepper and sprinkle Parmesan over the top.",
      "Serve: Plate the pasta, garnish with the remaining rocket and Parmesan, and enjoy.",
    ],
    tips: [
      "Bean pasta provides extra fibre, making it a great option for regulating blood sugar levels. <a href='https://amzn.to/3Nq6RRA' target='_blank'>(Amazon)</a>",
      "If you prefer a stronger flavour, add more garlic or extra herbs such as thyme <a href='https://amzn.to/3BPCtO0' target='_blank'>(Amazon EU/UK)</a> or <a href='https://amzn.to/4eDqCRz' target='_blank'>(Amazon US/Can)</a> and basil <a href='https://amzn.to/3AbwQZM' target='_blank'>(Amazon EU/UK)</a> or <a href='https://amzn.to/3Nold4X' target='_blank'>(Amazon US/Can)</a>.",
    ],
    nutrition: {
      calories: "320 kcal",
      protein: "25g",
      carbs: "20g",
      fibre: "10g",
      fat: "15g",
    },
    date_added: "2024-10-17",
  },

  // Sweet Potato Crisps
  sweet_potato_crisps: {
    title: "Crispy Sweet Potato Crisps",
    category: [
      "snacks",
      "side_dishes",
      "appetizers",
      "vegetarian",
      "vegan",
      "gluten_free",
    ],
    img_src:
      "/public/images/recipes/sweet_potato_crisps/sweet_potato_crisps.jpg",
    description:
      "A simple and healthy snack of crispy sweet potato crisps, perfect for a type 2 diabetes-friendly diet. Lightly seasoned and oven-baked for a crunchy treat.",
    prep_time: "15 mins",
    cook_time: "1 hour 45 mins",
    total_time: "2 hours",
    servings: "2-3",
    ingredients: [
      "2 sweet potatoes (~150 g each)",
      "30 ml olive oil <a href='https://amzn.to/4gVpL0c' target='_blank'>(Amazon EU/UK)</a> or <a href='https://amzn.to/47SOaPT' target='_blank'>(Amazon US/Can)</a>",
      "1.25 g sea salt (optional) <a href='https://amzn.to/3Nrp0hK' target='_blank'>(Amazon EU/UK)</a> or <a href='https://amzn.to/3U9016P' target='_blank'>(Amazon US/Can)</a>",
    ],
    method: [
      "Preheat oven: Preheat your oven to 120°C and position the oven rack in the centre.",
      "Slice the sweet potatoes: Rinse and dry the sweet potatoes thoroughly. Slice them into thin, uniform slices, about 3-4 mm thick. Use a mandolin for even slices if possible. Thicker slices may not crisp as much but will still taste great. <a href='/views/layouts/kitchen_tips/mandolin.html' target='_blank'>Mandolin guide</a>",
      "Prepare for baking: Toss the slices in olive oil and sprinkle with sea salt (if using). Arrange them in a single layer on a parchment-lined baking sheet.",
      "Bake the crisps: Bake for 1 hour 30 minutes to 1 hour 45 minutes, flipping halfway through for even cooking. Rotate the tray if necessary to ensure even crisping. Start checking after the first hour, and check every 10 minutes to prevent burning.",
      "Cool and serve: Once crispy and golden brown, remove from the oven. Let them rest for 10 minutes to finish crisping up. Enjoy immediately.",
    ],
    tips: [
      "For extra flavour, experiment with adding spices like paprika <a href='https://amzn.to/480hOCV' target='_blank'>(Amazon US/Can,</a> <a href='https://amzn.to/3ZVTQql' target='_blank'>Amazon EU/UK)</a> or garlic powder <a href='https://amzn.to/400SACg' target='_blank'>(Amazon EU/UK,</a> <a href='https://amzn.to/4dFMYAE' target='_blank'>Amazon US/Can)</a> before baking.",
      "Make sure the slices are evenly thick for consistent crisping.",
      "Store leftovers in an airtight container for up to 2 days, though they are best enjoyed fresh.",
    ],
    nutrition: {
      calories: "180 kcal",
      protein: "2g",
      carbs: "30g",
      fibre: "5g",
      fat: "5g",
    },
    date_added: "2024-10-18",
  },

  // Chilli Garlic Dip
  chilli_garlic_dip: {
    title: "Chilli & Garlic Sour Cream Dip",
    category: ["snacks", "side_dishes", "appetizers", "gluten_free"],
    img_src: "/public/images/recipes/chilli_garlic_dip/chilli_garlic_dip.jpg",
    description:
      "A creamy, spicy dip perfect for pairing with sweet potato crisps or other diabetic-friendly snacks. Full of flavour and free from added sugars, this dip provides a light kick with chilli and garlic.",
    prep_time: "5 mins",
    cook_time: "0 mins",
    total_time: "5 mins",
    servings: "4",
    ingredients: [
      "100 g sour cream (full-fat for better blood sugar control)",
      "1 small red chilli, finely chopped (or use chilli flakes for heat control)",
      "1 clove garlic, minced",
      "1 tbsp fresh coriander, chopped (optional)",
      "Salt and pepper to taste",
    ],
    method: [
      "Combine ingredients: In a bowl, mix together the sour cream, chopped chilli, and minced garlic.",
      "Season: Stir in the coriander (if using), and season the dip with salt and pepper to taste.",
      "Let it rest: Mix until well combined and let it sit for 10-15 minutes to allow the flavours to meld.",
      "Garnish: Garnish with extra coriander if desired, and serve alongside your crispy sweet potato crisps.",
    ],
    tips: [
      "For a zesty option, add 1 tsp of lime zest and 1 tbsp of lime juice to the dip for a fresh, tangy flavour.",
      "This dip pairs perfectly with <a href='/views/layouts/recipes/recipe_pages/sweet_potato_crisps.html'>Crispy Sweet Potato Crisps</a>.",
    ],
    nutrition: {
      calories: "120 kcal",
      protein: "2g",
      carbs: "3g",
      fibre: "0g",
      fat: "12g",
    },
    date_added: "2024-10-18",
  },

  // Lamb Curry Recipe
  lamb_curry: {
    title: "Lamb Curry with Fresh Herbs and Spices",
    category: ["lunch", "dinner", "gluten_free"],
    img_src: "/public/images/recipes/lamb_curry/lamb_curry.jpg",
    description:
      "A hearty lamb curry made with fresh spices, perfect for a warming lunch or dinner. Low-salt and full of flavour, this recipe is suitable for those looking to balance flavour with a healthy meal option.",
    prep_time: "10 mins",
    cook_time: "2.5 hours",
    total_time: "2 hours 40 mins",
    servings: "4",
    ingredients: [
      "2 tsp olive or sunflower oil <a href='https://amzn.to/4gVpL0c' target='_blank'>(Amazon EU/UK)</a> or <a href='https://amzn.to/47SOaPT' target='_blank'>(Amazon US/Can)</a>",
      "400 g diced lean lamb",
      "3 onions, chopped",
      "4 carrots, chopped",
      "2 x 400 g tins chopped tomatoes",
      "1 tbsp tomato purée",
      "2-3 tsp curry powder <a href='https://amzn.to/3A7liqE' target='_blank'>(Amazon EU/UK)</a> or <a href='https://amzn.to/3AcAtPk' target='_blank'>(Amazon US/Can)</a>",
      "1-3 Scotch bonnet chillies, finely chopped (depending on heat preference)",
      "6 cm fresh ginger, grated",
      "1/4 tsp ground cinnamon <a href='https://amzn.to/483pOD8' target='_blank'>(Amazon EU/UK)</a> or <a href='https://amzn.to/4f1zyQi' target='_blank'>(Amazon US/Can)</a>",
      "1/4 tsp ground nutmeg <a href='https://amzn.to/40gIxt8' target='_blank'>(Amazon EU/UK)</a> or <a href='https://amzn.to/4eZKK0n' target='_blank'>(Amazon US/Can)</a>",
      "1/4 tsp ground cloves <a href='https://amzn.to/3NI9qON' target='_blank'>(Amazon EU/UK)</a> or <a href='https://amzn.to/4hjQdk7' target='_blank'>(Amazon US/Can)</a>",
      "1 tbsp chopped parsley",
      "1 low-salt vegetable stock cube <a href='https://amzn.to/4dVB5Xl' target='_blank'>(Amazon US/Can)</a> or chicken stock cube <a href='https://amzn.to/3Uipn25' target='_blank'>(Amazon US/Can)</a>",
      "1 litre water",
      "1 tbsp chopped coriander",
      "Microwaved poppadums (<a href='https://amzn.to/3Y0tn8p' target='_blank'>Shop here</a>) (optional)",
    ],
    method: [
      "Heat the oil in a pan and add the lamb and onions. Cook for 5 minutes, stirring regularly, until starting to brown.",
      "Add all the other ingredients, except the coriander, stir and bring to the boil. Put the lid on, reduce the heat, and simmer gently for 2–2.5 hours, stirring regularly, until the lamb is tender. Add a little more water if needed.",
      "Serve with a sprinkle of coriander.",
    ],
    tips: [
      "For a lower-fat version, use chicken thighs – they will cook more quickly, so reduce the cooking time by an hour.",
      "Be careful with the Scotch bonnet chillies as they can be very hot!",
      "Freezing instructions: Suitable for freezing once cooked. Defrost in the fridge or microwave and reheat until piping hot throughout.",
      "Microwave the poppadums for about 45-60 seconds each until crunchy.",
      "Serve: Garnish with boiled sweet potatoes and serve with microwaved poppadums and a side of lentils.",
    ],
    nutrition: {
      calories: "350 kcal",
      protein: "30g",
      carbs: "18g",
      fibre: "8g",
      fat: "15g",
    },
    date_added: "2024-10-23",
  },

  // Arroz Con Pollo Recipe
  arroz_con_pollo: {
    title: "Arroz Con Pollo with Smoked Paprika and Thickened Sauce",
    category: ["dinner", "gluten_free", "quick_and_easy", "keto_and_low_carb"],
    img_src: "/public/images/recipes/arroz_con_pollo/arroz_con_pollo.jpg",
    description:
      "A vibrant and flavourful Arroz Con Pollo, enhanced with smoked paprika and a lightly thickened sauce. This quick, low-salt meal is a perfect choice for a healthy, hearty dinner.",
    prep_time: "10 mins",
    cook_time: "25 mins",
    total_time: "35 mins",
    servings: "4",
    ingredients: [
      "1 onion, diced",
      "1 red pepper, diced",
      "240 g chicken breast, cooked and cubed",
      "120 g cauliflower, grated",
      "150 g peas, thawed",
      "2 tbsp cilantro, diced",
      "½ tsp lemon zest",
      "425 ml low-sodium chicken broth <a href='https://amzn.to/3BZg4hf' target='_blank'>(Amazon EU/UK)</a> or <a href='https://amzn.to/4eVhHLt' target='_blank'>(Amazon US/Can)</a>",
      "60 ml black olives, sliced <a href='https://amzn.to/4eWRufD' target='_blank'>(Amazon)</a>",
      "60 ml sherry (or substitute with low-sodium chicken broth or apple cider vinegar <a href='https://amzn.to/3NsCGJA' target='_blank'>(Amazon EU/UK)</a> or <a href='https://amzn.to/48688qe' target='_blank'>(Amazon US/Can)</a> mixed with water)",
      "1 clove garlic, diced",
      "2 tsp olive oil",
      "¼ tsp salt",
      "¼ tsp cayenne pepper <a href='https://amzn.to/4054wmv' target='_blank'>(Amazon EU/UK)</a> or <a href='https://amzn.to/4eY6qto' target='_blank'>(Amazon US/Can)</a>",
      "¼ tsp smoked paprika <a href='https://amzn.to/3ZVTQql' target='_blank'>(Amazon EU/UK)</a> or <a href='https://amzn.to/480hOCV' target='_blank'>(Amazon US/Can)</a>",
      "Psyllium husk for thickening (optional) <a href='https://amzn.to/3XYOXtX' target='_blank'>(Amazon EU/UK)</a> or <a href='https://amzn.to/3ND1heR' target='_blank'>(Amazon US/Can)</a>",
    ],
    method: [
      "Heat oil in a large skillet over medium-high heat. Add pepper, onion, and garlic, and cook for 1 minute.",
      "Add the cauliflower and cook, stirring frequently, until light brown, about 4-5 minutes.",
      "Stir in broth, sherry (or your substitute), lemon zest, smoked paprika, and seasonings. Bring to a boil.",
      "Reduce heat, cover, and simmer for 15 minutes. If desired, sprinkle psyllium husk into the sauce to thicken, stirring well.",
      "Stir in the chicken, peas, and olives. Cover and simmer for another 3-6 minutes or until heated through.",
      "Serve garnished with cilantro.",
    ],
    tips: [
      "Add a bit more smoked paprika if you prefer a stronger smoky flavour.",
      "For a thicker sauce, psyllium husk is a great low-carb option to lightly thicken the dish.",
      "Serve with a side of steamed vegetables or a green salad for a balanced meal.",
    ],
    nutrition: {
      calories: "161 kcal",
      protein: "14g",
      carbs: "13g",
      fibre: "4g",
      fat: "5g",
      sugar: "5g",
    },
    date_added: "2024-10-26",
  },

  // Pork Loin with Apple Cider Gravy Recipe
  pork_apple_cider_gravy: {
    title: "Pork Loin with Apple Cider Gravy",
    category: ["dinner", "gluten_free"],
    img_src:
      "/public/images/recipes/pork_apple_cider_gravy/pork_apple_cider_gravy.jpg",
    description:
      "A hearty Pork Loin with Apple Cider Gravy, thickened with psyllium husk and complemented by the natural sweetness of apples. Perfect for a balanced and flavourful dinner.",
    prep_time: "15 mins",
    cook_time: "1 hr 20 mins",
    total_time: "1 hr 35 mins",
    servings: "4",
    ingredients: [
      "1 kg pork loin roast",
      "1 tbsp mustard powder (or adjust to taste)",
      "Sea salt <a href='https://amzn.to/3Nrp0hK' target='_blank'>(Amazon EU/UK)</a> or <a href='https://amzn.to/3U9016P' target='_blank'>(Amazon US/Can)</a> and freshly ground black pepper to taste",
      "2 tbsp olive oil",
      "3 apples, peeled, cored, and sliced",
      "1 onion, diced",
      "300 ml apple cider (choose a low-sugar or no-added-sugar version, if possible)",
      "1-2 tsp psyllium husk for thickening <a href='https://amzn.to/3zYWqBb' target='_blank'>(Amazon EU)</a> or <a href='https://amzn.to/3NcDeDh' target='_blank'>(Amazon US/Can)</a>",
    ],
    method: [
      "Preheat the oven to 190°C.",
      "Rub the pork with mustard powder, sea salt, and pepper.",
      "Heat the olive oil in a roasting pan over medium heat. Sear the pork on all sides until browned.",
      "Place the apples and onion around the pork. Pour in the apple cider.",
      "Roast in the oven for about 1 hour 20 minutes, or until the pork is cooked through and tender.",
      "Transfer the roasting pan to the stove. Remove the pork and let it rest.",
      "Stir in the psyllium husk gradually to thicken the gravy. Adjust based on the consistency preferred. Let it cook for 2-3 minutes until thickened.",
      "Slice the pork and serve with the apple cider gravy.",
    ],
    tips: [
      "Choose a low-sugar apple cider to minimise additional sugar.",
      "For a balanced meal, serve with a side of steamed non-starchy vegetables like broccoli or asparagus.",
      "Psyllium husk is a great low-carb option for thickening, suitable for those watching their blood sugar.",
    ],
    nutrition: {
      calories: "530 kcal",
      carbs: "13g",
      fibre: "2g",
      sugar: "10g",
      protein: "54g",
      fat: "29g",
      sodium: "580mg",
    },
    date_added: "2024-10-26",
  },

  // Sweet Almond Custard Tarts Recipe
  sweet_almond_custard_tarts: {
    title: "Sweet Almond Custard Tarts",
    category: ["dessert", "gluten_free", "keto_and_low_carb"],
    img_src: "/public/images/recipes/custard_tart/custard_tart.jpg",
    description:
      "Delicious, low-carb Sweet Almond Custard Tarts with a hint of cinnamon and orange zest. Perfect for a lightly sweetened, diabetes-friendly dessert.",
    prep_time: "15 mins",
    cook_time: "20 mins",
    total_time: "35 mins",
    servings: "6-9",
    ingredients: [
      "2 cups almond flour <a href='https://amzn.to/3U7dqfp' target='_blank'>(Amazon EU/UK)</a>, <a href='https://amzn.to/3U6eekP' target='_blank'>(Amazon US/Can)</a>",
      "1/4 cup coconut flour <a href='https://amzn.to/3zXdLL0' target='_blank'>(Amazon EU/UK)</a> or <a href='https://amzn.to/3UaxFZX' target='_blank'>(Amazon US/Can)</a>",
      "1 tablespoon psyllium husk <a href='https://amzn.to/3zYWqBb' target='_blank'>(Amazon EU)</a> or <a href='https://amzn.to/3NcDeDh' target='_blank'>(Amazon US/Can)</a>",
      "1/2 teaspoon xanthan gum <a href='https://amzn.to/4eDPoBd' target='_blank'>(Amazon EU/UK)</a> or <a href='https://amzn.to/3ZWOZFo' target='_blank'>(Amazon US/Can)</a>",
      "1/2 teaspoon salt",
      "2–3 tablespoons powdered inulin <a href='https://amzn.to/3UqTLap' target='_blank'>(Amazon EU/UK)</a>, <a href='https://amzn.to/3YJnJt6' target='_blank'>(Amazon US/Can)</a>",
      "1/2 cup (100g) cold butter, cubed (or ghee for a paleo version)",
      "1 large egg (for binding)",
      "1 tablespoon cold water (if the dough is too dry)",
      "Cinnamon <a href='https://amzn.to/483pOD8' target='_blank'>(Amazon EU/UK)</a> or <a href='https://amzn.to/4f1zyQi' target='_blank'>Amazon US/Can)</a>",
      "Custard Filling:",
      "1 large egg",
      "1 tablespoon inulin",
      "1 teaspoon vanilla paste <a href='https://amzn.to/48lCV2B' target='_blank'>(EU/UK)</a> or <a href='https://amzn.to/3YBOsrf' target='_blank'>(US/Can)</a> or 1/2 teaspoon vanilla essence",
      "120g crème fraiche",
      "Zest of half an orange",
    ],
    method: [
      "Prepare the Sweet Almond Pastry: In a large mixing bowl, combine the almond flour, coconut flour, psyllium husk, xanthan gum, salt, and powdered inulin.",
      "Add the cold butter cubes and rub them into the dry mixture with your fingers or a pastry cutter until it resembles coarse crumbs with small butter pieces visible.",
      "In a small bowl, beat the egg, then add it to the flour mixture. Mix until the dough starts to come together. If the dough seems too dry, add up to 1 tablespoon of cold water gradually.",
      "Shape the dough into a ball, wrap it in plastic wrap, and chill for 30 minutes to 1 hour.",
      "Form the Pastry Shells: Preheat your oven to 200°C (390°F). Roll out the chilled pastry dough between two sheets of parchment paper to about 1/4 inch thick.",
      "Lightly sprinkle cinnamon over the flattened dough, then cut it into six - nine equal pieces and roll into a ball.",
      "Place each ball in a muffin tin cup. Press down on each piece, flattening it from the top, and gently shape it to pull up the sides of the muffin tin to form a shell.",
      "Blind Bake the Pastry Shells: Bake the pastry shells for about 6-8 minutes or until they are 3/4 done and lightly golden. Remove from the oven and let them cool slightly. If needed, gently reshape the shells by pressing them back up the sides.",
      "Prepare the Custard Filling: In a mixing bowl, whisk together the egg, inulin, vanilla paste or essence, crème fraiche, and orange zest until smooth and well-combined.",
      "Fill and Bake the Tarts: Pour the custard mixture into the partially baked pastry shells, filling each about halfway. Return the muffin tin to the oven and bake for an additional 6-8 minutes, or until the custard is just set and slightly jiggles in the centre.",
      "Cool and Serve: Allow the tarts to cool in the muffin tin for a few minutes before carefully removing them. Enjoy warm or chilled.",
    ],
    tips: [
      "Sweetness Adjustment: Inulin adds a gentle sweetness. You can adjust it to your taste or add a pinch of erythritol or stevia if you prefer a slightly sweeter custard.",
      "Storage: These tarts can be stored in the fridge for up to 3 days in an airtight container.",
    ],
    nutrition: {
      calories: "190 kcal",
      carbs: "5g",
      fibre: "3g",
      sugar: "1g",
      protein: "4g",
      fat: "16g",
      sodium: "100mg",
    },
    date_added: "2024-10-28",
  },

  // Pork sausages and brussels sprouts
  pork_sausages_brussels_sprouts: {
    title: "Sausage & Roasted Brussels Sprouts with Garlic Mustard Glaze",
    category: ["dinner", "keto_and_low_carb", "lunch"],
    img_src:
      "/public/images/recipes/pork_sausages_brussels_sprouts/pork_sausages_brussels_sprouts.jpg",
    description:
      "A fibre-rich dish with pork sausages and caramelised Brussels sprouts, balanced with a garlic mustard glaze. Perfect for a healthy, diabetes-friendly meal.",
    prep_time: "10 mins",
    cook_time: "25 mins",
    total_time: "35 mins",
    servings: "2-3",
    ingredients: [
      "4 pork sausages, low sodium",
      "250g Brussels sprouts, halved",
      "1 small white onion, sliced",
      "1 red bell pepper, sliced",
      "1 handful fresh green beans, topped and tailed",
      "2 cloves garlic, minced",
      "1 tbsp olive oil <a href='https://amzn.to/4gVpL0c' target='_blank'>(Amazon EU/UK)</a> or <a href='https://amzn.to/47SOaPT' target='_blank'>(Amazon US/Can)</a>",
      "1 tbsp Dijon mustard <a href='https://amzn.to/3YbBu27' target='_blank'>(Amazon EU/UK)</a> or <a href='https://amzn.to/3zYbSxC' target='_blank'>(Amazon US/Can)</a>",
      "1 tsp apple cider vinegar <a href='https://amzn.to/3NsCGJA' target='_blank'>(Amazon EU/UK)</a> or <a href='https://amzn.to/48688qe' target='_blank'>(Amazon US/Can)</a>",
      "1 tsp fresh thyme leaves (or 1/2 tsp dried thyme) <a href='https://amzn.to/4eDqCRz' target='_blank'>(Amazon EU/UK)</a> or <a href='https://amzn.to/3BPCtO0' target='_blank'>(Amazon US/Can)</a>",
      "Salt and pepper to taste",
      "Optional: a small pinch of erythritol <a href='https://amzn.to/3NHtIbz' target='_blank'>Amazon EU/UK</a>, <a href='https://amzn.to/3Nl85NJ' target='_blank'>Amazon US/Can</a>",
    ],
    method: [
      "Preheat the Oven: Preheat your oven to 200°C.",
      "Prepare the Vegetables: In a bowl, toss the Brussels sprouts, green beans, onion, and bell pepper with olive oil, garlic, thyme, salt, and pepper. Spread them evenly on a roasting tray.",
      "Position the Sausages: Place a rack over the tray, positioning the sausages on top. Fork a few holes in each sausage to allow fat to drip onto the vegetables below.",
      "Bake the Vegetables and Sausages: Roast the vegetables for 20 minutes, removing them 5 minutes early. Let the sausages continue to cook for a full 25 minutes or until browned.",
      "Make the Glaze: In a small bowl, mix the Dijon mustard, apple cider vinegar, and erythritol (if using).",
      "Glaze the Vegetables: While the sausages finish cooking, drizzle the glaze over the roasted vegetables and toss to coat.",
      "Combine and Serve: Once the sausages are done, slice them and mix with the glazed vegetables. Serve warm.",
    ],
    tips: [
      "Customise the Glaze: If the mustard is too sharp, try adding a dollop of sour cream for creaminess.",
      "Seasoning Adjustments: Add a dash of smoked paprika or chilli flakes to enhance the flavour profile.",
    ],
    nutrition: {
      calories: "220 kcal",
      carbs: "6g",
      fibre: "4g",
      sugar: "2g",
      protein: "8g",
      fat: "18g",
      sodium: "150mg",
    },
    date_added: "2024-10-28",
  },

  // Herb-Crusted Entrecôte with Celeriac Chips
  herb_crusted_entrecote: {
    title:
      "Herb-Crusted Entrecôte with Celeriac Chips, Roasted Asparagus, and Brussels Sprouts",
    category: ["dinner", "keto_and_low_carb", "lunch"],
    img_src: "/public/images/recipes/steak_and_chips/steak_and_chips.jpg",
    description:
      "A balanced, diabetes-friendly meal with herb-crusted entrecôte, crispy celeriac chips, and roasted vegetables, paired with a creamy lime and herb sauce.",
    prep_time: "15 mins",
    cook_time: "25 mins",
    total_time: "40 mins",
    servings: "2",
    ingredients: [
      "Entrecôte steak (room temperature)",
      "Salt <a href='https://amzn.to/3Nrp0hK' target='_blank'>(Amazon EU/UK)</a> or <a href='https://amzn.to/3U9016P' target='_blank'>(Amazon US/Can)</a> and freshly ground black pepper",
      "1-2 cloves garlic, minced",
      "Fresh rosemary <a href='https://amzn.to/3YnjqDm' target='_blank'>(Amazon EU/UK)</a> or <a href='https://amzn.to/3BFrC9l' target='_blank'>(Amazon US/Can)</a>",
      "1 medium celeriac, peeled and cut into 1 cm batons",
      "1 tbsp olive oil <a href='https://amzn.to/4gVpL0c' target='_blank'>(Amazon EU/UK)</a> or <a href='https://amzn.to/47SOaPT' target='_blank'>(Amazon US/Can)</a>",
      "Smoked paprika <a href='https://amzn.to/480hOCV' target='_blank'>(Amazon US/Can)</a> or <a href='https://amzn.to/3ZVTQql' target='_blank'>(Amazon EU/UK)</a> (optional for flavour)",
      "Asparagus, trimmed",
      "Brussels sprouts, halved",
      "Balsamic vinegar <a href='https://amzn.to/3zWcBiN' target='_blank'>(Amazon EU/UK)</a> or <a href='https://amzn.to/3U8Ol3I' target='_blank'>(Amazon US/Can)</a> (optional)",
      "3 tbsp crème fraîche",
      "Zest and juice from a small lime (or substitute with lemon if needed)",
      "Cayenne pepper <a href='https://amzn.to/4eY6qto' target='_blank'>(Amazon US/Can)</a> or <a href='https://amzn.to/4054wmv' target='_blank'>(Amazon EU/UK)</a> (optional)",
      "Dried herbs: thyme, Parsley Dried <a href='https://amzn.to/3YsRzkb' target='_blank'>(Amazon EU/UK)</a> or <a href='https://amzn.to/4f8fOv8' target='_blank'>(Amazon US/Can)</a>, or Chives <a href='https://amzn.to/3CafjCc' target='_blank'>(Amazon EU/UK)</a> or <a href='https://amzn.to/3NMCOUo' target='_blank'>(Amazon US/Can)</a>",
    ],
    method: [
      "Preheat the Oven: Set your oven to 200°C. Line a baking tray with baking paper.",
      "Prepare Celeriac Chips: Toss the celeriac batons in olive oil and smoked paprika (optional), then spread on the prepared tray. Bake for 15 minutes, flip, and bake another 10 minutes until blistered. Sprinkle with salt when done.",
      "Roast Vegetables: In another tray, toss Brussels sprouts with olive oil, salt, and pepper. Roast for 10 minutes, then add asparagus, toss with a bit of oil, and roast both for an additional 10-12 minutes. Add balsamic vinegar or lemon zest for extra flavour, if desired.",
      "Prepare Entrecôte: Rub the steak with a bit of olive oil, then season with salt, pepper, minced garlic, and rosemary. Heat a heavy pan until very hot and place the steak in the pan.",
      "Cook Steak: For medium-rare (57-60°C), sear each side for 2-3 minutes. For medium (63-68°C), sear for 4 minutes per side. Let rest for 5-10 minutes.",
      "Make Sauce: In a small bowl, combine crème fraîche, lime zest, lime juice, and a pinch of cayenne pepper. Season with salt, pepper, and add dried herbs if desired.",
      "Serve: Arrange the steak, celeriac chips, roasted asparagus, and Brussels sprouts on a plate. Drizzle sauce over vegetables or serve on the side.",
    ],
    tips: [
      "For Perfect Chips: Ensure celeriac pieces are evenly sized for even cooking. Adjust seasoning as needed.",
      "Resting the Steak: Allowing the steak to rest keeps it juicy. Cover loosely with foil while resting.",
      "Sauce Variations: Try adding a bit of smoked paprika to the sauce for a warm, smoky flavour.",
    ],
    nutrition: {
      calories: "350 kcal (approx.)",
      carbs: "10g",
      fibre: "4g",
      sugar: "2g",
      protein: "20g",
      fat: "25g",
      sodium: "100mg",
    },
    date_added: "2024-10-30",
  },

  // Chicken Drumsticks with Celeriac Mash
  chicken_drums: {
    title: "Chicken Drumsticks with Celeriac Mash",
    category: ["dinner", "keto_and_low_carb", "gluten_free"],
    img_src: "/public/images/recipes/chicken_drums/chicken_drums.jpg",
    description:
      "Enjoy this flavourful and diabetes-friendly chicken drumsticks meal, served with creamy celeriac mash. A hearty and satisfying low-carb option.",
    prep_time: "10 mins",
    cook_time: "45 mins",
    total_time: "55 mins",
    servings: "4",
    ingredients: [
      "<strong>Celeriac Mash:</strong>",
      "1 large celeriac (celery root), peeled and chopped into chunks",
      "1 clove garlic, peeled",
      "4 tbsp Greek yogurt",
      "Pinch of grated nutmeg <a href='https://amzn.to/40gIxt8' target='_blank'>(Amazon EU/UK)</a> or <a href='https://amzn.to/4eZKK0n' target='_blank'>(Amazon US/Can)</a>",
      "25g butter or ghee",
      "Freshly ground black pepper",
      "<strong>Chicken Drumsticks:</strong>",
      "8 chicken drumsticks, skin on",
      "2 tbsp avocado oil <a href='https://amzn.to/4f5o5Qr' target='_blank'>(Amazon EU/UK)</a> or <a href='https://amzn.to/48vlnBc' target='_blank'>(Amazon US/Can)</a>",
      "1 tsp garlic powder <a href='https://amzn.to/400SACg' target='_blank'>(Amazon EU/UK)</a> or <a href='https://amzn.to/4dFMYAE' target='_blank'>(Amazon US/Can)</a>",
      "1 tsp smoked paprika <a href='https://amzn.to/3ZVTQql' target='_blank'>(Amazon EU/UK)</a> or <a href='https://amzn.to/480hOCV' target='_blank'>(Amazon US/Can)</a>",
      "1 tsp dried parsley <a href='https://amzn.to/3YsRzkb' target='_blank'>(Amazon EU/UK)</a> or <a href='https://amzn.to/4f8fOv8' target='_blank'>(Amazon US/Can)</a>",
      "1 tsp onion powder <a href='https://amzn.to/48d3S8I' target='_blank'>(Amazon EU/UK)</a> or <a href='https://amzn.to/484xQLS' target='_blank'>(Amazon US/Can)</a>",
      "¼ tsp cayenne pepper <a href='https://amzn.to/4054wmv' target='_blank'>(Amazon EU/UK)</a> or <a href='https://amzn.to/4eY6qto' target='_blank'>(Amazon US/Can)</a>",
      "½ tsp salt <a href='https://amzn.to/3Nrp0hK' target='_blank'>(Amazon EU/UK)</a> or <a href='https://amzn.to/3U9016P' target='_blank'>(Amazon US/Can)</a>",
      "½ tsp black pepper",
    ],
    method: [
      "<strong>Celeriac Mash:</strong>",
      "Place the celeriac and garlic into a pan of lightly salted boiling water. Cook for 12-15 minutes until tender, then drain.",
      "Mash the celeriac and garlic together with the yogurt, nutmeg, and butter or ghee. Season with black pepper to taste.",
      "<strong>Chicken Drumsticks:</strong>",
      "Preheat your oven to 220°C (425°F). Spray a baking sheet with olive oil.",
      "Add the chicken drumsticks to a large ziplock bag. Pour the oil over the top, then add all the seasonings (garlic powder, smoked paprika, dried parsley, onion powder, cayenne pepper, salt, and pepper). Seal the bag and mix well to coat the chicken.",
      "Arrange the drumsticks in a single layer on the baking sheet. Bake uncovered until the internal temperature reaches 165°F (74°C), about 40-45 minutes.",
    ],
    tips: [
      "Using Whole Nutmeg: For the best flavour, grate whole nutmeg fresh. You can find whole nutmeg <a href='https://amzn.to/40gIxt8' target='_blank'>(Amazon EU/UK)</a> or <a href='https://amzn.to/4eZKK0n' target='_blank'>(Amazon US/Can)</a>.",
      "Substitute Options: You can use ghee or butter for the celeriac mash depending on your preference.",
      "Spice Level Adjustment: Adjust the cayenne pepper to your taste or omit it for a milder version.",
      "Crispier Drumsticks: For extra crispy skin, bake the drumsticks on a wire rack placed over the baking sheet.",
      "Storage Tip: Leftovers can be stored in the fridge for up to 3 days. Reheat gently to avoid drying out the mash and chicken.",
    ],
    nutrition: {
      calories: "320 kcal",
      protein: "25g",
      fat: "20g",
      carbs: "5g",
    },
    date_added: "2024-10-31",
  },

  // Chanterelle Mushroom Soup
  chanterelle_soup: {
    title: "Chanterelle Mushroom Soup",
    category: ["dinner", "soups", "gluten_free", "keto_and_low_carb"],
    img_src: "/public/images/recipes/chanterelle_soup/chanterelle_soup.jpg",
    description:
      "A creamy, flavourful Chanterelle Mushroom Soup with a rich velouté base, enhanced with saffron and brandy, and finished with an egg-cream liaison.",
    prep_time: "30 mins",
    cook_time: "45 mins",
    total_time: "1 hr 15 mins",
    servings: "4",
    ingredients: [
      "<strong>Velouté Base:</strong>",
      "6 cups chicken stock <a href='https://amzn.to/3YrMQz2' target='_blank'>(Amazon EU/UK)</a> or <a href='https://amzn.to/3NPtOxy' target='_blank'>(Amazon US/Can)</a> or vegetable stock cube <a href='https://amzn.to/3NO05Fg' target='_blank'>(Amazon EU/UK)</a> or <a href='https://amzn.to/4dVB5Xl' target='_blank'>(Amazon US/Can)</a>, hot",
      "2 tbsp butter or avocado oil <a href='https://amzn.to/4f5o5Qr' target='_blank'>(Amazon EU/UK)</a> or <a href='https://amzn.to/48vlnBc' target='_blank'>(Amazon US/Can)</a>",
      "2 tbsp almond flour <a href='https://amzn.to/3U7dqfp' target='_blank'>(Amazon EU/UK)</a> or <a href='https://amzn.to/3U6eekP' target='_blank'>(Amazon US/Can)</a>",
      "1 ½ tsp psyllium husk <a href='https://amzn.to/3zYWqBb' target='_blank'>(Amazon EU/UK)</a> or <a href='https://amzn.to/3NcDeDh' target='_blank'>(Amazon US/Can)</a>",
      "<strong>Mushroom Base:</strong>",
      "2 tbsp butter or 1 tbsp avocado oil <a href='https://amzn.to/4f5o5Qr' target='_blank'>(Amazon EU/UK)</a> or <a href='https://amzn.to/48vlnBc' target='_blank'>(Amazon US/Can)</a>",
      "2 shallots, minced",
      "400-500g autumn chanterelle mushrooms, cleaned and sliced",
      "Pinch of salt <a href='https://amzn.to/3Nrp0hK' target='_blank'>(Amazon EU/UK)</a> or <a href='https://amzn.to/3U9016P' target='_blank'>(Amazon US/Can)</a>",
      "A pinch of saffron threads <a href='https://amzn.to/3YIWmPM' target='_blank'>(Amazon EU/UK)</a> or <a href='https://amzn.to/3C8Zmft' target='_blank'>(Amazon US/Can)</a>",
      "30ml brandy (optional)",
      "<strong>Egg-Cream Liaison:</strong>",
      "2 egg yolks",
      "120ml heavy cream",
    ],
    method: [
      "<strong>Prepare the Velouté Base:</strong>",
      "In a pot, heat the stock and keep it warm over low heat.",
      "In a separate pot, melt the butter over medium heat. Stir in the almond flour and psyllium husk to form a roux. Cook for a few minutes, but avoid browning. Gradually whisk in the hot stock, stirring constantly. Let it simmer for 20 minutes until it thickens and becomes silky.",
      "<strong>Prepare the Mushroom Base:</strong>",
      "In a pan, melt butter or heat avocado oil over medium heat. Add the minced shallots and cook until translucent (about 3-4 minutes).",
      "Add the sliced chanterelle mushrooms to the pan with a pinch of salt. Cook until the mushrooms release their moisture and become tender (5-6 minutes).",
      "<strong>Add Saffron and Brandy:</strong>",
      "Crumble saffron into the brandy, if using. Increase heat to high and pour the brandy mixture over the mushrooms, stirring until it evaporates (1-2 minutes). Transfer the mushroom mixture to a blender and blend until smooth for a rich purée. (Optional: Strain for a refined texture.)",
      "<strong>Combine the Velouté and Mushroom Purée:</strong>",
      "Once the velouté base is ready, add the mushroom purée. Stir to combine and simmer gently for 10 minutes.",
      "<strong>Prepare the Egg-Cream Liaison:</strong>",
      "In a bowl, whisk the egg yolks and cream until smooth. Slowly add a ladleful of the hot soup to the egg-cream mixture, whisking constantly to temper. Pour back into the soup, stirring continuously over low heat to avoid boiling.",
      "<strong>Finish and Serve:</strong>",
      "Turn off the heat and whisk in any remaining butter until creamy. Optionally garnish with seared mushroom slices. Serve with crusty bread or celeriac mash.",
    ],
    tips: [
      "Autumn vs. Golden Chanterelles: Autumn chanterelles have an earthier flavour compared to the golden variety, adding a unique depth to the soup.",
      "Alternative Mushrooms: If you can’t find autumn chanterelles, other mushrooms like porcini, morels, or cremini can be used. Each will bring a different taste to the soup.",
      "Straining the Purée: For a smoother texture, strain the mushroom purée through a fine-mesh sieve before adding it to the velouté base.",
    ],
    nutrition: {
      calories: "350 kcal",
      protein: "8g",
      fat: "30g",
      carbs: "5g",
    },
    date_added: "2024-10-31",
  },

  // hazelnut_choc_cookies
  hazelnut_choc_cookies: {
    title: "Hazelnut Chocolate Cookies",
    category: ["snacks", "dessert", "gluten_free", "keto_and_low_carb"],
    img_src:
      "/public/images/recipes/hazelnut_choc_cookies/hazelnut_choc_cookies.jpg",
    description:
      "Deliciously nutty and keto-friendly thumbprint cookies with a rich dark chocolate centre, perfect for a low-carb treat.",
    prep_time: "10 mins",
    cook_time: "10 mins",
    total_time: "20 mins",
    servings: "12 cookies",
    ingredients: [
      "1 cup hazelnut flour (≈85g), spooned and levelled (or use almond flour if you can not get hazelnut flour <a href='https://amzn.to/3U7dqfp' target='_blank'>(Amazon EU/UK)</a> or <a href='https://amzn.to/3U6eekP' target='_blank'>(Amazon US/Can)</a>) ",
      "¼ cup monk fruit sweetener <a href='https://amzn.to/3Yia381' target='_blank'>(Amazon EU/UK)</a> or <a href='https://amzn.to/3Yia381' target='_blank'>(Amazon US/Can)</a> (or substitute with 1/4 cup inulin <a href='https://amzn.to/3UqTLap' target='_blank'>(Amazon EU/UK)</a> or <a href='https://amzn.to/3YJnJt6' target='_blank'>(Amazon US/Can)</a>)",
      "½ tsp baking soda <a href='https://amzn.to/3YMLikA' target='_blank'>(Amazon EU/UK)</a> or <a href='https://amzn.to/4f6wIdl' target='_blank'>(Amazon US/Can)</a>",
      "¼ tsp salt",
      "⅓ cup almond butter (unsalted, unsweetened) <a href='https://amzn.to/3C843Gl' target='_blank'>(Amazon EU/UK)</a> or <a href='https://amzn.to/4ea319V' target='_blank'>(Amazon US/Can)</a> or unsalted butter",
      "1 large egg",
      "1 tsp vanilla extract <a href='https://amzn.to/3C84dxr' target='_blank'>(Amazon EU/UK)</a> or <a href='https://amzn.to/48t1YAV' target='_blank'>(Amazon US/Can)</a>",
      "¼ cup dark chocolate chips <a href='https://amzn.to/3YNowJi' target='_blank'>(Amazon EU/UK)</a> or <a href='https://amzn.to/4hq3w2x' target='_blank'>(Amazon US/Can)</a>",
      "hazelnuts <a href='https://amzn.to/4f60kaF' target='_blank'>(Amazon EU/UK)</a> or <a href='https://amzn.to/4hq3w2x' target='_blank'>(Amazon US/Can)</a> for decoration",
    ],
    method: [
      "Preheat the Oven: Set your oven to 180°C (350°F).",
      "Prepare Dry Ingredients: In a medium-sized mixing bowl, combine the hazelnut flour, sweetener (either monk fruit or inulin), baking soda, and salt.",
      "Add Wet Ingredients: Add the almond butter, egg, and vanilla extract to the bowl. Mix with a spatula until well combined.",
      "Shape the Cookies with a Hollow Centre: When scooping the dough onto the parchment paper <a href='https://amzn.to/3ZRoO2D' target='_blank'>(Amazon EU/UK)</a> or <a href='https://amzn.to/4h3rfWi' target='_blank'>(Amazon US/Can)</a>, use your thumb or the back of a teaspoon to press a small indent in the centre of each cookie. This will create a hollow for the chocolate filling.",
      "Bake: Place the cookies in the oven and bake at 180°C (350°F) for 10 minutes. They should hold their shape well, but if the indent looks too shallow after baking, you can gently press it down again while the cookies are still warm and soft.",
      "Add the Chocolate Filling: Once the cookies have cooled slightly, melt some dark chocolate (about 50g should be enough) in a microwave or using a double boiler. Spoon a small amount of the melted chocolate into each cookie's hollow. Place a whole hazelnut in the centre of the melted chocolate.",
      "Cool and Enjoy: Let the cookies cool on the pan for a couple of minutes, then transfer them to a wire cooling rack to set fully.",
    ],
    tips: [
      "For a completely sugar-free chocolate filling, try this <a href='/views/layouts/recipes/recipe_pages/cocoa_peanut_butter_chocolate.html' target='_blank'>homemade chocolate recipe</a> and omit the peanut butter for a pure chocolate taste.",
      "Room Temperature: Store the cookies in an airtight container to keep them fresh. Adding a piece of parchment paper between layers can help prevent them from sticking to each other.",
      "Refrigeration: To extend freshness, refrigerate the cookies in an airtight container. This will help maintain their texture for a bit longer.",
      "Freezing: Place cookies in a single layer on a baking sheet to freeze initially, then transfer to a freezer-safe bag or container. Thaw at room temperature before serving.",
      "Nut flour: Almost any nut flour will work in this recipe, but if you can find hazelnut flour it makes these cookies something special.",
    ],
    nutrition: {
      calories: "120 kcal",
      carbs: "4g",
      fibre: "2g",
      protein: "3g",
      fat: "10g",
    },
    date_added: "2024-11-01",
  },

  // CHOCOLATE
  chocolate: {
    title: "85% Dark Chocolate with Inulin",
    category: [
      "snacks",
      "dessert",
      "vegetarian",
      "vegan",
      "keto_and_low_carb",
      "gluten_free",
    ],
    img_src: "/public/images/recipes/chocolate/chocolate.jpg",
    description:
      "A rich, 85% dark chocolate with a hint of natural sweetness from inulin. Perfect for dark chocolate lovers and those on sugar-conscious diets. Making your own chocolate has never been easier!",
    prep_time: "10 mins",
    cook_time: "10 mins",
    total_time: "20 mins",
    servings: "6",
    ingredients: [
      "110g cocoa butter (available here on <a href='https://amzn.to/47Vn9LF' target='_blank'>(Amazon EU/UK)</a> or <a href='https://amzn.to/47T15Be' target='_blank'>(Amazon US/Can)</a>)",
      "60g high-quality cocoa powder (e.g., <a href='https://amzn.to/47YzIWr' target='_blank'>(EU) Valrhona</a> or <a href='https://amzn.to/3TVDuKu' target='_blank'>(US/Can) Valrhona</a>)",
      "30g powdered inulin <a href='https://amzn.to/3UqTLap' target='_blank'>(Amazon EU/UK)</a> or <a href='https://amzn.to/3YJnJt6' target='_blank'>(Amazon US/Can)</a>",
    ],
    method: [
      "Set up a double boiler: Fill the bottom pot with water and place the cocoa butter in the top pot. Heat gently until fully melted.",
      "Slowly whisk in the cocoa powder: Once the cocoa butter is melted, whisk in the cocoa powder until completely dissolved and smooth.",
      "Add the inulin powder: Gradually whisk in the inulin powder until fully incorporated, ensuring the mixture is smooth and free of clumps.",
      "Pour into a chocolate mold <a href='https://amzn.to/3YLdmoh' target='_blank'>(Amazon EU/UK)</a> or <a href='https://amzn.to/4hy33eX' target='_blank'>(Amazon US/Can)</a> or tin: Pour the mixture into a 40cm cake tin (or smaller moulds) to set. The thin layer helps the chocolate achieve a shiny finish.",
      "Let it set: Allow the chocolate to set at room temperature, then break into small pieces for serving. Store in an airtight container to keep it fresh.",
    ],
    nutrition: {
      calories: "180 kcal",
      carbs: "6g",
      fibre: "4g",
      protein: "2g",
      fat: "16g",
    },
    date_added: "2024-11-02",
  },

  // Almond Flour Hamburger Buns
  almond_flour_buns: {
    title: "Almond Flour Burger Buns",
    category: [
      "lunch",
      "dinner",
      "gluten_free",
      "keto_and_low_carb",
      "quick_and_easy",
    ],
    img_src: "/public/images/recipes/almond_flour_buns/almond_flour_buns.jpg",
    description:
      "These almond flour burger buns are perfect for a low-carb or gluten-free alternative to traditional buns. Soft and sturdy, ideal for burgers or sandwiches.",
    prep_time: "10 mins",
    cook_time: "10 mins",
    total_time: "20 mins",
    servings: "4",
    ingredients: [
      "1 cup almond flour <a href='https://amzn.to/3U7dqfp' target='_blank'>(Amazon EU/UK)</a> or <a href='https://amzn.to/3U6eekP' target='_blank'>(Amazon US/Can)</a>",
      "1/4 cup chickpea flour (for added binding and structure) <a href='https://amzn.to/3zSUPwV' target='_blank'>(Amazon EU/UK)</a> or <a href='https://amzn.to/4eZuIDm' target='_blank'>(Amazon US/Can)</a>",
      "1 tablespoon psyllium husk (for extra fibre and binding) <a href='https://amzn.to/3zYWqBb' target='_blank'>(Amazon EU/UK)</a> or <a href='https://amzn.to/3NcDeDh' target='_blank'>(Amazon US/Can)</a>",
      "1/4 teaspoon xanthan gum (optional, helps with texture and structure) <a href='https://amzn.to/4eDPoBd' target='_blank'>(Amazon EU/UK)</a> or <a href='https://amzn.to/3ZWOZFo' target='_blank'>(Amazon US/Can)</a>",
      "1/2 teaspoon baking powder <a href='https://amzn.to/3NfIlCz' target='_blank'>(Amazon EU/UK)</a> or <a href='https://amzn.to/3XN0WL6' target='_blank'>(Amazon US/Can)</a>",
      "1/2 teaspoon salt",
      "1/4 teaspoon black pepper (or to taste)",
      "1/4 teaspoon garlic powder (optional, for extra savoury flavour) <a href='https://amzn.to/400SACg' target='_blank'>(Amazon EU/UK)</a> or <a href='https://amzn.to/4dFMYAE' target='_blank'>(Amazon US/Can)</a>",
      "1/4 teaspoon onion powder (optional, for flavour) <a href='https://amzn.to/48d3S8I' target='_blank'>(Amazon EU/UK)</a> or <a href='https://amzn.to/484xQLS' target='_blank'>(Amazon US/Can)</a>",
      "2 large eggs",
      "1/4 cup water or unsweetened almond milk <a href='https://amzn.to/3YxZrAF' target='_blank'>(Amazon EU/UK)</a> or <a href='https://amzn.to/4eje80h' target='_blank'>(Amazon US/Can)</a>",
      "1 tablespoon olive oil <a href='https://amzn.to/4gVpL0c' target='_blank'>(Amazon EU/UK)</a> or <a href='https://amzn.to/47SOaPT' target='_blank'>(Amazon US/Can)</a> or avocado oil <a href='https://amzn.to/4f5o5Qr' target='_blank'>(Amazon EU/UK)</a> or <a href='https://amzn.to/48vlnBc' target='_blank'>(Amazon US/Can)</a> (plus extra for cooking) ",
    ],
    method: [
      "In a mixing bowl, combine the almond flour, chickpea flour, psyllium husk, xanthan gum (if using), baking powder, salt, black pepper, garlic powder, and onion powder. Whisk to ensure all dry ingredients are well-mixed.",
      "In a separate bowl, beat the eggs, then add the water (or almond milk) and olive oil. Mix well.",
      "Pour the wet ingredients into the dry mixture, stirring until a thick, batter-like consistency forms. Let the batter sit for 5 minutes to allow the psyllium husk to absorb moisture and thicken.",
      "Heat a non-stick skillet or frying pan over medium heat. Add a small amount of oil to coat the pan lightly.",
      "Spoon about 2 tablespoons of batter into the pan for each pancake, spreading slightly to form a round shape similar to a bun size.",
      "Cook each pancake for 2-3 minutes on each side or until golden brown and cooked through. They should be sturdy enough to hold a burger but still soft.",
      "Use the pancakes as burger buns and fill with your preferred burger ingredients. For a diabetes-friendly option, consider a lean protein patty (like turkey or salmon), leafy greens, avocado, and low-carb toppings.",
    ],
    nutrition: {
      calories: "250 kcal",
      carbs: "5g",
      fibre: "4g",
      protein: "8g",
      fat: "20g",
    },
    date_added: "2024-11-03",
  },

  // Chicken Burgers
  chicken_burgers: {
    title: "Chicken Burgers",
    category: [
      "lunch",
      "dinner",
      "gluten_free",
      "keto_and_low_carb",
      "quick_and_easy",
    ],
    img_src: "/public/images/recipes/chicken_burgers/chicken_burgers.jpg",
    description:
      "Juicy and flavourful chicken burgers, perfect for a healthy low-carb or gluten-free meal. Pair with homemade <a href='/views/layouts/recipes/recipe_pages/almond_flour_buns.html' target='_blank'>Almond Flour Burger Buns</a> for a complete meal.",
    prep_time: "10 mins",
    cook_time: "15 mins",
    total_time: "25 mins",
    servings: "4",
    ingredients: [
      "450 g ground chicken",
      "1/2 cup finely chopped onion",
      "1/4 cup almond or chickpea flour <a href='https://amzn.to/3zSUPwV' target='_blank'>(Amazon EU/UK)</a> or <a href='https://amzn.to/4eZuIDm' target='_blank'>(Amazon US/Can)</a>",
      "1 egg, beaten",
      "1 tbsp Dijon mustard <a href='https://amzn.to/3YbBu27' target='_blank'>(Amazon EU/UK)</a> or <a href='https://amzn.to/3zYbSxC' target='_blank'>(Amazon US/Can)</a>",
      "1/2 tsp garlic powder <a href='https://amzn.to/400SACg' target='_blank'>(Amazon EU/UK)</a> or <a href='https://amzn.to/4dFMYAE' target='_blank'>(Amazon US/Can)</a>",
      "1/2 tsp onion powder <a href='https://amzn.to/48d3S8I' target='_blank'>(Amazon EU/UK)</a> or <a href='https://amzn.to/484xQLS' target='_blank'>(Amazon US/Can)</a>",
      "Salt and pepper to taste",
      "<strong>Quick Tomato Sauce</strong>",
      "1 cup tomato passata or crushed tomatoes",
      "1 clove garlic, minced",
      "1/2 tsp olive oil <a href='https://amzn.to/4gVpL0c' target='_blank'>(Amazon EU/UK)</a> or <a href='https://amzn.to/47SOaPT' target='_blank'>(Amazon US/Can)</a>",
      "Salt and pepper to taste",
      "1/4 tsp dried basil (optional) <a href='https://amzn.to/3Nold4X' target='_blank'>(Amazon EU/UK)</a> or <a href='https://amzn.to/3AbwQZM' target='_blank'>(Amazon US/Can)</a>",
      "1/4 tsp dried oregano (optional) <a href='https://amzn.to/3Ym0qp0' target='_blank'>(Amazon EU/UK)</a> or <a href='https://amzn.to/3Y1LQl4' target='_blank'>(Amazon US/Can)</a>",
      "<strong>Suggested Burger Toppings</strong>",
      "Lettuce: A few leaves, washed and dried.",
      "Tomato: Sliced thinly.",
      "Avocado: Sliced or mashed, as preferred.",
      "Cheese: A small slice of cheese like cheddar or mozzarella (optional, for extra flavour).",
    ],
    method: [
      "Preheat the grill to medium-high heat.",
      "In a large bowl, combine ground chicken, chopped onion, almond flour, beaten egg, Dijon mustard, garlic powder, onion powder, salt, and pepper. Mix until well combined. Form into four equal patties.",
      "Grill the patties for 5-7 minutes on each side, or until the internal temperature reaches 74°C.",
      "<strong>Making the Quick Tomato Sauce</strong>",
      "In a small saucepan, heat the olive oil over medium heat.",
      "Add the minced garlic and sauté until fragrant (about 1 minute).",
      "Add the tomato passata, salt, pepper, basil, and oregano.",
      "Simmer for 5-10 minutes until slightly thickened.",
      "Let cool slightly before spooning onto your burger or serving on the side.",
    ],
    tips: [
      "For a low-carb bun alternative, try our <a href='/views/layouts/recipes/recipe_pages/almond_flour_buns.html' target='_blank'>Almond Flour Burger Buns</a>.",
      "This tomato sauce adds flavour without added sugars and keeps the meal diabetes-friendly. Enjoy your burger with the salad and a bit of homemade tomato sauce for a tasty, balanced meal!",
    ],
    nutrition: {
      calories: "280 kcal",
      carbs: "6g",
      fibre: "3g",
      protein: "22g",
      fat: "18g",
    },
    date_added: "2024-11-03",
  },

  // Beef Burgers
  beef_burgers: {
    title: "Beef Burgers",
    category: [
      "lunch",
      "dinner",
      "gluten_free",
      "keto_and_low_carb",
      "quick_and_easy",
    ],
    img_src: "/public/images/recipes/beef_burger/beef_burger.jpg",
    description:
      "Juicy and flavourful beef burgers, perfect for a healthy low-carb or gluten-free meal. Pair with homemade <a href='/views/layouts/recipes/recipe_pages/almond_flour_buns.html' target='_blank'>Almond Flour Burger Buns</a> for a complete meal.",
    prep_time: "10 mins",
    cook_time: "15 mins",
    total_time: "25 mins",
    servings: "4",
    ingredients: [
      "450 g ground beef",
      "1/2 cup finely chopped onion",
      "1/4 cup almond or chickpea flour <a href='https://amzn.to/3zSUPwV' target='_blank'>(Amazon EU/UK)</a> or <a href='https://amzn.to/4eZuIDm' target='_blank'>(Amazon US/Can)</a>",
      "1 egg, beaten",
      "1 tbsp Dijon mustard <a href='https://amzn.to/3YbBu27' target='_blank'>(Amazon EU/UK)</a> or <a href='https://amzn.to/3zYbSxC' target='_blank'>(Amazon US/Can)</a>",
      "1/2 tsp garlic powder <a href='https://amzn.to/400SACg' target='_blank'>(Amazon EU/UK)</a> or <a href='https://amzn.to/4dFMYAE' target='_blank'>(Amazon US/Can)</a>",
      "1/2 tsp onion powder <a href='https://amzn.to/48d3S8I' target='_blank'>(Amazon EU/UK)</a> or <a href='https://amzn.to/484xQLS' target='_blank'>(Amazon US/Can)</a>",
      "Salt and pepper to taste",
      "<strong>Quick Tomato Sauce</strong>",
      "1 cup tomato passata or crushed tomatoes",
      "1 clove garlic, minced",
      "1/2 tsp olive oil <a href='https://amzn.to/4gVpL0c' target='_blank'>(Amazon EU/UK)</a> or <a href='https://amzn.to/47SOaPT' target='_blank'>(Amazon US/Can)</a>",
      "Salt and pepper to taste",
      "1/4 tsp dried basil (optional) <a href='https://amzn.to/3Nold4X' target='_blank'>(Amazon EU/UK)</a> or <a href='https://amzn.to/3AbwQZM' target='_blank'>(Amazon US/Can)</a>",
      "1/4 tsp dried oregano (optional) <a href='https://amzn.to/3Ym0qp0' target='_blank'>(Amazon EU/UK)</a> or <a href='https://amzn.to/3Y1LQl4' target='_blank'>(Amazon US/Can)</a>",
      "<strong>Suggested Burger Toppings</strong>",
      "Lettuce: A few leaves, washed and dried.",
      "Tomato: Sliced thinly.",
      "Avocado: Sliced or mashed, as preferred.",
      "Cheese: A small slice of cheese like cheddar or mozzarella (optional, for extra flavour).",
    ],
    method: [
      "Preheat the grill to medium-high heat.",
      "In a large bowl, combine ground beef, chopped onion, almond or chickpea flour, beaten egg, Dijon mustard, garlic powder, onion powder, salt, and pepper. Mix until well combined. Form into four equal patties.",
      "Grill the patties for 5-7 minutes on each side, or until the internal temperature reaches 74°C.",
      "<strong>Making the Quick Tomato Sauce</strong>",
      "In a small saucepan, heat the olive oil over medium heat.",
      "Add the minced garlic and sauté until fragrant (about 1 minute).",
      "Add the tomato passata, salt, pepper, basil, and oregano.",
      "Simmer for 5-10 minutes until slightly thickened.",
      "Let cool slightly before spooning onto your burger or serving on the side.",
    ],
    tips: [
      "For a low-carb bun alternative, try these <a href='/views/layouts/recipes/recipe_pages/almond_flour_buns.html' target='_blank'>Almond Flour Burger Buns</a>.",
      "This tomato sauce adds flavour without added sugars and keeps the meal diabetes-friendly. Enjoy your burger with the salad and a bit of homemade tomato sauce for a tasty, balanced meal!",
      "Serve with some <a href='/views/layouts/recipes/recipe_pages/beetroot_chips.html' target='_blank'>Beetroot Chips</a> for added flavour and colour.",
    ],
    nutrition: {
      calories: "320 kcal",
      carbs: "5g",
      fibre: "3g",
      protein: "25g",
      fat: "23g",
    },
    date_added: "2024-11-03",
  },

  // Nacho Chips
  nacho_chips: {
    title: "Chickpea & Quinoa Nacho Chips",
    category: [
      "snacks",
      "appetizers",
      "gluten_free",
      "keto_and_low_carb",
      "quick_and_easy",
      "vegetarian",
    ],
    img_src: "/public/images/recipes/nacho_chips/nacho_chips.jpg",
    description:
      "Crunchy and flavourful Chickpea & Quinoa Nacho Chips, perfect for dipping in salsa, guacamole, or a Greek yoghurt dip. A unique and keto-friendly snack option!",
    prep_time: "15 mins",
    cook_time: "12 mins",
    total_time: "27 mins",
    servings: "4",
    ingredients: [
      "1/2 cup chickpea flour <a href='https://amzn.to/3zSUPwV' target='_blank'>(Amazon EU/UK)</a> or <a href='https://amzn.to/4eZuIDm' target='_blank'>(Amazon US/Can)</a>",
      "1/2 cup quinoa flour <a href='https://amzn.to/3NpULaW' target='_blank'>(Amazon EU/UK)</a> or <a href='https://amzn.to/3ZXlvap' target='_blank'>(Amazon US/Can)</a>",
      "1 cup shredded mozzarella cheese",
      "1 tablespoon cream cheese",
      "1/2 teaspoon salt",
      "1/2 teaspoon garlic powder (optional) <a href='https://amzn.to/400SACg' target='_blank'>(Amazon EU/UK)</a> or <a href='https://amzn.to/4dFMYAE' target='_blank'>(Amazon US/Can)</a>",
      "1/2 teaspoon paprika (optional) <a href='https://amzn.to/40sKOBh' target='_blank'>(Amazon EU/UK)</a> or <a href='https://amzn.to/48AYTyw' target='_blank'>(Amazon US/Can)</a>",
    ],
    method: [
      "Preheat your oven to 175°C (350°F) and line a baking sheet <a href='https://amzn.to/4hzmiVa' target='_blank'>(Amazon EU/UK</a> or <a href='https://amzn.to/4ejY3aF' target='_blank'>Amazon US/Can)</a> with parchment paper <a href='https://amzn.to/3ZRoO2D' target='_blank'>(Amazon EU/UK</a> or <a href='https://amzn.to/4h3rfWi' target='_blank'>Amazon US/Can)</a>.",
      "In a microwave-safe bowl, combine the mozzarella cheese and cream cheese. Microwave for about 1 minute or until melted. Stir until smooth.",
      "Add the chickpea flour, quinoa flour, salt, garlic powder, and paprika to the melted cheese mixture. Mix until a dough forms. If the dough is too sticky, add a little more chickpea flour until manageable.",
      "Place the dough between two sheets of parchment paper and roll it out to about 1/8 inch thick.",
      "Cut the dough into triangles or your preferred chip shape.",
      "Transfer the chips to the prepared baking sheet lined with parchment paper.",
      "Bake for 10-12 minutes or until golden brown and crispy. Keep an eye on them as they may brown quickly toward the end.",
      "Allow the chips to cool completely before serving.",
    ],
    tips: [
      "Serve these chips with salsa, guacamole, or a Greek yoghurt dip for a satisfying, low-carb snack.",
      "For extra crunch, make sure to roll the dough thin and bake until just golden brown.",
    ],
    nutrition: {
      calories: "150 kcal",
      carbs: "10g",
      fibre: "2g",
      protein: "8g",
      fat: "8g",
    },
    date_added: "2024-11-03",
  },

  // chokladbollar
  chokladbollar: {
    title: "Chokladbollar - Sugar-Free Chocolate Balls",
    category: [
      "snacks",
      "dessert",
      "gluten_free",
      "quick_and_easy",
      "keto_and_low_carb",
    ],
    img_src: "/public/images/recipes/chokladbollar/chokladbollar.jpg",
    description:
      "Delicious Sugar-Free Chocolate Balls, also known as Chokladbollar in Sweden. A traditional treat with a low-carb twist, perfect for those craving a guilt-free sweet snack.",
    prep_time: "10 mins",
    cook_time: "0 mins",
    total_time: "40 mins",
    servings: "12",
    ingredients: [
      "80g butter (or lactose-free butter for dairy-free) or coconut oil <a href='https://amzn.to/3UvVPhk' target='_blank'>(Amazon EU/UK)</a> or <a href='https://amzn.to/3NN7sg9' target='_blank'>(Amazon US/Can)</a>",
      "120g rolled oats (use certified gluten-free oats if needed) <a href='https://amzn.to/40teTka' target='_blank'>(Amazon EU/UK)</a> or <a href='https://amzn.to/3NOzqIm' target='_blank'>(Amazon US/Can)</a>",
      "2/3 cup sugar-free sweetener (e.g., <a href='https://amzn.to/3UqTLap' target='_blank'>inulin powder</a>, <a href='https://amzn.to/3A1oDr6' target='_blank'>stevia</a> or <a href='https://amzn.to/3Yia381' target='_blank'>monk fruit sweetener</a>)",
      "4 tbsp cocoa powder <a href='https://amzn.to/4ehqwyb' target='_blank'>(Amazon EU/UK)</a> or <a href='https://amzn.to/3CcrdLD' target='_blank'>(Amazon US/Can)</a>",
      "3 tbsp brewed coffee (cooled)",
      "2 tsp vanilla powder <a href='https://amzn.to/4fbxUfC' target='_blank'>(Amazon EU/UK)</a> or <a href='https://amzn.to/4ebvhcr' target='_blank'>(Amazon US/Can)</a>",
      "Desiccated coconut for rolling <a href='https://amzn.to/3YS35af' target='_blank'>(Amazon EU/UK)</a> or <a href='https://amzn.to/40B8inV' target='_blank'>(Amazon US/Can)</a>",
    ],
    method: [
      "Place all the ingredients in a mixing bowl. Use an electric mixer to blend the mixture until smooth for a better texture.",
      "Let the mixture sit for 20-30 minutes in the fridge to allow the oats to absorb moisture, making it easier to shape.",
      "Shape the dough into small balls of your desired size.",
      "Roll each ball in desiccated coconut for a delicious coating.",
      "Place in the refrigerator for 30 minutes to set. Enjoy!",
    ],
    tips: [
      "While oats are slightly higher in carbohydrates, they can be part of a healthy diet for individuals with type 2 diabetes. Learn more about the benefits of oats <a href='https://www.healthline.com/health/diabetes/oatmeal' target='_blank'>here</a>.",
    ],
    nutrition: {
      calories: "100 kcal",
      carbs: "8g",
      fibre: "3g",
      protein: "2g",
      fat: "7g",
    },
    date_added: "2024-11-04",
  },

  // Chicken Nachos
  chicken_nachos: {
    title: "Healthy Chicken Nachos",
    category: [
      "dinner",
      "snacks",
      "gluten_free",
      "quick_and_easy",
      "diabetes_friendly",
    ],
    img_src: "/public/images/recipes/chicken_nachos/chicken_nachos.jpg",
    description:
      "Healthy and diabetes-friendly chicken nachos with a savoury tomato base and spices, perfect for a balanced meal or snack.",
    prep_time: "10 mins",
    cook_time: "20 mins",
    total_time: "30 mins",
    servings: "4",
    ingredients: [
      "2 tbsp olive oil <a href='https://amzn.to/4gVpL0c' target='_blank'>(Amazon EU/UK)</a> or <a href='https://amzn.to/47SOaPT' target='_blank'>(Amazon US/Can)</a>",
      "400g ground chicken",
      "1 can (400g) crushed tomatoes",
      "1/2 cup black beans (optional, rinsed and drained)",
      "1/2 cup sweetcorn (optional, rinsed and drained)",
      "1/2 tsp dried basil <a href='https://amzn.to/3Nold4X' target='_blank'>(Amazon EU/UK)</a> or <a href='https://amzn.to/3AbwQZM' target='_blank'>(Amazon US/Can)</a>",
      "1/2 tsp cayenne pepper <a href='https://amzn.to/4054wmv' target='_blank'>(Amazon EU/UK)</a> or <a href='https://amzn.to/4eY6qto' target='_blank'>(Amazon US/Can)</a>",
      "1/2 tsp ground coriander <a href='https://amzn.to/4eXnEHl' target='_blank'>(Amazon EU/UK)</a> or <a href='https://amzn.to/3Ymp60z' target='_blank'>(Amazon US/Can)</a>",
      "1/2 tsp ground cumin <a href='https://amzn.to/3A4aut9' target='_blank'>(Amazon EU/UK)</a> or <a href='https://amzn.to/4eWRf3F' target='_blank'>(Amazon US/Can)</a>",
      "1/2 tsp garlic powder <a href='https://amzn.to/400SACg' target='_blank'>(Amazon EU/UK)</a> or <a href='https://amzn.to/4dFMYAE' target='_blank'>(Amazon US/Can)</a>",
      "1/2 tsp onion powder <a href='https://amzn.to/48d3S8I' target='_blank'>(Amazon EU/UK)</a> or <a href='https://amzn.to/484xQLS' target='_blank'>(Amazon US/Can)</a>",
      "1/2 tsp dried oregano <a href='https://amzn.to/3Ym0qp0' target='_blank'>(Amazon EU/UK)</a> or <a href='https://amzn.to/3Y1LQl4' target='_blank'>(Amazon US/Can)</a>",
      "1/2 tsp smoked paprika <a href='https://amzn.to/3ZVTQql' target='_blank'>(Amazon EU/UK)</a> or <a href='https://amzn.to/480hOCV' target='_blank'>(Amazon US/Can)</a>",
      "Salt and pepper to taste",
      "<strong>To Serve</strong>",
      "Greek yoghurt (optional, for topping)",
      "Sugar-free hot chilli sauce (optional, for topping)",
      "1 avocado, sliced or diced (optional, for topping)",
      "Quinoa & Chickpea Nacho Chips - <a href='/views/layouts/recipes/recipe_pages/nacho_chips.html' target='_blank'>Recipe Here</a>",
    ],
    method: [
      "In a large pan, heat olive oil over medium heat. Add the ground chicken and cook until browned, breaking it apart with a spoon.",
      "Stir in the crushed tomatoes, black beans, and sweetcorn, if using.",
      "Add the basil, cayenne pepper, coriander, cumin, garlic powder, onion powder, oregano, smoked paprika, salt, and pepper. Stir well to combine.",
      "Simmer the mixture for 10-15 minutes until the flavours meld and the mixture thickens slightly.",
      "Serve the chicken mixture over the quinoa & chickpea nacho chips. Top with Greek yoghurt, sugar-free hot chilli sauce, and sliced avocado as desired.",
    ],
    tips: [
      "For a diabetes-friendly option, use low-carb Greek yoghurt and sugar-free hot chilli sauce for toppings.",
      "These quinoa & chickpea nacho chips offer a crunchy, low-carb base. Check out the recipe <a href='/views/layouts/recipes/recipe_pages/nacho_chips.html' target='_blank'>here</a>.",
      "Corn is slightly higher in carbohydrates, so use sparingly, but can still be part of a healthy diet.",
    ],
    nutrition: {
      calories: "300 kcal",
      carbs: "12g",
      fibre: "5g",
      protein: "25g",
      fat: "15g",
    },
    date_added: "2024-11-06",
  },

  // Hibiscus Coconut Cake
  hibiscus_coconut_cake: {
    title: "Hibiscus Coconut Cake",
    category: ["dessert", "gluten_free", "keto_and_low_carb", "vegetarian"],
    img_src:
      "/public/images/recipes/hibiscus_coconut_cake/hibiscus_coconut_cake.jpg",
    description:
      "A soft, moist Hibiscus Coconut Cake with a subtle floral flavour from hibiscus tea and a hint of lemon. Naturally gluten-free and high in fibre, this cake is perfect for a guilt-free treat.",
    prep_time: "20 mins",
    cook_time: "30 mins",
    total_time: "50 mins",
    servings: "8",
    ingredients: [
      "240 ml (1 cup) hibiscus tea, brewed and cooled to room temperature <a href='https://amzn.to/4eA4SGm' target='_blank'>(Amazon EU/UK)</a> or <a href='https://amzn.to/3zOdGsU' target='_blank'>(Amazon US/Can)</a>",
      "70 g (approx. ½ cup) coconut flour <a href='https://amzn.to/3zXdLL0' target='_blank'>(Amazon EU/UK)</a> or <a href='https://amzn.to/3UaxFZX' target='_blank'>(Amazon US/Can)</a>",
      "4 large eggs",
      "3-4 tablespoons inulin powder, to taste <a href='https://amzn.to/3UqTLap' target='_blank'>(Amazon EU/UK)</a> or <a href='https://amzn.to/3YJnJt6' target='_blank'>(Amazon US/Can)</a>",
      "60 ml (¼ cup) melted coconut oil <a href='https://amzn.to/3UvVPhk' target='_blank'>(Amazon EU/UK)</a> or <a href='https://amzn.to/3NN7sg9' target='_blank'>(Amazon US/Can)</a> or avocado oil <a href='https://amzn.to/4f5o5Qr' target='_blank'>(Amazon EU/UK)</a> or <a href='https://amzn.to/48vlnBc' target='_blank'>(Amazon US/Can)</a>",
      "1 teaspoon vanilla essence (optional) <a href='https://amzn.to/3Yhyoeb' target='_blank'>(Amazon EU/UK)</a> or <a href='https://amzn.to/4dH7OzB' target='_blank'>(Amazon US/Can)</a>",
      "1 teaspoon baking powder <a href='https://amzn.to/3NfIlCz' target='_blank'>(Amazon EU/UK)</a> or <a href='https://amzn.to/3XN0WL6' target='_blank'>(Amazon US/Can)</a>",
      "1 teaspoon psyllium husk powder <a href='https://amzn.to/3zYWqBb' target='_blank'>(Amazon EU/UK)</a> or <a href='https://amzn.to/3NcDeDh' target='_blank'>(Amazon US/Can)</a>",
      "½ teaspoon xanthan gum <a href='https://amzn.to/4eDPoBd' target='_blank'>(Amazon EU/UK)</a> or <a href='https://amzn.to/3ZWOZFo' target='_blank'>(Amazon US/Can)</a>",
      "Pinch of salt",
      "Optional spices: A pinch of cinnamon <a href='https://amzn.to/483pOD8' target='_blank'>(Amazon EU/UK)</a> or <a href='https://amzn.to/4f1zyQi' target='_blank'>(Amazon US/Can)</a> and/or cardamom <a href='https://amzn.to/4016RyI' target='_blank'>(Amazon EU/UK)</a> or <a href='https://amzn.to/483fyL0' target='_blank'>(Amazon US/Can)</a>",
      "<strong>Lemon Inulin Icing</strong>",
      "3-4 tablespoons inulin powder, adjusted to taste",
      "120 g (about ½ cup) softened cream cheese or Greek yoghurt",
      "1-2 tablespoons freshly squeezed lemon juice",
      "½ teaspoon lemon zest (optional, for extra lemony flavour)",
      "1-2 tablespoons coconut cream or heavy cream (optional, to adjust consistency)",
    ],
    method: [
      "Preheat your oven to 180°C (350°F) and line a small cake tin <a href='https://amzn.to/4eek7ni' target='_blank'>(Amazon EU/UK)</a> or <a href='https://amzn.to/40zX9DO' target='_blank'>(Amazon US/Can)</a> with parchment paper <a href='https://amzn.to/3ZRoO2D' target='_blank'>(Amazon EU/UK)</a> or <a href='https://amzn.to/4h3rfWi' target='_blank'>(Amazon US/Can)</a>.",
      "Brew the hibiscus tea (using a tea strainer <a href='https://amzn.to/3UGt2ah' target='_blank'>(Amazon EU/UK)</a> or <a href='https://amzn.to/3UGOiwu' target='_blank'>(Amazon US/Can)</a> for a stronger colour) and let it cool completely.",
      "In a medium bowl, whisk together the coconut flour, baking powder, inulin powder, psyllium husk, xanthan gum, salt, and any optional spices like cinnamon or cardamom. This ensures even distribution of the psyllium and xanthan gum, helping the cake bind well.",
      "In another bowl, whisk the eggs until frothy. Add the melted coconut oil, hibiscus tea, and vanilla essence, stirring until smooth.",
      "Gradually add the dry ingredients to the wet mixture, stirring until fully combined. Let the batter rest for 10 minutes to allow the coconut flour, psyllium husk, and xanthan gum to absorb moisture and thicken.",
      "Pour the batter into the prepared cake tin, filling it about two-thirds full. Bake for 25-30 minutes, or until a toothpick inserted into the center comes out clean.",
      "Allow the cake to cool in the tin for 10 minutes before transferring to a rack to cool completely.",
      "<strong>Icing</strong>",
      "In a medium bowl, beat the cream cheese or Greek yoghurt until smooth and creamy.",
      "Add the lemon juice and lemon zest, mixing well to incorporate. Start with 1 tablespoon of lemon juice and taste; add more if you prefer a stronger lemon flavour.",
      "Gradually add the inulin powder, whisking continuously until smooth. Adjust the sweetness to your liking.",
      "If the icing is too thick, add a tablespoon of coconut cream or heavy cream to loosen it slightly.",
      "Refrigerate the icing for about 10-15 minutes to help it firm up before spreading on the cake.",
    ],
    tips: [
      "Store in an airtight container in the fridge for up to 3-4 days.",
      "For extra flavour, serve with a dollop of unsweetened Greek yoghurt or dust with inulin powder for a pretty finish.",
      "For more pronounced lemon flavour, use extra zest or a few drops of natural lemon essence.",
      "This icing should be thick enough to spread but soft enough to easily swirl on top of the cake.",
    ],
    nutrition: {
      calories: "180 kcal",
      carbs: "6g",
      fibre: "4g",
      protein: "4g",
      fat: "14g",
    },
    date_added: "2024-11-07",
  },

  // Carrot Chips
  carrot_chips: {
    title: "Carrot Chips",
    category: [
      "snacks",
      "side_dishes",
      "appetizers",
      "vegetarian",
      "vegan",
      "gluten_free",
    ],
    img_src: "/public/images/recipes/carrot_chips/carrot_chips.jpg",
    description:
      "Crispy and flavourful carrot chips, perfect for a healthy snack or side dish. These gluten-free, vegan chips are seasoned with a hint of cayenne, garlic, and onion powder for a tasty crunch.",
    prep_time: "5 mins",
    cook_time: "45 mins",
    total_time: "50 mins",
    servings: "4",
    ingredients: [
      "3 large carrots, sliced thinly (1-2 mm thick)",
      "2 tablespoons olive oil <a href='https://amzn.to/4gVpL0c' target='_blank'>(Amazon EU/UK)</a> or <a href='https://amzn.to/47SOaPT' target='_blank'>(Amazon US/Can)</a>",
      "Salt, to taste",
      "1/2 teaspoon garlic powder <a href='https://amzn.to/400SACg' target='_blank'>(Amazon EU/UK)</a> or <a href='https://amzn.to/4dFMYAE' target='_blank'>(Amazon US/Can)</a>",
      "1/2 teaspoon onion powder <a href='https://amzn.to/48d3S8I' target='_blank'>(Amazon EU/UK)</a> or <a href='https://amzn.to/484xQLS' target='_blank'>(Amazon US/Can)</a>",
      "1/4 teaspoon cayenne pepper (optional, for extra spice) <a href='https://amzn.to/4054wmv' target='_blank'>(Amazon EU/UK)</a> or <a href='https://amzn.to/4eY6qto' target='_blank'>(Amazon US/Can)</a>",
    ],
    method: [
      "Preheat your oven to 150°C (300°F) and line a baking tray with baking sheet paper <a href='https://amzn.to/4hzmiVa' target='_blank'>(Amazon EU/UK)</a> or <a href='https://amzn.to/4ejY3aF' target='_blank'>(Amazon US/Can)</a>.",
      "Slice the carrots thinly (1-2 mm) using a mandolin slicer <a href='https://amzn.to/48xrZPu' target='_blank'>(Amazon EU/UK)</a> or <a href='https://amzn.to/40nKML8' target='_blank'>(Amazon US/Can)</a> or sharp knife.",
      "In a mixing bowl, toss the carrot slices with olive oil until evenly coated.",
      "Season with salt, garlic powder, onion powder, and cayenne pepper (if using). Mix well to coat the carrots evenly.",
      "Arrange the carrot slices in a single layer on the prepared baking tray.",
      "Bake for 20 minutes, then flip the slices and bake for another 20 minutes, removing any slices that are already crispy.",
      "Bake for an additional 5 minutes with the oven door slightly open, checking regularly to avoid burning.",
      "Let the chips cool slightly and enjoy as a healthy, crunchy snack!",
    ],
    tips: [
      "These carrot chips make a great alternative to traditional chips, packed with flavour and a satisfying crunch.",
      "For best results, slice the carrots as evenly as possible to ensure they cook uniformly.",
    ],
    nutrition: {
      calories: "80 kcal",
      carbs: "12g",
      fibre: "4g",
      protein: "1g",
      fat: "4g",
    },
    date_added: "2024-11-08",
  },

  // Chicken Noodle Stir Fry
  chicken_noodle_stirfry: {
    title: "Chicken Noodle Stir Fry",
    category: ["lunch", "dinner", "keto_and_low_carb", "gluten_free"],
    img_src:
      "/public/images/recipes/chicken_noodle_stirfry/chicken_noodle_stirfry.jpg",
    description:
      "A healthy and flavourful Chicken Noodle Stir Fry with shiratake noodles, fresh vegetables, and a light soy and sesame sauce. Perfect for a low-carb, gluten-free meal packed with protein and veggies!",
    prep_time: "15 mins",
    cook_time: "25 mins",
    total_time: "40 mins",
    servings: "4",
    ingredients: [
      "1 packet shiratake noodles, rinsed and drained <a href='https://amzn.to/3Ybhlua' target='_blank'>(Amazon EU/UK)</a> or <a href='https://amzn.to/4eMv5Rw' target='_blank'>(Amazon US/Can)</a>",
      "500 mL low sodium chicken stock <a href='https://amzn.to/3YrMQz2' target='_blank'>(Amazon EU/UK)</a> or <a href='https://amzn.to/3NPtOxy' target='_blank'>(Amazon US/Can)</a>",
      "1 tsp psyllium husk <a href='https://amzn.to/3zYWqBb' target='_blank'>(Amazon EU/UK)</a> or <a href='https://amzn.to/3NcDeDh' target='_blank'>(Amazon US/Can)</a>",
      "4 tbsp reduced sodium soy sauce <a href='https://amzn.to/48cj31F' target='_blank'>(Amazon EU/UK)</a> or <a href='https://amzn.to/48cj31F' target='_blank'>(Amazon US/Can)</a>, divided",
      "2 tbsp sesame oil, divided <a href='https://amzn.to/3YUYX9k' target='_blank'>(Amazon EU/UK)</a> or <a href='https://amzn.to/4hIgxoa' target='_blank'>(Amazon US/Can)</a>",
      "1 tbsp avocado oil <a href='https://amzn.to/4f5o5Qr' target='_blank'>(Amazon EU/UK)</a> or <a href='https://amzn.to/48vlnBc' target='_blank'>(Amazon US/Can)</a>",
      "450 g boneless, skinless chicken breasts, cut into 5 cm pieces",
      "30 ml white vinegar <a href='https://amzn.to/4elCeaX' target='_blank'>(Amazon EU/UK)</a> or <a href='https://amzn.to/4fEZulf' target='_blank'>(Amazon US/Can)</a>",
      "1 tbsp inulin powder <a href='https://amzn.to/3UqTLap' target='_blank'>(Amazon EU/UK)</a> or <a href='https://amzn.to/3YJnJt6' target='_blank'>(Amazon US/Can)</a>",
      "200 g fresh snow peas",
      "1 head of broccoli, cut into florets",
      "1 onion, cut into eighths",
      "1 parsnip or carrot, sliced into small discs",
      "A handful of brussels sprouts, quartered",
      "1 red pepper, sliced",
      "1 ½ tsp minced fresh ginger root (about 4 g)",
      "½ tsp chilli flakes <a href='https://amzn.to/40GBMAO' target='_blank'>(Amazon EU/UK)</a> or <a href='https://amzn.to/4hFKW6z' target='_blank'>(Amazon US/Can)</a>",
    ],
    method: [
      "Rinse and drain the shiratake noodles thoroughly. Add the noodles and chicken stock to a bowl and set aside, allowing them to soak for as long as possible (up to an hour for best results).",
      "In a small bowl, whisk the psyllium husk with 1 tablespoon soy sauce until smooth, then stir in 1 tablespoon sesame oil. Place the chicken in this mixture and coat thoroughly. Let it marinate for 10 minutes.",
      "In another small bowl, combine the white vinegar, inulin powder (or erythritol), remaining 3 tablespoons soy sauce, and remaining 1 tablespoon sesame oil. Set aside.",
      "In a large nonstick skillet or wok, heat the avocado oil over medium-high heat. Add the onion and cook until translucent, then add the marinated chicken and cook, stirring, until the chicken is no longer pink (about 5–7 minutes). Remove the chicken to a plate and keep warm.",
      "In the same skillet, add the snow peas, broccoli, and parsnip or carrot. Cook and stir for about 5 minutes, adding more avocado oil if needed. For a stronger Asian flavour, add additional sesame oil if desired.",
      "Add the brussels sprouts, red pepper, and chilli flakes. Continue to cook and stir until the vegetables are crisp-tender, about 2–3 minutes longer. Add the ginger and cook for an additional minute.",
      "Return the chicken to the pan and add the soy sauce mixture. Drain the shiratake noodles from the chicken stock, reserving 2-3 tablespoons of the stock. Add the noodles to the pan, tossing everything together until well combined and heated through. Add the reserved stock if needed to prevent sticking.",
    ],
    tips: [
      "Shiratake noodles are low-carb and a great substitute for traditional noodles. Make sure to rinse them well to remove any odour.",
      "For a spicier dish, increase the chilli flakes to taste.",
    ],
    nutrition: {
      calories: "320 kcal",
      carbs: "8g",
      fibre: "4g",
      protein: "30g",
      fat: "18g",
    },
    date_added: "2024-11-09",
  },
};
