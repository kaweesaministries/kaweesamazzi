
import { motion } from "framer-motion";
import { Building, Globe, Heart, ArrowRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const PartnershipShowcase = () => {
  const partnerCategories = [
    {
      title: "Corporate Partners",
      icon: <Building className="w-6 h-6" />,
      color: "bg-blue-100 text-blue-600",
      count: "12+",
      description: "Local and international businesses supporting our mission"
    },
    {
      title: "Faith Partners",
      icon: <Heart className="w-6 h-6" />,
      color: "bg-purple-100 text-purple-600", 
      count: "25+",
      description: "Churches and religious organizations in our network"
    },
    {
      title: "International NGOs",
      icon: <Globe className="w-6 h-6" />,
      color: "bg-green-100 text-green-600",
      count: "8+",
      description: "Global organizations amplifying our impact"
    }
  ];

  const featuredPartners = [
    "World Vision International",
    "UNICEF Uganda", 
    "Save the Children UK",
    "Uganda Development Bank",
    "Watoto Church",
    "Kampala International School"
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-4">Our Trusted Partners</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Working together with leading organizations to maximize our impact and reach more children in need
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {partnerCategories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
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
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="bg-white rounded-2xl p-8 mb-8"
        >
          <h3 className="text-xl font-bold text-center mb-6">Featured Partners</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 text-center">
            {featuredPartners.map((partner, index) => (
              <div 
                key={index}
                className="p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors duration-200"
              >
                <span className="text-sm font-medium text-gray-700">{partner}</span>
              </div>
            ))}
          </div>
        </motion.div>
        
        <div className="text-center">
          <Link to="/partners">
            <Button variant="outline" size="lg">
              View All Partners
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default PartnershipShowcase;
