import { motion } from "framer-motion";
import { 
  TrendingUp, 
  DollarSign, 
  ShoppingBag, 
  Users, 
  Star,
  ArrowUpRight,
  ArrowDownRight,
  MoreHorizontal,
  Clock
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { getBestSellers, dishes } from "@/data/dishes";
import { 
  LineChart, 
  Line, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer,
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell
} from "recharts";

const revenueData = [
  { name: "Mon", revenue: 4000, orders: 24 },
  { name: "Tue", revenue: 3000, orders: 18 },
  { name: "Wed", revenue: 5000, orders: 32 },
  { name: "Thu", revenue: 4500, orders: 28 },
  { name: "Fri", revenue: 6000, orders: 42 },
  { name: "Sat", revenue: 8000, orders: 58 },
  { name: "Sun", revenue: 7500, orders: 52 },
];

const categoryData = [
  { name: "Fast Food", value: 35, color: "#f97316" },
  { name: "Desi", value: 25, color: "#ef4444" },
  { name: "Italian", value: 15, color: "#eab308" },
  { name: "BBQ", value: 12, color: "#f59e0b" },
  { name: "Chinese", value: 8, color: "#fb923c" },
  { name: "Desserts", value: 5, color: "#fbbf24" },
];

const recentOrders = [
  { id: "#ORD-001", customer: "John Doe", items: 3, total: 45.99, status: "Delivered", time: "2 min ago" },
  { id: "#ORD-002", customer: "Sarah Smith", items: 2, total: 32.50, status: "Preparing", time: "5 min ago" },
  { id: "#ORD-003", customer: "Mike Johnson", items: 5, total: 78.25, status: "On the way", time: "12 min ago" },
  { id: "#ORD-004", customer: "Emily Brown", items: 1, total: 18.99, status: "Delivered", time: "18 min ago" },
  { id: "#ORD-005", customer: "Alex Wilson", items: 4, total: 56.00, status: "Preparing", time: "22 min ago" },
];

const statCards = [
  {
    title: "Total Revenue",
    value: "$38,500",
    change: "+12.5%",
    trend: "up",
    icon: DollarSign,
    color: "text-green-500",
  },
  {
    title: "Total Orders",
    value: "1,254",
    change: "+8.2%",
    trend: "up",
    icon: ShoppingBag,
    color: "text-primary",
  },
  {
    title: "Active Customers",
    value: "892",
    change: "+15.3%",
    trend: "up",
    icon: Users,
    color: "text-blue-500",
  },
  {
    title: "Avg Rating",
    value: "4.8",
    change: "+0.2",
    trend: "up",
    icon: Star,
    color: "text-amber-500",
  },
];

const Dashboard = () => {
  const bestSellers = getBestSellers().slice(0, 5);

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <h1 className="font-display text-3xl md:text-4xl font-bold mb-2">
            Dashboard
          </h1>
          <p className="text-muted-foreground">
            Welcome back! Here's what's happening with your restaurant today.
          </p>
        </motion.div>

        {/* Stat Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-8">
          {statCards.map((stat, index) => (
            <motion.div
              key={stat.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="bg-card border-border/50">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className={`p-2 rounded-lg bg-secondary ${stat.color}`}>
                      <stat.icon className="h-5 w-5" />
                    </div>
                    <div className={`flex items-center text-sm ${
                      stat.trend === "up" ? "text-green-500" : "text-red-500"
                    }`}>
                      {stat.trend === "up" ? (
                        <ArrowUpRight className="h-4 w-4" />
                      ) : (
                        <ArrowDownRight className="h-4 w-4" />
                      )}
                      {stat.change}
                    </div>
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold">{stat.value}</h3>
                  <p className="text-sm text-muted-foreground">{stat.title}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Charts Row */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
          {/* Revenue Chart */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="lg:col-span-2"
          >
            <Card className="bg-card border-border/50">
              <CardHeader className="flex flex-row items-center justify-between">
                <CardTitle className="font-display text-lg">Revenue Overview</CardTitle>
                <Button variant="ghost" size="icon">
                  <MoreHorizontal className="h-4 w-4" />
                </Button>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <LineChart data={revenueData}>
                    <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                    <XAxis 
                      dataKey="name" 
                      stroke="hsl(var(--muted-foreground))"
                      fontSize={12}
                    />
                    <YAxis 
                      stroke="hsl(var(--muted-foreground))"
                      fontSize={12}
                    />
                    <Tooltip 
                      contentStyle={{ 
                        backgroundColor: "hsl(var(--card))",
                        border: "1px solid hsl(var(--border))",
                        borderRadius: "8px"
                      }}
                    />
                    <Line 
                      type="monotone" 
                      dataKey="revenue" 
                      stroke="hsl(var(--primary))" 
                      strokeWidth={3}
                      dot={{ fill: "hsl(var(--primary))", strokeWidth: 2 }}
                    />
                  </LineChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
          </motion.div>

          {/* Category Distribution */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            <Card className="bg-card border-border/50 h-full">
              <CardHeader>
                <CardTitle className="font-display text-lg">Sales by Category</CardTitle>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={200}>
                  <PieChart>
                    <Pie
                      data={categoryData}
                      cx="50%"
                      cy="50%"
                      innerRadius={50}
                      outerRadius={80}
                      paddingAngle={2}
                      dataKey="value"
                    >
                      {categoryData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                    <Tooltip />
                  </PieChart>
                </ResponsiveContainer>
                <div className="flex flex-wrap gap-2 mt-4 justify-center">
                  {categoryData.slice(0, 4).map((cat) => (
                    <div key={cat.name} className="flex items-center gap-1 text-xs">
                      <div 
                        className="w-2 h-2 rounded-full" 
                        style={{ backgroundColor: cat.color }}
                      />
                      <span className="text-muted-foreground">{cat.name}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        {/* Bottom Row */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Recent Orders */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
          >
            <Card className="bg-card border-border/50">
              <CardHeader className="flex flex-row items-center justify-between">
                <CardTitle className="font-display text-lg">Recent Orders</CardTitle>
                <Button variant="ghost" size="sm">View All</Button>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {recentOrders.map((order) => (
                    <div 
                      key={order.id}
                      className="flex items-center justify-between p-3 rounded-lg bg-secondary/30"
                    >
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary font-semibold text-sm">
                          {order.customer.split(" ").map(n => n[0]).join("")}
                        </div>
                        <div>
                          <p className="font-medium text-sm">{order.customer}</p>
                          <div className="flex items-center gap-2 text-xs text-muted-foreground">
                            <span>{order.id}</span>
                            <span>•</span>
                            <span>{order.items} items</span>
                          </div>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="font-semibold text-sm">${order.total.toFixed(2)}</p>
                        <div className="flex items-center gap-1 text-xs text-muted-foreground">
                          <Clock className="h-3 w-3" />
                          {order.time}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Popular Dishes */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
          >
            <Card className="bg-card border-border/50">
              <CardHeader className="flex flex-row items-center justify-between">
                <CardTitle className="font-display text-lg">Popular Dishes</CardTitle>
                <Button variant="ghost" size="sm">View All</Button>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {bestSellers.map((dish, index) => (
                    <div 
                      key={dish.id}
                      className="flex items-center gap-4"
                    >
                      <span className="text-2xl font-bold text-muted-foreground/30 w-8">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <img 
                        src={dish.image} 
                        alt={dish.name}
                        className="w-12 h-12 rounded-lg object-cover"
                      />
                      <div className="flex-1 min-w-0">
                        <p className="font-medium text-sm truncate">{dish.name}</p>
                        <p className="text-xs text-muted-foreground capitalize">
                          {dish.category.replace("-", " ")}
                        </p>
                      </div>
                      <div className="text-right">
                        <p className="font-semibold text-primary">${dish.price.toFixed(2)}</p>
                        <div className="flex items-center gap-1 text-xs text-muted-foreground">
                          <Star className="h-3 w-3 fill-primary text-primary" />
                          {dish.rating}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
