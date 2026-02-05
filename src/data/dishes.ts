export interface Dish {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  category: string;
  rating: number;
  ingredients: string[];
  isPopular?: boolean;
  isBestSeller?: boolean;
}

export interface Category {
  id: string;
  name: string;
  icon: string;
  description: string;
}

export const categories: Category[] = [
  { id: "fast-food", name: "Fast Food", icon: "🍔", description: "Quick bites that satisfy" },
  { id: "desi", name: "Desi", icon: "🍛", description: "Authentic subcontinental flavors" },
  { id: "chinese", name: "Chinese", icon: "🥡", description: "Oriental delights" },
  { id: "italian", name: "Italian", icon: "🍝", description: "Classic Mediterranean cuisine" },
  { id: "bbq", name: "BBQ", icon: "🍖", description: "Smoky grilled perfection" },
  { id: "desserts", name: "Desserts", icon: "🍰", description: "Sweet endings" },
  { id: "drinks", name: "Drinks", icon: "🥤", description: "Refreshing beverages" },
];

export const dishes: Dish[] = [
  // Fast Food
  {
    id: "classic-burger",
    name: "Classic Smash Burger",
    description: "Juicy double-smashed patties with melted cheddar, caramelized onions, pickles, and our secret sauce",
    price: 12.99,
    image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=800",
    category: "fast-food",
    rating: 4.9,
    ingredients: ["Beef patty", "Cheddar cheese", "Caramelized onions", "Pickles", "Secret sauce", "Brioche bun"],
    isPopular: true,
    isBestSeller: true,
  },
  {
    id: "loaded-fries",
    name: "Loaded Cheese Fries",
    description: "Crispy golden fries topped with melted cheese, bacon bits, jalapeños, and sour cream",
    price: 8.99,
    image: "https://images.unsplash.com/photo-1573080496219-bb080dd4f877?w=800",
    category: "fast-food",
    rating: 4.7,
    ingredients: ["Fries", "Cheddar cheese", "Bacon", "Jalapeños", "Sour cream"],
    isPopular: true,
  },
  {
    id: "crispy-chicken",
    name: "Crispy Chicken Sandwich",
    description: "Buttermilk-brined chicken thigh, perfectly fried, with spicy mayo and pickles",
    price: 11.99,
    image: "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?w=800",
    category: "fast-food",
    rating: 4.8,
    ingredients: ["Chicken thigh", "Buttermilk", "Spicy mayo", "Pickles", "Brioche bun"],
  },
  // Desi
  {
    id: "butter-chicken",
    name: "Butter Chicken",
    description: "Tender chicken in a rich, creamy tomato-based curry with aromatic spices",
    price: 16.99,
    image: "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?w=800",
    category: "desi",
    rating: 4.9,
    ingredients: ["Chicken", "Tomato", "Cream", "Butter", "Garam masala", "Kasuri methi"],
    isPopular: true,
    isBestSeller: true,
  },
  {
    id: "biryani",
    name: "Hyderabadi Biryani",
    description: "Fragrant basmati rice layered with spiced meat, saffron, and caramelized onions",
    price: 4.29, // Approximately 1200 PKR when converted at 280 rate
    image: "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?w=800",
    category: "desi",
    rating: 4.9,
    ingredients: ["Basmati rice", "Lamb", "Saffron", "Fried onions", "Mint", "Yogurt"],
    isBestSeller: true,
  },
  {
    id: "seekh-kebab",
    name: "Seekh Kebab Platter",
    description: "Minced lamb kebabs grilled to perfection, served with naan and chutney",
    price: 14.99,
    image: "https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?w=800",
    category: "desi",
    rating: 4.7,
    ingredients: ["Lamb mince", "Onions", "Spices", "Cilantro", "Naan", "Mint chutney"],
  },
  // Chinese
  {
    id: "sweet-sour-pork",
    name: "Sweet and Sour Pork",
    description: "Crispy pork chunks in tangy sweet and sour sauce with pineapple and bell peppers",
    price: 16.99,
    image: "https://images.unsplash.com/photo-1631515243349-e0cb75fb8d3a?w=800",
    category: "chinese",
    rating: 4.7,
    ingredients: ["Pork", "Pineapple", "Bell peppers", "Sweet and sour sauce", "Rice"],
    isPopular: true,
  },
  {
    id: "dim-sum",
    name: "Dumplings",
    description: "Assorted steamed dumplings including har gow, siu mai, and char siu bao",
    price: 1.78, // Approximately 499 PKR when converted at 280 rate
    image: "https://images.unsplash.com/photo-1496116218417-1a781b1c416c?w=800",
    category: "chinese",
    rating: 4.8,
    ingredients: ["Shrimp", "Pork", "Bamboo shoots", "Rice flour", "Wheat starch"],
    isBestSeller: true,
  },
  {
    id: "chow-mein",
    name: "Vegetable Chow Mein",
    description: "Stir-fried noodles with fresh vegetables in a savory sauce",
    price: 12.99,
    image: "https://images.unsplash.com/photo-1585032226651-759b368d7246?w=800",
    category: "chinese",
    rating: 4.5,
    ingredients: ["Egg noodles", "Cabbage", "Carrots", "Bean sprouts", "Soy sauce"],
  },
  // Italian
  {
    id: "margherita-pizza",
    name: "Margherita Pizza",
    description: "San Marzano tomatoes, fresh mozzarella, basil on our wood-fired crust",
    price: 17.99,
    image: "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=800",
    category: "italian",
    rating: 4.8,
    ingredients: ["Pizza dough", "San Marzano tomatoes", "Fresh mozzarella", "Basil", "Olive oil"],
    isPopular: true,
  },
  {
    id: "carbonara",
    name: "Spaghetti Carbonara",
    description: "Classic Roman pasta with guanciale, pecorino, egg yolk, and black pepper",
    price: 16.99,
    image: "https://images.unsplash.com/photo-1612874742237-6526221588e3?w=800",
    category: "italian",
    rating: 4.9,
    ingredients: ["Spaghetti", "Guanciale", "Pecorino Romano", "Egg yolks", "Black pepper"],
    isBestSeller: true,
  },
  {
    id: "tiramisu",
    name: "Classic Tiramisu",
    description: "Layers of espresso-soaked ladyfingers and mascarpone cream",
    price: 9.99,
    image: "https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?w=800",
    category: "italian",
    rating: 4.8,
    ingredients: ["Mascarpone", "Espresso", "Ladyfingers", "Cocoa", "Egg yolks"],
  },
  // BBQ
  {
    id: "smoked-ribs",
    name: "Smoked Baby Back Ribs",
    description: "Slow-smoked for 12 hours, glazed with our signature BBQ sauce",
    price: 24.99,
    image: "https://images.unsplash.com/photo-1544025162-d76694265947?w=800",
    category: "bbq",
    rating: 4.9,
    ingredients: ["Pork ribs", "BBQ sauce", "Dry rub", "Apple wood"],
    isPopular: true,
    isBestSeller: true,
  },
  {
    id: "brisket",
    name: "Texas Brisket",
    description: "18-hour smoked beef brisket with a perfect bark and smoke ring",
    price: 26.99,
    image: "https://images.unsplash.com/photo-1529193591184-b1d58069ecdd?w=800",
    category: "bbq",
    rating: 4.9,
    ingredients: ["Beef brisket", "Salt", "Black pepper", "Oak wood"],
    isBestSeller: true,
  },
  {
    id: "pulled-pork",
    name: "Carolina Pulled Pork",
    description: "Tender pulled pork shoulder with tangy vinegar-based sauce",
    price: 15.99,
    image: "https://images.unsplash.com/photo-1623653387945-2fd25214f8fc?w=800",
    category: "bbq",
    rating: 4.7,
    ingredients: ["Pork shoulder", "Vinegar sauce", "Coleslaw", "Brioche bun"],
  },
  // Desserts
  {
    id: "chocolate-lava",
    name: "Chocolate Lava Cake",
    description: "Warm chocolate cake with a molten center, served with vanilla ice cream",
    price: 2.50, // Under 700 PKR
    image: "https://images.unsplash.com/photo-1624353365286-3f8d62daad51?w=800",
    category: "desserts",
    rating: 4.9,
    ingredients: ["Dark chocolate", "Butter", "Eggs", "Flour", "Vanilla ice cream"],
    isPopular: true,
    isBestSeller: true,
  },
  {
    id: "cheesecake",
    name: "New York Cheesecake",
    description: "Creamy, dense cheesecake with a graham cracker crust and berry compote",
    price: 2.20, // Under 620 PKR
    image: "https://images.unsplash.com/photo-1533134242443-d4fd215305ad?w=800",
    category: "desserts",
    rating: 4.8,
    ingredients: ["Cream cheese", "Graham crackers", "Sugar", "Eggs", "Vanilla"],
  },
  {
    id: "creme-brulee",
    name: "Classic Crème Brûlée",
    description: "Silky vanilla custard with a caramelized sugar crust",
    price: 2.00, // Under 560 PKR
    image: "https://images.unsplash.com/photo-1470124182917-cc6e71b22ecc?w=800",
    category: "desserts",
    rating: 4.7,
    ingredients: ["Heavy cream", "Vanilla bean", "Egg yolks", "Sugar"],
  },
  // Drinks
  {
    id: "raspberry-blueberry-shake",
    name: "Raspberry Blueberry Shake",
    description: "Delicious blend of fresh raspberries and blueberries with creamy vanilla base",
    price: 2.10, // Around 590 PKR
    image: "https://images.unsplash.com/photo-1553530666-ba11a7da3888?w=800",
    category: "drinks",
    rating: 4.9,
    ingredients: ["Raspberries", "Blueberries", "Vanilla ice cream", "Milk", "Honey"],
    isPopular: true,
  },
  {
    id: "iced-coffee",
    name: "Vietnamese Iced Coffee",
    description: "Strong coffee with sweetened condensed milk over ice",
    price: 1.50, // Around 420 PKR
    image: "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=800",
    category: "drinks",
    rating: 4.6,
    ingredients: ["Vietnamese coffee", "Condensed milk", "Ice"],
  },
  {
    id: "fresh-lemonade",
    name: "Fresh Mint Lemonade",
    description: "House-made lemonade with fresh mint and a hint of ginger",
    price: 1.25, // Around 350 PKR
    image: "https://images.unsplash.com/photo-1621263764928-df1444c5e859?w=800",
    category: "drinks",
    rating: 4.5,
    ingredients: ["Lemons", "Fresh mint", "Ginger", "Sugar", "Sparkling water"],
  },
];

