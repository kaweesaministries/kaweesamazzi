
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight, Calendar, User } from 'lucide-react';
import { Link } from 'react-router-dom';

const NewsPreview = () => {
  // Sample news articles for the children's ministry
  const newsArticles = [
    {
      id: '1',
      title: 'New Education Center Opens in Kampala',
      excerpt: 'We are excited to announce the opening of our new education center that will serve 200+ children in the Kampala area with quality learning facilities.',
      date: 'December 15, 2024',
      author: 'Ministry Team',
      category: 'Education',
      slug: 'new-education-center-kampala',
      imageUrl: '/lovable-uploads/4bfa0d71-3ed2-4693-90b6-35142468907f.png'
    },
    {
      id: '2', 
      title: 'Successful Health Screening Reaches 500 Children',
      excerpt: 'Our recent health screening program provided medical checkups, vaccinations, and health education to over 500 children across 5 communities.',
      date: 'December 10, 2024',
      author: 'Health Team',
      category: 'Health',
      slug: 'health-screening-500-children',
      imageUrl: '/lovable-uploads/4bfa0d71-3ed2-4693-90b6-35142468907f.png'
    },
    {
      id: '3',
      title: 'Partnership with Local Schools Expands Our Reach', 
      excerpt: 'New partnerships with 10 local schools will help us provide educational support and feeding programs to even more children in need.',
      date: 'December 5, 2024',
      author: 'Partnership Team',
      category: 'Partnerships',
      slug: 'partnership-local-schools',
      imageUrl: '/lovable-uploads/4bfa0d71-3ed2-4693-90b6-35142468907f.png'
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-block mb-3 px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium">
            Latest News
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
            Ministry Updates & Impact Stories
          </h2>
          <p className="text-gray-700 text-lg max-w-3xl mx-auto">
            Stay updated with our latest programs, success stories, and community impact. 
            See how your support is making a real difference in children's lives.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {newsArticles.map((article) => (
            <Link key={article.id} to={`/news/${article.slug}`}>
              <Card className="overflow-hidden hover:shadow-lg transition-shadow duration-300 h-full">
                <div className="grid grid-rows-[200px,1fr]">
                  <div
                    className="bg-cover bg-center"
                    style={{ backgroundImage: `url('${article.imageUrl}')` }}
                  >
                    <div className="w-full h-full bg-black/20 flex items-center justify-center">
                      <span className="px-3 py-1 bg-white/10 backdrop-blur-sm rounded-full text-sm font-medium text-white inline-block">
                        {article.category}
                      </span>
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <div className="flex items-center text-gray-500 text-sm mb-2">
                      <Calendar className="mr-2 h-4 w-4" />
                      <span className="mr-4">{article.date}</span>
                      <User className="mr-2 h-4 w-4" />
                      <span>{article.author}</span>
                    </div>
                    <h3 className="text-xl font-bold mb-2 line-clamp-2 text-gray-900">{article.title}</h3>
                    <p className="text-gray-700 mb-4 line-clamp-3">{article.excerpt}</p>
                    <Button variant="outline" className="group mt-auto">
                      Read more 
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Button>
                  </CardContent>
                </div>
              </Card>
            </Link>
          ))}
        </div>

        <div className="text-center">
          <Link to="/news">
            <Button className="px-8 py-3 bg-orange-500 hover:bg-orange-600 text-white font-medium">
              View All News & Updates
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default NewsPreview;
