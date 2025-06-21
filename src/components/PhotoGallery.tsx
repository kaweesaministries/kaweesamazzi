
import { useState } from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import InteractiveImage from './InteractiveImage';

interface GalleryImage {
  id: string;
  src: string;
  alt: string;
  title: string;
  description?: string;
  category: string;
}

const PhotoGallery = () => {
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);
  const [filter, setFilter] = useState<string>('all');

  const images: GalleryImage[] = [
    {
      id: '1',
      src: '/lovable-uploads/efdceba7-7d2e-426d-88cd-09620d67eea7.png',
      alt: 'Children in classroom',
      title: 'Education Program',
      description: 'Students participating in our literacy program',
      category: 'education'
    },
    {
      id: '2',
      src: '/lovable-uploads/4bfa0d71-3ed2-4693-90b6-35142468907f.png',
      alt: 'Community health outreach',
      title: 'Health & Nutrition',
      description: 'Mobile health clinic serving rural communities',
      category: 'health'
    },
    {
      id: '3',
      src: '/lovable-uploads/526dc38a-25fa-40d4-b520-425b23ae0464.png',
      alt: 'Skills training workshop',
      title: 'Family Empowerment',
      description: 'Parents learning vocational skills',
      category: 'empowerment'
    },
    {
      id: '4',
      src: '/lovable-uploads/078a129e-0f98-4d91-af61-873687db1a04.png',
      alt: 'Safe playground',
      title: 'Child Protection',
      description: 'Safe spaces for children to play and learn',
      category: 'protection'
    },
    {
      id: '5',
      src: '/lovable-uploads/39671993-1bb4-4bb6-8819-3ca5c07c0042.png',
      alt: 'Community gathering',
      title: 'Community Events',
      description: 'Bringing families together for support',
      category: 'community'
    },
    {
      id: '6',
      src: '/lovable-uploads/30473baa-85f4-4931-aad9-c722ae7a4918.png',
      alt: 'Volunteer activities',
      title: 'Volunteer Program',
      description: 'Local and international volunteers making a difference',
      category: 'volunteers'
    }
  ];

  const categories = [
    { key: 'all', label: 'All Photos' },
    { key: 'education', label: 'Education' },
    { key: 'health', label: 'Health' },
    { key: 'empowerment', label: 'Empowerment' },
    { key: 'protection', label: 'Protection' },
    { key: 'community', label: 'Community' },
    { key: 'volunteers', label: 'Volunteers' }
  ];

  const filteredImages = filter === 'all' 
    ? images 
    : images.filter(img => img.category === filter);

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

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {categories.map((category) => (
            <Button
              key={category.key}
              variant={filter === category.key ? "default" : "outline"}
              size="sm"
              onClick={() => setFilter(category.key)}
              className="mb-2"
            >
              {category.label}
            </Button>
          ))}
        </div>

        {/* Image Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {filteredImages.map((image, index) => (
            <motion.div
              key={image.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card 
                className="cursor-pointer hover:shadow-lg transition-all duration-300 overflow-hidden group"
                onClick={() => setSelectedImage(image)}
              >
                <div className="aspect-video overflow-hidden">
                  <img 
                    src={image.src} 
                    alt={image.alt}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardContent className="p-4">
                  <h3 className="font-semibold mb-1">{image.title}</h3>
                  <p className="text-sm text-gray-600">{image.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Lightbox Modal */}
        {selectedImage && (
          <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4">
            <div className="relative max-w-4xl w-full max-h-[90vh] bg-white rounded-lg overflow-hidden">
              <Button
                variant="ghost"
                size="sm"
                className="absolute top-4 right-4 z-10 bg-white/80 backdrop-blur-sm"
                onClick={() => setSelectedImage(null)}
              >
                <X className="h-4 w-4" />
              </Button>
              
              {/* Navigation Buttons */}
              <Button
                variant="ghost"
                size="sm"
                className="absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-white/80 backdrop-blur-sm"
                onClick={() => navigateImage('prev')}
              >
                <ChevronLeft className="h-4 w-4" />
              </Button>
              
              <Button
                variant="ghost"
                size="sm"
                className="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-white/80 backdrop-blur-sm"
                onClick={() => navigateImage('next')}
              >
                <ChevronRight className="h-4 w-4" />
              </Button>

              <div className="max-h-[70vh] overflow-hidden">
                <InteractiveImage
                  src={selectedImage.src}
                  alt={selectedImage.alt}
                  className="w-full h-full"
                />
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{selectedImage.title}</h3>
                <p className="text-gray-600">{selectedImage.description}</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default PhotoGallery;
