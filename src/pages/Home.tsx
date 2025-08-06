import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { ArrowRight, Droplets, Zap, Shield, Leaf, Users, Award } from "lucide-react";
import heroImage from "@/assets/hero-machine.jpg";

const Home = () => {
  const features = [
    {
      icon: <Droplets className="w-8 h-8 text-accent" />,
      title: "Pure Water Generation",
      description: "Extract up to 30 liters of pure water daily from atmospheric humidity."
    },
    {
      icon: <Zap className="w-8 h-8 text-accent" />,
      title: "Energy Efficient",
      description: "Advanced technology uses 80% less energy than traditional methods."
    },
    {
      icon: <Shield className="w-8 h-8 text-accent" />,
      title: "Filtration System",
      description: "Multi-stage filtration ensures the highest water quality standards."
    },
    {
      icon: <Leaf className="w-8 h-8 text-accent" />,
      title: "Eco-Friendly",
      description: "Zero waste, sustainable water production with minimal environmental impact."
    }
  ];

  const stats = [
    { number: "10,000+", label: "Happy Customers" },
    { number: "50+", label: "Countries Served" },
    { number: "99.9%", label: "Uptime Reliability" },
    { number: "24/7", label: "Support Available" }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-20 pb-16 bg-gradient-hero overflow-hidden">
        <div className="absolute inset-0 bg-primary/10"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="space-y-4">
                <h1 className="text-4xl md:text-6xl font-bold text-primary-foreground leading-tight">
                  Turn Air Into
                  <span className="text-accent block">Pure Water</span>
                </h1>
                <p className="text-xl text-primary-foreground/90 leading-relaxed">
                  Revolutionary atmospheric water generation technology that transforms humidity into clean, pure drinking water. The future of water independence is here.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" variant="secondary" asChild className="group">
                  <Link to="/products">
                    Explore Products
                    <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" asChild className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
                  <Link to="/contact">Get Quote</Link>
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-accent opacity-20 rounded-3xl blur-3xl"></div>
              <img
                src={heroImage}
                alt="Sustainable Solutions DR Atmospheric Water Generator"
                className="relative w-full h-auto rounded-2xl shadow-strong"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              Why Choose Sustainable Solutions DR?
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Our cutting-edge technology delivers unmatched performance, efficiency, and reliability in atmospheric water generation.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <Card key={index} className="group hover:shadow-medium transition-all duration-300 bg-gradient-card border-0">
                <CardContent className="p-6 text-center space-y-4">
                  <div className="flex justify-center">
                    <div className="p-3 bg-accent/10 rounded-full group-hover:bg-accent/20 transition-colors">
                      {feature.icon}
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold text-foreground">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center space-y-2">
                <div className="text-3xl md:text-4xl font-bold text-primary">{stat.number}</div>
                <div className="text-muted-foreground font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-primary">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground">
              Ready to Transform Your Water Supply?
            </h2>
            <p className="text-xl text-primary-foreground/90">
              Join thousands of satisfied customers who have made the switch to sustainable, atmospheric water generation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" asChild>
                <Link to="/contact">Request Consultation</Link>
              </Button>
              <Button size="lg" variant="outline" asChild className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
                <Link to="/technology">Learn More</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;