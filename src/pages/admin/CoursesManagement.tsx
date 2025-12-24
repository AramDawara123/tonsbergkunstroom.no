import React, { useState } from 'react';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { supabase } from '@/integrations/supabase/client';
import AdminLayout from '@/components/admin/AdminLayout';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Switch } from '@/components/ui/switch';
import { toast } from 'sonner';
import { 
  Plus, 
  Trash2, 
  Edit, 
  X, 
  Upload,
  GraduationCap,
  Calendar,
  MapPin,
  Users,
  DollarSign
} from 'lucide-react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';

interface Course {
  id: string;
  title: string;
  description: string | null;
  short_description: string | null;
  price: number | null;
  duration: string | null;
  start_date: string | null;
  end_date: string | null;
  schedule: string | null;
  location: string | null;
  max_participants: number | null;
  image_url: string | null;
  is_active: boolean;
  display_order: number;
  created_at: string;
}

const CoursesManagement = () => {
  const queryClient = useQueryClient();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingCourse, setEditingCourse] = useState<Course | null>(null);
  const [uploading, setUploading] = useState(false);
  
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    short_description: '',
    price: '',
    duration: '',
    start_date: '',
    end_date: '',
    schedule: '',
    location: '',
    max_participants: '',
    image_url: '',
    is_active: true,
    display_order: 0,
  });

  const { data: courses, isLoading } = useQuery({
    queryKey: ['admin-courses'],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('courses')
        .select('*')
        .order('display_order', { ascending: true });
      if (error) throw error;
      return data as Course[];
    },
  });

  const createMutation = useMutation({
    mutationFn: async (data: any) => {
      const { error } = await supabase.from('courses').insert([data]);
      if (error) throw error;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['admin-courses'] });
      queryClient.invalidateQueries({ queryKey: ['courses-count'] });
      toast.success('Cursus toegevoegd!');
      resetForm();
    },
    onError: (error) => {
      toast.error('Fout bij toevoegen: ' + error.message);
    },
  });

  const updateMutation = useMutation({
    mutationFn: async ({ id, data }: { id: string; data: any }) => {
      const { error } = await supabase.from('courses').update(data).eq('id', id);
      if (error) throw error;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['admin-courses'] });
      toast.success('Cursus bijgewerkt!');
      resetForm();
    },
    onError: (error) => {
      toast.error('Fout bij bijwerken: ' + error.message);
    },
  });

  const deleteMutation = useMutation({
    mutationFn: async (id: string) => {
      const { error } = await supabase.from('courses').delete().eq('id', id);
      if (error) throw error;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['admin-courses'] });
      queryClient.invalidateQueries({ queryKey: ['courses-count'] });
      toast.success('Cursus verwijderd!');
    },
    onError: (error) => {
      toast.error('Fout bij verwijderen: ' + error.message);
    },
  });

  const handleFileUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    if (!file.type.startsWith('image/')) {
      toast.error('Selecteer een afbeelding');
      return;
    }

    setUploading(true);
    try {
      const fileExt = file.name.split('.').pop();
      const fileName = `${Date.now()}-${Math.random().toString(36).substring(7)}.${fileExt}`;
      const filePath = `courses/${fileName}`;

      const { error: uploadError } = await supabase.storage
        .from('images')
        .upload(filePath, file);

      if (uploadError) throw uploadError;

      const { data: { publicUrl } } = supabase.storage
        .from('images')
        .getPublicUrl(filePath);

      setFormData(prev => ({ ...prev, image_url: publicUrl }));
      toast.success('Afbeelding geüpload!');
    } catch (error: any) {
      toast.error('Upload mislukt: ' + error.message);
    } finally {
      setUploading(false);
    }
  };

  const resetForm = () => {
    setFormData({
      title: '',
      description: '',
      short_description: '',
      price: '',
      duration: '',
      start_date: '',
      end_date: '',
      schedule: '',
      location: '',
      max_participants: '',
      image_url: '',
      is_active: true,
      display_order: 0,
    });
    setEditingCourse(null);
    setIsModalOpen(false);
  };

  const openEditModal = (course: Course) => {
    setEditingCourse(course);
    setFormData({
      title: course.title,
      description: course.description || '',
      short_description: course.short_description || '',
      price: course.price?.toString() || '',
      duration: course.duration || '',
      start_date: course.start_date || '',
      end_date: course.end_date || '',
      schedule: course.schedule || '',
      location: course.location || '',
      max_participants: course.max_participants?.toString() || '',
      image_url: course.image_url || '',
      is_active: course.is_active,
      display_order: course.display_order,
    });
    setIsModalOpen(true);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.title) {
      toast.error('Titel is verplicht');
      return;
    }

    const submitData = {
      title: formData.title,
      description: formData.description || null,
      short_description: formData.short_description || null,
      price: formData.price ? parseFloat(formData.price) : null,
      duration: formData.duration || null,
      start_date: formData.start_date || null,
      end_date: formData.end_date || null,
      schedule: formData.schedule || null,
      location: formData.location || null,
      max_participants: formData.max_participants ? parseInt(formData.max_participants) : null,
      image_url: formData.image_url || null,
      is_active: formData.is_active,
      display_order: formData.display_order,
    };

    if (editingCourse) {
      updateMutation.mutate({ id: editingCourse.id, data: submitData });
    } else {
      createMutation.mutate(submitData);
    }
  };

  return (
    <AdminLayout>
      <div className="space-y-6">
        {/* Header */}
        <div className="flex flex-col sm:flex-row justify-between gap-4">
          <div>
            <h1 className="text-3xl font-bold text-foreground">Cursussen</h1>
            <p className="text-muted-foreground mt-1">
              Beheer je cursussen en workshops
            </p>
          </div>
          <Button 
            onClick={() => setIsModalOpen(true)}
            className="nordic-button-primary"
          >
            <Plus size={20} className="mr-2" />
            Nieuwe Cursus
          </Button>
        </div>

        {/* Courses List */}
        {isLoading ? (
          <div className="flex items-center justify-center py-12">
            <div className="w-8 h-8 border-4 border-primary/30 border-t-primary rounded-full animate-spin" />
          </div>
        ) : courses?.length === 0 ? (
          <div className="nordic-card p-12 text-center">
            <GraduationCap className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
            <h3 className="text-lg font-medium text-foreground mb-2">Geen cursussen</h3>
            <p className="text-muted-foreground mb-4">Begin met het toevoegen van je eerste cursus</p>
            <Button onClick={() => setIsModalOpen(true)} className="nordic-button-primary">
              <Plus size={20} className="mr-2" />
              Cursus Toevoegen
            </Button>
          </div>
        ) : (
          <div className="space-y-4">
            {courses?.map((course) => (
              <div key={course.id} className="nordic-card p-6 flex flex-col sm:flex-row gap-4">
                {/* Image */}
                {course.image_url && (
                  <div className="w-full sm:w-32 h-32 flex-shrink-0">
                    <img
                      src={course.image_url}
                      alt={course.title}
                      className="w-full h-full object-cover rounded-lg"
                    />
                  </div>
                )}
                
                {/* Content */}
                <div className="flex-1 min-w-0">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <h3 className="text-lg font-bold text-foreground">{course.title}</h3>
                        {!course.is_active && (
                          <span className="text-xs px-2 py-1 rounded-full bg-muted text-muted-foreground">
                            Inactief
                          </span>
                        )}
                      </div>
                      {course.short_description && (
                        <p className="text-muted-foreground text-sm mb-3">{course.short_description}</p>
                      )}
                    </div>
                    <div className="flex gap-2 flex-shrink-0">
                      <Button
                        size="sm"
                        variant="outline"
                        onClick={() => openEditModal(course)}
                      >
                        <Edit size={16} />
                      </Button>
                      <Button
                        size="sm"
                        variant="destructive"
                        onClick={() => {
                          if (confirm('Weet je zeker dat je deze cursus wilt verwijderen?')) {
                            deleteMutation.mutate(course.id);
                          }
                        }}
                      >
                        <Trash2 size={16} />
                      </Button>
                    </div>
                  </div>
                  
                  {/* Meta */}
                  <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                    {course.price && (
                      <span className="flex items-center gap-1">
                        <DollarSign size={14} />
                        {course.price} NOK
                      </span>
                    )}
                    {course.duration && (
                      <span className="flex items-center gap-1">
                        <Calendar size={14} />
                        {course.duration}
                      </span>
                    )}
                    {course.location && (
                      <span className="flex items-center gap-1">
                        <MapPin size={14} />
                        {course.location}
                      </span>
                    )}
                    {course.max_participants && (
                      <span className="flex items-center gap-1">
                        <Users size={14} />
                        Max {course.max_participants}
                      </span>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Modal */}
        <Dialog open={isModalOpen} onOpenChange={(open) => !open && resetForm()}>
          <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
            <DialogHeader>
              <DialogTitle>
                {editingCourse ? 'Cursus Bewerken' : 'Nieuwe Cursus'}
              </DialogTitle>
            </DialogHeader>
            
            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Image Upload */}
              <div className="space-y-2">
                <Label>Afbeelding</Label>
                {formData.image_url ? (
                  <div className="relative">
                    <img
                      src={formData.image_url}
                      alt="Preview"
                      className="w-full h-48 object-cover rounded-lg"
                    />
                    <Button
                      type="button"
                      size="sm"
                      variant="destructive"
                      className="absolute top-2 right-2"
                      onClick={() => setFormData(prev => ({ ...prev, image_url: '' }))}
                    >
                      <X size={16} />
                    </Button>
                  </div>
                ) : (
                  <div className="border-2 border-dashed border-border rounded-lg p-6 text-center">
                    <input
                      type="file"
                      accept="image/*"
                      onChange={handleFileUpload}
                      className="hidden"
                      id="course-image-upload"
                      disabled={uploading}
                    />
                    <label
                      htmlFor="course-image-upload"
                      className="cursor-pointer flex flex-col items-center"
                    >
                      <Upload className="w-8 h-8 text-muted-foreground mb-2" />
                      <span className="text-sm text-muted-foreground">
                        {uploading ? 'Uploaden...' : 'Klik om een afbeelding te uploaden'}
                      </span>
                    </label>
                  </div>
                )}
              </div>

              {/* Title */}
              <div className="space-y-2">
                <Label htmlFor="title">Titel *</Label>
                <Input
                  id="title"
                  value={formData.title}
                  onChange={(e) => setFormData(prev => ({ ...prev, title: e.target.value }))}
                  placeholder="Bijv. Nybegynner Akvarell"
                  required
                />
              </div>

              {/* Short Description */}
              <div className="space-y-2">
                <Label htmlFor="short_description">Korte Beschrijving</Label>
                <Input
                  id="short_description"
                  value={formData.short_description}
                  onChange={(e) => setFormData(prev => ({ ...prev, short_description: e.target.value }))}
                  placeholder="Korte samenvatting voor de overzichtspagina"
                />
              </div>

              {/* Description */}
              <div className="space-y-2">
                <Label htmlFor="description">Volledige Beschrijving</Label>
                <Textarea
                  id="description"
                  value={formData.description}
                  onChange={(e) => setFormData(prev => ({ ...prev, description: e.target.value }))}
                  placeholder="Gedetailleerde cursus beschrijving..."
                  rows={4}
                />
              </div>

              {/* Price & Duration */}
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="price">Prijs (NOK)</Label>
                  <Input
                    id="price"
                    type="number"
                    step="0.01"
                    value={formData.price}
                    onChange={(e) => setFormData(prev => ({ ...prev, price: e.target.value }))}
                    placeholder="450"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="duration">Duur</Label>
                  <Input
                    id="duration"
                    value={formData.duration}
                    onChange={(e) => setFormData(prev => ({ ...prev, duration: e.target.value }))}
                    placeholder="2 timer"
                  />
                </div>
              </div>

              {/* Dates */}
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="start_date">Startdatum</Label>
                  <Input
                    id="start_date"
                    type="date"
                    value={formData.start_date}
                    onChange={(e) => setFormData(prev => ({ ...prev, start_date: e.target.value }))}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="end_date">Einddatum</Label>
                  <Input
                    id="end_date"
                    type="date"
                    value={formData.end_date}
                    onChange={(e) => setFormData(prev => ({ ...prev, end_date: e.target.value }))}
                  />
                </div>
              </div>

              {/* Schedule */}
              <div className="space-y-2">
                <Label htmlFor="schedule">Schema</Label>
                <Input
                  id="schedule"
                  value={formData.schedule}
                  onChange={(e) => setFormData(prev => ({ ...prev, schedule: e.target.value }))}
                  placeholder="Lørdager 10:00-12:00"
                />
              </div>

              {/* Location & Participants */}
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="location">Locatie</Label>
                  <Input
                    id="location"
                    value={formData.location}
                    onChange={(e) => setFormData(prev => ({ ...prev, location: e.target.value }))}
                    placeholder="Kunstrom Tønsberg"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="max_participants">Max Deelnemers</Label>
                  <Input
                    id="max_participants"
                    type="number"
                    value={formData.max_participants}
                    onChange={(e) => setFormData(prev => ({ ...prev, max_participants: e.target.value }))}
                    placeholder="8"
                  />
                </div>
              </div>

              {/* Display Order */}
              <div className="space-y-2">
                <Label htmlFor="display_order">Volgorde</Label>
                <Input
                  id="display_order"
                  type="number"
                  value={formData.display_order}
                  onChange={(e) => setFormData(prev => ({ ...prev, display_order: parseInt(e.target.value) || 0 }))}
                />
              </div>

              {/* Active Toggle */}
              <div className="flex items-center justify-between">
                <div>
                  <Label htmlFor="is_active">Actief</Label>
                  <p className="text-sm text-muted-foreground">Cursus wordt getoond op de website</p>
                </div>
                <Switch
                  id="is_active"
                  checked={formData.is_active}
                  onCheckedChange={(checked) => setFormData(prev => ({ ...prev, is_active: checked }))}
                />
              </div>

              {/* Actions */}
              <div className="flex gap-3 pt-4">
                <Button type="button" variant="outline" onClick={resetForm} className="flex-1">
                  Annuleren
                </Button>
                <Button 
                  type="submit" 
                  className="flex-1 nordic-button-primary"
                  disabled={createMutation.isPending || updateMutation.isPending}
                >
                  {editingCourse ? 'Bijwerken' : 'Toevoegen'}
                </Button>
              </div>
            </form>
          </DialogContent>
        </Dialog>
      </div>
    </AdminLayout>
  );
};

export default CoursesManagement;
