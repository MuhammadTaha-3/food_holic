import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Utensils, Clock, Star, Truck } from "lucide-react";
import { Button } from "@/components/ui/button";
import DishCard from "@/components/features/DishCard";
import CategoryFilter from "@/components/features/CategoryFilter";
import TestimonialCarousel from "@/components/features/TestimonialCarousel";
import { dishes, categories, getBestSellers } from "@/data/dishes";
import { useState } from "react";

const features = [
  {
    icon: Utensils,
    title: "Premium Quality",
    description: "Only the finest ingredients sourced from trusted suppliers",
  },
  {
    icon: Clock,
    title: "Fast Delivery",
    description: "Hot and fresh to your door in 30 minutes or less",
  },
  {
    icon: Star,
    title: "5-Star Rated",
    description: "Loved by over 50,000 happy customers worldwide",
  },
  {
    icon: Truck,
    title: "Free Delivery",
    description: "Complimentary delivery on orders over $25",
  },
];

const Index = () => {
  const [activeCategory, setActiveCategory] = useState("all");
  const bestSellers = getBestSellers();
  const filteredDishes = activeCategory === "all" 
    ? dishes.slice(0, 8) 
    : dishes.filter(d => d.category === activeCategory).slice(0, 8);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=1920"
            alt="Delicious food spread"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/95 to-background/60" />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
        </div>

        {/* Content */}
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-block px-4 py-2 bg-primary/20 rounded-full text-primary text-sm font-medium mb-6"
            >
              🔥 New: BBQ Season Special Menu Available
            </motion.span>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="font-display text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6"
            >
              Taste That Makes You{" "}
              <span className="gradient-text">Fall in Love</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-lg md:text-xl text-muted-foreground mb-8 max-w-xl"
            >
              Discover a world of flavors from around the globe. Hand-crafted dishes, 
              premium ingredients, and unforgettable culinary experiences await you.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="flex flex-wrap gap-4"
            >
              <Link to="/menu">
                <Button size="lg" className="gradient-button h-14 px-8 text-lg">
                  Order Now
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link to="/menu">
                <Button
                  size="lg"
                  variant="outline"
                  className="h-14 px-8 text-lg border-primary/50 hover:bg-primary/10"
                >
                  Explore Menu
                </Button>
              </Link>
            </motion.div>
          </div>
        </div>

        {/* Floating Food Images */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8, x: 100 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ delay: 0.6, type: "spring" }}
          className="absolute right-10 bottom-20 hidden lg:block"
        >
          <div className="relative">
            <motion.img
              animate={{ y: [0, -15, 0] }}
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
              src="https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=400"
              alt="Featured burger"
              className="w-64 h-64 object-cover rounded-2xl shadow-2xl border-4 border-primary/20"
            />
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ repeat: Infinity, duration: 3, ease: "easeInOut", delay: 0.5 }}
              className="absolute -bottom-10 -left-20"
            >
              <img
                src="https://images.unsplash.com/photo-1624353365286-3f8d62daad51?w=200"
                alt="Dessert"
                className="w-32 h-32 object-cover rounded-xl shadow-xl border-2 border-primary/20"
              />
            </motion.div>
          </div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
            className="w-6 h-10 rounded-full border-2 border-muted-foreground/30 flex items-start justify-center p-2"
          >
            <motion.div className="w-1 h-2 bg-primary rounded-full" />
          </motion.div>
        </motion.div>
      </section>

      {/* Features Section */}
      <section className="py-16 md:py-20 bg-card/30">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center p-4"
              >
                <div className="w-14 h-14 md:w-16 md:h-16 mx-auto mb-4 rounded-2xl bg-primary/10 flex items-center justify-center">
                  <feature.icon className="h-7 w-7 md:h-8 md:w-8 text-primary" />
                </div>
                <h3 className="font-display text-lg font-semibold mb-2">{feature.title}</h3>
                <p className="text-sm text-muted-foreground">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Best Sellers Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              Our <span className="gradient-text">Best Sellers</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              The most loved dishes that keep our customers coming back for more
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {bestSellers.slice(0, 4).map((dish, index) => (
              <DishCard key={dish.id} dish={dish} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Categories & Menu Preview */}
      <section className="py-16 md:py-24 bg-card/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              Explore Our <span className="gradient-text">Menu</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
              From savory to sweet, find your next favorite dish
            </p>
            <CategoryFilter activeCategory={activeCategory} onCategoryChange={setActiveCategory} />
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredDishes.map((dish, index) => (
              <DishCard key={dish.id} dish={dish} index={index} />
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <Link to="/menu">
              <Button size="lg" variant="outline" className="border-primary/50 hover:bg-primary/10">
                View Full Menu
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Testimonials */}
      <TestimonialCarousel />

      {/* CTA Section */}
      <section className="py-16 md:py-24 relative overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=1920"
            alt="Restaurant ambiance"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-background/90" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              Ready to Satisfy Your Cravings?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Order now and experience the taste of perfection delivered right to your doorstep.
            </p>
            <Link to="/menu">
              <Button size="lg" className="gradient-button h-14 px-10 text-lg animate-pulse-glow">
                Start Ordering
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Index;
