import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { Mail, Phone, MapPin, Clock, MessageSquare, Users, Calculator } from "lucide-react";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    productInterest: "",
    capacity: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Quote Request Submitted",
      description: "Thank you! Our team will contact you within 24 hours.",
    });
    // Reset form
    setFormData({
      name: "",
      email: "",
      phone: "",
      company: "",
      productInterest: "",
      capacity: "",
      message: ""
    });
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const contactInfo = [
    {
      icon: <Mail className="w-6 h-6 text-accent" />,
      title: "Email",
      details: "info@sustainablesolutionsdr.com",
      description: "Get a response within 24 hours"
    },
    {
      icon: <Phone className="w-6 h-6 text-accent" />,
      title: "Phone",
      details: "+1 (555) 123-4567",
      description: "Mon-Fri 8AM-6PM EST"
    },
    {
      icon: <MapPin className="w-6 h-6 text-accent" />,
      title: "Address",
      details: "123 Innovation Drive",
      description: "Tech City, TC 12345"
    },
    {
      icon: <Clock className="w-6 h-6 text-accent" />,
      title: "Support Hours",
      details: "24/7 Available",
      description: "Emergency support included"
    }
  ];

  const services = [
    {
      icon: <Calculator className="w-8 h-8 text-accent" />,
      title: "Custom Quotes",
      description: "Personalized pricing based on your specific requirements and capacity needs."
    },
    {
      icon: <MessageSquare className="w-8 h-8 text-accent" />,
      title: "Consultations",
      description: "Expert guidance to help you choose the right system for your application."
    },
    {
      icon: <Users className="w-8 h-8 text-accent" />,
      title: "Site Assessments",
      description: "On-site evaluation to optimize system placement and performance."
    }
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-16 bg-gradient-hero">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto space-y-6">
            <h1 className="text-4xl md:text-5xl font-bold text-primary-foreground">
              Get Your Custom Quote
            </h1>
            <p className="text-xl text-primary-foreground/90 leading-relaxed">
              Ready to transform your water supply? Our experts will help you find the perfect atmospheric water generation solution.
            </p>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card className="bg-gradient-card border-0 shadow-medium">
              <CardHeader>
                <CardTitle className="text-2xl text-foreground">Request a Quote</CardTitle>
                <p className="text-muted-foreground">
                  Fill out the form below and our team will provide you with a detailed quote within 24 hours.
                </p>
              </CardHeader>
              <CardContent className="space-y-6">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Full Name *</Label>
                      <Input
                        id="name"
                        value={formData.name}
                        onChange={(e) => handleInputChange("name", e.target.value)}
                        placeholder="Enter your full name"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email Address *</Label>
                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => handleInputChange("email", e.target.value)}
                        placeholder="Enter your email"
                        required
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone Number</Label>
                      <Input
                        id="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => handleInputChange("phone", e.target.value)}
                        placeholder="Enter your phone number"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="company">Company/Organization</Label>
                      <Input
                        id="company"
                        value={formData.company}
                        onChange={(e) => handleInputChange("company", e.target.value)}
                        placeholder="Enter company name"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="product">Product Interest *</Label>
                      <Select onValueChange={(value) => handleInputChange("productInterest", value)} required>
                        <SelectTrigger>
                          <SelectValue placeholder="Select a product" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="home">SS DR Home (Residential)</SelectItem>
                          <SelectItem value="business">SS DR Business (Commercial)</SelectItem>
                          <SelectItem value="industrial">SS DR Industrial</SelectItem>
                          <SelectItem value="mobile">SS DR Mobile (Portable)</SelectItem>
                          <SelectItem value="custom">Custom Solution</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="capacity">Daily Water Needs</Label>
                      <Select onValueChange={(value) => handleInputChange("capacity", value)}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select capacity range" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="5-15">5-15 liters/day</SelectItem>
                          <SelectItem value="20-50">20-50 liters/day</SelectItem>
                          <SelectItem value="100-500">100-500 liters/day</SelectItem>
                          <SelectItem value="500+">500+ liters/day</SelectItem>
                          <SelectItem value="unsure">Not sure</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Additional Details</Label>
                    <Textarea
                      id="message"
                      value={formData.message}
                      onChange={(e) => handleInputChange("message", e.target.value)}
                      placeholder="Tell us about your specific needs, location, or any questions you have..."
                      rows={4}
                    />
                  </div>

                  <Button type="submit" size="lg" className="w-full">
                    Request Quote
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            {/* Contact Details */}
            <Card className="bg-gradient-card border-0 shadow-medium">
              <CardHeader>
                <CardTitle className="text-xl text-foreground">Contact Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="p-2 bg-accent/10 rounded-full">
                      {info.icon}
                    </div>
                    <div className="space-y-1">
                      <h3 className="font-semibold text-foreground">{info.title}</h3>
                      <p className="text-foreground">{info.details}</p>
                      <p className="text-sm text-muted-foreground">{info.description}</p>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Services */}
            <Card className="bg-gradient-card border-0 shadow-medium">
              <CardHeader>
                <CardTitle className="text-xl text-foreground">Our Services</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {services.map((service, index) => (
                  <div key={index} className="space-y-3">
                    <div className="flex items-center space-x-3">
                      <div className="p-2 bg-accent/10 rounded-full">
                        {service.icon}
                      </div>
                      <h3 className="font-semibold text-foreground">{service.title}</h3>
                    </div>
                    <p className="text-sm text-muted-foreground ml-14">{service.description}</p>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Quick Stats */}
            <Card className="bg-gradient-primary border-0 shadow-medium">
              <CardContent className="p-6 space-y-4">
                <h3 className="text-xl font-bold text-primary-foreground">Why Choose Sustainable Solutions DR?</h3>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-primary-foreground/80">Response Time</span>
                    <span className="font-semibold text-primary-foreground">&lt; 24 Hours</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-primary-foreground/80">Installation Time</span>
                    <span className="font-semibold text-primary-foreground">1-3 Days</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-primary-foreground/80">Warranty Coverage</span>
                    <span className="font-semibold text-primary-foreground">Up to 5 Years</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-primary-foreground/80">Customer Satisfaction</span>
                    <span className="font-semibold text-primary-foreground">99.2%</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;