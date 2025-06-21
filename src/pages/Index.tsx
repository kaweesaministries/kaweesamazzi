
import PageLayout from '@/components/PageLayout';
import Hero from '@/components/Hero';
import PhotoGallery from '@/components/PhotoGallery';
import QuickImpactStats from '@/components/QuickImpactStats';
import AboutMinistry from '@/components/AboutMinistry';
import LeadershipPreview from '@/components/LeadershipPreview';
import ProgramsPreview from '@/components/ProgramsPreview';
import ImpactStories from '@/components/ImpactStories';
import TestimonialsCarousel from '@/components/TestimonialsCarousel';
import TransformationShowcase from '@/components/TransformationShowcase';
import HowToHelp from '@/components/HowToHelp';
import VolunteerOpportunitiesPreview from '@/components/VolunteerOpportunitiesPreview';
import DonationImpactSection from '@/components/DonationImpactSection';
import NewsPreview from '@/components/NewsPreview';
import UpcomingEventsPreview from '@/components/UpcomingEventsPreview';
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
      <PhotoGallery />
      <QuickImpactStats />
      <AboutMinistry />
      <LeadershipPreview />
      <ProgramsPreview />
      <ImpactStories />
      <TransformationShowcase />
      <TestimonialsCarousel />
      <HowToHelp />
      <VolunteerOpportunitiesPreview />
      <DonationImpactSection />
      <NewsPreview />
      <UpcomingEventsPreview />
    </PageLayout>
  );
};

export default Index;
