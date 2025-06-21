
import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowRight, Heart, Star } from 'lucide-react';

const TransformationShowcase = () => {
  const transformations = [
    {
      name: "Sarah's Education Journey",
      beforeImage: '/lovable-uploads/526dc38a-25fa-40d4-b520-425b23ae0464.png',
      afterImage: '/lovable-uploads/efdceba7-7d2e-426d-88cd-09620d67eea7.png',
      beforeText: "Struggling with basic reading",
      afterText: "Top student in her class",
      story: "Through our education support program, Sarah went from barely reading to becoming a star student who now tutors other children.",
      timeframe: "2 years"
    },
    {
      name: "Community Health Impact",
      beforeImage: '/lovable-uploads/4bfa0d71-3ed2-4693-90b6-35142468907f.png',
      afterImage: '/lovable-uploads/39671993-1bb4-4bb6-8819-3ca5c07c0042.png',
      beforeText: "Limited healthcare access",
      afterText: "Thriving healthy community",
      story: "Our mobile health clinics transformed this community's access to healthcare, reducing child mortality by 60%.",
      timeframe: "3 years"
    },
    {
      name: "Family Empowerment Success",
      beforeImage: '/lovable-uploads/078a129e-0f98-4d91-af61-873687db1a04.png',
      afterImage: '/lovable-uploads/30473baa-85f4-4931-aad9-c722ae7a4918.png',
      beforeText: "Family struggling with poverty",
      afterText: "Successful small business owners",
      story: "Through skills training and microfinance, this family now runs a successful tailoring business and supports their community.",
      timeframe: "18 months"
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="inline-block mb-3 px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm font-medium">
            Transformation Stories
          </div>
          <h2 className="text-3xl font-bold mb-4">Before & After: Real Change</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            See the incredible transformations that happen when communities receive sustained support and care
          </p>
        </motion.div>

        <div className="space-y-16">
          {transformations.map((transformation, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <Card className="overflow-hidden">
                <CardContent className="p-0">
                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-0">
                    {/* Before Image */}
                    <div className="relative">
                      <img 
                        src={transformation.beforeImage} 
                        alt="Before transformation"
                        className="w-full h-64 lg:h-80 object-cover"
                      />
                      <div className="absolute inset-0 bg-black/40 flex items-end">
                        <div className="p-6 text-white">
                          <div className="bg-red-500 text-xs font-medium px-2 py-1 rounded mb-2 w-fit">
                            BEFORE
                          </div>
                          <p className="font-medium">{transformation.beforeText}</p>
                        </div>
                      </div>
                    </div>

                    {/* Story Content */}
                    <div className="p-8 flex flex-col justify-center bg-gray-50">
                      <div className="text-center">
                        <ArrowRight className="w-8 h-8 mx-auto mb-4 text-orange-500" />
                        <h3 className="text-xl font-bold mb-3">{transformation.name}</h3>
                        <p className="text-gray-600 mb-4">{transformation.story}</p>
                        <div className="flex items-center justify-center gap-2">
                          <Heart className="w-4 h-4 text-red-500" />
                          <span className="text-sm font-medium text-orange-600">
                            Transformed in {transformation.timeframe}
                          </span>
                          <Star className="w-4 h-4 text-yellow-500" />
                        </div>
                      </div>
                    </div>

                    {/* After Image */}
                    <div className="relative">
                      <img 
                        src={transformation.afterImage} 
                        alt="After transformation"
                        className="w-full h-64 lg:h-80 object-cover"
                      />
                      <div className="absolute inset-0 bg-black/40 flex items-end">
                        <div className="p-6 text-white">
                          <div className="bg-green-500 text-xs font-medium px-2 py-1 rounded mb-2 w-fit">
                            AFTER
                          </div>
                          <p className="font-medium">{transformation.afterText}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-12"
        >
          <div className="bg-gradient-to-r from-orange-500 to-red-500 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">Your Support Creates These Transformations</h3>
            <p className="text-orange-100 mb-6">
              Every donation, every prayer, every volunteer hour contributes to these life-changing moments.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-6 py-3 bg-white text-orange-600 rounded-lg hover:bg-gray-100 transition-colors font-medium">
                Support a Transformation
              </button>
              <button className="px-6 py-3 border-2 border-white text-white rounded-lg hover:bg-white hover:text-orange-600 transition-colors font-medium">
                See More Stories
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TransformationShowcase;
