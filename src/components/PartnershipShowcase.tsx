import { motion } from "framer-motion";
import { Building, Globe, Heart, ArrowRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
const PartnershipShowcase = () => {
  const partnerCategories = [{
    title: "Corporate Partners",
    icon: <Building className="w-6 h-6" />,
    color: "bg-blue-100 text-blue-600",
    count: "12+",
    description: "Local and international businesses supporting our mission"
  }, {
    title: "Faith Partners",
    icon: <Heart className="w-6 h-6" />,
    color: "bg-purple-100 text-purple-600",
    count: "25+",
    description: "Churches and religious organizations in our network"
  }, {
    title: "International NGOs",
    icon: <Globe className="w-6 h-6" />,
    color: "bg-green-100 text-green-600",
    count: "8+",
    description: "Global organizations amplifying our impact"
  }];
  const featuredPartners = [{
    name: "World Vision International",
    logo: "/lovable-uploads/39605e90-8478-4fee-b1b9-cee41df66f10.png",
    partnership: "Education & Health Programs"
  }, {
    name: "UNICEF Uganda",
    logo: "/lovable-uploads/48e540e5-6a25-44e4-b3f7-80f3bfc2777a.png",
    partnership: "Child Protection Initiative"
  }, {
    name: "Save the Children UK",
    logo: "/lovable-uploads/5262afdb-dd24-4d5e-be66-7c6717adbca9.png",
    partnership: "Emergency Response"
  }, {
    name: "Uganda Development Bank",
    logo: "/lovable-uploads/6739bd63-bf19-4abd-bb23-0b613bbf7ac8.png",
    partnership: "Microfinance Program"
  }, {
    name: "Watoto Church",
    logo: "/lovable-uploads/6b0637e9-4a7b-40d0-b219-c8b7f879f93e.png",
    partnership: "Community Outreach"
  }, {
    name: "Kampala International School",
    logo: "/lovable-uploads/700e27d7-0513-4bfa-8ac4-f7fd6087594c.png",
    partnership: "Educational Support"
  }];
  const collaborationImages = [{
    src: "/lovable-uploads/39671993-1bb4-4bb6-8819-3ca5c07c0042.png",
    alt: "Partnership meeting with community leaders",
    title: "Community Collaboration"
  }, {
    src: "/lovable-uploads/30473baa-85f4-4931-aad9-c722ae7a4918.png",
    alt: "Joint program implementation",
    title: "Program Implementation"
  }, {
    src: "/lovable-uploads/078a129e-0f98-4d91-af61-873687db1a04.png",
    alt: "Training workshop with partners",
    title: "Capacity Building"
  }];
  return <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div initial={{
        opacity: 0,
        y: 20
      }} animate={{
        opacity: 1,
        y: 0
      }} transition={{
        duration: 0.6
      }} className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Our Trusted Partners</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Working together with leading organizations to maximize our impact and reach more children in need
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {partnerCategories.map((category, index) => <motion.div key={index} initial={{
          opacity: 0,
          y: 20
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.6,
          delay: index * 0.1
        }}>
              <Card className="text-center hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6">
                  <div className={`w-12 h-12 ${category.color} rounded-full flex items-center justify-center mx-auto mb-4`}>
                    {category.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-2">{category.count}</h3>
                  <h4 className="text-lg font-semibold mb-2">{category.title}</h4>
                  <p className="text-gray-600 text-sm">{category.description}</p>
                </CardContent>
              </Card>
            </motion.div>)}
        </div>

        {/* Featured Partners with Logos */}
        <motion.div initial={{
        opacity: 0,
        y: 20
      }} animate={{
        opacity: 1,
        y: 0
      }} transition={{
        duration: 0.6,
        delay: 0.4
      }} className="bg-white rounded-2xl p-8 mb-12 shadow-sm">
          <h3 className="text-xl font-bold text-center mb-8">Featured Partners</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {featuredPartners.map((partner, index) => <div key={index} className="group text-center p-4 rounded-lg hover:bg-gray-50 transition-colors duration-200">
                <div className="w-16 h-16 mx-auto mb-3 bg-gray-100 rounded-lg flex items-center justify-center overflow-hidden">
                  <img src={partner.logo} alt={`${partner.name} logo`} className="w-12 h-12 object-contain group-hover:scale-110 transition-transform duration-200" />
                </div>
                <h4 className="text-sm font-medium text-gray-900 mb-1">{partner.name}</h4>
                <p className="text-xs text-gray-500">{partner.partnership}</p>
              </div>)}
          </div>
        </motion.div>

        {/* Collaboration in Action */}
        
        
        <div className="text-center">
          <Link to="/partners">
            <Button variant="outline" size="lg">
              View All Partners
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </div>
    </section>;
};
export default PartnershipShowcase;