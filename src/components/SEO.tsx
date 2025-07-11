import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useLocation } from 'react-router-dom';
import { SEOProps } from '../types/seo';
import { createAbsoluteUrl, enhanceKeywords, createKeywordString } from '../utils/seoHelpers';
import {
  createOrganizationStructuredData,
  createBlogPostStructuredData,
  createEducationCenterFAQData,
  createHealthScreeningFAQData
} from '../data/structuredData';

const SEO: React.FC<SEOProps> = ({
  title = 'KAWEESA CHILDREN\'S MINISTRY LIMITED - Transforming Lives Through Love and Care',
  description = 'KAWEESA CHILDREN\'S MINISTRY LIMITED is a Ugandan foundation dedicated to improving the lives of children through education, health, protection, and community development programs.',
  type = 'website',
  name = 'KAWEESA CHILDREN\'S MINISTRY LIMITED',
  imageUrl = '/lovable-uploads/favicon-logo.png',
  publishDate,
  modifiedDate,
  author,
  category,
  keywords = ['children ministry', 'Uganda foundation', 'child welfare', 'education programs', 'community development', 'child protection', 'charitable organization'],
  isBlogPost = false
}) => {
  const location = useLocation();
  const currentUrl = createAbsoluteUrl(location.pathname);
  const absoluteImageUrl = createAbsoluteUrl(imageUrl);
  
  // Enhanced keywords for specific posts
  const enhancedKeywords = enhanceKeywords(location.pathname, keywords);
  const keywordString = createKeywordString(enhancedKeywords, category);

  // Create structured data
  const organizationStructuredData = createOrganizationStructuredData();
  
  const blogPostStructuredData = isBlogPost && publishDate 
    ? createBlogPostStructuredData(
        currentUrl,
        title,
        absoluteImageUrl,
        publishDate,
        modifiedDate || publishDate,
        author || name,
        description,
        enhancedKeywords,
        category
      ) 
    : null;

  // Page-specific FAQ data
  const educationCenterFAQData = location.pathname.includes('education-center-kampala') 
    ? createEducationCenterFAQData() 
    : null;
    
  const healthScreeningFAQData = location.pathname.includes('health-screening-children') 
    ? createHealthScreeningFAQData() 
    : null;

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={currentUrl} />
      <meta name="keywords" content={keywordString} />
      <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
      
      {/* Enhanced SEO Meta Tags */}
      <meta name="author" content={author || name} />
      <meta name="publisher" content="KAWEESA CHILDREN'S MINISTRY LIMITED" />
      <meta name="copyright" content="KAWEESA CHILDREN'S MINISTRY LIMITED" />
      <meta name="language" content="en" />
      <meta name="distribution" content="global" />
      <meta name="rating" content="general" />
      <meta name="revisit-after" content="1 days" />
      <meta name="googlebot" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
      <meta name="bingbot" content="index, follow" />
      
      {/* Geographic SEO */}
      <meta name="geo.region" content="UG" />
      <meta name="geo.placename" content="Kampala, Uganda" />
      <meta name="geo.position" content="0.3136;32.5811" />
      <meta name="ICBM" content="0.3136, 32.5811" />
      
      {/* Performance & Security */}
      <link rel="preconnect" href="https://www.googletagmanager.com" />
      <link rel="preconnect" href="https://www.google-analytics.com" />
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="dns-prefetch" href="https://www.googletagmanager.com" />
      <link rel="dns-prefetch" href="https://www.google-analytics.com" />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content={isBlogPost ? 'article' : type} />
      <meta property="og:url" content={currentUrl} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={absoluteImageUrl} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:alt" content={`${title} - Logo`} />
      <meta property="og:site_name" content="KAWEESA CHILDREN'S MINISTRY LIMITED" />
      <meta property="og:locale" content="en_US" />
      <meta property="og:locale:alternate" content="en_GB" />
      {isBlogPost && category && <meta property="article:section" content={category} />}
      {isBlogPost && publishDate && <meta property="article:published_time" content={publishDate} />}
      {isBlogPost && modifiedDate && <meta property="article:modified_time" content={modifiedDate} />}
      {isBlogPost && <meta property="article:publisher" content="https://kaweesachildrensministries.org" />}
      {isBlogPost && <meta property="article:author" content={author || name} />}
      
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={currentUrl} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={absoluteImageUrl} />
      <meta name="twitter:image:alt" content={`${title} - Logo`} />
      <meta name="twitter:creator" content="@KaweesaChildren" />
      <meta name="twitter:site" content="@KaweesaChildren" />
      
      {/* LinkedIn specific */}
      <meta property="og:image:secure_url" content={absoluteImageUrl} />
      
      {/* Pinterest specific */}
      <meta name="pinterest:description" content={description} />
      <meta name="pinterest:image" content={absoluteImageUrl} />
      <meta name="pinterest:url" content={currentUrl} />
      
      {/* WhatsApp specific */}
      <meta property="og:image:type" content="image/png" />
      
      {/* Additional SEO meta tags */}
      <meta name="theme-color" content="#ea580c" />
      <meta name="msapplication-TileColor" content="#ea580c" />
      <meta name="msapplication-TileImage" content={absoluteImageUrl} />
      <meta name="apple-mobile-web-app-title" content="Kaweesa Children's Ministry" />
      <meta name="application-name" content="Kaweesa Children's Ministry" />
      
      {/* Mobile optimization */}
      <meta name="mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="default" />
      
      {/* JSON-LD structured data */}
      <script type="application/ld+json">
        {JSON.stringify(organizationStructuredData)}
      </script>
      
      {blogPostStructuredData && (
        <script type="application/ld+json">
          {JSON.stringify(blogPostStructuredData)}
        </script>
      )}
      
      {educationCenterFAQData && (
        <script type="application/ld+json">
          {JSON.stringify(educationCenterFAQData)}
        </script>
      )}
      
      {healthScreeningFAQData && (
        <script type="application/ld+json">
          {JSON.stringify(healthScreeningFAQData)}
        </script>
      )}
    </Helmet>
  );
};

export default SEO;
