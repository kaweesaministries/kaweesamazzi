
import PageLayout from '@/components/PageLayout';
import Hero from '@/components/Hero';
import AboutMinistry from '@/components/AboutMinistry';
import Programs from '@/components/Programs';
import ImpactStories from '@/components/ImpactStories';
import HowToHelp from '@/components/HowToHelp';
import NewsPreview from '@/components/NewsPreview';
import SEO from '@/components/SEO';
import { useEffect } from 'react';

const Index = () => {
  // Fix any ID conflicts when the page loads
  useEffect(() => {
    const contactElements = document.querySelectorAll('[id="contact"]');
    if (contactElements.length > 1) {
      // If there are multiple elements with id="contact", rename one
      contactElements[1].id = 'contact-footer';
    }
  }, []);

  return (
    <PageLayout>
      <SEO 
        title="KAWEESA CHILDREN'S MINISTRY LIMITED - Transforming Lives Through Love and Care" 
        description="KAWEESA CHILDREN'S MINISTRY LIMITED is a Ugandan foundation dedicated to improving the lives of children through education, health, protection, and community development programs."
        imageUrl="/lovable-uploads/526dc38a-25fa-40d4-b520-425b23ae0464.png"
        keywords={['children ministry', 'Uganda foundation', 'child welfare', 'education programs', 'community development', 'child protection', 'charitable organization']}
      />
      <Hero />
      <AboutMinistry />
      <Programs />
      <ImpactStories />
      <HowToHelp />
      <NewsPreview />
    </PageLayout>
  );
};

export default Index;
