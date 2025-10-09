import React from 'react';
import { Link } from 'react-router-dom';
import { Palette, Award, Users, ArrowRight, Star, MapPin } from 'lucide-react';
const ArtistSection = () => {
  const achievements = [{
    icon: <Palette className="w-6 h-6" />,
    title: "20+ År",
    description: "Av kunstnerisk mestring og innovasjon",
    color: "from-primary to-nordic-forest"
  }, {
    icon: <Award className="w-6 h-6" />,
    title: "50+ Utstillinger",
    description: "Gjennom Skandinavia og Europa",
    color: "from-secondary to-nordic-sage"
  }, {
    icon: <Users className="w-6 h-6" />,
    title: "200+ Studenter",
    description: "Inspirert og veiledet til fortreffelighet",
    color: "from-nordic-sky to-nordic-deep"
  }];
  return <section className="py-12 sm:py-16 lg:py-24 bg-muted">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center max-w-7xl mx-auto">
          {/* Content Section */}
          <div className="space-y-6 sm:space-y-8 lg:order-1">
            {/* Header Badge */}
            <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-2 rounded-full bg-gradient-to-r from-primary/10 to-secondary/10 text-primary font-medium border border-primary/20 text-sm sm:text-base">
              <Star className="w-3 h-3 sm:w-4 sm:h-4 fill-current" />
              <span>Utvalgt Kunstner</span>
            </div>
            
            {/* Title Section */}
            <div className="space-y-3 sm:space-y-4">
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
                <span className="bg-gradient-to-r from-nordic-charcoal via-primary to-nordic-forest bg-clip-text text-transparent">
                  Kunstrom Tønsberg
                </span>
              </h2>
              <div className="flex items-center gap-2 text-nordic-stone">
                <MapPin className="w-3 h-3 sm:w-4 sm:h-4 flex-shrink-0" />
                <span className="text-sm sm:text-base lg:text-lg font-medium">Peder Lagmanns gate, Tønsberg</span>
              </div>
            </div>
            
            {/* Description */}
            <div className="space-y-3 sm:space-y-4">
              <p className="text-base sm:text-lg leading-relaxed text-nordic-stone">
                Født og oppvokst i de betagende landskapene i Nord-Norge, henter Astrid inspirasjon 
                fra de stadig skiftende nordiske årstidene og den dype stillheten i arktiske vintre.
              </p>
              <p className="text-sm sm:text-base leading-relaxed text-muted-foreground">
                Hennes samtidige tilnærming skaper en unik dialog mellom fortid og nåtid, og inviterer betraktere 
                til å oppdage nye perspektiver på kjente landskap.
              </p>
            </div>

            {/* CTA Button */}
            <div className="pt-2 sm:pt-4">
              <Link to="/gallery" className="inline-flex items-center gap-2 px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-primary to-nordic-forest text-white rounded-xl font-medium hover:shadow-xl hover:shadow-primary/25 transition-all duration-300 group text-sm sm:text-base">
                <span>Utforsk Astrids Kunstnerreise</span>
                <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>

          {/* Image Section */}
          <div className="relative lg:order-2 mt-8 lg:mt-0">
            <div className="relative group">
              {/* Main Image */}
              <div className="relative overflow-hidden rounded-2xl shadow-2xl">
                <img src="https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1940&q=80" alt="Kunstner i arbeid" className="w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] object-cover group-hover:scale-105 transition-transform duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
              </div>
              
              {/* Floating Stats Card */}
              <div className="absolute -bottom-4 -left-4 sm:-bottom-6 sm:-left-6 bg-white/90 dark:bg-background/90 backdrop-blur-xl rounded-xl p-4 sm:p-6 shadow-xl border border-white/20 dark:border-border">
                <div className="text-center">
                  <div className="text-2xl sm:text-3xl font-bold text-primary mb-1">Mester</div>
                  <div className="text-xs sm:text-sm text-muted-foreground">Siden 2004</div>
                </div>
              </div>

              {/* Floating Achievement Badge */}
              <div className="absolute -top-3 -right-3 sm:-top-4 sm:-right-4 bg-gradient-to-r from-secondary to-nordic-sage text-white rounded-full p-3 sm:p-4 shadow-lg">
                <Award className="w-4 h-4 sm:w-6 sm:h-6" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default ArtistSection;