import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, Star, Plus, Minus, ShoppingCart, Clock, Flame } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { getDishById, getDishesByCategory, Dish } from "@/data/dishes";
import { useCart } from "@/context/CartContext";
import { useState } from "react";
import DishCard from "@/components/features/DishCard";

const DishDetails = () => {
  const { id } = useParams<{ id: string }>();
  const dish = getDishById(id || "");
  const { addToCart, setIsOpen } = useCart();
  const [quantity, setQuantity] = useState(1);
  const [isAdded, setIsAdded] = useState(false);

  if (!dish) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <span className="text-6xl block mb-4">🍽️</span>
          <h1 className="font-display text-2xl font-bold mb-4">Dish not found</h1>
          <Link to="/menu">
            <Button variant="outline">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Menu
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  const relatedDishes = getDishesByCategory(dish.category)
    .filter((d) => d.id !== dish.id)
    .slice(0, 4);

  const handleAddToCart = () => {
    for (let i = 0; i < quantity; i++) {
      addToCart(dish);
    }
    setIsAdded(true);
    setTimeout(() => {
      setIsAdded(false);
      setIsOpen(true);
    }, 500);
  };

  return (
    <div className="min-h-screen">
      {/* Back Button */}
      <div className="container mx-auto px-4 pt-4">
        <Link to="/menu">
          <Button variant="ghost" className="text-muted-foreground hover:text-foreground">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Menu
          </Button>
        </Link>
      </div>

      {/* Main Content */}
      <section className="py-8 md:py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            {/* Image Section */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              className="relative"
            >
              <div className="aspect-square rounded-2xl overflow-hidden">
                <img
                  src={dish.image}
                  alt={dish.name}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Badges */}
              <div className="absolute top-4 left-4 flex gap-2">
                {dish.isBestSeller && (
                  <Badge className="bg-primary text-primary-foreground">
                    <Flame className="mr-1 h-3 w-3" />
                    Best Seller
                  </Badge>
                )}
                {dish.isPopular && (
                  <Badge className="bg-accent text-accent-foreground">Popular</Badge>
                )}
              </div>
            </motion.div>

            {/* Details Section */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              className="flex flex-col"
            >
              <span className="text-primary text-sm font-medium uppercase tracking-wider mb-2">
                {dish.category.replace("-", " ")}
              </span>

              <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
                {dish.name}
              </h1>

              {/* Rating */}
              <div className="flex items-center gap-2 mb-6">
                <div className="flex items-center gap-1">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      className={`h-5 w-5 ${
                        i < Math.floor(dish.rating)
                          ? "fill-primary text-primary"
                          : "text-muted-foreground"
                      }`}
                    />
                  ))}
                </div>
                <span className="text-muted-foreground">({dish.rating})</span>
              </div>

              {/* Price */}
              <div className="flex items-baseline gap-2 mb-6">
                <span className="font-display text-4xl font-bold text-primary">
                  Rs.{Math.round(dish.price * 280).toFixed(0)}
                </span>
              </div>

              {/* Description */}
              <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                {dish.description}
              </p>

              {/* Ingredients */}
              <div className="mb-8">
                <h3 className="font-display text-lg font-semibold mb-3">Ingredients</h3>
                <div className="flex flex-wrap gap-2">
                  {dish.ingredients.map((ingredient) => (
                    <Badge
                      key={ingredient}
                      variant="outline"
                      className="bg-secondary border-border/50 text-foreground"
                    >
                      {ingredient}
                    </Badge>
                  ))}
                </div>
              </div>

              {/* Prep Time */}
              <div className="flex items-center gap-2 text-muted-foreground mb-8">
                <Clock className="h-5 w-5" />
                <span>Prep time: 15-25 minutes</span>
              </div>

              {/* Quantity & Add to Cart */}
              <div className="flex flex-wrap items-center gap-4 mt-auto">
                <div className="flex items-center gap-3 bg-secondary rounded-full p-1">
                  <Button
                    variant="ghost"
                    size="icon"
                    className="h-10 w-10 rounded-full"
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  >
                    <Minus className="h-4 w-4" />
                  </Button>
                  <span className="font-semibold w-8 text-center">{quantity}</span>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="h-10 w-10 rounded-full"
                    onClick={() => setQuantity(quantity + 1)}
                  >
                    <Plus className="h-4 w-4" />
                  </Button>
                </div>

                <Button
                  size="lg"
                  onClick={handleAddToCart}
                  className={`flex-1 h-14 text-lg font-semibold transition-all ${
                    isAdded ? "bg-green-500" : "gradient-button"
                  }`}
                >
                  {isAdded ? (
                    <>
                      <ShoppingCart className="mr-2 h-5 w-5" />
                      Added to Cart!
                    </>
                  ) : (
                    <>
                      <Plus className="mr-2 h-5 w-5" />
                      Add to Cart — Rs.{Math.round(dish.price * 280 * quantity).toFixed(0)}
                    </>
                  )}
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Related Dishes */}
      {relatedDishes.length > 0 && (
        <section className="py-12 md:py-16 bg-card/30">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-10"
            >
              <h2 className="font-display text-2xl md:text-3xl font-bold">
                You Might Also Like
              </h2>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {relatedDishes.map((dish, index) => (
                <DishCard key={dish.id} dish={dish} index={index} />
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
};

export default DishDetails;
