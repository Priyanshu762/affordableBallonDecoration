import React, { useState, useEffect, useCallback } from 'react';
import HeroSection from '../components/gallery/HeroSection';
import SearchAndFilter from '../components/gallery/SearchAndFilter';
import GalleryGrid from '../components/gallery/GalleryGrid';
import Lightbox from '../components/gallery/Lightbox';
import CallToActionSection from '../components/about/CallToActionSection';
import { galleryImages } from '../data/content';

const Gallery = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedImage, setSelectedImage] = useState(null);

  const categories = [
    { id: 'all', label: 'All Events', count: galleryImages.length },
    { id: 'birthday', label: 'Birthdays', count: galleryImages.filter(img => img.category === 'birthday').length },
    { id: 'wedding', label: 'Weddings', count: galleryImages.filter(img => img.category === 'wedding').length },
    { id: 'baby-shower', label: 'Baby Showers', count: galleryImages.filter(img => img.category === 'baby-shower').length },
    { id: 'corporate', label: 'Corporate', count: galleryImages.filter(img => img.category === 'corporate').length },
    { id: 'graduation', label: 'Graduations', count: galleryImages.filter(img => img.category === 'graduation').length },
    { id: 'anniversary', label: 'Anniversaries', count: galleryImages.filter(img => img.category === 'anniversary').length }
  ];

  const filteredImages = galleryImages.filter(image => {
    const matchesCategory = selectedCategory === 'all' || image.category === selectedCategory;
    const matchesSearch = image.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         image.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const openLightbox = (image) => {
    setSelectedImage(image);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  const handlePrev = useCallback(() => {
    if (!selectedImage) return;
    const currentIndex = filteredImages.findIndex(img => img.id === selectedImage.id);
    const prevIndex = (currentIndex - 1 + filteredImages.length) % filteredImages.length;
    setSelectedImage(filteredImages[prevIndex]);
  }, [filteredImages, selectedImage]);

  const handleNext = useCallback(() => {
    if (!selectedImage) return;
    const currentIndex = filteredImages.findIndex(img => img.id === selectedImage.id);
    const nextIndex = (currentIndex + 1) % filteredImages.length;
    setSelectedImage(filteredImages[nextIndex]);
  }, [filteredImages, selectedImage]);
  
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!selectedImage) return;
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowLeft') handlePrev();
      if (e.key === 'ArrowRight') handleNext();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedImage, handlePrev, handleNext]);

  useEffect(() => {
    document.body.style.overflow = selectedImage ? 'hidden' : 'unset';
  }, [selectedImage]);

  return (
    <div className="min-h-screen bg-gray-50">
      <HeroSection />
      <SearchAndFilter 
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
        categories={categories}
      />
      <GalleryGrid images={filteredImages} onImageClick={openLightbox} />
      <Lightbox 
        image={selectedImage}
        onClose={closeLightbox}
        onPrev={handlePrev}
        onNext={handleNext}
      />
      <CallToActionSection />
    </div>
  );
};

export default Gallery;
