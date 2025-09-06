
import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import PageHero from '../components/PageHero';
import { Mail, Phone, MapPin, Clock } from 'lucide-react';

const Contact = () => {
  const contactInfo = [
    {
      icon: <Mail className="w-6 h-6" />,
      label: "E-post",
      value: "hello@nordicart.no",
      link: "mailto:hello@nordicart.no"
    },
    {
      icon: <Phone className="w-6 h-6" />,
      label: "Telefon",
      value: "+47 123 45 678",
      link: "tel:+47123456789"
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      label: "Adresse",
      value: "Kunstnergata 15, 0150 Oslo, Norge",
      link: "https://maps.google.com"
    }
  ];

  const hours = [
    { day: "Mandag - Tirsdag", time: "Stengt" },
    { day: "Onsdag - Fredag", time: "10:00 - 18:00" },
    { day: "Lørdag", time: "10:00 - 16:00" },
    { day: "Søndag", time: "12:00 - 16:00" }
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Header */}
      <PageHero>
        <div className="text-center">
          <h1 className="nordic-heading mb-4">Besøk Vårt Studio</h1>
          <p className="nordic-subtitle max-w-2xl mx-auto">
            Lokalisert i hjertet av Oslo, vårt studio ønsker kunstentusiaster, 
            studenter og samlere velkommen. Kom og opplev nordisk kreativitet på nært hold.
          </p>
        </div>
      </PageHero>

      {/* Contact Information */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Details */}
            <div className="space-y-8">
              <div>
                <h2 className="nordic-heading mb-8">Ta Kontakt</h2>
                
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
                  Åpningstider
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
                <h3 className="text-2xl font-semibold text-foreground mb-6">Send oss en Melding</h3>
                
                <form className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Fornavn
                      </label>
                      <input
                        type="text"
                        className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:ring-2 focus:ring-primary focus:border-transparent transition-colors"
                        placeholder="Ditt fornavn"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Etternavn
                      </label>
                      <input
                        type="text"
                        className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:ring-2 focus:ring-primary focus:border-transparent transition-colors"
                        placeholder="Ditt etternavn"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      E-post
                    </label>
                    <input
                      type="email"
                      className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:ring-2 focus:ring-primary focus:border-transparent transition-colors"
                      placeholder="din.epost@eksempel.no"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Interesse
                    </label>
                    <select className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:ring-2 focus:ring-primary focus:border-transparent transition-colors">
                      <option>Kunstkurs</option>
                      <option>Tilpasset Bestilling</option>
                      <option>Galleribesøk</option>
                      <option>Kjøp Kunstverk</option>
                      <option>Annet</option>
                    </select>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Melding
                    </label>
                    <textarea
                      rows={4}
                      className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:ring-2 focus:ring-primary focus:border-transparent transition-colors resize-none"
                      placeholder="Fortell oss om din interesse for vårt studio..."
                    ></textarea>
                  </div>
                  
                  <button type="submit" className="nordic-button-primary w-full">
                    Send Melding
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
            <h2 className="nordic-heading mb-4">Finn Vårt Studio</h2>
            <p className="nordic-subtitle">
              Lokalisert i Oslos pulserende kunstdistrikt, lett tilgjengelig med offentlig transport.
            </p>
          </div>
          
          <div className="nordic-card overflow-hidden">
            <div className="h-96 bg-nordic-mist flex items-center justify-center">
              <div className="text-center">
                <MapPin className="w-12 h-12 text-primary mx-auto mb-4" />
                <p className="text-foreground font-medium">Interaktivt Kart</p>
                <p className="nordic-body">Kunstnergata 15, 0150 Oslo, Norge</p>
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
