import { motion } from "framer-motion";
import { categories } from "@/data/dishes";

interface CategoryFilterProps {
  activeCategory: string;
  onCategoryChange: (category: string) => void;
}

const CategoryFilter = ({ activeCategory, onCategoryChange }: CategoryFilterProps) => {
  return (
    <div className="flex flex-wrap justify-center gap-3 md:gap-4">
      {/* All Categories Button */}
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => onCategoryChange("all")}
        className={`relative px-4 md:px-6 py-2 md:py-3 rounded-full font-medium text-sm md:text-base transition-colors ${
          activeCategory === "all"
            ? "text-primary-foreground"
            : "text-muted-foreground hover:text-foreground bg-secondary"
        }`}
      >
        {activeCategory === "all" && (
          <motion.div
            layoutId="activeCategory"
            className="absolute inset-0 gradient-button rounded-full -z-10"
          />
        )}
        <span className="flex items-center gap-2">
          <span>🍴</span>
          <span>All</span>
        </span>
      </motion.button>

      {/* Category Buttons */}
      {categories.map((category) => (
        <motion.button
          key={category.id}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => onCategoryChange(category.id)}
          className={`relative px-4 md:px-6 py-2 md:py-3 rounded-full font-medium text-sm md:text-base transition-colors ${
            activeCategory === category.id
              ? "text-primary-foreground"
              : "text-muted-foreground hover:text-foreground bg-secondary"
          }`}
        >
          {activeCategory === category.id && (
            <motion.div
              layoutId="activeCategory"
              className="absolute inset-0 gradient-button rounded-full -z-10"
            />
          )}
          <span className="flex items-center gap-2">
            <span>{category.icon}</span>
            <span className="hidden sm:inline">{category.name}</span>
          </span>
        </motion.button>
      ))}
    </div>
  );
};

export default CategoryFilter;
