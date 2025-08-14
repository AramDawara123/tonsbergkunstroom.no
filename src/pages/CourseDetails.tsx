
import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { ArrowLeft, Clock, Users, Calendar, MapPin, CheckCircle } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '../components/ui/form';
import { useForm } from 'react-hook-form';
import { toast } from 'sonner';

interface CourseData {
  id: string;
  title: string;
  duration: string;
  capacity: string;
  price: string;
  description: string;
  schedule: string;
  fullDescription: string;
  image: string;
  instructor: string;
  level: string;
  includes: string[];
  nextStartDate: string;
}

const coursesData: { [key: string]: CourseData } = {
  'beginners-watercolor': {
    id: 'beginners-watercolor',
    title: "Beginner's Watercolor",
    duration: "2 hours",
    capacity: "8 students",
    price: "450 NOK",
    description: "Learn the fundamentals of watercolor painting with Nordic landscape themes.",
    schedule: "Saturdays 10:00-12:00",
    fullDescription: "Discover the beauty of watercolor painting in our comprehensive beginner's course. Perfect for those who have never picked up a brush or want to refresh their skills. You'll learn essential techniques including wet-on-wet, wet-on-dry, color mixing, and composition while creating stunning Nordic-inspired landscapes.",
    image: "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    instructor: "Elena Nordström",
    level: "Beginner",
    includes: ["All painting materials", "Canvas and paper", "Professional guidance", "Take-home artwork", "Coffee and pastries"],
    nextStartDate: "March 2, 2024"
  },
  'advanced-oil-painting': {
    id: 'advanced-oil-painting',
    title: "Advanced Oil Painting",
    duration: "3 hours",
    capacity: "6 students",
    price: "650 NOK",
    description: "Master advanced techniques in oil painting and color theory.",
    schedule: "Wednesdays 14:00-17:00",
    fullDescription: "Take your oil painting skills to the next level with advanced techniques and professional methods. This intensive course covers advanced color theory, glazing techniques, texture creation, and composition mastery. Perfect for artists ready to create gallery-quality pieces.",
    image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    instructor: "Magnus Larsson",
    level: "Advanced",
    includes: ["Premium oil paints", "Canvas boards", "Professional brushes", "Palette knives", "Individual critique sessions"],
    nextStartDate: "March 6, 2024"
  },
  'abstract-expression': {
    id: 'abstract-expression',
    title: "Abstract Expression",
    duration: "2.5 hours",
    capacity: "10 students",
    price: "550 NOK",
    description: "Explore abstract art techniques and find your unique artistic voice.",
    schedule: "Sundays 13:00-15:30",
    fullDescription: "Unleash your creativity through abstract expression. This dynamic course encourages experimentation with form, color, and texture to develop your personal artistic style. Learn from contemporary abstract techniques while exploring emotional expression through art.",
    image: "https://images.unsplash.com/photo-1541961017774-22349e4a1262?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    instructor: "Astrid Bjørk",
    level: "Intermediate",
    includes: ["Mixed media supplies", "Large format paper", "Acrylic paints", "Texture mediums", "Portfolio review"],
    nextStartDate: "March 3, 2024"
  }
};

