
import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { Mail, Phone, MapPin, Clock } from 'lucide-react';

const Contact = () => {
  const contactInfo = [
    {
      icon: <Mail className="w-6 h-6" />,
      label: "Email",
      value: "hello@nordicart.no",
      link: "mailto:hello@nordicart.no"
    },
    {
      icon: <Phone className="w-6 h-6" />,
      label: "Phone",
      value: "+47 123 45 678",
      link: "tel:+47123456789"
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      label: "Address",
      value: "Kunstnergata 15, 0150 Oslo, Norway",
      link: "https://maps.google.com"
    }
  ];

  const hours = [
    { day: "Monday - Tuesday", time: "Closed" },
    { day: "Wednesday - Friday", time: "10:00 - 18:00" },
    { day: "Saturday", time: "10:00 - 16:00" },
    { day: "Sunday", time: "12:00 - 16:00" }
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Header */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-background via-muted/30 to-background">
        <div className="container mx-auto px-6 text-center">
          <h1 className="nordic-heading mb-4">Visit Our Studio</h1>
          <p className="nordic-subtitle max-w-2xl mx-auto">
            Located in the heart of Oslo, our studio welcomes art enthusiasts, 
            students, and collectors. Come experience Nordic creativity firsthand.
          </p>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Details */}
            <div className="space-y-8">
              <div>
                <h2 className="nordic-heading mb-8">Get in Touch</h2>
                
                <div className="space-y-6">
                  {contactInfo.map((info, index) => (
                    <a
                      key={index}
                      href={info.link}
                      className="flex items-center space-x-4 p-4 rounded-xl bg-muted/50 hover:bg-muted/80 transition-colors group"
                    >
                      <div className="text-primary group-hover:scale-110 transition-transform">
                        {info.icon}
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">{info.label}</p>
                        <p className="text-foreground font-medium">{info.value}</p>
                      </div>
                    </a>
                  ))}
                </div>
              </div>

              {/* Opening Hours */}
              <div>
                <h3 className="text-2xl font-semibold text-foreground mb-6 flex items-center">
                  <Clock className="w-6 h-6 mr-3 text-primary" />
                  Opening Hours
                </h3>
                
                <div className="space-y-3">
                  {hours.map((schedule, index) => (
                    <div key={index} className="flex justify-between items-center p-3 rounded-lg bg-muted/30">
                      <span className="text-foreground font-medium">{schedule.day}</span>
                      <span className="text-muted-foreground">{schedule.time}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="nordic-card">
              <div className="p-8">
                <h3 className="text-2xl font-semibold text-foreground mb-6">Send us a Message</h3>
                
                <form className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        First Name
                      </label>
                      <input
                        type="text"
                        className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:ring-2 focus:ring-primary focus:border-transparent transition-colors"
                        placeholder="Your first name"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Last Name
                      </label>
                      <input
                        type="text"
                        className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:ring-2 focus:ring-primary focus:border-transparent transition-colors"
                        placeholder="Your last name"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:ring-2 focus:ring-primary focus:border-transparent transition-colors"
                      placeholder="your.email@example.com"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Interest
                    </label>
                    <select className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:ring-2 focus:ring-primary focus:border-transparent transition-colors">
                      <option>Art Classes</option>
                      <option>Custom Commission</option>
                      <option>Gallery Visit</option>
                      <option>Purchase Artwork</option>
                      <option>Other</option>
                    </select>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Message
                    </label>
                    <textarea
                      rows={4}
                      className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:ring-2 focus:ring-primary focus:border-transparent transition-colors resize-none"
                      placeholder="Tell us about your interest in our studio..."
                    ></textarea>
                  </div>
                  
                  <button type="submit" className="nordic-button-primary w-full">
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="nordic-heading mb-4">Find Our Studio</h2>
            <p className="nordic-subtitle">
              Located in Oslo's vibrant arts district, easily accessible by public transport.
            </p>
          </div>
          
          <div className="nordic-card overflow-hidden">
            <div className="h-96 bg-nordic-mist flex items-center justify-center">
              <div className="text-center">
                <MapPin className="w-12 h-12 text-primary mx-auto mb-4" />
                <p className="text-foreground font-medium">Interactive Map</p>
                <p className="nordic-body">Kunstnergata 15, 0150 Oslo, Norway</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
