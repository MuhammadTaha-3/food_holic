import { useState, useMemo } from "react";
import { motion } from "framer-motion";
import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import DishCard from "@/components/features/DishCard";
import CategoryFilter from "@/components/features/CategoryFilter";
import { dishes, categories, searchDishes } from "@/data/dishes";

const Menu = () => {
  const [activeCategory, setActiveCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredDishes = useMemo(() => {
    let result = dishes;

    if (searchQuery.trim()) {
      result = searchDishes(searchQuery);
    }

    if (activeCategory !== "all") {
      result = result.filter((dish) => dish.category === activeCategory);
    }

    return result;
  }, [activeCategory, searchQuery]);

  const currentCategory = categories.find((c) => c.id === activeCategory);

  return (
    <div className="min-h-screen">
      {/* Header */}
      <section className="relative py-20 md:py-28 bg-card/50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
              Our <span className="gradient-text">Menu</span>
            </h1>
            <p className="text-muted-foreground text-lg mb-8">
              Discover our carefully curated selection of dishes from around the world
            </p>

            {/* Search Bar */}
            <div className="relative max-w-md mx-auto mb-10">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
              <Input
                type="text"
                placeholder="Search dishes..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-12 h-12 bg-secondary border-border/50 rounded-xl text-base"
              />
            </div>

            {/* Category Filter */}
            <CategoryFilter
              activeCategory={activeCategory}
              onCategoryChange={setActiveCategory}
            />
          </motion.div>
        </div>
      </section>

      {/* Menu Grid */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4">
          {/* Category Title */}
          {activeCategory !== "all" && currentCategory && (
            <motion.div
              key={activeCategory}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center mb-8"
            >
              <span className="text-5xl mb-2 block">{currentCategory.icon}</span>
              <h2 className="font-display text-2xl md:text-3xl font-bold">
                {currentCategory.name}
              </h2>
              <p className="text-muted-foreground">{currentCategory.description}</p>
            </motion.div>
          )}

          {/* Results Count */}
          <p className="text-muted-foreground text-sm mb-6 text-center">
            Showing {filteredDishes.length} {filteredDishes.length === 1 ? "dish" : "dishes"}
            {searchQuery && ` for "${searchQuery}"`}
          </p>

          {/* Dishes Grid */}
          {filteredDishes.length > 0 ? (
            <motion.div
              layout
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
            >
              {filteredDishes.map((dish, index) => (
                <DishCard key={dish.id} dish={dish} index={index} />
              ))}
            </motion.div>
          ) : (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-20"
            >
              <span className="text-6xl block mb-4">🍽️</span>
              <h3 className="font-display text-xl font-semibold text-muted-foreground mb-2">
                No dishes found
              </h3>
              <p className="text-muted-foreground">
                Try adjusting your search or filter to find what you're looking for
              </p>
            </motion.div>
          )}
        </div>
      </section>
    </div>
  );
};

export default Menu;
