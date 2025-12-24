import React, { useEffect } from 'react';
import { X, ChevronLeft, ChevronRight, Heart } from 'lucide-react';

interface Artwork {
  id: number | string;
  title: string;
  category: string;
  year: string;
  image: string;
  description: string;
}

interface LightboxModalProps {
  isOpen: boolean;
  onClose: () => void;
  artworks: Artwork[];
  currentIndex: number;
  onPrevious: () => void;
  onNext: () => void;
}

const LightboxModal: React.FC<LightboxModalProps> = ({
  isOpen,
  onClose,
  artworks,
  currentIndex,
  onPrevious,
  onNext
}) => {
  const currentArtwork = artworks[currentIndex];

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (!isOpen) return;
      
      switch (event.key) {
        case 'Escape':
          onClose();
          break;
        case 'ArrowLeft':
          onPrevious();
          break;
        case 'ArrowRight':
          onNext();
          break;
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    
    // Prevent body scroll when modal is open
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'auto';
    };
  }, [isOpen, onClose, onPrevious, onNext]);

  if (!isOpen || !currentArtwork) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/80 backdrop-blur-sm animate-fade-in"
        onClick={onClose}
      />
      
      {/* Modal Content */}
      <div className="relative z-10 w-full h-full flex items-center justify-center p-4">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 z-20 w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center text-white hover:bg-white/20 transition-colors"
        >
          <X className="w-6 h-6" />
        </button>

        {/* Previous Button */}
        <button
          onClick={onPrevious}
          disabled={currentIndex === 0}
          className="absolute left-6 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center text-white hover:bg-white/20 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>

        {/* Next Button */}
        <button
          onClick={onNext}
          disabled={currentIndex === artworks.length - 1}
          className="absolute right-6 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center text-white hover:bg-white/20 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
        >
          <ChevronRight className="w-6 h-6" />
        </button>

        {/* Main Content */}
        <div className="flex flex-col lg:flex-row items-center justify-center gap-8 max-w-7xl w-full h-full">
          {/* Image */}
          <div className="flex-1 flex items-center justify-center">
            <img
              src={currentArtwork.image}
              alt={currentArtwork.title}
              className="max-w-full max-h-[80vh] object-contain rounded-lg shadow-2xl animate-scale-in"
            />
          </div>

          {/* Info Panel */}
          <div className="w-full lg:w-80 bg-white/10 backdrop-blur-sm rounded-2xl p-8 text-white">
            <div className="mb-6">
              <div className="flex items-center justify-between mb-4">
                <span className="px-3 py-1 rounded-full bg-white/20 text-sm font-medium">
                  {currentArtwork.year}
                </span>
                <button className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center hover:bg-white/30 transition-colors">
                  <Heart className="w-5 h-5" />
                </button>
              </div>
              
              <h2 className="text-2xl font-bold mb-2">{currentArtwork.title}</h2>
              
              <span className="inline-flex items-center px-3 py-1 rounded-full bg-primary/20 text-primary text-sm font-medium mb-4">
                {currentArtwork.category}
              </span>
            </div>

            <p className="text-white/80 leading-relaxed mb-6">
              {currentArtwork.description}
            </p>

            {/* Navigation Info */}
            <div className="flex items-center justify-between text-sm text-white/60">
              <span>{currentIndex + 1} of {artworks.length}</span>
              <span className="text-xs">Use ← → keys to navigate</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LightboxModal;