
import PageLayout from '@/components/PageLayout';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Calendar, MapPin, Clock, Users, Heart } from 'lucide-react';
import { motion } from "framer-motion";
import SEO from '@/components/SEO';

const Events = () => {
  const upcomingEvents = [
    {
      id: 1,
      title: "Annual Hope Gala 2024",
      date: "March 15, 2024",
      time: "6:00 PM - 10:00 PM",
      location: "Kampala Serena Hotel",
      description: "Join us for an elegant evening of dining, entertainment, and fundraising to support our children's programs.",
      image: "/lovable-uploads/526dc38a-25fa-40d4-b520-425b23ae0464.png",
      type: "Fundraiser",
      price: "UGX 150,000 per person"
    },
    {
      id: 2,
      title: "Children's Day Celebration",
      date: "March 30, 2024",
      time: "10:00 AM - 4:00 PM",
      location: "Ministry Grounds, Kampala",
      description: "A fun-filled day celebrating our children with games, food, performances, and gift-giving.",
      image: "/lovable-uploads/efdceba7-7d2e-426d-88cd-09620d67eea7.png",
      type: "Celebration",
      price: "Free admission"
    },
    {
      id: 3,
      title: "Volunteer Orientation Workshop",
      date: "April 5, 2024",
      time: "9:00 AM - 3:00 PM",
      location: "Ministry Training Center",
      description: "Comprehensive training for new volunteers covering child protection, program overview, and hands-on activities.",
      image: "/lovable-uploads/4bfa0d71-3ed2-4693-90b6-35142468907f.png",
      type: "Training",
      price: "Free for volunteers"
    }
  ];

  const pastEvents = [
    {
      title: "Christmas Celebration 2023",
      date: "December 25, 2023",
      description: "300 children received gifts and enjoyed a festive meal",
      attendees: "300+ children"
    },
    {
      title: "Back-to-School Drive",
      date: "January 15, 2024",
      description: "Distributed school supplies to 200+ students",
      attendees: "200+ students"
    },
    {
      title: "Health Screening Campaign",
      date: "February 10, 2024",
      description: "Free health checkups for children and families",
      attendees: "150+ families"
    }
  ];

  return (
    <PageLayout>
      <SEO 
        title="Events - KAWEESA CHILDREN'S MINISTRY LIMITED" 
        description="Join our upcoming events and celebrations. Participate in fundraisers, volunteer training, and community gatherings that support children in Uganda."
        keywords={['charity events', 'fundraising gala', 'volunteer training', 'children celebration', 'Uganda events']}
      />
      
      <div className="w-full pt-24 pb-12 bg-gradient-to-b from-purple-500 to-pink-500 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <motion.h1 
              className="text-4xl md:text-5xl font-bold mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              Events & Celebrations
            </motion.h1>
            <motion.p 
              className="text-xl text-purple-100 mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Join us in celebrating milestones, raising funds, and building community connections that transform children's lives
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
          <h2 className="text-3xl font-bold text-center mb-8 text-gray-900">Upcoming Events</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
            {upcomingEvents.map((event, index) => (
              <motion.div
                key={event.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
              >
                <Card className="h-full hover:shadow-lg transition-shadow duration-300">
                  <div className="aspect-video overflow-hidden">
                    <img 
                      src={event.image} 
                      alt={event.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <CardContent className="p-6">
                    <div className="flex items-center mb-2">
                      <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                        event.type === 'Fundraiser' ? 'bg-orange-100 text-orange-700' :
                        event.type === 'Celebration' ? 'bg-green-100 text-green-700' :
                        'bg-blue-100 text-blue-700'
                      }`}>
                        {event.type}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold mb-3 text-gray-900">{event.title}</h3>
                    <div className="space-y-2 mb-4 text-sm text-gray-600">
                      <div className="flex items-center">
                        <Calendar className="w-4 h-4 mr-2" />
                        {event.date}
                      </div>
                      <div className="flex items-center">
                        <Clock className="w-4 h-4 mr-2" />
                        {event.time}
                      </div>
                      <div className="flex items-center">
                        <MapPin className="w-4 h-4 mr-2" />
                        {event.location}
                      </div>
                    </div>
                    <p className="text-gray-600 mb-4 text-sm">{event.description}</p>
                    <div className="flex justify-between items-center mb-4">
                      <span className="font-semibold text-green-600">{event.price}</span>
                    </div>
                    <Button className="w-full bg-purple-500 hover:bg-purple-600">
                      Register Now
                    </Button>
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
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <h2 className="text-3xl font-bold text-center mb-8 text-gray-900">Recent Events</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {pastEvents.map((event, index) => (
              <Card key={index} className="p-6">
                <h3 className="text-lg font-bold mb-2 text-gray-900">{event.title}</h3>
                <div className="flex items-center text-gray-600 text-sm mb-2">
                  <Calendar className="w-4 h-4 mr-2" />
                  {event.date}
                </div>
                <p className="text-gray-600 text-sm mb-3">{event.description}</p>
                <div className="flex items-center text-green-600 text-sm font-medium">
                  <Users className="w-4 h-4 mr-2" />
                  {event.attendees}
                </div>
              </Card>
            ))}
          </div>
        </motion.div>
        
        <motion.div 
          className="bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl p-8 text-white text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.0 }}
        >
          <Heart className="w-16 h-16 mx-auto mb-4 text-pink-200" />
          <h2 className="text-3xl font-bold mb-4">Can't Attend Our Events?</h2>
          <p className="text-xl mb-6 text-purple-100">
            You can still make a difference! Support our mission through donations or by becoming a volunteer.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="px-8 py-3 bg-white text-purple-600 hover:bg-gray-100 font-semibold">
              Make a Donation
            </Button>
            <Button variant="outline" className="px-8 py-3 border-white text-white hover:bg-white hover:text-purple-600 font-semibold">
              Become a Volunteer
            </Button>
          </div>
        </motion.div>
      </div>
    </PageLayout>
  );
};

export default Events;
