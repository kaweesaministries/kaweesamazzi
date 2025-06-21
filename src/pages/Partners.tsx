
import PageLayout from '@/components/PageLayout';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Building, Heart, Users, Globe, Handshake } from 'lucide-react';
import { motion } from "framer-motion";
import SEO from '@/components/SEO';

const Partners = () => {
  const corporatePartners = [
    {
      name: "Uganda Development Bank",
      type: "Financial Services",
      contribution: "Education funding and infrastructure development",
      since: "2020"
    },
    {
      name: "Kampala International School",
      type: "Education",
      contribution: "Scholarship programs and educational resources",
      since: "2019"
    },
    {
      name: "Mukwano Group",
      type: "Manufacturing",
      contribution: "Health supplies and emergency support",
      since: "2021"
    }
  ];

  const faithPartners = [
    {
      name: "Namirembe Cathedral",
      type: "Anglican Church",
      contribution: "Spiritual guidance and community outreach",
      members: "500+ congregation"
    },
    {
      name: "Rubaga Cathedral",
      type: "Catholic Church",
      contribution: "Food programs and shelter support",
      members: "800+ congregation"
    },
    {
      name: "Watoto Church",
      type: "Pentecostal Church",
      contribution: "Youth programs and mentorship",
      members: "2000+ congregation"
    }
  ];

  const internationalPartners = [
    {
      name: "World Vision International",
      country: "Global",
      contribution: "Child protection and development programs",
      focus: "Community Development"
    },
    {
      name: "Save the Children UK",
      country: "United Kingdom",
      contribution: "Emergency response and education support",
      focus: "Child Welfare"
    },
    {
      name: "UNICEF Uganda",
      country: "United Nations",
      contribution: "Health initiatives and advocacy",
      focus: "Child Rights"
    }
  ];

  const partnershipLevels = [
    {
      level: "Community Partner",
      commitment: "Local support",
      benefits: ["Recognition on website", "Quarterly updates", "Community event invitations"],
      color: "bg-blue-50 border-blue-200"
    },
    {
      level: "Program Sponsor",
      commitment: "$5,000+ annually",
      benefits: ["Program naming rights", "Detailed impact reports", "Site visits", "Marketing opportunities"],
      color: "bg-orange-50 border-orange-200"
    },
    {
      level: "Strategic Partner",
      commitment: "$25,000+ annually",
      benefits: ["Board representation", "Strategic planning input", "Exclusive events", "Co-branding opportunities"],
      color: "bg-green-50 border-green-200"
    }
  ];

  return (
    <PageLayout>
      <SEO 
        title="Our Partners - KAWEESA CHILDREN'S MINISTRY LIMITED" 
        description="Meet our valued partners who support our mission. Join corporate sponsors, faith-based organizations, and international partners in transforming children's lives."
        keywords={['charity partners', 'corporate sponsors', 'Uganda partnerships', 'faith-based partners', 'international organizations']}
      />
      
      <div className="w-full pt-24 pb-12 bg-gradient-to-b from-green-500 to-blue-500 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <motion.h1 
              className="text-4xl md:text-5xl font-bold mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              Our Partners
            </motion.h1>
            <motion.p 
              className="text-xl text-green-100 mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Together with our valued partners, we're building stronger communities and brighter futures for children across Uganda
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
          <h2 className="text-3xl font-bold text-center mb-8 text-gray-900 flex items-center justify-center">
            <Building className="w-8 h-8 text-blue-500 mr-3" />
            Corporate Partners
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {corporatePartners.map((partner, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
              >
                <Card className="h-full hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-6">
                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                      <Building className="w-6 h-6 text-blue-600" />
                    </div>
                    <h3 className="text-xl font-bold mb-2 text-gray-900">{partner.name}</h3>
                    <p className="text-blue-600 text-sm font-medium mb-2">{partner.type}</p>
                    <p className="text-gray-600 text-sm mb-3">{partner.contribution}</p>
                    <div className="text-xs text-gray-500">
                      Partner since {partner.since}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
        
        <motion.div 
          className="mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <h2 className="text-3xl font-bold text-center mb-8 text-gray-900 flex items-center justify-center">
            <Heart className="w-8 h-8 text-purple-500 mr-3" />
            Faith-Based Partners
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {faithPartners.map((partner, index) => (
              <Card key={index} className="h-full hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mb-4">
                    <Heart className="w-6 h-6 text-purple-600" />
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-gray-900">{partner.name}</h3>
                  <p className="text-purple-600 text-sm font-medium mb-2">{partner.type}</p>
                  <p className="text-gray-600 text-sm mb-3">{partner.contribution}</p>
                  <div className="text-xs text-gray-500">
                    {partner.members}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </motion.div>
        
        <motion.div 
          className="mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <h2 className="text-3xl font-bold text-center mb-8 text-gray-900 flex items-center justify-center">
            <Globe className="w-8 h-8 text-green-500 mr-3" />
            International Partners
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {internationalPartners.map((partner, index) => (
              <Card key={index} className="h-full hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-4">
                    <Globe className="w-6 h-6 text-green-600" />
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-gray-900">{partner.name}</h3>
                  <p className="text-green-600 text-sm font-medium mb-2">{partner.country}</p>
                  <p className="text-gray-600 text-sm mb-3">{partner.contribution}</p>
                  <div className="text-xs text-gray-500">
                    Focus: {partner.focus}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </motion.div>
        
        <motion.div 
          className="mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.0 }}
        >
          <h2 className="text-3xl font-bold text-center mb-8 text-gray-900">Partnership Opportunities</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {partnershipLevels.map((level, index) => (
              <Card key={index} className={`${level.color} border-2`}>
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Handshake className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">{level.level}</h3>
                  <p className="text-gray-600 font-medium mb-4">{level.commitment}</p>
                  <ul className="space-y-2 mb-6">
                    {level.benefits.map((benefit, i) => (
                      <li key={i} className="text-sm text-gray-600 flex items-center justify-center">
                        <div className="w-2 h-2 bg-orange-500 rounded-full mr-2"></div>
                        {benefit}
                      </li>
                    ))}
                  </ul>
                  <Button className="w-full bg-orange-500 hover:bg-orange-600">
                    Learn More
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </motion.div>
        
        <motion.div 
          className="bg-gradient-to-r from-green-500 to-blue-500 rounded-2xl p-8 text-white text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.2 }}
        >
          <Users className="w-16 h-16 mx-auto mb-4 text-green-200" />
          <h2 className="text-3xl font-bold mb-4">Become Our Partner</h2>
          <p className="text-xl mb-6 text-green-100">
            Join our network of committed partners who are making a lasting impact on children's lives across Uganda
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="px-8 py-3 bg-white text-green-600 hover:bg-gray-100 font-semibold">
              Partner With Us
            </Button>
            <Button variant="outline" className="px-8 py-3 border-white text-white hover:bg-white hover:text-green-600 font-semibold">
              Download Partnership Package
            </Button>
          </div>
        </motion.div>
      </div>
    </PageLayout>
  );
};

export default Partners;
