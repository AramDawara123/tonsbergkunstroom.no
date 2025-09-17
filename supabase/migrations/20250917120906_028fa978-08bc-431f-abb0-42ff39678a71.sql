-- Fix RLS policies for contact_messages and course_registrations tables

-- Drop existing policies and recreate them to ensure they work properly
DROP POLICY IF EXISTS "Anyone can send contact messages" ON public.contact_messages;
DROP POLICY IF EXISTS "Anyone can register for courses" ON public.course_registrations;

-- Create new policies with proper permissions
CREATE POLICY "Enable insert for contact messages" 
ON public.contact_messages 
FOR INSERT 
TO public
WITH CHECK (true);

CREATE POLICY "Enable insert for course registrations" 
ON public.course_registrations 
FOR INSERT 
TO public
WITH CHECK (true);

-- Ensure RLS is enabled
ALTER TABLE public.contact_messages ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.course_registrations ENABLE ROW LEVEL SECURITY;