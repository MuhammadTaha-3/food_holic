import { motion } from "framer-motion";
import { Star, Plus, ShoppingCart } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Dish } from "@/data/dishes";
import { useCart } from "@/context/CartContext";
import { useState } from "react";

interface DishCardProps {
  dish: Dish;
  index?: number;
}

const DishCard = ({ dish, index = 0 }: DishCardProps) => {
  const { addToCart } = useCart();
  const [isAdded, setIsAdded] = useState(false);

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    addToCart(dish);
    setIsAdded(true);
    setTimeout(() => setIsAdded(false), 1500);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <Link to={`/dish/${dish.id}`}>
        <div className="food-card group cursor-pointer">
          {/* Image Container */}
          <div className="relative overflow-hidden aspect-video">
            <img
              src={dish.image}
              alt={dish.name}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
            
            {/* Badges */}
            <div className="absolute top-3 left-3 flex gap-2">
              {dish.isBestSeller && (
                <Badge className="bg-primary text-primary-foreground text-xs">
                  Best Seller
                </Badge>
              )}
              {dish.isPopular && !dish.isBestSeller && (
                <Badge className="bg-accent text-accent-foreground text-xs">
                  Popular
                </Badge>
              )}
            </div>

            {/* Rating */}
            <div className="absolute top-3 right-3 flex items-center gap-1 bg-background/80 backdrop-blur-sm rounded-full px-2 py-1">
              <Star className="h-3 w-3 fill-primary text-primary" />
              <span className="text-xs font-semibold">{dish.rating}</span>
            </div>

            {/* Add to Cart Button */}
            <motion.div
              className="absolute bottom-3 right-3"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button
                size="icon"
                onClick={handleAddToCart}
                className={`h-8 w-8 rounded-full shadow-lg transition-all duration-300 ${
                  isAdded
                    ? "bg-green-500 text-white"
                    : "gradient-button"
                }`}
              >
                {isAdded ? (
                  <ShoppingCart className="h-3 w-3" />
                ) : (
                  <Plus className="h-3 w-3" />
                )}
              </Button>
            </motion.div>
          </div>

          {/* Content */}
          <div className="p-3">
            <h3 className="font-display text-base font-semibold line-clamp-1 group-hover:text-primary transition-colors">
              {dish.name}
            </h3>
            <p className="text-muted-foreground text-xs mt-1 line-clamp-2">
              {dish.description}
            </p>
            <div className="flex items-center justify-between mt-2">
              <span className="text-lg font-bold text-primary">
                Rs.{Math.round(dish.price * 280).toFixed(0)} {/* Direct conversion at 280 PKR per dollar */}
              </span>
              <span className="text-xs text-muted-foreground uppercase tracking-wider">
                {dish.category.replace("-", " ")}
              </span>
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
};

export default DishCard;
