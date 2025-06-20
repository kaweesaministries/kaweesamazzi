
import { ArrowRight, Linkedin, Mail, MapPin, Phone } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import emailjs from 'emailjs-com';

const Footer = () => {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email) {
      toast({
        title: "Error",
        description: "Please enter your email address.",
        variant: "destructive"
      });
      return;
    }
    
    setIsSubmitting(true);
    
    try {
      // EmailJS configuration
      const EMAILJS_SERVICE_ID = "service_i3h66xg";
      const EMAILJS_TEMPLATE_ID = "template_fgq53nh";
      const EMAILJS_PUBLIC_KEY = "wQmcZvoOqTAhGnRZ3";
      
      const templateParams = {
        from_name: "Newsletter Subscriber",
        from_email: email,
        message: `New newsletter subscription request from the KAWEESA Children's Ministry website.`,
        to_name: 'KAWEESA Ministry Team',
        reply_to: email
      };
      
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        templateParams,
        EMAILJS_PUBLIC_KEY
      );
      
      toast({
        title: "Success!",
        description: "Thank you for subscribing to our newsletter.",
        variant: "default"
      });
      
      setEmail("");
    } catch (error) {
      console.error("Error sending subscription:", error);
      
      toast({
        title: "Error",
        description: "There was a problem subscribing. Please try again later.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <footer id="contact" className="bg-gray-900 text-white pt-16 pb-8 w-full">
      <div className="w-full px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-10 pb-10 border-b border-gray-700">
          <div className="lg:col-span-2">
            <h3 className="text-2xl font-bold mb-4 text-orange-400">KAWEESA CHILDREN'S MINISTRY</h3>
            <p className="text-gray-300 mb-6">
              Transforming lives through love and care. We are dedicated to nurturing, protecting, and empowering children in Uganda through comprehensive programs that address their educational, health, and developmental needs.
            </p>
            <div className="space-y-3 text-gray-300">
              <div className="flex items-center">
                <MapPin className="w-5 h-5 mr-3 text-orange-400" />
                <span>Kampala, Uganda</span>
              </div>
              <div className="flex items-center">
                <Mail className="w-5 h-5 mr-3 text-orange-400" />
                <span>info@kaweesaministry.org</span>
              </div>
              <div className="flex items-center">
                <Phone className="w-5 h-5 mr-3 text-orange-400" />
                <span>+256 XXX XXX XXX</span>
              </div>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4 text-white">Quick Links</h3>
            <ul className="space-y-3">
              <li><Link to="/about" className="text-gray-300 hover:text-orange-400 transition-colors">About Us</Link></li>
              <li><Link to="/programs" className="text-gray-300 hover:text-orange-400 transition-colors">Our Programs</Link></li>
              <li><Link to="/get-involved" className="text-gray-300 hover:text-orange-400 transition-colors">Get Involved</Link></li>
              <li><Link to="/impact" className="text-gray-300 hover:text-orange-400 transition-colors">Impact Stories</Link></li>
              <li><Link to="/news" className="text-gray-300 hover:text-orange-400 transition-colors">News & Updates</Link></li>
              <li><Link to="/contact" className="text-gray-300 hover:text-orange-400 transition-colors">Contact Us</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4 text-white">Stay Connected</h3>
            <p className="text-gray-300 mb-4">Subscribe to receive updates about our programs and impact stories.</p>
            <form className="space-y-4" onSubmit={handleSubscribe}>
              <div>
                <input 
                  type="email" 
                  placeholder="Your email" 
                  className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 text-white placeholder-gray-400"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  disabled={isSubmitting}
                />
              </div>
              <button 
                type="submit" 
                className="w-full px-4 py-2 bg-orange-500 text-white rounded-md hover:bg-orange-600 transition-colors flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Subscribing..." : (
                  <>
                    Subscribe
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
        
        <div className="pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-gray-400 text-sm mb-2">
              © {new Date().getFullYear()} KAWEESA CHILDREN'S MINISTRY LIMITED. All rights reserved.
            </p>
            <p className="text-gray-400 text-sm">
              Registration Number: 80020002328043 | Company Limited by Guarantee
            </p>
          </div>
          <div className="flex space-x-6">
            <Link to="/privacy-policy" className="text-sm text-gray-400 hover:text-orange-400 transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="text-sm text-gray-400 hover:text-orange-400 transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
