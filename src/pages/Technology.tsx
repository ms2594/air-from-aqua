import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { Zap, Filter, Thermometer, CloudRain, Beaker, Cpu, ArrowRight } from "lucide-react";
import technologyBg from "@/assets/technology-bg.jpg";

const Technology = () => {
  const processes = [
    {
      step: "01",
      title: "Air Intake",
      description: "High-efficiency fans draw ambient air through advanced filtration systems.",
      icon: <CloudRain className="w-6 h-6 text-accent" />
    },
    {
      step: "02", 
      title: "Condensation",
      description: "Proprietary cooling technology condenses water vapor from atmospheric humidity.",
      icon: <Thermometer className="w-6 h-6 text-accent" />
    },
    {
      step: "03",
      title: "Purification",
      description: "Multi-stage filtration removes impurities and adds essential minerals.",
      icon: <Filter className="w-6 h-6 text-accent" />
    },
    {
      step: "04",
      title: "Storage",
      description: "Purified water is stored in UV-sterilized tanks for immediate use.",
      icon: <Beaker className="w-6 h-6 text-accent" />
    }
  ];

  const innovations = [
    {
      title: "Advanced Cooling System",
      description: "Proprietary heat exchange technology that maximizes water extraction while minimizing energy consumption.",
      efficiency: "80% more efficient",
      icon: <Zap className="w-8 h-8 text-accent" />
    },
    {
      title: "AI-Powered Optimization",
      description: "Machine learning algorithms continuously optimize performance based on environmental conditions.",
      efficiency: "Real-time adaptation",
      icon: <Cpu className="w-8 h-8 text-accent" />
    },
    {
      title: "Multi-Stage Filtration", 
      description: "Advanced filtration system ensuring 99.9% purity with essential mineral retention.",
      efficiency: "99.9% pure water",
      icon: <Filter className="w-8 h-8 text-accent" />
    }
  ];

  const specs = [
    { label: "Water Production", value: "5-50L/day", description: "Depending on humidity levels" },
    { label: "Energy Consumption", value: "4-8 kWh/day", description: "Variable based on model" },
    { label: "Operating Humidity", value: "35%+ RH", description: "Optimal performance range" },
    { label: "Temperature Range", value: "15-40°C", description: "Operating conditions" },
    { label: "Water Quality", value: "WHO Standards", description: "Exceeds all safety requirements" },
    { label: "Filter Lifespan", value: "12 months", description: "Typical replacement cycle" }
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative py-16 bg-gradient-hero overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img src={technologyBg} alt="Technology Background" className="w-full h-full object-cover" />
        </div>
        <div className="container mx-auto px-4 relative z-10 text-center">
          <div className="max-w-4xl mx-auto space-y-6">
            <Badge variant="secondary" className="mb-4">
              Patented Technology
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold text-primary-foreground">
              Revolutionary Water Generation Technology
            </h1>
            <p className="text-xl text-primary-foreground/90 leading-relaxed">
              Discover the science behind our atmospheric water generation systems. Advanced engineering meets environmental sustainability.
            </p>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">How It Works</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Our four-stage process transforms atmospheric humidity into pure, drinking water.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {processes.map((process, index) => (
              <Card key={index} className="group hover:shadow-medium transition-all duration-300 bg-gradient-card border-0">
                <CardContent className="p-6 space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="text-2xl font-bold text-primary">{process.step}</div>
                    <div className="p-2 bg-accent/10 rounded-full group-hover:bg-accent/20 transition-colors">
                      {process.icon}
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold text-foreground">{process.title}</h3>
                  <p className="text-muted-foreground">{process.description}</p>
                  {index < processes.length - 1 && (
                    <div className="hidden lg:block absolute top-1/2 -right-3 transform -translate-y-1/2">
                      <ArrowRight className="w-6 h-6 text-accent" />
                    </div>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Key Innovations */}
      <section className="py-16 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">Key Innovations</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Breakthrough technologies that set our systems apart from traditional water generation methods.
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {innovations.map((innovation, index) => (
              <Card key={index} className="group hover:shadow-medium transition-all duration-300 bg-gradient-card border-0">
                <CardContent className="p-8 space-y-6">
                  <div className="flex items-center justify-between">
                    <div className="p-3 bg-accent/10 rounded-full group-hover:bg-accent/20 transition-colors">
                      {innovation.icon}
                    </div>
                    <Badge variant="secondary">{innovation.efficiency}</Badge>
                  </div>
                  <div className="space-y-3">
                    <h3 className="text-xl font-semibold text-foreground">{innovation.title}</h3>
                    <p className="text-muted-foreground">{innovation.description}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Technical Specifications */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">Technical Specifications</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Detailed performance metrics and operational parameters for our systems.
            </p>
          </div>
          <div className="max-w-4xl mx-auto">
            <Card className="bg-gradient-card border-0 shadow-medium">
              <CardContent className="p-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {specs.map((spec, index) => (
                    <div key={index} className="space-y-2">
                      <div className="text-sm font-medium text-muted-foreground">{spec.label}</div>
                      <div className="text-2xl font-bold text-primary">{spec.value}</div>
                      <div className="text-sm text-muted-foreground">{spec.description}</div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Environmental Impact */}
      <section className="py-16 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground">Environmental Impact</h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  Our atmospheric water generation technology represents a paradigm shift toward sustainable water production. Unlike traditional methods that deplete groundwater or require extensive infrastructure, our systems work in harmony with natural atmospheric processes.
                </p>
                <p>
                  Each AquaTech unit prevents the need for thousands of plastic bottles annually, while consuming significantly less energy than conventional water treatment facilities. The technology produces zero liquid waste and operates with minimal environmental footprint.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-6">
                <div className="space-y-2">
                  <div className="text-2xl font-bold text-success">0%</div>
                  <div className="text-sm text-muted-foreground">Liquid Waste</div>
                </div>
                <div className="space-y-2">
                  <div className="text-2xl font-bold text-success">-80%</div>
                  <div className="text-sm text-muted-foreground">Energy vs Traditional</div>
                </div>
              </div>
            </div>
            <Card className="bg-gradient-card border-0 shadow-medium">
              <CardContent className="p-8 space-y-6">
                <h3 className="text-2xl font-bold text-foreground">Sustainability Metrics</h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">CO₂ Reduction per Unit</span>
                    <span className="font-semibold text-success">2.5 tons/year</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">Plastic Bottles Eliminated</span>
                    <span className="font-semibold text-success">10,000+/year</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">Water Recovery Rate</span>
                    <span className="font-semibold text-success">95%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">Renewable Energy Compatible</span>
                    <span className="font-semibold text-success">100%</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-primary">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground">
              Experience the Technology
            </h2>
            <p className="text-xl text-primary-foreground/90">
              Ready to see our revolutionary technology in action? Explore our product lineup or schedule a demonstration.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" asChild>
                <Link to="/products">View Products</Link>
              </Button>
              <Button size="lg" variant="outline" asChild className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
                <Link to="/contact">Schedule Demo</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Technology;