export const testimonials = [
  {
    id: 1,
    name: "Sarah Mitchell",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200",
    rating: 5,
    text: "The butter chicken here is absolutely divine! It reminds me of the authentic flavors I tasted in Delhi. Will definitely be ordering again!",
  },
  {
    id: 2,
    name: "James Chen",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200",
    rating: 5,
    text: "Best smoked ribs I've ever had! The meat falls right off the bone and the BBQ sauce is perfectly balanced. A must-try!",
  },
  {
    id: 3,
    name: "Emily Rodriguez",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200",
    rating: 5,
    text: "The chocolate lava cake is pure heaven. Warm, gooey center with that perfect vanilla ice cream. Date night favorite!",
  },
  {
    id: 4,
    name: "Michael Thompson",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200",
    rating: 4,
    text: "Amazing variety of cuisines! From Italian to Desi, everything is prepared with such care and attention to detail.",
  },
];

export const getDishById = (id: string): Dish | undefined => {
  return dishes.find(dish => dish.id === id);
};

export const getDishesByCategory = (categoryId: string): Dish[] => {
  return dishes.filter(dish => dish.category === categoryId);
};

export const searchDishes = (query: string): Dish[] => {
  const lowercaseQuery = query.toLowerCase();
  return dishes.filter(dish => 
    dish.name.toLowerCase().includes(lowercaseQuery) ||
    dish.description.toLowerCase().includes(lowercaseQuery) ||
    dish.ingredients.some(ingredient => ingredient.toLowerCase().includes(lowercaseQuery))
  );
};

export const getPopularDishes = (): Dish[] => {
  return dishes.filter(dish => dish.isPopular);
};

export const getBestSellers = (): Dish[] => {
  return dishes.filter(dish => dish.isBestSeller);
};
