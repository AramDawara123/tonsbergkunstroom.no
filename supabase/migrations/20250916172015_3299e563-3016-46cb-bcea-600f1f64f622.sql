-- Create courses table for art courses/workshops
CREATE TABLE public.courses (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  title TEXT NOT NULL,
  description TEXT NOT NULL,
  full_description TEXT,
  price DECIMAL(10,2) NOT NULL,
  duration TEXT NOT NULL,
  level TEXT NOT NULL CHECK (level IN ('Nybegynner', 'Mellomkurs', 'Avansert')),
  max_participants INTEGER NOT NULL DEFAULT 12,
  image_url TEXT,
  instructor_name TEXT,
  start_date DATE,
  end_date DATE,
  schedule TEXT,
  materials_included TEXT[],
  prerequisites TEXT,
  is_active BOOLEAN NOT NULL DEFAULT true,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Create artwork/portfolio table
CREATE TABLE public.artworks (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  title TEXT NOT NULL,
  description TEXT,
  category TEXT NOT NULL,
  medium TEXT,
  dimensions TEXT,
  year INTEGER,
  image_url TEXT NOT NULL,
  thumbnail_url TEXT,
  price DECIMAL(10,2),
  is_for_sale BOOLEAN DEFAULT false,
  is_featured BOOLEAN DEFAULT false,
  is_active BOOLEAN NOT NULL DEFAULT true,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Create course registrations table
CREATE TABLE public.course_registrations (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  course_id UUID NOT NULL REFERENCES public.courses(id) ON DELETE CASCADE,
  first_name TEXT NOT NULL,
  last_name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT,
  experience_level TEXT,
  special_requests TEXT,
  payment_status TEXT DEFAULT 'pending' CHECK (payment_status IN ('pending', 'paid', 'cancelled')),
  registration_date TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Create contact messages table
CREATE TABLE public.contact_messages (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT,
  subject TEXT,
  message TEXT NOT NULL,
  is_read BOOLEAN DEFAULT false,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Create artist profile table
CREATE TABLE public.artist_profile (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  bio TEXT,
  profile_image_url TEXT,
  years_experience INTEGER,
  education TEXT[],
  awards TEXT[],
  exhibitions TEXT[],
  contact_email TEXT,
  contact_phone TEXT,
  social_media JSONB DEFAULT '{}',
  is_active BOOLEAN DEFAULT true,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Create testimonials table
CREATE TABLE public.artist_testimonials (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  client_name TEXT NOT NULL,
  client_role TEXT,
  testimonial_text TEXT NOT NULL,
  rating INTEGER CHECK (rating >= 1 AND rating <= 5),
  course_taken TEXT,
  client_image_url TEXT,
  is_featured BOOLEAN DEFAULT false,
  is_active BOOLEAN DEFAULT true,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE public.courses ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.artworks ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.course_registrations ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.contact_messages ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.artist_profile ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.artist_testimonials ENABLE ROW LEVEL SECURITY;

-- Create RLS policies for public viewing
CREATE POLICY "Anyone can view active courses" ON public.courses
FOR SELECT USING (is_active = true);

CREATE POLICY "Anyone can view active artworks" ON public.artworks
FOR SELECT USING (is_active = true);

CREATE POLICY "Anyone can view active artist profile" ON public.artist_profile
FOR SELECT USING (is_active = true);

CREATE POLICY "Anyone can view featured testimonials" ON public.artist_testimonials
FOR SELECT USING (is_active = true);

-- Create policies for form submissions
CREATE POLICY "Anyone can register for courses" ON public.course_registrations
FOR INSERT WITH CHECK (true);

CREATE POLICY "Anyone can send contact messages" ON public.contact_messages
FOR INSERT WITH CHECK (true);

-- Create update trigger function
CREATE OR REPLACE FUNCTION public.update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SET search_path = public;

-- Create triggers for updated_at
CREATE TRIGGER update_courses_updated_at
  BEFORE UPDATE ON public.courses
  FOR EACH ROW
  EXECUTE FUNCTION public.update_updated_at_column();

CREATE TRIGGER update_artworks_updated_at
  BEFORE UPDATE ON public.artworks
  FOR EACH ROW
  EXECUTE FUNCTION public.update_updated_at_column();

CREATE TRIGGER update_artist_profile_updated_at
  BEFORE UPDATE ON public.artist_profile
  FOR EACH ROW
  EXECUTE FUNCTION public.update_updated_at_column();