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
  return;
};
export default PartnershipShowcase;