const CourseDetails = () => {
  const { courseId } = useParams<{ courseId: string }>();
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const form = useForm({
    defaultValues: {
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      experience: '',
      message: ''
    }
  });

  const course = courseId ? coursesData[courseId] : null;

  if (!course) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-foreground mb-4">Course Not Found</h1>
          <Link to="/services" className="nordic-button-primary">
            Back to Classes
          </Link>
        </div>
      </div>
    );
  }

  const onSubmit = async (data: any) => {
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      toast.success("Registration submitted successfully! We'll contact you soon.");
      form.reset();
      setIsSubmitting(false);
    }, 2000);
  };

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Header */}
      <section className="pt-24 pb-8">
        <div className="container mx-auto px-6">
          <Link 
            to="/services" 
            className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Classes
          </Link>
        </div>
      </section>

      {/* Course Hero */}
      <section className="pb-16">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
                {course.level} Level
              </div>
              
              <h1 className="nordic-heading mb-6">{course.title}</h1>
              <p className="nordic-body mb-8">{course.fullDescription}</p>
              
              <div className="grid grid-cols-2 gap-6 mb-8">
                <div className="flex items-center gap-3">
                  <Clock className="w-5 h-5 text-primary" />
                  <div>
                    <div className="font-semibold text-foreground">{course.duration}</div>
                    <div className="text-sm text-muted-foreground">Duration</div>
                  </div>
                </div>
                
                <div className="flex items-center gap-3">
                  <Users className="w-5 h-5 text-primary" />
                  <div>
                    <div className="font-semibold text-foreground">Max {course.capacity}</div>
                    <div className="text-sm text-muted-foreground">Class Size</div>
                  </div>
                </div>
                
                <div className="flex items-center gap-3">
                  <Calendar className="w-5 h-5 text-primary" />
                  <div>
                    <div className="font-semibold text-foreground">{course.schedule}</div>
                    <div className="text-sm text-muted-foreground">Weekly Schedule</div>
                  </div>
                </div>
                
                <div className="flex items-center gap-3">
                  <MapPin className="w-5 h-5 text-primary" />
                  <div>
                    <div className="font-semibold text-foreground">Studio Location</div>
                    <div className="text-sm text-muted-foreground">Oslo, Norway</div>
                  </div>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="text-3xl font-bold text-primary">{course.price}</div>
                <div className="text-muted-foreground">per class</div>
              </div>
            </div>
            
            <div className="relative">
              <div className="nordic-card overflow-hidden nordic-hover-lift">
                <img 
                  src={course.image} 
                  alt={course.title}
                  className="w-full h-96 object-cover"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-nordic-sky rounded-2xl -z-10" />
            </div>
          </div>
        </div>
      </section>

      {/* What's Included */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16">
            <div>
              <h2 className="nordic-heading mb-8">What's Included</h2>
              <div className="space-y-4">
                {course.includes.map((item, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-primary" />
                    <span className="nordic-body">{item}</span>
                  </div>
                ))}
              </div>
              
              <div className="mt-8 p-6 nordic-card">
                <h3 className="text-xl font-semibold text-foreground mb-2">Your Instructor</h3>
                <p className="text-lg font-medium text-primary mb-2">{course.instructor}</p>
                <p className="nordic-body">Professional artist with over 15 years of experience in Nordic-inspired art and teaching.</p>
              </div>
            </div>
            
            {/* Registration Form */}
            <div className="nordic-card p-8">
              <h2 className="text-2xl font-semibold text-foreground mb-2">Register for This Class</h2>
              <p className="text-muted-foreground mb-6">Next class starts: {course.nextStartDate}</p>
              
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <div className="grid grid-cols-2 gap-4">
                    <FormField
                      control={form.control}
                      name="firstName"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>First Name</FormLabel>
                          <FormControl>
                            <Input placeholder="Enter your first name" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={form.control}
                      name="lastName"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Last Name</FormLabel>
                          <FormControl>
                            <Input placeholder="Enter your last name" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                  
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Email</FormLabel>
                        <FormControl>
                          <Input type="email" placeholder="Enter your email" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="phone"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Phone Number</FormLabel>
                        <FormControl>
                          <Input placeholder="Enter your phone number" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="experience"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Previous Art Experience</FormLabel>
                        <FormControl>
                          <Input placeholder="Brief description of your experience" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Additional Message (Optional)</FormLabel>
                        <FormControl>
                          <Input placeholder="Any questions or special requirements?" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <Button 
                    type="submit" 
                    className="w-full nordic-button-primary" 
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? 'Submitting...' : 'Register Now'}
                  </Button>
                </form>
              </Form>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default CourseDetails;
