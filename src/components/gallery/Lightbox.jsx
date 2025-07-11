import React from 'react';
import { X, ChevronLeft, ChevronRight, Download, Heart, Share2 } from 'lucide-react';

const Lightbox = ({ image, onClose, onPrev, onNext }) => {
  if (!image) return null;

  return (
    <div 
      className="fixed inset-0 bg-black/90 flex items-center justify-center z-50"
      onClick={onClose}
    >
      <div 
        className="relative bg-white rounded-lg shadow-2xl max-w-4xl w-full max-h-[90vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex justify-between items-center border-b" style={{ padding: '1rem' }}>
          <div>
            <h3 className="text-xl font-bold text-gray-800">{image.title}</h3>
            <p className="text-gray-600">{image.categoryLabel}</p>
          </div>
          <button 
            onClick={onClose}
            className="text-gray-500 hover:text-gray-800"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Image */}
        <div className="flex-1 flex items-center justify-center" style={{ padding: '1rem' }}>
          <img 
            src={image.src} 
            alt={image.title} 
            className="max-w-full max-h-[65vh] object-contain"
          />
        </div>

        {/* Description & Actions */}
        <div style={{ padding: '1rem' }}>
          <p className="text-gray-700" style={{ marginBottom: '1rem' }}>{image.description}</p>
          <div className="flex justify-between items-center">
            <div className="flex" style={{ gap: '1rem' }}>
              <button className="flex items-center text-gray-600 hover:text-purple-600">
                <Heart className="w-5 h-5" style={{ marginRight: '0.5rem' }} /> {image.likes}
              </button>
              <button className="flex items-center text-gray-600 hover:text-purple-600">
                <Share2 className="w-5 h-5" style={{ marginRight: '0.5rem' }} /> Share
              </button>
            </div>
            <Button variant="primary" size="md">
              <Download className="w-5 h-5" style={{ marginRight: '0.5rem' }} />
              Download
            </Button>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <button 
        onClick={(e) => { e.stopPropagation(); onPrev(); }}
        className="absolute left-4 top-1/2 -translate-y-1/2 text-white bg-black/30 hover:bg-black/50 rounded-full"
        style={{ padding: '0.75rem' }}
      >
        <ChevronLeft className="w-8 h-8" />
      </button>
      <button 
        onClick={(e) => { e.stopPropagation(); onNext(); }}
        className="absolute right-4 top-1/2 -translate-y-1/2 text-white bg-black/30 hover:bg-black/50 rounded-full"
        style={{ padding: '0.75rem' }}
      >
        <ChevronRight className="w-8 h-8" />
      </button>
    </div>
  );
};

export default Lightbox;
