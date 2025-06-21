import { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { Menu, X, ChevronDown } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from 'react-router-dom';
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger, navigationMenuTriggerStyle } from "@/components/ui/navigation-menu";
const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth'
      });
    }
    setIsMenuOpen(false);
  };
  return <motion.nav className={cn("fixed top-0 left-0 right-0 z-50 transition-all duration-300 w-full", isScrolled ? "bg-white shadow-sm" : "bg-black")} initial={{
    opacity: 1,
    y: 0
  }} animate={{
    opacity: 1,
    y: 0
  }}>
      <div className="w-full px-4 sm:px-6 lg:px-8 mx-auto">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <Link to="/" className="flex items-center">
              
            </Link>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <NavigationMenu className={cn(isScrolled ? "" : "text-white")}>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <Link to="/">
                    <NavigationMenuLink className={cn(navigationMenuTriggerStyle(), isScrolled ? "text-gray-700 hover:text-gray-900" : "text-gray-100 hover:text-white bg-transparent hover:bg-gray-800")}>
                      Home
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
                
                <NavigationMenuItem>
                  <NavigationMenuTrigger className={cn(isScrolled ? "text-gray-700 hover:text-gray-900" : "text-gray-100 hover:text-white bg-transparent hover:bg-gray-800")}>
                    About
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid gap-3 p-4 w-[400px]">
                      <li>
                        <Link to="/about" className="block p-3 space-y-1 rounded-md hover:bg-gray-100">
                          <div className="font-medium">Our Story</div>
                          <p className="text-sm text-gray-500">Learn about our mission and history</p>
                        </Link>
                      </li>
                      <li>
                        <Link to="/programs" className="block p-3 space-y-1 rounded-md hover:bg-gray-100">
                          <div className="font-medium">Programs</div>
                          <p className="text-sm text-gray-500">Education, health, and protection services</p>
                        </Link>
                      </li>
                      <li>
                        <Link to="/impact" className="block p-3 space-y-1 rounded-md hover:bg-gray-100">
                          <div className="font-medium">Our Impact</div>
                          <p className="text-sm text-gray-500">See the difference we're making</p>
                        </Link>
                      </li>
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
                
                <NavigationMenuItem>
                  <NavigationMenuTrigger className={cn(isScrolled ? "text-gray-700 hover:text-gray-900" : "text-gray-100 hover:text-white bg-transparent hover:bg-gray-800")}>
                    Get Involved
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid gap-3 p-4 w-[400px]">
                      <li>
                        <Link to="/donate" className="block p-3 space-y-1 rounded-md hover:bg-gray-100">
                          <div className="font-medium">Donate</div>
                          <p className="text-sm text-gray-500">Support our programs and make a difference</p>
                        </Link>
                      </li>
                      <li>
                        <Link to="/sponsor-child" className="block p-3 space-y-1 rounded-md hover:bg-gray-100">
                          <div className="font-medium">Sponsor a Child</div>
                          <p className="text-sm text-gray-500">Transform a child's life through sponsorship</p>
                        </Link>
                      </li>
                      <li>
                        <Link to="/volunteer" className="block p-3 space-y-1 rounded-md hover:bg-gray-100">
                          <div className="font-medium">Volunteer</div>
                          <p className="text-sm text-gray-500">Join our team of dedicated volunteers</p>
                        </Link>
                      </li>
                      <li>
                        <Link to="/events" className="block p-3 space-y-1 rounded-md hover:bg-gray-100">
                          <div className="font-medium">Events</div>
                          <p className="text-sm text-gray-500">Upcoming fundraisers and celebrations</p>
                        </Link>
                      </li>
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
                
                <NavigationMenuItem>
                  <NavigationMenuTrigger className={cn(isScrolled ? "text-gray-700 hover:text-gray-900" : "text-gray-100 hover:text-white bg-transparent hover:bg-gray-800")}>
                    Stories
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid gap-3 p-4 w-[400px]">
                      <li>
                        <Link to="/news" className="block p-3 space-y-1 rounded-md hover:bg-gray-100">
                          <div className="font-medium">News & Updates</div>
                          <p className="text-sm text-gray-500">Latest news from our programs</p>
                        </Link>
                      </li>
                      <li>
                        <Link to="/testimonials" className="block p-3 space-y-1 rounded-md hover:bg-gray-100">
                          <div className="font-medium">Success Stories</div>
                          <p className="text-sm text-gray-500">Inspiring testimonials and transformations</p>
                        </Link>
                      </li>
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
                
                <NavigationMenuItem>
                  <NavigationMenuTrigger className={cn(isScrolled ? "text-gray-700 hover:text-gray-900" : "text-gray-100 hover:text-white bg-transparent hover:bg-gray-800")}>
                    More
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid gap-3 p-4 w-[400px]">
                      <li>
                        <Link to="/partners" className="block p-3 space-y-1 rounded-md hover:bg-gray-100">
                          <div className="font-medium">Partners</div>
                          <p className="text-sm text-gray-500">Organizations supporting our mission</p>
                        </Link>
                      </li>
                      <li>
                        <Link to="/resources" className="block p-3 space-y-1 rounded-md hover:bg-gray-100">
                          <div className="font-medium">Resources</div>
                          <p className="text-sm text-gray-500">Reports, policies, and documentation</p>
                        </Link>
                      </li>
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
                
                <NavigationMenuItem>
                  <Link to="/contact">
                    <NavigationMenuLink className={cn(navigationMenuTriggerStyle(), isScrolled ? "text-gray-700 hover:text-gray-900" : "text-gray-100 hover:text-white bg-transparent hover:bg-gray-800")}>
                      Contact
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </div>
          
          {/* Mobile menu button */}
          <div className="md:hidden">
            <button onClick={toggleMenu} className={cn("focus:outline-none", isScrolled ? "text-gray-700" : "text-white")}>
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      <div className={cn("md:hidden transition-all duration-300 overflow-hidden w-full", isMenuOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0")}>
        <div className={cn("px-2 pt-2 pb-3 space-y-1 sm:px-3 shadow-sm", isScrolled ? "bg-white" : "bg-black")}>
          <Link to="/" className={cn("block px-3 py-2 rounded-md", isScrolled ? "text-gray-700 hover:bg-gray-50" : "text-gray-200 hover:bg-gray-900")} onClick={() => setIsMenuOpen(false)}>
            Home
          </Link>
          
          <Link to="/about" className={cn("block px-3 py-2 rounded-md", isScrolled ? "text-gray-700 hover:bg-gray-50" : "text-gray-200 hover:bg-gray-900")} onClick={() => setIsMenuOpen(false)}>
            About Us
          </Link>
          
          <Link to="/programs" className={cn("block px-3 py-2 rounded-md", isScrolled ? "text-gray-700 hover:bg-gray-50" : "text-gray-200 hover:bg-gray-900")} onClick={() => setIsMenuOpen(false)}>
            Programs
          </Link>
          
          <Link to="/donate" className={cn("block px-3 py-2 rounded-md", isScrolled ? "text-gray-700 hover:bg-gray-50" : "text-gray-200 hover:bg-gray-900")} onClick={() => setIsMenuOpen(false)}>
            Donate
          </Link>
          
          <Link to="/sponsor-child" className={cn("block px-3 py-2 rounded-md", isScrolled ? "text-gray-700 hover:bg-gray-50" : "text-gray-200 hover:bg-gray-900")} onClick={() => setIsMenuOpen(false)}>
            Sponsor a Child
          </Link>
          
          <Link to="/volunteer" className={cn("block px-3 py-2 rounded-md", isScrolled ? "text-gray-700 hover:bg-gray-50" : "text-gray-200 hover:bg-gray-900")} onClick={() => setIsMenuOpen(false)}>
            Volunteer
          </Link>
          
          <Link to="/events" className={cn("block px-3 py-2 rounded-md", isScrolled ? "text-gray-700 hover:bg-gray-50" : "text-gray-200 hover:bg-gray-900")} onClick={() => setIsMenuOpen(false)}>
            Events
          </Link>
          
          <Link to="/news" className={cn("block px-3 py-2 rounded-md", isScrolled ? "text-gray-700 hover:bg-gray-50" : "text-gray-200 hover:bg-gray-900")} onClick={() => setIsMenuOpen(false)}>
            News
          </Link>
          
          <Link to="/contact" className={cn("block px-3 py-2 rounded-md", isScrolled ? "text-gray-700 hover:bg-gray-50" : "text-gray-200 hover:bg-gray-900")} onClick={() => setIsMenuOpen(false)}>
            Contact
          </Link>
        </div>
      </div>
    </motion.nav>;
};
export default Navbar;