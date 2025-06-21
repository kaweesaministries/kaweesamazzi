
import { motion } from "framer-motion";
import { BookOpen, Heart, Shield, Users, ArrowRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const ProgramsPreview = () => {
  const programs = [
    {
      title: "Education Support",
      description: "School fees, supplies, and scholarships for quality education",
      icon: <BookOpen className="w-6 h-6" />,
      color: "bg-blue-100 text-blue-600",
      served: "500+ children"
    },
    {
      title: "Health & Nutrition",
      description: "Healthcare, meals, and health education programs",
      icon: <Heart className="w-6 h-6" />,
      color: "bg-red-100 text-red-600",
      served: "800+ children"
    },
    {
      title: "Child Protection",
      description: "Safe environments and protection from harm",
      icon: <Shield className="w-6 h-6" />,
      color: "bg-green-100 text-green-600",
      served: "200+ children"
    },
    {
      title: "Family Empowerment",
      description: "Skills training and microfinance for families",
      icon: <Users className="w-6 h-6" />,
      color: "bg-purple-100 text-purple-600",
      served: "300+ families"
    }
  ];

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-4">Our Key Programs</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Comprehensive support systems designed to nurture and empower children and families
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {programs.map((program, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="h-full hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6">
                  <div className={`w-12 h-12 ${program.color} rounded-full flex items-center justify-center mb-4`}>
                    {program.icon}
                  </div>
                  <h3 className="text-lg font-bold mb-2">{program.title}</h3>
                  <p className="text-gray-600 text-sm mb-3">{program.description}</p>
                  <span className="text-xs font-medium text-green-600 bg-green-50 px-2 py-1 rounded-full">
                    {program.served}
                  </span>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
        
        <div className="text-center">
          <Link to="/programs">
            <Button variant="outline" size="lg">
              View All Programs
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ProgramsPreview;
