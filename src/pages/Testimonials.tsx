import PageLayout from '@/components/PageLayout';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Quote, Star, Heart } from 'lucide-react';
import { motion } from "framer-motion";
import SEO from '@/components/SEO';
import QuickImpactStats from '@/components/QuickImpactStats';

const Testimonials = () => {
  const beneficiaryStories = [
    {
      name: "Sarah Nakato",
      age: 16,
      story: "Thanks to KAWEESA Children's Ministry, I was able to complete my secondary education. Now I'm preparing for university to study medicine. I want to come back and help other children in my community.",
      image: "/lovable-uploads/efdceba7-7d2e-426d-88cd-09620d67eea7.png",
      program: "Education Support",
      achievement: "Secondary School Graduate"
    },
    {
      name: "Moses Kiwanuka",
      age: 14,
      story: "When my parents couldn't afford my school fees, I thought my education was over. The ministry not only paid for my school but also gave me hope. I'm now top of my class in mathematics.",
      image: "/lovable-uploads/4bfa0d71-3ed2-4693-90b6-35142468907f.png",
      program: "Scholarship Program",
      achievement: "Academic Excellence"
    },
    {
      name: "Grace Auma",
      age: 12,
      story: "The ministry helped my family when we had nothing. They gave us food, shelter, and helped me stay in school. Now I want to be a teacher to help other children learn.",
      image: "/lovable-uploads/526dc38a-25fa-40d4-b520-425b23ae0464.png",
      program: "Emergency Assistance",
      achievement: "Continuing Education"
    }
  ];

  const volunteerStories = [
    {
      name: "David Mukasa",
      role: "Local Volunteer",
      story: "Volunteering with KAWEESA has changed my perspective on community service. Seeing the smiles on children's faces when they receive support motivates me every day.",
      duration: "2 years volunteering"
    },
    {
      name: "Emma Thompson",
      role: "International Volunteer",
      story: "I came to Uganda for a short-term volunteer program and ended up staying for six months. The work KAWEESA does is truly transformational.",
      duration: "6 months in Uganda"
    },
    {
      name: "Peter Ssebunya",
      role: "Skills Trainer",
      story: "Teaching vocational skills to older children gives them hope for the future. Many of my students now have their own small businesses.",
      duration: "4 years trainer"
    }
  ];

  return (
    <PageLayout>
      <SEO 
        title="Testimonials - KAWEESA CHILDREN'S MINISTRY LIMITED" 
        description="Read inspiring stories from children, families, sponsors, and volunteers whose lives have been transformed through our ministry programs."
        keywords={['success stories', 'testimonials', 'child sponsorship stories', 'volunteer experiences', 'transformation stories']}
      />
      
      <div className="w-full pt-24 pb-12 bg-gradient-to-b from-yellow-400 to-orange-500 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <motion.h1 
              className="text-4xl md:text-5xl font-bold mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              Stories of Transformation
            </motion.h1>
            <motion.p 
              className="text-xl text-yellow-100 mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Hear from the children, families, sponsors, and volunteers whose lives have been transformed through our ministry
            </motion.p>
          </div>
        </div>
      </div>
      
      <div className="container mx-auto px-4 py-16">
        <motion.div 
          className="mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <h2 className="text-3xl font-bold text-center mb-8 text-gray-900">Children's Success Stories</h2>
          
          {/* Add QuickImpactStats component here */}
          <QuickImpactStats />
        </motion.div>
        
        <motion.div 
          className="mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <h2 className="text-3xl font-bold text-center mb-8 text-gray-900">Volunteer Experiences</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {volunteerStories.map((volunteer, index) => (
              <Card key={index} className="p-6 bg-green-50 border-green-200">
                <CardContent className="p-0">
                  <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center mb-4">
                    <Heart className="w-6 h-6 text-white" />
                  </div>
                  <h4 className="font-bold text-gray-900 mb-2">{volunteer.name}</h4>
                  <p className="text-sm text-green-600 font-medium mb-3">{volunteer.role}</p>
                  <p className="text-gray-700 text-sm mb-4">"{volunteer.story}"</p>
                  <p className="text-xs text-gray-500">{volunteer.duration}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </motion.div>
        
        <motion.div 
          className="bg-gradient-to-r from-yellow-400 to-orange-500 rounded-2xl p-8 text-white text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.0 }}
        >
          <Star className="w-16 h-16 mx-auto mb-4 text-yellow-200" />
          <h2 className="text-3xl font-bold mb-4">Be Part of Our Story</h2>
          <p className="text-xl mb-6 text-yellow-100">
            Join the thousands of people who have already made a difference. Your story of impact could be next.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="px-8 py-3 bg-white text-orange-600 hover:bg-gray-100 font-semibold">
              Sponsor a Child
            </Button>
            <Button variant="outline" className="px-8 py-3 border-white text-white hover:bg-white hover:text-orange-600 font-semibold">
              Become a Volunteer
            </Button>
          </div>
        </motion.div>
      </div>
    </PageLayout>
  );
};

export default Testimonials;
