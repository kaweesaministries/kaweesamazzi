
import { useState } from 'react';
import { motion } from 'framer-motion';
import PhotoFilters from './PhotoFilters';
import PhotoGrid, { GalleryImage } from './PhotoGrid';
import PhotoLightbox from './PhotoLightbox';

const PhotoGallery = () => {
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);
  const [filter, setFilter] = useState<string>('all');

  const images: GalleryImage[] = [
    {
      id: '1',
      src: 'https://github.com/drewversedesign/kaweesa-ministries/blob/main/IMG-20250518-WA0062.jpg?raw=true',
      alt: 'Children receiving educational support',
      title: 'Education Program',
      description: 'Students participating in our literacy and education support program',
      category: 'education'
    },
    {
      id: '2',
      src: 'https://github.com/drewversedesign/kaweesa-ministries/blob/main/IMG-20250518-WA0060.jpg?raw=true',
      alt: 'Community health and nutrition program',
      title: 'Health & Nutrition',
      description: 'Providing essential healthcare and nutrition support to children',
      category: 'health'
    },
    {
      id: '3',
      src: 'https://github.com/drewversedesign/kaweesa-ministries/blob/main/IMG-20250518-WA0058.jpg?raw=true',
      alt: 'Family empowerment activities',
      title: 'Family Empowerment',
      description: 'Supporting families through skills training and development programs',
      category: 'empowerment'
    },
    {
      id: '4',
      src: 'https://github.com/drewversedesign/kaweesa-ministries/blob/main/IMG-20250518-WA0057.jpg?raw=true',
      alt: 'Safe spaces for children',
      title: 'Child Protection',
      description: 'Creating safe environments where children can learn and play',
      category: 'protection'
    },
    {
      id: '5',
      src: 'https://github.com/drewversedesign/kaweesa-ministries/blob/main/IMG-20250518-WA0053.jpg?raw=true',
      alt: 'Community gathering and events',
      title: 'Community Events',
      description: 'Bringing families and communities together for support and celebration',
      category: 'community'
    },
    {
      id: '6',
      src: 'https://github.com/drewversedesign/kaweesa-ministries/blob/main/IMG-20250518-WA0161.jpg?raw=true',
      alt: 'Educational activities and learning',
      title: 'Learning Activities',
      description: 'Interactive learning sessions helping children develop essential skills',
      category: 'education'
    },
    {
      id: '7',
      src: 'https://github.com/drewversedesign/kaweesa-ministries/blob/main/IMG-20250518-WA0163.jpg?raw=true',
      alt: 'Community outreach programs',
      title: 'Community Outreach',
      description: 'Reaching out to communities with essential services and support',
      category: 'community'
    },
    {
      id: '8',
      src: 'https://github.com/drewversedesign/kaweesa-ministries/blob/main/IMG-20250518-WA0164.jpg?raw=true',
      alt: 'Children participating in programs',
      title: 'Program Participation',
      description: 'Active participation of children in our development programs',
      category: 'education'
    },
    {
      id: '9',
      src: 'https://github.com/drewversedesign/kaweesa-ministries/blob/main/IMG-20250518-WA0168.jpg?raw=true',
      alt: 'Health and wellness activities',
      title: 'Health & Wellness',
      description: 'Promoting health and wellness through various community programs',
      category: 'health'
    }
  ];

  const categories = [
    { key: 'all', label: 'All Photos' },
    { key: 'education', label: 'Education' },
    { key: 'health', label: 'Health' },
    { key: 'empowerment', label: 'Empowerment' },
    { key: 'protection', label: 'Protection' },
    { key: 'community', label: 'Community' }
  ];

  const filteredImages = filter === 'all' 
    ? images.slice(0, 9) // Show only first 9 images for compact display
    : images.filter(img => img.category === filter).slice(0, 9);

  const currentIndex = selectedImage 
    ? filteredImages.findIndex(img => img.id === selectedImage.id)
    : -1;

  const navigateImage = (direction: 'prev' | 'next') => {
    if (currentIndex === -1) return;
    
    let newIndex;
    if (direction === 'prev') {
      newIndex = currentIndex > 0 ? currentIndex - 1 : filteredImages.length - 1;
    } else {
      newIndex = currentIndex < filteredImages.length - 1 ? currentIndex + 1 : 0;
    }
    
    setSelectedImage(filteredImages[newIndex]);
  };

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-4">Our Impact in Pictures</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            See the real faces and stories behind our ministry's work across Uganda
          </p>
        </motion.div>

        <PhotoFilters 
          categories={categories}
          activeFilter={filter}
          onFilterChange={setFilter}
        />

        <PhotoGrid 
          images={filteredImages}
          onImageSelect={setSelectedImage}
        />

        <PhotoLightbox
          selectedImage={selectedImage}
          images={filteredImages}
          onClose={() => setSelectedImage(null)}
          onNavigate={navigateImage}
        />
      </div>
    </section>
  );
};

export default PhotoGallery;
