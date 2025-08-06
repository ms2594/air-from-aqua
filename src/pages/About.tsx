import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Users, Target, Award, Globe } from "lucide-react";

const About = () => {
  const values = [
    {
      icon: <Target className="w-8 h-8 text-accent" />,
      title: "Innovation",
      description: "Continuously pushing the boundaries of atmospheric water generation technology."
    },
    {
      icon: <Globe className="w-8 h-8 text-accent" />,
      title: "Sustainability", 
      description: "Committed to providing eco-friendly solutions for global water challenges."
    },
    {
      icon: <Award className="w-8 h-8 text-accent" />,
      title: "Quality",
      description: "Delivering the highest standards in water purity and system reliability."
    },
    {
      icon: <Users className="w-8 h-8 text-accent" />,
      title: "Impact",
      description: "Making clean water accessible to communities worldwide."
    }
  ];

  const team = [
    {
      name: "Dr. Sarah Chen",
      role: "CEO & Founder",
      bio: "Former NASA engineer with 15+ years in atmospheric technology research."
    },
    {
      name: "Michael Rodriguez",
      role: "CTO",
      bio: "Leading expert in water purification systems and renewable energy integration."
    },
    {
      name: "Dr. Aisha Patel",
      role: "Head of R&D",
      bio: "PhD in Environmental Engineering, pioneering atmospheric water extraction methods."
    },
    {
      name: "James Wilson",
      role: "VP of Operations",
      bio: "20+ years scaling manufacturing operations for clean technology companies."
    }
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-16 bg-gradient-hero">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto space-y-6">
            <h1 className="text-4xl md:text-5xl font-bold text-primary-foreground">
              Transforming the Future of Water
            </h1>
            <p className="text-xl text-primary-foreground/90 leading-relaxed">
              AquaTech was founded with a simple mission: to make clean, pure water accessible everywhere through revolutionary atmospheric water generation technology.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground">Our Story</h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  Founded in 2018 by a team of aerospace engineers and environmental scientists, AquaTech emerged from a critical need: providing clean water access in water-scarce regions.
                </p>
                <p>
                  After witnessing the global water crisis firsthand, our founders dedicated themselves to developing technology that could extract pure water from the air itself. Through years of research and innovation, we've created the most efficient atmospheric water generation systems on the market.
                </p>
                <p>
                  Today, AquaTech serves customers across 50+ countries, providing sustainable water solutions for homes, businesses, and communities worldwide.
                </p>
              </div>
              <Button asChild>
                <Link to="/technology">Explore Our Technology</Link>
              </Button>
            </div>
            <div className="bg-gradient-card rounded-2xl p-8 shadow-medium">
              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-foreground">By the Numbers</h3>
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-primary">50M+</div>
                    <div className="text-sm text-muted-foreground">Liters Generated</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-primary">15+</div>
                    <div className="text-sm text-muted-foreground">Patents Held</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-primary">200+</div>
                    <div className="text-sm text-muted-foreground">Team Members</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-primary">6</div>
                    <div className="text-sm text-muted-foreground">Years Experience</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-16 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">Our Values</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              The principles that guide everything we do at AquaTech.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <Card key={index} className="group hover:shadow-medium transition-all duration-300 bg-gradient-card border-0">
                <CardContent className="p-6 text-center space-y-4">
                  <div className="flex justify-center">
                    <div className="p-3 bg-accent/10 rounded-full group-hover:bg-accent/20 transition-colors">
                      {value.icon}
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold text-foreground">{value.title}</h3>
                  <p className="text-muted-foreground">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">Leadership Team</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Meet the visionaries driving AquaTech's mission forward.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {team.map((member, index) => (
              <Card key={index} className="group hover:shadow-medium transition-all duration-300 bg-gradient-card border-0">
                <CardContent className="p-6 text-center space-y-4">
                  <div className="w-20 h-20 bg-gradient-accent rounded-full mx-auto flex items-center justify-center">
                    <Users className="w-10 h-10 text-accent-foreground" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-xl font-semibold text-foreground">{member.name}</h3>
                    <p className="text-sm font-medium text-primary">{member.role}</p>
                    <p className="text-sm text-muted-foreground">{member.bio}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-primary">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground">
              Join Our Mission
            </h2>
            <p className="text-xl text-primary-foreground/90">
              Be part of the solution to global water challenges. Discover how AquaTech can transform your water supply.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" asChild>
                <Link to="/contact">Get Started</Link>
              </Button>
              <Button size="lg" variant="outline" asChild className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
                <Link to="/products">View Products</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;