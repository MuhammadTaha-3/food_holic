import { motion } from "framer-motion";
import { Users, Award, Heart, Globe } from "lucide-react";

const stats = [
  { icon: Users, value: "50K+", label: "Happy Customers" },
  { icon: Award, value: "15+", label: "Culinary Awards" },
  { icon: Heart, value: "100+", label: "Signature Dishes" },
  { icon: Globe, value: "7", label: "Cuisine Types" },
];

const teamMembers = [
  {
    name: "Chef Marco Rossi",
    role: "Executive Chef",
    image: "https://images.unsplash.com/photo-1577219491135-ce391730fb2c?w=400",
    description: "20 years of culinary excellence from Italy",
  },
  {
    name: "Sarah Chen",
    role: "Pastry Chef",
    image: "https://images.unsplash.com/photo-1583394293214-28ez7f2c0fe7?w=400",
    description: "Award-winning dessert innovator",
  },
  {
    name: "Ahmed Hassan",
    role: "Grill Master",
    image: "https://images.unsplash.com/photo-1607631568010-a87245c0daf8?w=400",
    description: "BBQ specialist with secret recipes",
  },
];

const About = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 md:py-32 bg-card/50 overflow-hidden">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Our <span className="gradient-text">Story</span>
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Born from a passion for exceptional food and unforgettable experiences, 
              FlavorVerse brings together the world's finest cuisines under one roof. 
              Every dish tells a story of tradition, innovation, and love.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <img
                src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800"
                alt="Restaurant interior"
                className="rounded-2xl shadow-2xl"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="font-display text-3xl md:text-4xl font-bold mb-6">
                Where Every Meal Becomes a <span className="gradient-text">Memory</span>
              </h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  Founded in 2018, FlavorVerse started as a small kitchen with a big dream: 
                  to create a place where food lovers could embark on a global culinary journey 
                  without leaving their neighborhood.
                </p>
                <p>
                  Our chefs travel the world, learning authentic techniques and sourcing the 
                  finest ingredients to bring you dishes that are both true to their origins 
                  and crafted with modern expertise.
                </p>
                <p>
                  Today, we're proud to serve over 50,000 happy customers, each meal prepared 
                  with the same passion and attention to detail that started it all.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 md:py-20 bg-card/50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-primary/10 flex items-center justify-center">
                  <stat.icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="font-display text-3xl md:text-4xl font-bold gradient-text">
                  {stat.value}
                </h3>
                <p className="text-muted-foreground">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
              Meet Our <span className="gradient-text">Culinary Team</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              The talented chefs behind every delicious dish
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="food-card text-center p-6"
              >
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-32 h-32 rounded-full object-cover mx-auto mb-4 border-4 border-primary/20"
                />
                <h3 className="font-display text-xl font-semibold">{member.name}</h3>
                <p className="text-primary text-sm mb-2">{member.role}</p>
                <p className="text-muted-foreground text-sm">{member.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 md:py-24 bg-card/50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-6">
              Our <span className="gradient-text">Mission</span>
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              To deliver not just meals, but moments of joy. We believe food has the power 
              to bring people together, create memories, and transport you to different 
              corners of the world. Every ingredient is carefully selected, every dish 
              is crafted with love, and every customer is treated like family.
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default About;
