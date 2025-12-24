import React from 'react';
import { Link } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { supabase } from '@/integrations/supabase/client';
import AdminLayout from '@/components/admin/AdminLayout';
import { Image, GraduationCap, TrendingUp, Eye } from 'lucide-react';

const Dashboard = () => {
  const { data: photosCount } = useQuery({
    queryKey: ['photos-count'],
    queryFn: async () => {
      const { count, error } = await supabase
        .from('photos')
        .select('*', { count: 'exact', head: true });
      if (error) throw error;
      return count || 0;
    },
  });

  const { data: coursesCount } = useQuery({
    queryKey: ['courses-count'],
    queryFn: async () => {
      const { count, error } = await supabase
        .from('courses')
        .select('*', { count: 'exact', head: true });
      if (error) throw error;
      return count || 0;
    },
  });

  const { data: homePhotosCount } = useQuery({
    queryKey: ['home-photos-count'],
    queryFn: async () => {
      const { count, error } = await supabase
        .from('photos')
        .select('*', { count: 'exact', head: true })
        .eq('show_on_home', true);
      if (error) throw error;
      return count || 0;
    },
  });

  const stats = [
    {
      name: 'Totaal Foto\'s',
      value: photosCount ?? 0,
      icon: Image,
      color: 'from-blue-500 to-blue-600',
      link: '/admin/photos',
    },
    {
      name: 'Cursussen',
      value: coursesCount ?? 0,
      icon: GraduationCap,
      color: 'from-green-500 to-green-600',
      link: '/admin/courses',
    },
    {
      name: 'Foto\'s op Home',
      value: homePhotosCount ?? 0,
      icon: Eye,
      color: 'from-purple-500 to-purple-600',
      link: '/admin/photos',
    },
  ];

  return (
    <AdminLayout>
      <div className="space-y-8">
        {/* Header */}
        <div>
          <h1 className="text-3xl font-bold text-foreground">Dashboard</h1>
          <p className="text-muted-foreground mt-1">
            Welkom terug! Hier is een overzicht van je website.
          </p>
        </div>

        {/* Stats */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {stats.map((stat) => (
            <Link
              key={stat.name}
              to={stat.link}
              className="nordic-card p-6 group nordic-hover-lift"
            >
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">{stat.name}</p>
                  <p className="text-3xl font-bold text-foreground mt-1">{stat.value}</p>
                </div>
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${stat.color} flex items-center justify-center`}>
                  <stat.icon className="w-6 h-6 text-white" />
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Quick Actions */}
        <div className="nordic-card p-6">
          <h2 className="text-xl font-bold text-foreground mb-4">Snelle Acties</h2>
          <div className="grid sm:grid-cols-2 gap-4">
            <Link
              to="/admin/photos"
              className="flex items-center gap-4 p-4 rounded-xl border border-border hover:bg-muted/50 transition-colors"
            >
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                <Image className="w-5 h-5 text-primary" />
              </div>
              <div>
                <p className="font-medium text-foreground">Foto's Beheren</p>
                <p className="text-sm text-muted-foreground">Voeg toe, bewerk of verwijder foto's</p>
              </div>
            </Link>
            <Link
              to="/admin/courses"
              className="flex items-center gap-4 p-4 rounded-xl border border-border hover:bg-muted/50 transition-colors"
            >
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                <GraduationCap className="w-5 h-5 text-primary" />
              </div>
              <div>
                <p className="font-medium text-foreground">Cursussen Beheren</p>
                <p className="text-sm text-muted-foreground">Bewerk cursus-informatie</p>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </AdminLayout>
  );
};

export default Dashboard;
