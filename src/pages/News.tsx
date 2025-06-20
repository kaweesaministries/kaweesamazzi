
import PageLayout from '@/components/PageLayout';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight, Calendar, User } from 'lucide-react';
import { Link } from 'react-router-dom';
import SEO from '@/components/SEO';

const News = () => {
  const newsArticles = [
    {
      id: '1',
      title: 'New Education Center Opens in Kampala',
      excerpt: 'We are excited to announce the opening of our new education center that will serve 200+ children in the Kampala area with quality learning facilities and dedicated teachers.',
      date: 'December 15, 2024',
      author: 'Ministry Team',
      category: 'Education',
      slug: 'new-education-center-kampala',
      imageUrl: '/lovable-uploads/4bfa0d71-3ed2-4693-90b6-35142468907f.png'
    },
    {
      id: '2', 
      title: 'Successful Health Screening Reaches 500 Children',
      excerpt: 'Our recent health screening program provided medical checkups, vaccinations, and health education to over 500 children across 5 communities in rural Uganda.',
      date: 'December 10, 2024',
      author: 'Health Team',
      category: 'Health',
      slug: 'health-screening-500-children',
      imageUrl: '/lovable-uploads/4bfa0d71-3ed2-4693-90b6-35142468907f.png'
    },
    {
      id: '3',
      title: 'Partnership with Local Schools Expands Our Reach', 
      excerpt: 'New partnerships with 10 local schools will help us provide educational support, feeding programs, and mentorship to even more children in need.',
      date: 'December 5, 2024',
      author: 'Partnership Team',
      category: 'Partnerships',
      slug: 'partnership-local-schools',
      imageUrl: '/lovable-uploads/4bfa0d71-3ed2-4693-90b6-35142468907f.png'
    },
    {
      id: '4',
      title: 'Christmas Celebration Brings Joy to 300 Children',
      excerpt: 'Our annual Christmas celebration provided gifts, meals, and entertainment to 300 children from vulnerable families across our service areas.',
      date: 'December 25, 2024',
      author: 'Events Team',
      category: 'Events',
      slug: 'christmas-celebration-2024',
      imageUrl: '/lovable-uploads/efdceba7-7d2e-426d-88cd-09620d67eea7.png'
    },
    {
      id: '5',
      title: 'Volunteer Training Program Launches',
      excerpt: 'We have launched a comprehensive training program for new volunteers, equipping them with skills to work effectively with children and families.',
      date: 'November 28, 2024',
      author: 'Volunteer Coordinator',
      category: 'Volunteers',
      slug: 'volunteer-training-program',
      imageUrl: '/lovable-uploads/526dc38a-25fa-40d4-b520-425b23ae0464.png'
    },
    {
      id: '6',
      title: 'Clean Water Project Serves 1,000+ Families',
      excerpt: 'Our latest clean water initiative has successfully provided access to safe drinking water for over 1,000 families in remote communities.',
      date: 'November 15, 2024',
      author: 'Development Team',
      category: 'Development',
      slug: 'clean-water-project-success',
      imageUrl: '/lovable-uploads/4bfa0d71-3ed2-4693-90b6-35142468907f.png'
    }
  ];

  const featuredPost = newsArticles[0];
  const otherPosts = newsArticles.slice(1);
  
  return (
    <PageLayout>
      <SEO 
        title="KAWEESA CHILDREN'S MINISTRY - Latest News and Updates" 
        description="Stay updated with the latest news, success stories, and program updates from KAWEESA CHILDREN'S MINISTRY LIMITED as we transform lives of children in Uganda."
        imageUrl={featuredPost?.imageUrl || "/lovable-uploads/526dc38a-25fa-40d4-b520-425b23ae0464.png"}
        keywords={['children ministry news', 'Uganda charity updates', 'child welfare news', 'ministry programs', 'success stories']}
        type="website"
      />
      
      <div className="w-full pt-24 pb-12 bg-gradient-to-b from-orange-500 to-red-500 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Ministry News &amp; Updates</h1>
            <p className="text-xl text-orange-100 mb-6">
              The latest stories of transformation, hope, and impact from our work with children in Uganda
            </p>
          </div>
        </div>
      </div>
      
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredPost && (
            <Link to={`/news/${featuredPost.slug}`} className="col-span-1 md:col-span-2 lg:col-span-3">
              <Card className="overflow-hidden hover:shadow-lg transition-shadow duration-300 h-full">
                <div className="grid md:grid-cols-2 h-full">
                  <div 
                    className="bg-cover bg-center h-64 md:h-full p-8 flex items-center justify-center"
                    style={{ 
                      backgroundImage: `url('${featuredPost.imageUrl}')`,
                      backgroundSize: 'cover',
                      backgroundRepeat: 'no-repeat',
                      backgroundPosition: 'center'
                    }}
                  >
                    <div className="text-white text-center bg-black/30 backdrop-blur-sm p-4 rounded-lg">
                      <span className="px-3 py-1 bg-orange-500/80 rounded-full text-sm font-medium inline-block mb-4">Featured Story</span>
                      <h3 className="text-2xl md:text-3xl font-bold">{featuredPost.title}</h3>
                    </div>
                  </div>
                  <CardContent className="p-8">
                    <div className="flex items-center text-gray-500 text-sm mb-2">
                      <Calendar className="mr-2 h-4 w-4" />
                      <span className="mr-4">{featuredPost.date}</span>
                      <User className="mr-2 h-4 w-4" />
                      <span>{featuredPost.author}</span>
                    </div>
                    <p className="text-gray-700 mb-6">
                      {featuredPost.excerpt}
                    </p>
                    <Button variant="outline" className="group">
                      Read more 
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Button>
                  </CardContent>
                </div>
              </Card>
            </Link>
          )}
          
          {otherPosts.map((article) => (
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
      </div>
    </PageLayout>
  );
};

export default News;
