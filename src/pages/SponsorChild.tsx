
import PageLayout from '@/components/PageLayout';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Heart, Calendar, MapPin, BookOpen, Users, Mail } from 'lucide-react';
import { motion } from "framer-motion";
import SEO from '@/components/SEO';

const SponsorChild = () => {
  const children = [
    {
      id: 1,
      name: "Sarah Nakato",
      age: 8,
      location: "Kampala",
      story: "Sarah loves to read and dreams of becoming a teacher. She lives with her grandmother and needs support for school fees and supplies.",
      image: "/lovable-uploads/efdceba7-7d2e-426d-88cd-09620d67eea7.png",
      needs: ["School fees", "Books & supplies", "Uniform", "Nutritious meals"]
    },
    {
      id: 2,
      name: "Moses Kiwanuka",
      age: 12,
      location: "Masaka",
      story: "Moses is passionate about mathematics and wants to become an engineer. His family struggles to afford his education after his father's illness.",
      image: "/lovable-uploads/4bfa0d71-3ed2-4693-90b6-35142468907f.png",
      needs: ["School fees", "Transportation", "Learning materials", "Health support"]
    },
    {
      id: 3,
      name: "Grace Auma",
      age: 10,
      location: "Jinja",
      story: "Grace enjoys art and storytelling. She helps care for her younger siblings and needs support to continue her education.",
      image: "/lovable-uploads/526dc38a-25fa-40d4-b520-425b23ae0464.png",
      needs: ["School fees", "Art supplies", "Uniform", "Family support"]
    }
  ];

  const sponsorshipLevels = [
    {
      level: "Basic Support",
      amount: "$30/month",
      benefits: ["Educational support", "School supplies", "Progress updates", "Annual photo"],
      color: "bg-blue-50 border-blue-200"
    },
    {
      level: "Full Support",
      amount: "$50/month",
      benefits: ["Complete education coverage", "Health support", "Nutritious meals", "Monthly updates", "Letters from child"],
      color: "bg-orange-50 border-orange-200",
      popular: true
    },
    {
      level: "Family Support",
      amount: "$75/month",
      benefits: ["Child + family support", "Vocational training", "Emergency assistance", "Weekly updates", "Video calls"],
      color: "bg-green-50 border-green-200"
    }
  ];

  return (
    <PageLayout>
      <SEO 
        title="Sponsor a Child - KAWEESA CHILDREN'S MINISTRY LIMITED" 
        description="Change a child's life through sponsorship. Provide education, healthcare, and hope to children in Uganda through our child sponsorship program."
        keywords={['child sponsorship', 'sponsor a child', 'Uganda children', 'education sponsorship', 'child support']}
      />
      
      <div className="w-full pt-24 pb-12 bg-gradient-to-b from-pink-500 to-orange-500 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <motion.h1 
              className="text-4xl md:text-5xl font-bold mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              Sponsor a Child Today
            </motion.h1>
            <motion.p 
              className="text-xl text-pink-100 mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Transform a child's future through the power of sponsorship. Give hope, education, and opportunities that last a lifetime.
            </motion.p>
          </div>
        </div>
      </div>
      
      <div className="container mx-auto px-4 py-16">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <h2 className="text-3xl font-bold mb-4 text-gray-900">Meet Some of Our Children</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Each child has a unique story and dreams for the future. Your sponsorship provides the foundation they need to achieve their goals.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {children.map((child, index) => (
            <motion.div
              key={child.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
            >
              <Card className="h-full hover:shadow-lg transition-shadow duration-300">
                <div className="aspect-square overflow-hidden">
                  <img 
                    src={child.image} 
                    alt={child.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-2 text-gray-900">{child.name}</h3>
                  <div className="flex items-center text-gray-600 text-sm mb-2">
                    <Calendar className="w-4 h-4 mr-2" />
                    <span className="mr-4">{child.age} years old</span>
                    <MapPin className="w-4 h-4 mr-2" />
                    <span>{child.location}</span>
                  </div>
                  <p className="text-gray-600 mb-4 text-sm">{child.story}</p>
                  <div className="mb-4">
                    <h4 className="font-semibold text-gray-800 mb-2 text-sm">Current Needs:</h4>
                    <ul className="space-y-1">
                      {child.needs.map((need, i) => (
                        <li key={i} className="text-xs text-gray-600 flex items-center">
                          <Heart className="w-3 h-3 text-pink-500 mr-2" />
                          {need}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <Button className="w-full bg-orange-500 hover:bg-orange-600">
                    Sponsor {child.name}
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
        
        <motion.div 
          className="mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <h2 className="text-3xl font-bold text-center mb-8 text-gray-900">Sponsorship Levels</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {sponsorshipLevels.map((level, index) => (
              <Card key={index} className={`${level.color} border-2 ${level.popular ? 'ring-2 ring-orange-300' : ''} relative`}>
                {level.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <span className="bg-orange-500 text-white px-4 py-1 rounded-full text-sm font-medium">
                      Most Popular
                    </span>
                  </div>
                )}
                <CardContent className="p-6 text-center">
                  <h3 className="text-xl font-bold mb-2">{level.level}</h3>
                  <div className="text-3xl font-bold text-orange-600 mb-4">{level.amount}</div>
                  <ul className="space-y-2 mb-6">
                    {level.benefits.map((benefit, i) => (
                      <li key={i} className="text-sm text-gray-600 flex items-center justify-center">
                        <Heart className="w-4 h-4 text-orange-500 mr-2" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                  <Button className={`w-full ${level.popular ? 'bg-orange-500 hover:bg-orange-600' : 'bg-gray-600 hover:bg-gray-700'}`}>
                    Choose This Level
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </motion.div>
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <Card className="p-6">
            <h3 className="text-2xl font-bold mb-4 flex items-center">
              <Mail className="w-6 h-6 text-blue-500 mr-2" />
              Stay Connected
            </h3>
            <p className="text-gray-600 mb-4">
              As a sponsor, you'll receive regular updates about your sponsored child, including photos, letters, and progress reports. 
              You can also write letters and send small gifts to encourage them on their journey.
            </p>
            <ul className="space-y-2">
              <li className="flex items-center text-sm text-gray-600">
                <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                Monthly progress updates
              </li>
              <li className="flex items-center text-sm text-gray-600">
                <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                Annual photos and letters
              </li>
              <li className="flex items-center text-sm text-gray-600">
                <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                Holiday and birthday cards
              </li>
            </ul>
          </Card>
          
          <Card className="p-6">
            <h3 className="text-2xl font-bold mb-4 flex items-center">
              <Users className="w-6 h-6 text-green-500 mr-2" />
              Community Impact
            </h3>
            <p className="text-gray-600 mb-4">
              Your sponsorship doesn't just help one child – it strengthens entire communities. When children receive education 
              and support, they become leaders who lift up their families and neighbors.
            </p>
            <ul className="space-y-2">
              <li className="flex items-center text-sm text-gray-600">
                <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                Family empowerment programs
              </li>
              <li className="flex items-center text-sm text-gray-600">
                <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                Community development projects
              </li>
              <li className="flex items-center text-sm text-gray-600">
                <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                Local economic growth
              </li>
            </ul>
          </Card>
        </motion.div>
        
        <motion.div 
          className="bg-gradient-to-r from-pink-500 to-orange-500 rounded-2xl p-8 text-white text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.0 }}
        >
          <h2 className="text-3xl font-bold mb-4">Start Your Sponsorship Journey Today</h2>
          <p className="text-xl mb-6 text-pink-100">
            Join hundreds of sponsors who are already changing lives. Your monthly commitment creates lasting transformation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="px-8 py-3 bg-white text-orange-600 hover:bg-gray-100 font-semibold">
              Sponsor a Child Now
            </Button>
            <Button variant="outline" className="px-8 py-3 border-white text-white hover:bg-white hover:text-orange-600 font-semibold">
              Learn More About Sponsorship
            </Button>
          </div>
        </motion.div>
      </div>
    </PageLayout>
  );
};

export default SponsorChild;
