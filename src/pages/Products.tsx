import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { Home, Building, Factory, Truck, Check, Zap, Droplets, Shield } from "lucide-react";

const Products = () => {
  const products = [
    {
      id: "residential",
      name: "SS DR Home",
      category: "Residential",
      price: "$2,999",
      capacity: "5-15L/day",
      icon: <Home className="w-8 h-8 text-accent" />,
      description: "Perfect for homes and small families. Compact design with premium water quality.",
      features: [
        "5-15 liters per day capacity",
        "Compact countertop design",
        "Smart app connectivity",
        "Energy efficient operation",
        "1-year warranty",
        "Free installation"
      ],
      ideal: "1-4 people",
      power: "150W average",
      popular: false
    },
    {
      id: "commercial",
      name: "SS DR Business",
      category: "Commercial", 
      price: "$8,999",
      capacity: "20-50L/day",
      icon: <Building className="w-8 h-8 text-accent" />,
      description: "Designed for offices, restaurants, and small businesses requiring reliable water supply.",
      features: [
        "20-50 liters per day capacity",
        "Professional-grade components",
        "Remote monitoring system",
        "Advanced filtration",
        "2-year warranty",
        "Professional installation"
      ],
      ideal: "10-50 people",
      power: "500W average",
      popular: true
    },
    {
      id: "industrial",
      name: "SS DR Industrial",
      category: "Industrial",
      price: "From $25,000",
      capacity: "100-500L/day",
      icon: <Factory className="w-8 h-8 text-accent" />,
      description: "High-capacity systems for manufacturing, hotels, and large facilities.",
      features: [
        "100-500+ liters per day",
        "Modular scalable design",
        "Industrial-grade durability",
        "24/7 monitoring & support",
        "5-year warranty",
        "Custom installation"
      ],
      ideal: "100+ people",
      power: "2kW average",
      popular: false
    },
    {
      id: "mobile",
      name: "SS DR Mobile",
      category: "Portable",
      price: "$4,999",
      capacity: "10-30L/day",
      icon: <Truck className="w-8 h-8 text-accent" />,
      description: "Portable units for emergency response, camping, and remote locations.",
      features: [
        "10-30 liters per day capacity",
        "Weather-resistant design",
        "Solar power compatible",
        "Emergency backup mode",
        "3-year warranty",
        "Training included"
      ],
      ideal: "Emergency & Remote",
      power: "300W average",
      popular: false
    }
  ];

  const comparisons = [
    { feature: "Water Production", home: "5-15L/day", business: "20-50L/day", industrial: "100-500L/day", mobile: "10-30L/day" },
    { feature: "Energy Consumption", home: "150W", business: "500W", industrial: "2kW", mobile: "300W" },
    { feature: "Footprint", home: "Countertop", business: "Floor Unit", industrial: "Room-sized", mobile: "Portable" },
    { feature: "Installation", home: "Plug & Play", business: "Professional", industrial: "Custom", mobile: "Portable" },
    { feature: "Monitoring", home: "App", business: "Web Portal", industrial: "Full Suite", mobile: "Basic" },
    { feature: "Warranty", home: "1 Year", business: "2 Years", industrial: "5 Years", mobile: "3 Years" }
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-16 bg-gradient-hero">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto space-y-6">
            <h1 className="text-4xl md:text-5xl font-bold text-primary-foreground">
              Complete Product Lineup
            </h1>
            <p className="text-xl text-primary-foreground/90 leading-relaxed">
              From residential homes to industrial facilities, we have the perfect atmospheric water generation solution for every need.
            </p>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {products.map((product) => (
              <Card key={product.id} className={`group hover:shadow-strong transition-all duration-300 bg-gradient-card border-0 relative ${product.popular ? 'ring-2 ring-accent' : ''}`}>
                {product.popular && (
                  <Badge className="absolute -top-3 left-6 bg-accent text-accent-foreground">
                    Most Popular
                  </Badge>
                )}
                <CardHeader className="pb-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div className="p-3 bg-accent/10 rounded-full group-hover:bg-accent/20 transition-colors">
                        {product.icon}
                      </div>
                      <div>
                        <CardTitle className="text-2xl text-foreground">{product.name}</CardTitle>
                        <p className="text-muted-foreground">{product.category}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-primary">{product.price}</div>
                      <div className="text-sm text-muted-foreground">{product.capacity}</div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-6">
                  <p className="text-muted-foreground">{product.description}</p>
                  
                  <div className="grid grid-cols-3 gap-4 py-4 bg-secondary/30 rounded-lg px-4">
                    <div className="text-center">
                      <Droplets className="w-5 h-5 text-accent mx-auto mb-1" />
                      <div className="text-xs text-muted-foreground">Capacity</div>
                      <div className="text-sm font-semibold">{product.ideal}</div>
                    </div>
                    <div className="text-center">
                      <Zap className="w-5 h-5 text-accent mx-auto mb-1" />
                      <div className="text-xs text-muted-foreground">Power</div>
                      <div className="text-sm font-semibold">{product.power}</div>
                    </div>
                    <div className="text-center">
                      <Shield className="w-5 h-5 text-accent mx-auto mb-1" />
                      <div className="text-xs text-muted-foreground">Warranty</div>
                      <div className="text-sm font-semibold">{product.features.find(f => f.includes('warranty'))?.match(/\d+/)?.[0] || '1'} Year</div>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <h4 className="font-semibold text-foreground">Key Features:</h4>
                    <ul className="space-y-2">
                      {product.features.map((feature, index) => (
                        <li key={index} className="flex items-center space-x-2">
                          <Check className="w-4 h-4 text-success flex-shrink-0" />
                          <span className="text-sm text-muted-foreground">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-3 pt-4">
                    <Button asChild className="flex-1">
                      <Link to="/contact">Get Quote</Link>
                    </Button>
                    <Button variant="outline" asChild className="flex-1">
                      <Link to="/technology">Learn More</Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-16 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">Product Comparison</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Compare specifications across our complete product lineup to find your perfect match.
            </p>
          </div>
          <Card className="bg-gradient-card border-0 shadow-medium overflow-hidden">
            <CardContent className="p-0">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-primary text-primary-foreground">
                    <tr>
                      <th className="text-left p-4 font-semibold">Feature</th>
                      <th className="text-center p-4 font-semibold">Home</th>
                      <th className="text-center p-4 font-semibold">Business</th>
                      <th className="text-center p-4 font-semibold">Industrial</th>
                      <th className="text-center p-4 font-semibold">Mobile</th>
                    </tr>
                  </thead>
                  <tbody>
                    {comparisons.map((comparison, index) => (
                      <tr key={index} className={index % 2 === 0 ? "bg-background/50" : "bg-transparent"}>
                        <td className="p-4 font-medium text-foreground">{comparison.feature}</td>
                        <td className="p-4 text-center text-muted-foreground">{comparison.home}</td>
                        <td className="p-4 text-center text-muted-foreground">{comparison.business}</td>
                        <td className="p-4 text-center text-muted-foreground">{comparison.industrial}</td>
                        <td className="p-4 text-center text-muted-foreground">{comparison.mobile}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-primary">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground">
              Ready to Choose Your System?
            </h2>
            <p className="text-xl text-primary-foreground/90">
              Our experts are here to help you select the perfect atmospheric water generation system for your specific needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" asChild>
                <Link to="/contact">Get Consultation</Link>
              </Button>
              <Button size="lg" variant="outline" asChild className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
                <Link to="/technology">Technical Details</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Products;