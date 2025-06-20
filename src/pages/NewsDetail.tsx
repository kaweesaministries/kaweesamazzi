
import PageLayout from '@/components/PageLayout';
import { ArrowLeft, Calendar, User, Share2 } from 'lucide-react';
import { Link, useParams } from 'react-router-dom';
import { motion } from "framer-motion";
import { useEffect } from 'react';
import { Button } from "@/components/ui/button";
import SEO from '@/components/SEO';

const NewsDetail = () => {
  const { slug } = useParams();
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  // Mock news article data - in real app, this would come from a database
  const article = {
    title: 'New Education Center Opens in Kampala',
    content: `
      <p>We are thrilled to announce the opening of our new education center in the heart of Kampala, which will serve over 200 children from vulnerable families in the surrounding communities.</p>
      
      <p>The new facility, which officially opened its doors this month, features modern classrooms, a computer lab, library, and feeding center. This expansion represents a significant milestone in our mission to provide quality education to every child, regardless of their family's economic situation.</p>
      
      <h3>State-of-the-Art Facilities</h3>
      <p>The education center includes:</p>
      <ul>
        <li>6 fully equipped classrooms for different age groups</li>
        <li>A computer lab with 20 workstations</li>
        <li>A library with over 1,000 books in English and Luganda</li>
        <li>A nutrition center providing daily meals</li>
        <li>Playground and recreational facilities</li>
        <li>Safe water and sanitation facilities</li>
      </ul>
      
      <h3>Community Impact</h3>
      <p>This new center will serve children aged 3-17 from five surrounding communities, providing not just formal education but also vocational training, life skills development, and nutritional support.</p>
      
      <p>"We believe every child deserves access to quality education," said Sarah Kaweesa, our Executive Director. "This new center brings us one step closer to ensuring no child in our community is left behind."</p>
      
      <h3>Looking Forward</h3>
      <p>The opening of this center is part of our broader expansion plan to reach more children across Uganda. With your continued support, we aim to open two more centers in rural areas by the end of next year.</p>
      
      <p>We extend our heartfelt gratitude to all our donors, volunteers, and community partners who made this dream a reality. Together, we are transforming lives and building a brighter future for Uganda's children.</p>
    `,
    date: 'December 15, 2024',
    author: 'Ministry Team',
    category: 'Education',
    imageUrl: '/lovable-uploads/4bfa0d71-3ed2-4693-90b6-35142468907f.png'
  };
  
  return (
    <PageLayout>
      <SEO 
        title={`${article.title} - KAWEESA CHILDREN'S MINISTRY`}
        description="New education center opens in Kampala to serve 200+ children with modern facilities, computer lab, library, and feeding center."
        imageUrl={article.imageUrl}
        keywords={['education center', 'Kampala', 'children education', 'Uganda ministry']}
        isBlogPost={true}
        publishDate="2024-12-15"
        author={article.author}
        category={article.category}
      />
      
      <article className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto">
            <Link to="/news" className="inline-flex items-center text-gray-500 hover:text-gray-700 mb-6 transition-colors">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to News
            </Link>
            
            <motion.div
              initial={{ opacity: 0, y: -10 }} 
              animate={{ opacity: 1, y: 0 }} 
              transition={{ duration: 0.5 }}
            >
              <div className="mb-6">
                <span className="px-3 py-1 bg-orange-100 text-orange-700 rounded-full text-sm font-medium">
                  {article.category}
                </span>
              </div>
              
              <h1 className="text-4xl font-bold mb-6">{article.title}</h1>
              
              <div className="flex items-center text-gray-500 text-sm mb-8">
                <Calendar className="mr-2 h-4 w-4" />
                <span className="mr-6">{article.date}</span>
                <User className="mr-2 h-4 w-4" />
                <span className="mr-6">{article.author}</span>
                <Button variant="outline" size="sm" className="ml-auto">
                  <Share2 className="mr-2 h-4 w-4" />
                  Share
                </Button>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mb-8"
            >
              <img 
                src={article.imageUrl} 
                alt={article.title}
                className="w-full h-96 object-cover rounded-lg shadow-lg"
              />
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="prose prose-lg max-w-none"
              dangerouslySetInnerHTML={{ __html: article.content }}
            />
            
            <div className="mt-12 pt-8 border-t border-gray-200">
              <div className="flex flex-col sm:flex-row gap-4 justify-between items-center">
                <div>
                  <p className="text-gray-600 mb-2">Inspired by our work?</p>
                  <div className="flex gap-3">
                    <Link to="/donate" className="px-6 py-2 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition-colors">
                      Donate Now
                    </Link>
                    <Link to="/volunteer" className="px-6 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition-colors">
                      Volunteer
                    </Link>
                  </div>
                </div>
                <Button variant="outline">
                  <Share2 className="mr-2 h-4 w-4" />
                  Share This Story
                </Button>
              </div>
            </div>
          </div>
        </div>
      </article>
    </PageLayout>
  );
};

export default NewsDetail;
