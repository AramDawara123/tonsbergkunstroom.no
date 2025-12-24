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
  Image as ImageIcon,
  Home,
  Grid
} from 'lucide-react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';

interface Photo {
  id: string;
  title: string;
  description: string | null;
  image_url: string;
  show_on_home: boolean;
  show_in_gallery: boolean;
  display_order: number;
  created_at: string;
}

const PhotosManagement = () => {
  const queryClient = useQueryClient();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingPhoto, setEditingPhoto] = useState<Photo | null>(null);
  const [uploading, setUploading] = useState(false);
  
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    image_url: '',
    show_on_home: false,
    show_in_gallery: true,
    display_order: 0,
  });

  const { data: photos, isLoading } = useQuery({
    queryKey: ['admin-photos'],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('photos')
        .select('*')
        .order('display_order', { ascending: true });
      if (error) throw error;
      return data as Photo[];
    },
  });

  const createMutation = useMutation({
    mutationFn: async (data: typeof formData) => {
      const { error } = await supabase.from('photos').insert([data]);
      if (error) throw error;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['admin-photos'] });
      queryClient.invalidateQueries({ queryKey: ['photos-count'] });
      queryClient.invalidateQueries({ queryKey: ['home-photos-count'] });
      toast.success('Foto toegevoegd!');
      resetForm();
    },
    onError: (error) => {
      toast.error('Fout bij toevoegen: ' + error.message);
    },
  });

  const updateMutation = useMutation({
    mutationFn: async ({ id, data }: { id: string; data: typeof formData }) => {
      const { error } = await supabase.from('photos').update(data).eq('id', id);
      if (error) throw error;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['admin-photos'] });
      queryClient.invalidateQueries({ queryKey: ['home-photos-count'] });
      toast.success('Foto bijgewerkt!');
      resetForm();
    },
    onError: (error) => {
      toast.error('Fout bij bijwerken: ' + error.message);
    },
  });

  const deleteMutation = useMutation({
    mutationFn: async (id: string) => {
      const { error } = await supabase.from('photos').delete().eq('id', id);
      if (error) throw error;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['admin-photos'] });
      queryClient.invalidateQueries({ queryKey: ['photos-count'] });
      queryClient.invalidateQueries({ queryKey: ['home-photos-count'] });
      toast.success('Foto verwijderd!');
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
      const filePath = `gallery/${fileName}`;

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
      image_url: '',
      show_on_home: false,
      show_in_gallery: true,
      display_order: 0,
    });
    setEditingPhoto(null);
    setIsModalOpen(false);
  };

  const openEditModal = (photo: Photo) => {
    setEditingPhoto(photo);
    setFormData({
      title: photo.title,
      description: photo.description || '',
      image_url: photo.image_url,
      show_on_home: photo.show_on_home,
      show_in_gallery: photo.show_in_gallery,
      display_order: photo.display_order,
    });
    setIsModalOpen(true);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.title || !formData.image_url) {
      toast.error('Vul alle verplichte velden in');
      return;
    }

    if (editingPhoto) {
      updateMutation.mutate({ id: editingPhoto.id, data: formData });
    } else {
      createMutation.mutate(formData);
    }
  };

  return (
    <AdminLayout>
      <div className="space-y-6">
        {/* Header */}
        <div className="flex flex-col sm:flex-row justify-between gap-4">
          <div>
            <h1 className="text-3xl font-bold text-foreground">Foto's</h1>
            <p className="text-muted-foreground mt-1">
              Beheer de foto's voor de homepage en galerij
            </p>
          </div>
          <Button 
            onClick={() => setIsModalOpen(true)}
            className="nordic-button-primary"
          >
            <Plus size={20} className="mr-2" />
            Nieuwe Foto
          </Button>
        </div>

        {/* Photos Grid */}
        {isLoading ? (
          <div className="flex items-center justify-center py-12">
            <div className="w-8 h-8 border-4 border-primary/30 border-t-primary rounded-full animate-spin" />
          </div>
        ) : photos?.length === 0 ? (
          <div className="nordic-card p-12 text-center">
            <ImageIcon className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
            <h3 className="text-lg font-medium text-foreground mb-2">Geen foto's</h3>
            <p className="text-muted-foreground mb-4">Begin met het toevoegen van je eerste foto</p>
            <Button onClick={() => setIsModalOpen(true)} className="nordic-button-primary">
              <Plus size={20} className="mr-2" />
              Foto Toevoegen
            </Button>
          </div>
        ) : (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {photos?.map((photo) => (
              <div key={photo.id} className="nordic-card overflow-hidden group">
                <div className="aspect-square relative">
                  <img
                    src={photo.image_url}
                    alt={photo.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-foreground/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2">
                    <Button
                      size="sm"
                      variant="secondary"
                      onClick={() => openEditModal(photo)}
                    >
                      <Edit size={16} />
                    </Button>
                    <Button
                      size="sm"
                      variant="destructive"
                      onClick={() => {
                        if (confirm('Weet je zeker dat je deze foto wilt verwijderen?')) {
                          deleteMutation.mutate(photo.id);
                        }
                      }}
                    >
                      <Trash2 size={16} />
                    </Button>
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="font-medium text-foreground truncate">{photo.title}</h3>
                  <div className="flex gap-2 mt-2">
                    {photo.show_on_home && (
                      <span className="inline-flex items-center gap-1 text-xs px-2 py-1 rounded-full bg-primary/10 text-primary">
                        <Home size={12} /> Home
                      </span>
                    )}
                    {photo.show_in_gallery && (
                      <span className="inline-flex items-center gap-1 text-xs px-2 py-1 rounded-full bg-accent/30 text-accent-foreground">
                        <Grid size={12} /> Galerij
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
          <DialogContent className="max-w-lg">
            <DialogHeader>
              <DialogTitle>
                {editingPhoto ? 'Foto Bewerken' : 'Nieuwe Foto'}
              </DialogTitle>
            </DialogHeader>
            
            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Image Upload */}
              <div className="space-y-2">
                <Label>Afbeelding *</Label>
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
                  <div className="border-2 border-dashed border-border rounded-lg p-8 text-center">
                    <input
                      type="file"
                      accept="image/*"
                      onChange={handleFileUpload}
                      className="hidden"
                      id="image-upload"
                      disabled={uploading}
                    />
                    <label
                      htmlFor="image-upload"
                      className="cursor-pointer flex flex-col items-center"
                    >
                      <Upload className="w-10 h-10 text-muted-foreground mb-2" />
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
                  placeholder="Bijv. Zonsondergang boven fjord"
                  required
                />
              </div>

              {/* Description */}
              <div className="space-y-2">
                <Label htmlFor="description">Beschrijving</Label>
                <Textarea
                  id="description"
                  value={formData.description}
                  onChange={(e) => setFormData(prev => ({ ...prev, description: e.target.value }))}
                  placeholder="Optionele beschrijving..."
                  rows={3}
                />
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

              {/* Toggles */}
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <Label htmlFor="show_on_home">Tonen op Homepage</Label>
                    <p className="text-sm text-muted-foreground">Foto wordt getoond in de hero sectie</p>
                  </div>
                  <Switch
                    id="show_on_home"
                    checked={formData.show_on_home}
                    onCheckedChange={(checked) => setFormData(prev => ({ ...prev, show_on_home: checked }))}
                  />
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <Label htmlFor="show_in_gallery">Tonen in Galerij</Label>
                    <p className="text-sm text-muted-foreground">Foto wordt getoond op de galerij pagina</p>
                  </div>
                  <Switch
                    id="show_in_gallery"
                    checked={formData.show_in_gallery}
                    onCheckedChange={(checked) => setFormData(prev => ({ ...prev, show_in_gallery: checked }))}
                  />
                </div>
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
                  {editingPhoto ? 'Bijwerken' : 'Toevoegen'}
                </Button>
              </div>
            </form>
          </DialogContent>
        </Dialog>
      </div>
    </AdminLayout>
  );
};

export default PhotosManagement;
