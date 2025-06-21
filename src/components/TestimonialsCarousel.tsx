
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Quote } from "lucide-react";

const TestimonialsCarousel = () => {
  const testimonials = [
    {
      name: "Sarah Nakato",
      role: "Beneficiary Parent",
      content: "KAWEESA has transformed my daughter's life. She now excels in school and dreams of becoming a doctor. Thank you for giving her hope.",
      image: "https://github.com/drewversedesign/kaweesa-ministries/blob/main/IMG-20250518-WA0064.jpg?raw=true"
    },
    {
      name: "David Ssemwanga",
      role: "Community Volunteer",
      content: "Working with KAWEESA has been incredibly rewarding. Seeing children's faces light up when they receive support is priceless.",
      image: "https://github.com/drewversedesign/kaweesa-ministries/blob/main/IMG-20250518-WA0163.jpg?raw=true"
    },
    {
      name: "Mary Namugga",
      role: "Sponsor",
      content: "Sponsoring a child through KAWEESA has been one of the most meaningful decisions I've made. The regular updates show real impact.",
      image: "https://github.com/drewversedesign/kaweesa-ministries/blob/main/IMG-20250518-WA0161.jpg?raw=true"
    },
    {
      name: "James Mukasa",
      role: "Former Beneficiary",
      content: "KAWEESA gave me a second chance at life. Now I'm in university studying to become a teacher to help other children like me.",
      image: "https://github.com/drewversedesign/kaweesa-ministries/blob/main/IMG-20250518-WA0172.jpg?raw=true"
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-r from-orange-50 to-red-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-4">Voices of Hope</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Hear from the children, families, and supporters whose lives have been touched by our ministry
          </p>
        </motion.div>
        
        <div className="max-w-4xl mx-auto">
          <Carousel className="w-full">
            <CarouselContent>
              {testimonials.map((testimonial, index) => (
                <CarouselItem key={index}>
                  <Card className="mx-2">
                    <CardContent className="p-8">
                      <div className="flex flex-col md:flex-row items-center gap-6">
                        <div 
                          className="w-24 h-24 bg-cover bg-center rounded-full flex-shrink-0"
                          style={{ backgroundImage: `url('${testimonial.image}')` }}
                        />
                        <div className="flex-1 text-center md:text-left">
                          <Quote className="w-8 h-8 text-orange-500 mb-4 mx-auto md:mx-0" />
                          <p className="text-gray-700 italic mb-4 text-lg leading-relaxed">
                            "{testimonial.content}"
                          </p>
                          <div>
                            <h4 className="font-bold text-gray-900">{testimonial.name}</h4>
                            <p className="text-orange-600 text-sm">{testimonial.role}</p>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsCarousel;
