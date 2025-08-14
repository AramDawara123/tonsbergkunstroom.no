
import React from 'react';
import { Link } from 'react-router-dom';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { Palette, Users, Heart, Clock, ArrowRight } from 'lucide-react';

const Services = () => {
  const classes = [{
    id: 'beginners-watercolor',
    title: "Beginner's Watercolor",
    duration: "2 hours",
    capacity: "8 students",
    price: "450 NOK",
    description: "Learn the fundamentals of watercolor painting with Nordic landscape themes.",
    schedule: "Saturdays 10:00-12:00"
  }, {
    id: 'advanced-oil-painting',
    title: "Advanced Oil Painting",
    duration: "3 hours",
    capacity: "6 students",
    price: "650 NOK",
    description: "Master advanced techniques in oil painting and color theory.",
    schedule: "Wednesdays 14:00-17:00"
  }, {
    id: 'abstract-expression',
    title: "Abstract Expression",
    duration: "2.5 hours",
    capacity: "10 students",
    price: "550 NOK",
    description: "Explore abstract art techniques and find your unique artistic voice.",
    schedule: "Sundays 13:00-15:30"
  }];

  const commissionFeatures = [{
    icon: <Heart className="w-8 h-8" />,
    title: "Personal Consultation",
    description: "One-on-one discussion to understand your vision and requirements."
  }, {
    icon: <Palette className="w-8 h-8" />,
    title: "Custom Artwork",
    description: "Original pieces created specifically for your space and taste."
  }, {
    icon: <Clock className="w-8 h-8" />,
    title: "Flexible Timeline",
    description: "Work with you to meet deadlines while ensuring quality."
  }];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Header */}
      <section className="pt-32 pb-20 bg-muted">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl lg:text-5xl font-bold mb-6 text-foreground">Our Classes</h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Learn from experienced instructors in our inspiring studio environment.
          </p>
        </div>
      </section>

      {/* Art Classes */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {classes.map((classItem, index) => (
              <div key={index} className="bg-white/80 backdrop-blur-sm rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group">
                <div className="p-8">
                  <h3 className="text-2xl font-semibold text-foreground mb-4">
                    {classItem.title}
                  </h3>
                  
                  <div className="space-y-3 mb-6">
                    <div className="flex items-center text-muted-foreground">
                      <Clock className="w-5 h-5 mr-3 text-primary" />
                      {classItem.duration}
                    </div>
                    <div className="flex items-center text-muted-foreground">
                      <Users className="w-5 h-5 mr-3 text-primary" />
                      Max {classItem.capacity}
                    </div>
                    <div className="text-primary font-semibold text-xl">
                      {classItem.price}
                    </div>
                  </div>

                  <p className="text-muted-foreground mb-4 leading-relaxed">{classItem.description}</p>
                  <p className="text-sm text-muted-foreground mb-6 font-medium">{classItem.schedule}</p>

                  <Link 
                    to={`/course/${classItem.id}`} 
                    className="inline-flex items-center justify-center gap-2 w-full px-6 py-3 bg-gradient-to-r from-primary to-nordic-forest text-white rounded-xl font-medium hover:shadow-lg transition-all duration-300 group/btn"
                  >
                    <span>View Details</span>
                    <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Custom Commissions */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold mb-6 text-foreground">Custom Commissions</h2>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Transform your vision into a one-of-a-kind artwork. Whether it's a portrait, 
                landscape, or abstract piece, we work closely with you to create something 
                truly special that reflects your personal style and space.
              </p>

              <div className="space-y-6 mb-8">
                {commissionFeatures.map((feature, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="text-primary">{feature.icon}</div>
                    <div>
                      <h3 className="text-lg font-semibold text-foreground mb-2">
                        {feature.title}
                      </h3>
                      <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
                    </div>
                  </div>
                ))}
              </div>

              <button className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-primary to-nordic-forest text-white rounded-xl font-medium hover:shadow-xl hover:shadow-primary/25 transition-all duration-300">
                Request Commission
              </button>
            </div>

            <div className="relative">
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300">
                <img 
                  src="https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" 
                  alt="Custom artwork process" 
                  className="w-full h-96 object-cover" 
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Services;
