import React from 'react';
import { Eye, Heart, Share2 } from 'lucide-react';
import AnimatedSection from '../AnimatedSection';

const GalleryGrid = ({ images, onImageClick }) => {
  return (
    <section style={{ paddingTop: '5rem', paddingBottom: '5rem' }}>
      <div className="container mx-auto" style={{ paddingLeft: '1rem', paddingRight: '1rem' }}>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4" style={{ gap: '1.5rem' }}>
          {images.map((image, index) => (
            <AnimatedSection 
              key={image.id} 
              delay={index * 100}
              className="group"
            >
              <div 
                className="relative rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer group-hover:-translate-y-1"
                onClick={() => onImageClick(image)}
              >
                <img 
                  src={image.src} 
                  alt={image.title} 
                  className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>
                <div className="absolute bottom-0 left-0" style={{ padding: '1rem' }}>
                  <h3 className="text-white text-lg font-bold">{image.title}</h3>
                  <p className="text-gray-300 text-sm">{image.categoryLabel}</p>
                </div>
                <div className="absolute top-0 right-0" style={{ padding: '1rem' }}>
                  <div className="flex items-center text-white bg-black/30 rounded-full" style={{ padding: '0.25rem 0.5rem', gap: '0.5rem' }}>
                    <Heart className="w-4 h-4" />
                    <span className="text-sm">{image.likes}</span>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
        {images.length === 0 && (
          <div className="text-center" style={{ paddingTop: '4rem', paddingBottom: '4rem' }}>
            <h3 className="text-2xl font-bold text-gray-800" style={{ marginBottom: '1rem' }}>No Results Found</h3>
            <p className="text-gray-600">Try adjusting your search or filter to find what you're looking for.</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default GalleryGrid;
