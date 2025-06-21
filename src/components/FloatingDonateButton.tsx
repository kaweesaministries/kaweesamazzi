
import { Heart, ExternalLink } from "lucide-react";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";

const FloatingDonateButton = () => {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      if (scrollY > 500) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  
  const handleDonateClick = (e: React.MouseEvent) => {
    e.preventDefault();
    window.open("https://www.paypal.me/Fiona202283", '_blank', 'noopener,noreferrer');
  };
  
  if (!isVisible) return null;
  
  return (
    <Button
      onClick={handleDonateClick}
      className="fixed bottom-6 right-6 z-50 bg-orange-500 hover:bg-orange-600 text-white rounded-full px-4 py-3 shadow-lg hover:shadow-xl transition-all flex items-center gap-2"
      aria-label="Donate Now"
    >
      <Heart className="h-5 w-5" />
      <span className="hidden sm:inline">Donate</span>
      <ExternalLink className="h-4 w-4" />
    </Button>
  );
};

export default FloatingDonateButton;
