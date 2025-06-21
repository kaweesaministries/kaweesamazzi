
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
    },
    {
      id: '10',
      src: 'https://github.com/drewversedesign/kaweesta-ministries/blob/main/IMG-20250518-WA0170.jpg?raw=true',
      alt: 'Skills development training',
      title: 'Skills Development',
      description: 'Providing practical skills training for sustainable livelihoods',
      category: 'empowerment'
    },
    {
      id: '11',
      src: 'https://github.com/drewversedesign/kaweesa-ministries/blob/main/IMG-20250518-WA0172.jpg?raw=true',
      alt: 'Community support initiatives',
      title: 'Community Support',
      description: 'Collaborative efforts to strengthen community bonds and support systems',
      category: 'community'
    },
    {
      id: '12',
      src: 'https://github.com/drewversedesign/kaweesa-ministries/blob/main/IMG-20250518-WA0066.jpg?raw=true',
      alt: 'Child protection and care',
      title: 'Child Care & Protection',
      description: 'Ensuring every child receives proper care and protection',
      category: 'protection'
    },
    {
      id: '13',
      src: 'https://github.com/drewversedesign/kaweesa-ministries/blob/main/IMG-20250518-WA0064.jpg?raw=true',
      alt: 'Educational support and mentoring',
      title: 'Educational Mentoring',
      description: 'One-on-one mentoring and educational support for children',
      category: 'education'
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
