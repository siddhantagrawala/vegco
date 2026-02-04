import React, { useState } from 'react';
import { Flame, Droplets, Zap, ChevronRight, Clock, Users, Fingerprint, Cpu, Layers, Activity, ShieldAlert, ThermometerSun } from 'lucide-react';

const RecipeLab = ({ onBack }) => {
    const [selectedRecipe, setSelectedRecipe] = useState(null);
    const [searchQuery, setSearchQuery] = useState('');
    const [selectedIngredients, setSelectedIngredients] = useState([]);

    const availableIngredients = [
        "Romaine Lettuce", "Baby Spinach", "Wild Rocket", "Tuscan Kale",
        "Italian Basil", "Red Cherry Tomato", "Pak Choi", "Hydroponic Coriander",
        "Curry Leaves", "Fenugreek", "Moong Dal"
    ];

    const recipes = [
        // --- ROMAINE LETTUCE ---
        {
            id: 'rl-1',
            name: "Classic Caesar Salad",
            description: "Deconstructed nutrient-dense salad with probiotic yogurt emulsion.",
            products: ["Romaine Lettuce"],
            time: "15 mins",
            serves: "2 People",
            nutrients: {
                calories: 180,
                phytoDensity: "High",
                minerals: [{ name: "Calcium", value: 60, unit: "mg" }, { name: "Vit K", value: 90, unit: "mcg" }]
            },
            clinical: {
                benefit: "Bone Density & Gut Microbiome",
                indications: ["Osteopenia", "Gut Dysbiosis"]
            },
            method: ["Submerge Romaine in 4°C ice bath shock.", "Apply bacterial-active yogurt dressing emulsion.", "Dust with micro-grated parmesan isolate."],
            image: "/recipe_detox_bowl_8k.png"
        },
        {
            id: 'rl-2',
            name: "Spiced Tofu Lettuce Wraps",
            description: "Indian-spiced tofu and vegetable mince served in structural lettuce cups.",
            products: ["Romaine Lettuce", "Hydroponic Coriander"],
            time: "20 mins",
            serves: "4 Portions",
            nutrients: {
                calories: 140,
                phytoDensity: "Medium",
                minerals: [{ name: "Protein", value: 12, unit: "g" }, { name: "Iron", value: 1.5, unit: "mg" }]
            },
            clinical: {
                benefit: "Hydration & Lean Protein Synthesis",
                indications: ["Muscle Recovery", "Dehydration"]
            },
            method: ["Sauté spiced tofu crumble.", "Fill turgid Romaine leaves.", "Garnish with coriander essence."],
            image: "/recipe_lettuce_wraps_8k.jpg"
        },
        {
            id: 'rl-3',
            name: "Antioxidant Walnut Salad",
            description: "A synergistic blend of antioxidants: Romaine, walnuts, and pomegranate.",
            products: ["Romaine Lettuce"],
            time: "10 mins",
            serves: "1 Person",
            nutrients: {
                calories: 220,
                phytoDensity: "Very High",
                minerals: [{ name: "Omega-3", value: 1.2, unit: "g" }, { name: "Antioxidants", value: 500, unit: "ORAC" }]
            },
            clinical: {
                benefit: "Oxidative Stress Reduction",
                indications: ["Aging", "Inflammation"]
            },
            method: ["Toss leaves with walnut lipids.", "Infuse with pomegranate reduction.", "Serve at ambient temp."],
            image: "/recipe_walnut_salad_8k.jpg"
        },

        // --- BABY SPINACH ---
        {
            id: 'bs-1',
            name: "Heirloom Palak Paneer",
            description: "High-protein zero-grit spinach reduction with organic cottage cheese.",
            products: ["Baby Spinach", "Hydroponic Coriander"],
            time: "20 mins",
            serves: "2 People",
            nutrients: {
                calories: 320,
                phytoDensity: "Extreme",
                minerals: [{ name: "Iron", value: 4.8, unit: "mg" }, { name: "Calcium", value: 420, unit: "mg" }]
            },
            clinical: {
                benefit: "Hemoglobin & Bone Matrix Support",
                indications: ["Anemia", "Osteoporosis"]
            },
            method: ["Blanch spinach at 85°C.", "Emulsify with coriander lipids.", "Fold in protein cubes."],
            image: "/recipe_palak_paneer_8k.png"
        },
        {
            id: 'bs-2',
            name: "Creamy Spinach Soup",
            description: "Bio-available iron soup matrix, stabilized with cream substitute.",
            products: ["Baby Spinach"],
            time: "25 mins",
            serves: "3 Portions",
            nutrients: {
                calories: 180,
                phytoDensity: "High",
                minerals: [{ name: "Iron", value: 5.2, unit: "mg" }, { name: "Vit A", value: 800, unit: "mcg" }]
            },
            clinical: {
                benefit: "Rapid Iron Absorption",
                indications: ["Fatigue", "Low Iron"]
            },
            method: ["Liquefy blanched spinach.", "Simmer with stabilizer.", "Season with pink salt."],
            image: "/recipe_spinach_soup_8k.jpg"
        },
        {
            id: 'bs-3',
            name: "Eggs Florentine",
            description: "Poached protein on a bed of wilted spinach for neural support.",
            products: ["Baby Spinach"],
            time: "15 mins",
            serves: "1 Person",
            nutrients: {
                calories: 260,
                phytoDensity: "Medium",
                minerals: [{ name: "Choline", value: 150, unit: "mg" }, { name: "Folate", value: 200, unit: "mcg" }]
            },
            clinical: {
                benefit: "Neurotransmitter Synthesis",
                indications: ["Brain Fog", "Focus"]
            },
            method: ["Wilt spinach via steam.", "Place thermal-poached egg.", "Drizzle lipid source."],
            image: "/recipe_eggs_florentine_8k.jpg"
        },

        // --- WILD ROCKET ---
        {
            id: 'wr-1',
            name: "Walnut & Rocket Pesto",
            description: "High-nitrate walnut and rocket pesto for vascular dilation.",
            products: ["Wild Rocket", "Italian Basil"],
            time: "10 mins",
            serves: "6 Servings",
            nutrients: {
                calories: 180,
                phytoDensity: "Maximum",
                minerals: [{ name: "Nitrates", value: 450, unit: "mg" }, { name: "Omega-3", value: 2.1, unit: "g" }]
            },
            clinical: {
                benefit: "Vasodilation & Blood Pressure",
                indications: ["Hypertension", "Athletic Perf."]
            },
            method: ["Cryo-grind rocket with walnuts.", "Emulsify with olive lipids.", "Store in amber glass."],
            image: "/recipe_rocket_pesto_8k.png"
        },
        {
            id: 'wr-2',
            name: "Citrus & Rocket Salad",
            description: "Orange segments vs Rocket leaves for Vitamin C enhanced iron absorption.",
            products: ["Wild Rocket"],
            time: "8 mins",
            serves: "2 People",
            nutrients: {
                calories: 110,
                phytoDensity: "High",
                minerals: [{ name: "Vit C", value: 120, unit: "mg" }, { name: "Folate", value: 80, unit: "mcg" }]
            },
            clinical: {
                benefit: "Immune modulation & Vascular Health",
                indications: ["Low Immunity", "Poor Circulation"]
            },
            method: ["Section citrus with precision.", "Toss with spicy leaves.", "Finish with balsamic."]
            ,
            image: "/recipe_citrus_salad_8k.jpg"
        },
        {
            id: 'wr-3',
            name: "Gourmet Rocket Pizza",
            description: "Post-bake nutrient addition to flatbreads to preserve enzyme activity.",
            products: ["Wild Rocket", "Red Cherry Tomato"],
            time: "2 mins",
            serves: "1 Pizza",
            nutrients: {
                calories: 15,
                phytoDensity: "Medium",
                minerals: [{ name: "Vit K", value: 20, unit: "mcg" }, { name: "Lutein", value: 4, unit: "mg" }]
            },
            clinical: {
                benefit: "Enzymatic Preservation",
                indications: ["Digestive Aid"]
            },
            method: ["Bake base substrate.", "Apply rocket at 40°C.", "Consume immediately."],
            image: "/recipe_rocket_pizza_8k.jpg"
        },

        // --- TUSCAN KALE ---
        {
            id: 'tk-1',
            name: "Baked Kale Chips",
            description: "Dehydrated kale matrix seasoned with sea minerals.",
            products: ["Tuscan Kale"],
            time: "35 mins",
            serves: "2 Servings",
            nutrients: {
                calories: 120,
                phytoDensity: "High",
                minerals: [{ name: "Vit K", value: 400, unit: "mcg" }, { name: "Calcium", value: 100, unit: "mg" }]
            },
            clinical: {
                benefit: "Bone Calcification",
                indications: ["Fracture Recovery"]
            },
            method: ["Remove fibrous stems.", "Mass-massage with oil.", "Dehydrate at 140°C."],
            image: "/recipe_kale_chips_8k.jpg"
        },
        {
            id: 'tk-2',
            name: "Massaged Kale Salad",
            description: "Kale fibers softened via citric acid breakdown for digestibility.",
            products: ["Tuscan Kale", "Red Cherry Tomato"],
            time: "15 mins",
            serves: "2 People",
            nutrients: {
                calories: 160,
                phytoDensity: "Extreme",
                minerals: [{ name: "Fiber", value: 8, unit: "g" }, { name: "Vit C", value: 90, unit: "mg" }]
            },
            clinical: {
                benefit: "Hepatic Detoxification",
                indications: ["Liver Support", "Constipation"]
            },
            method: ["Apply acid to leaves.", "Mechanical agitation (massage).", "Combine with lipids."],
            image: "/recipe_kale_salad_8k.jpg"
        },
        {
            id: 'tk-3',
            name: "Kale & Moong Dal",
            description: "Traditional Indian lentils fortified with structural kale fibers.",
            products: ["Tuscan Kale", "Moong Dal"],
            time: "30 mins",
            serves: "4 Portions",
            nutrients: {
                calories: 210,
                phytoDensity: "High",
                minerals: [{ name: "Protein", value: 14, unit: "g" }, { name: "Iron", value: 3.5, unit: "mg" }]
            },
            clinical: {
                benefit: "Glycemic Stability",
                indications: ["Diabetes", "Cholesterol"]
            },
            method: ["Cook lentils to emulsion.", "Add fine-chopped kale.", "Simmer for fiber softening."],
            image: "/recipe_green_dal_8k.jpg"
        },

        // --- ITALIAN BASIL ---
        {
            id: 'ib-1',
            name: "Basil Carbonara",
            description: "Italian precision meets lab-grown Italian Basil for aromatic profiling.",
            products: ["Italian Basil", "Pak Choi"],
            time: "25 mins",
            serves: "2 People",
            nutrients: {
                calories: 450,
                phytoDensity: "Medium",
                minerals: [{ name: "Vit K", value: 120, unit: "mcg" }, { name: "Iron", value: 1.8, unit: "mg" }]
            },
            clinical: {
                benefit: "Cardiac Health & Stress",
                indications: ["Anxiety", "Hypertension"]
            },
            method: ["Hydrate wheat matrix to al dente state.", "Flash-sear greens at 200°C for chlorophyll retention.", "Emulsify with high-shear basil lipid blend."],
            image: "/recipe_pesto_pasta_8k.jpg"
        },
        {
            id: 'ib-2',
            name: "Classic Caprese",
            description: "Precision stacking of lycopene (tomato) and eugenol (basil).",
            products: ["Italian Basil", "Red Cherry Tomato"],
            time: "5 mins",
            serves: "2 People",
            nutrients: {
                calories: 220,
                phytoDensity: "High",
                minerals: [{ name: "Calcium", value: 300, unit: "mg" }, { name: "Lycopene", value: 8, unit: "mg" }]
            },
            clinical: {
                benefit: "Cellular Protection",
                indications: ["Oxidative Stress"]
            },
            method: ["Calibrate tomato slices to 5mm precision.", "Interleave with basil for eugenol diffusion.", "Apply balsamic reduction glaze."],
            image: "/recipe_caprese_8k.jpg"
        },
        {
            id: 'ib-3',
            name: "Thai Basil Chicken",
            description: "Spicy basil infusion adapted from Pad Krapow for neural activation.",
            products: ["Italian Basil", "Pak Choi"],
            time: "15 mins",
            serves: "2 People",
            nutrients: {
                calories: 300,
                phytoDensity: "Medium",
                minerals: [{ name: "Vit A", value: 600, unit: "mcg" }, { name: "Magnesium", value: 80, unit: "mg" }]
            },
            clinical: {
                benefit: "Metabolic Rate Increase",
                indications: ["Slow Metabolism"]
            },
            method: ["High-heat wok flash.", "Add protein source.", "Fold in basil at end."],
            image: "/recipe_thai_basil_stirfry_8k.jpg"
        },

        // --- RED CHERRY TOMATO ---
        {
            id: 'rt-1',
            name: "Roasted Tomato Soup",
            description: "Roasted tomato concentrate for maximum bio-availability of carotenoids.",
            products: ["Red Cherry Tomato", "Italian Basil"],
            time: "40 mins",
            serves: "3 Servings",
            nutrients: {
                calories: 140,
                phytoDensity: "Very High",
                minerals: [{ name: "Lycopene", value: 25, unit: "mg" }, { name: "Potassium", value: 400, unit: "mg" }]
            },
            clinical: {
                benefit: "Prostate & Skin Health",
                indications: ["UV Damage", "Cell Health"]
            },
            method: ["Roast tomatoes to collapse.", "Blend to serum.", "Garnish with basil oil."],
            image: "/recipe_tomato_soup_8k.jpg"
        },
        {
            id: 'rt-2',
            name: "Heritage Bruschetta",
            description: "Raw diced tomato matrix on fermented sourdough substrate.",
            products: ["Red Cherry Tomato", "Italian Basil"],
            time: "10 mins",
            serves: "4 Pieces",
            nutrients: {
                calories: 180,
                phytoDensity: "Medium",
                minerals: [{ name: "Vit C", value: 15, unit: "mg" }, { name: "Fiber", value: 3, unit: "g" }]
            },
            clinical: {
                benefit: "Gut Health & Immunity",
                indications: ["Low Energy"]
            },
            method: ["Dice tomatoes finely.", "Macerate with olive oil.", "Mount on toasted base."],
            image: "/recipe_bruschetta_8k.jpg"
        },
        {
            id: 'rt-3',
            name: "Tomato Curry",
            description: "South Indian spicy tomato curry base for rice or millet.",
            products: ["Red Cherry Tomato", "Curry Leaves"],
            time: "25 mins",
            serves: "3 People",
            nutrients: {
                calories: 160,
                phytoDensity: "High",
                minerals: [{ name: "Vit C", value: 40, unit: "mg" }, { name: "Antioxidants", value: 600, unit: "ORAC" }]
            },
            clinical: {
                benefit: "Digestive Fire Activation",
                indications: ["Indigestion"]
            },
            method: ["Temper spices and curry leaves.", "Reduce tomatoes to pulp.", "Simmer with turmeric."],
            image: "/recipe_red_curry_8k.jpg"
        },

        // --- PAK CHOI ---
        {
            id: 'pc-1',
            name: "Steamed Pak Choi",
            description: "Gently steamed halves with garlic linkage for liver support.",
            products: ["Pak Choi"],
            time: "8 mins",
            serves: "2 People",
            nutrients: {
                calories: 45,
                phytoDensity: "High",
                minerals: [{ name: "Selenium", value: 5, unit: "mcg" }, { name: "Vit C", value: 30, unit: "mg" }]
            },
            clinical: {
                benefit: "Liver Phase II Detox",
                indications: ["Toxin Exposure"]
            },
            method: ["Halve the heads.", "Steam for 4 minutes.", "Drizzle sesame oil."],
            image: "/recipe_steamed_pak_choi_8k.jpg"
        },
        {
            id: 'pc-2',
            name: "Pak Choi Stir-Fry",
            description: "High-heat retention of texture and chlorophyll.",
            products: ["Pak Choi"],
            time: "10 mins",
            serves: "2 Servings",
            nutrients: {
                calories: 90,
                phytoDensity: "Medium",
                minerals: [{ name: "Vit A", value: 400, unit: "mcg" }, { name: "Potassium", value: 250, unit: "mg" }]
            },
            clinical: {
                benefit: "Cellular Hydration",
                indications: ["Dry Skin"]
            },
            method: ["Slice stems diagonally.", "Wok sear stems first.", "Add leaves at T-minus 1 min."],
            image: "/recipe_thai_basil_stirfry_8k.jpg"
        },
        {
            id: 'pc-3',
            name: "Asian Greens Broth",
            description: "Clear healing broth featuring floating greens and ginger.",
            products: ["Pak Choi", "Hydroponic Coriander"],
            time: "20 mins",
            serves: "2 Bowls",
            nutrients: {
                calories: 60,
                phytoDensity: "Low",
                minerals: [{ name: "Water", value: 300, unit: "ml" }, { name: "Electrolytes", value: "High", unit: "" }]
            },
            clinical: {
                benefit: "Immune System Flush",
                indications: ["Cold/Flu"]
            },
            method: ["Simmer ginger broth.", "Submerge greens.", "Garnish with coriander."],
            image: "/recipe_asian_noodle_soup_8k.jpg"
        },

        // --- HYDROPONIC CORIANDER ---
        {
            id: 'hc-1',
            name: "Detox Coriander Chutney",
            description: "Potent raw blend of coriander and mint for systemic detox.",
            products: ["Hydroponic Coriander"],
            time: "5 mins",
            serves: "1 Jar",
            nutrients: {
                calories: 80,
                phytoDensity: "Maximum",
                minerals: [{ name: "Chlorophyll", value: "High", unit: "" }, { name: "Vit K", value: 80, unit: "mcg" }]
            },
            clinical: {
                benefit: "Heavy Metal Removal",
                indications: ["Urban Living Detox"]
            },
            method: ["Blend leaves and tender stems.", "Acidify with lime.", "Add green chili catalyst."],
            image: "/recipe_green_chutney_8k.jpg"
        },
        {
            id: 'hc-2',
            name: "Lemon Coriander Soup",
            description: "Hot immune-boosting suspension with Vitamin C.",
            products: ["Hydroponic Coriander"],
            time: "15 mins",
            serves: "2 Mugs",
            nutrients: {
                calories: 40,
                phytoDensity: "Medium",
                minerals: [{ name: "Vit C", value: 60, unit: "mg" }, { name: "Zinc", value: 0.5, unit: "mg" }]
            },
            clinical: {
                benefit: "Respiratory Clarity",
                indications: ["Congestion"]
            },
            method: ["Boil vegetable stock.", "Finish with lemon juice.", "Add chopped coriander."],
            image: "/recipe_clear_soup_8k.jpg"
        },
        {
            id: 'hc-3',
            name: "Coriander Stem Pesto",
            description: "Zero-waste pesto utilizing the intense flavor of coriander stems.",
            products: ["Hydroponic Coriander"],
            time: "10 mins",
            serves: "4 Servings",
            nutrients: {
                calories: 180,
                phytoDensity: "High",
                minerals: [{ name: "Fiber", value: 4, unit: "g" }, { name: "Antioxidants", value: 300, unit: "ORAC" }]
            },
            clinical: {
                benefit: "Microbiome Diversity",
                indications: ["Gut Health"]
            },
            method: ["Blend stems, nuts, and oil.", "Season with salt.", "Use as spread."],
            image: "/recipe_curry_leaf_pesto_8k.png"
        },

        // --- CURRY LEAVES ---
        {
            id: 'cl-1',
            name: "Curry Leaf Pesto",
            description: "Potent antioxidant elixir using A-grade leaves.",
            products: ["Curry Leaves", "Hydroponic Coriander"],
            time: "10 mins",
            serves: "6 Portions",
            nutrients: {
                calories: 95,
                phytoDensity: "Maximum",
                minerals: [{ name: "Calcium", value: 280, unit: "mg" }, { name: "Vit A", value: 1.2, unit: "mg" }]
            },
            clinical: {
                benefit: "Neuro-Protection & Lipolysis",
                indications: ["High Cholesterol"]
            },
            method: ["Flash-cool leaves.", "Grind with coconut oil.", "Store away from light."],
            image: "/recipe_curry_leaf_pesto_8k.png"
        },
        {
            id: 'cl-2',
            name: "Curry Leaf Rice",
            description: "Rice tempered with crispy curry leaves for hair and skin vitality.",
            products: ["Curry Leaves"],
            time: "20 mins",
            serves: "2 People",
            nutrients: {
                calories: 300,
                phytoDensity: "Medium",
                minerals: [{ name: "Beta-Carotene", value: 2, unit: "mg" }, { name: "Iron", value: 2.5, unit: "mg" }]
            },
            clinical: {
                benefit: "Keratin Synthesis (Hair)",
                indications: ["Hair Fall", "Greying"]
            },
            method: ["Bloom leaves in ghee.", "Fold into cooked rice.", "Add roasted nuts."],
            image: "/recipe_curry_leaf_rice_8k.png"
        },
        {
            id: 'cl-3',
            name: "Spiced Buttermilk",
            description: "Spiced probiotic cooler (Chaas) with crushed curry leaf oil.",
            products: ["Curry Leaves", "Hydroponic Coriander"],
            time: "5 mins",
            serves: "1 Glass",
            nutrients: {
                calories: 60,
                phytoDensity: "High",
                minerals: [{ name: "Probiotics", value: "Active", unit: "CFU" }, { name: "Calcium", value: 150, unit: "mg" }]
            },
            clinical: {
                benefit: "Digestive Cooling",
                indications: ["Acidity", "Heat Stress"]
            },
            method: ["Whisk yogurt and water.", "Add crushed curry leaves.", "Serve chilled."],
            image: "/recipe_buttermilk_chaas_8k.jpg"
        },

        // --- FENUGREEK ---
        {
            id: 'fg-1',
            name: "Methi Thepla",
            description: "Diabetic-friendly iron-bound flatbread.",
            products: ["Fenugreek"],
            time: "25 mins",
            serves: "4 Portions",
            nutrients: {
                calories: 145,
                phytoDensity: "High",
                minerals: [{ name: "Iron", value: 2.1, unit: "mg" }, { name: "Chromium", value: 12, unit: "mcg" }]
            },
            clinical: {
                benefit: "Glucose Regulation",
                indications: ["Diabetes Type II"]
            },
            method: ["Macerate leaves in flour.", "Roll to 1.5mm.", "Sear on iron skillet."],
            image: "/recipe_methi_thepla_8k.png"
        },
        {
            id: 'fg-2',
            name: "Methi Dal",
            description: "Lentils stewed with bitter fenugreek for insulin sensitivity.",
            products: ["Fenugreek", "Moong Dal"],
            time: "30 mins",
            serves: "4 Bowls",
            nutrients: {
                calories: 190,
                phytoDensity: "Very High",
                minerals: [{ name: "Fiber", value: 7, unit: "g" }, { name: "Protein", value: 12, unit: "g" }]
            },
            clinical: {
                benefit: "Insulin Sensitivity",
                indications: ["Insulin Resistance"]
            },
            method: ["Boil dal with turmeric.", "Add chopped fenugreek.", "Simmer 10 mins."],
            image: "/recipe_green_dal_8k.jpg"
        },
        {
            id: 'fg-3',
            name: "Aloo Methi",
            description: "Potato stir-fry balanced with high-fiber fenugreek leaves.",
            products: ["Fenugreek"],
            time: "25 mins",
            serves: "2 People",
            nutrients: {
                calories: 210,
                phytoDensity: "Medium",
                minerals: [{ name: "Potassium", value: 600, unit: "mg" }, { name: "Iron", value: 1.8, unit: "mg" }]
            },
            clinical: {
                benefit: "Sustained Energy Release",
                indications: ["Fatigue"]
            },
            method: ["Sauté potato cubes.", "Add large volume of Methi.", "Cook until wilted."],
            image: "/recipe_aloo_methi_8k.png"
        },

        // --- MOONG DAL ---
        {
            id: 'md-1',
            name: "Moong Dal Chilla",
            description: "Protein wrap with living enzymes.",
            products: ["Moong Dal"],
            time: "15 mins",
            serves: "2 People",
            nutrients: {
                calories: 180,
                phytoDensity: "High",
                minerals: [{ name: "Zinc", value: 1.5, unit: "mg" }, { name: "Folate", value: 140, unit: "mcg" }]
            },
            clinical: {
                benefit: "Cellular Repair",
                indications: ["Recovery"]
            },
            method: ["Soak and grind dal.", "Ferment briefly.", "Spread on griddle."],
            image: "/recipe_chilla_8k.jpg"
        },
        {
            id: 'md-2',
            name: "Sprouted Moong Salad",
            description: "Living sprouted moong dal with fresh vegetables.",
            products: ["Moong Dal", "Red Cherry Tomato", "Hydroponic Coriander"],
            time: "5 mins (post-sprout)",
            serves: "1 Bowl",
            nutrients: {
                calories: 120,
                phytoDensity: "Maximum",
                minerals: [{ name: "Enzymes", value: "Active", unit: "" }, { name: "Protein", value: 9, unit: "g" }]
            },
            clinical: {
                benefit: "Living Enzyme Uptake",
                indications: ["Digestion"]
            },
            method: ["Sprout dal for 24h.", "Toss with diced veg.", "Lemon dressing."],
            image: "/recipe_detox_bowl_8k.png"
        },
        {
            id: 'md-3',
            name: "Digestive Khichdi Algorithm",
            description: "The ultimate gut-healing comfort food, cooked to a porridge.",
            products: ["Moong Dal"],
            time: "30 mins",
            serves: "2 Bowls",
            nutrients: {
                calories: 250,
                phytoDensity: "Medium",
                minerals: [{ name: "Carbs", value: 40, unit: "g" }, { name: "Hydration", value: "High", unit: "" }]
            },
            clinical: {
                benefit: "Gut Mucosa Repair",
                indications: ["Post-Illness"]
            },
            method: ["Combine rice and dal.", "Overcook with turmeric.", "Serve with ghee."],
            image: "/recipe_khichdi_8k.png"
        }
    ];

    const toggleIngredient = (ing) => {
        setSelectedIngredients(prev =>
            prev.includes(ing) ? prev.filter(i => i !== ing) : [...prev, ing]
        );
    };

    const filteredRecipes = recipes.filter(recipe => {
        const matchesSearch = recipe.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
            recipe.products.some(p => p.toLowerCase().includes(searchQuery.toLowerCase()));

        const matchesIngredients = selectedIngredients.length === 0 ||
            selectedIngredients.some(si => recipe.products.includes(si));

        return matchesSearch && matchesIngredients;
    });

    return (
        <div className="recipe-lab-page" style={{
            minHeight: '100vh',
            backgroundColor: 'var(--color-bg-light)',
            backgroundImage: 'url("/luxury_culinary_lab_8k.png")',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundAttachment: 'fixed',
            padding: '6rem 1rem',
            color: 'var(--color-text-main)',
            fontFamily: 'var(--font-sans)',
            overflowX: 'hidden'
        }}>
            {/* Ambient overlay - Blends luxury dark background with light UI */}
            <div style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', background: 'rgba(253, 252, 248, 0.4)', zIndex: 0 }}></div>

            <button
                onClick={onBack}
                style={{
                    position: 'absolute',
                    top: '2rem',
                    left: '2rem',
                    background: 'rgba(255,255,255,0.6)',
                    border: '1px solid rgba(28, 25, 23, 0.1)',
                    padding: '0.6rem 1.2rem',
                    borderRadius: '99px',
                    color: 'var(--color-primary)',
                    cursor: 'pointer',
                    fontSize: '0.7rem',
                    fontWeight: '700',
                    textTransform: 'uppercase',
                    letterSpacing: '0.1em',
                    zIndex: 10,
                    backdropFilter: 'blur(10px)',
                    boxShadow: 'var(--shadow-sm)'
                }}
            >
                ← Return to Store
            </button>

            <div className="container" style={{ maxWidth: '1200px', position: 'relative', zIndex: 1 }}>
                <div style={{ textAlign: 'center', marginBottom: '5rem' }}>
                    <div style={{ color: 'var(--color-primary)', fontSize: '0.75rem', fontWeight: '800', letterSpacing: '0.4em', textTransform: 'uppercase', marginBottom: '1.5rem' }}>
                        Precision Culinary Engineering
                    </div>
                    <h1 style={{ fontSize: 'clamp(3rem, 6vw, 5rem)', fontWeight: '300', fontFamily: 'var(--font-serif)', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--color-text-main)' }}>
                        RECIPE <span style={{ color: 'var(--color-primary)', fontStyle: 'italic' }}>LAB</span>
                    </h1>
                </div>

                {!selectedRecipe && (
                    <div className="synthesis-engine" style={{
                        background: 'rgba(255, 255, 255, 0.7)',
                        backdropFilter: 'blur(20px)',
                        border: '1px solid rgba(255, 255, 255, 0.5)',
                        borderRadius: '2rem',
                        padding: '4rem',
                        marginBottom: '6rem',
                        boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.05), inset 0 0 0 1px rgba(255,255,255,0.5)',
                        position: 'relative',
                        overflow: 'hidden'
                    }}>
                        {/* Decorative Gradient Glow */}
                        <div style={{
                            position: 'absolute', top: -100, right: -100, width: 300, height: 300,
                            background: 'radial-gradient(circle, rgba(74, 222, 128, 0.15) 0%, transparent 70%)',
                            filter: 'blur(50px)', pointerEvents: 'none'
                        }} />

                        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '3rem' }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                                <div style={{
                                    padding: '0.8rem', background: 'white', borderRadius: '50%',
                                    boxShadow: '0 4px 12px rgba(0,0,0,0.05)', display: 'flex'
                                }}>
                                    <Cpu color="var(--color-primary)" size={20} strokeWidth={1.5} />
                                </div>
                                <div>
                                    <h2 style={{ fontSize: '0.9rem', fontWeight: '800', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--color-text-main)', margin: 0 }}>
                                        Clinical Synthesis Engine
                                    </h2>
                                    <div style={{ fontSize: '0.6rem', color: 'var(--color-primary)', letterSpacing: '0.1em', fontWeight: '700', marginTop: '0.2rem' }}>
                                        VERSION 3.0 • ONLINE
                                    </div>
                                </div>
                            </div>
                            {selectedIngredients.length > 0 && (
                                <button
                                    onClick={() => setSelectedIngredients([])}
                                    style={{
                                        background: 'rgba(239, 68, 68, 0.1)', border: 'none', color: '#ef4444',
                                        fontSize: '0.7rem', fontWeight: '700', cursor: 'pointer',
                                        padding: '0.6rem 1.2rem', borderRadius: '99px',
                                        transition: 'all 0.2s'
                                    }}
                                >
                                    RESET RACK
                                </button>
                            )}
                        </div>

                        <div style={{ marginBottom: '3rem' }}>
                            <div style={{
                                display: 'flex', alignItems: 'center', gap: '1rem',
                                background: 'white', padding: '1rem 1.5rem', borderRadius: '1rem',
                                border: '1px solid rgba(28, 25, 23, 0.05)',
                                boxShadow: 'inset 0 2px 4px rgba(0,0,0,0.02)'
                            }}>
                                <Fingerprint size={18} color="var(--color-text-muted)" />
                                <input
                                    type="text"
                                    placeholder="INITIATE SEARCH PROTOCOL..."
                                    value={searchQuery}
                                    onChange={(e) => setSearchQuery(e.target.value)}
                                    style={{
                                        border: 'none', background: 'none', outline: 'none', width: '100%',
                                        fontSize: '0.8rem', letterSpacing: '0.1em', color: 'var(--color-text-main)', fontWeight: '600'
                                    }}
                                />
                            </div>
                        </div>

                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '1rem' }}>
                            {availableIngredients.map(ing => (
                                <button
                                    key={ing}
                                    onClick={() => toggleIngredient(ing)}
                                    style={{
                                        padding: '1rem',
                                        borderRadius: '0.8rem',
                                        border: selectedIngredients.includes(ing) ? '2px solid var(--color-primary)' : '1px solid rgba(28, 25, 23, 0.05)',
                                        background: selectedIngredients.includes(ing) ? 'var(--color-primary-light)' : 'white',
                                        color: selectedIngredients.includes(ing) ? 'var(--color-primary)' : 'var(--color-text-muted)',
                                        fontWeight: '600',
                                        cursor: 'pointer',
                                        fontSize: '0.8rem',
                                        transition: 'all 0.2s',
                                        textAlign: 'center'
                                    }}
                                >
                                    {ing}
                                </button>
                            ))}
                        </div>
                    </div>
                )}

                <div className="outputs" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '2rem' }}>
                    {filteredRecipes.map(recipe => (
                        <div key={recipe.id}
                            onClick={() => setSelectedRecipe(recipe)}
                            className="recipe-card-3d"
                            style={{
                                background: 'white',
                                borderRadius: '1.5rem',
                                overflow: 'hidden',
                                boxShadow: '0 4px 6px rgba(0,0,0,0.02)',
                                cursor: 'pointer',
                                transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                                border: '1px solid rgba(28, 25, 23, 0.05)',
                                position: 'relative'
                            }}
                            onMouseEnter={(e) => {
                                e.currentTarget.style.transform = 'translateY(-10px) rotateX(2deg)';
                                e.currentTarget.style.boxShadow = '0 20px 40px rgba(0,0,0,0.08)';
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.transform = 'translateY(0) rotateX(0)';
                                e.currentTarget.style.boxShadow = '0 4px 6px rgba(0,0,0,0.02)';
                            }}
                        >
                            <div style={{ height: '220px', overflow: 'hidden' }}>
                                <img src={recipe.image} alt={recipe.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                            </div>
                            <div style={{ padding: '2rem' }}>
                                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '1rem' }}>
                                    <div style={{ fontSize: '0.7rem', fontWeight: '700', color: 'var(--color-primary)', textTransform: 'uppercase', letterSpacing: '0.1em' }}>
                                        {recipe.nutrients.phytoDensity} DENSITY
                                    </div>
                                    <div style={{ fontSize: '0.7rem', color: 'var(--color-text-muted)', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                                        <Clock size={12} /> {recipe.time}
                                    </div>
                                </div>
                                <h3 style={{ fontSize: '1.4rem', fontFamily: 'var(--font-serif)', marginBottom: '0.8rem', color: 'var(--color-text-main)' }}>
                                    {recipe.name}
                                </h3>
                                <p style={{ fontSize: '0.9rem', color: 'var(--color-text-muted)', lineHeight: '1.6', marginBottom: '1.5rem' }}>
                                    {recipe.description}
                                </p>
                                <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
                                    {recipe.products.map((p, i) => (
                                        <span key={i} style={{ fontSize: '0.7rem', background: 'var(--color-bg-light)', padding: '0.4rem 0.8rem', borderRadius: '4px', color: 'var(--color-text-main)', fontWeight: '500' }}>
                                            {p}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* FULL SCREEN MODAL */}
            {selectedRecipe && (
                <div style={{
                    position: 'fixed', top: 0, left: 0, width: '100%', height: '100%',
                    background: 'rgba(255,255,255,0.95)', backdropFilter: 'blur(20px)',
                    zIndex: 200, overflowY: 'auto', padding: '4rem 0'
                }}>
                    <div className="container" style={{ maxWidth: '800px' }}>
                        <button onClick={() => setSelectedRecipe(null)} style={{
                            position: 'absolute', top: '2rem', right: '2rem',
                            background: '#f1f5f9', border: 'none', width: '40px', height: '40px', borderRadius: '50%',
                            fontSize: '1.5rem', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center'
                        }}>×</button>

                        <div style={{ marginBottom: '4rem', textAlign: 'center' }}>
                            <div style={{ fontSize: '0.8rem', color: 'var(--color-primary)', fontWeight: 'bold', letterSpacing: '0.2em', textTransform: 'uppercase', marginBottom: '1rem' }}>
                                CLINICAL PROTOCOL
                            </div>
                            <h1 style={{ fontSize: '4rem', fontFamily: 'var(--font-serif)', marginBottom: '2rem', color: 'var(--color-text-main)' }}>
                                {selectedRecipe.name}
                            </h1>
                            <p style={{ fontSize: '1.2rem', color: 'var(--color-text-muted)', maxWidth: '600px', margin: '0 auto', lineHeight: '1.8' }}>
                                {selectedRecipe.description}
                            </p>
                        </div>

                        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', marginBottom: '6rem' }}>
                            <div>
                                <h3 style={{ fontSize: '1.2rem', fontWeight: '800', marginBottom: '2rem', display: 'flex', alignItems: 'center', gap: '0.8rem' }}>
                                    <Activity size={20} color="var(--color-primary)" />
                                    Molecular Profile
                                </h3>
                                <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                                    {selectedRecipe.nutrients.minerals.map((m, i) => (
                                        <div key={i} style={{ display: 'flex', justifyContent: 'space-between', padding: '1rem', background: 'white', borderRadius: '0.8rem', boxShadow: '0 2px 4px rgba(0,0,0,0.02)', border: '1px solid #f1f5f9' }}>
                                            <span style={{ color: 'var(--color-text-light)', fontWeight: '500' }}>{m.name}</span>
                                            <span style={{ fontWeight: '700', color: 'var(--color-text-main)' }}>{m.value} {m.unit}</span>
                                        </div>
                                    ))}
                                    <div style={{ marginTop: '1rem', padding: '1.5rem', background: 'rgba(56, 189, 248, 0.1)', borderRadius: '1rem', border: '1px solid rgba(56, 189, 248, 0.2)' }}>
                                        <div style={{ fontSize: '0.8rem', color: '#0ea5e9', fontWeight: '700', marginBottom: '0.5rem', letterSpacing: '0.1em' }}>TARGET INDICATION</div>
                                        <div style={{ fontSize: '1.1rem', fontWeight: '700', color: '#0284c7' }}>{selectedRecipe.clinical.benefit}</div>
                                    </div>
                                </div>
                            </div>

                            <div>
                                <h3 style={{ fontSize: '1.2rem', fontWeight: '800', marginBottom: '2rem', display: 'flex', alignItems: 'center', gap: '0.8rem' }}>
                                    <Layers size={20} color="var(--color-primary)" />
                                    Synthesis Steps
                                </h3>
                                <div style={{ position: 'relative', paddingLeft: '2rem' }}>
                                    <div style={{ position: 'absolute', left: '7px', top: '10px', bottom: '10px', width: '2px', background: '#f1f5f9' }}></div>
                                    {selectedRecipe.method.map((step, i) => (
                                        <div key={i} style={{ marginBottom: '2rem', position: 'relative' }}>
                                            <div style={{ position: 'absolute', left: '-2.4rem', top: '0', width: '16px', height: '16px', background: 'var(--color-primary)', borderRadius: '50%', border: '4px solid white' }}></div>
                                            <div style={{ fontSize: '0.9rem', color: 'var(--color-text-light)', fontWeight: '600', marginBottom: '0.3rem' }}>STEP 0{i + 1}</div>
                                            <div style={{ fontSize: '1.1rem', color: 'var(--color-text-main)' }}>{step}</div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            )}
        </div>
    );
};

export default RecipeLab;
