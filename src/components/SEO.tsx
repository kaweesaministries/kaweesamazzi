
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useLocation } from 'react-router-dom';

interface SEOProps {
  title?: string;
  description?: string;
  type?: string;
  name?: string;
  imageUrl?: string;
  publishDate?: string;
  modifiedDate?: string;
  author?: string;
  category?: string;
  keywords?: string[];
  isBlogPost?: boolean;
}

const SEO: React.FC<SEOProps> = ({
  title = 'KAWEESA CHILDREN\'S MINISTRY LIMITED - Transforming Lives Through Love and Care',
  description = 'KAWEESA CHILDREN\'S MINISTRY LIMITED is a Ugandan foundation dedicated to improving the lives of children through education, health, protection, and community development programs.',
  type = 'website',
  name = 'KAWEESA CHILDREN\'S MINISTRY LIMITED',
  imageUrl = '/lovable-uploads/526dc38a-25fa-40d4-b520-425b23ae0464.png',
  publishDate,
  modifiedDate,
  author,
  category,
  keywords = ['children ministry', 'Uganda foundation', 'child welfare', 'education programs', 'community development', 'child protection', 'charitable organization'],
  isBlogPost = false
}) => {
  const location = useLocation();
  const currentUrl = `https://kaweesachildrensministry.org${location.pathname}`;
  const absoluteImageUrl = imageUrl.startsWith('http') ? imageUrl : `https://kaweesachildrensministry.org${imageUrl}`;

  // Enhanced keywords for specific posts
  const enhancedKeywords = location.pathname.includes('education-center-kampala') 
    ? [
        ...keywords,
        'education center',
        'Kampala schools',
        'children education Uganda',
        'learning facilities',
        'quality education',
        'educational support',
        'school programs',
        'academic excellence',
        'educational infrastructure',
        'student support'
      ]
    : location.pathname.includes('health-screening-children')
    ? [
        ...keywords,
        'health screening',
        'children health Uganda',
        'medical checkups',
        'vaccinations',
        'health education',
        'preventive healthcare',
        'child health programs',
        'medical outreach',
        'healthcare access',
        'community health'
      ]
    : keywords;

  // Create base Organization JSON-LD structured data
  const organizationStructuredData = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'KAWEESA CHILDREN\'S MINISTRY LIMITED',
    url: 'https://kaweesachildrensministry.org',
    logo: 'https://kaweesachildrensministry.org/lovable-uploads/526dc38a-25fa-40d4-b520-425b23ae0464.png',
    description: 'Transforming children\'s lives through love, care, education, and community development in Uganda',
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'customer service',
      email: 'info@kaweesachildrensministry.org'
    },
    address: {
      '@type': 'PostalAddress',
      addressCountry: 'Uganda',
      addressRegion: 'Central Region'
    },
    foundingDate: '2020',
    mission: 'To transform the lives of children through love, care, education, health, protection, and community development programs'
  };

  // Enhanced BlogPosting JSON-LD structured data
  const blogPostStructuredData = isBlogPost && publishDate ? {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': currentUrl
    },
    headline: title,
    image: {
      '@type': 'ImageObject',
      url: absoluteImageUrl,
      width: 1200,
      height: 630
    },
    datePublished: publishDate,
    dateModified: modifiedDate || publishDate,
    author: {
      '@type': 'Organization',
      name: author || 'KAWEESA CHILDREN\'S MINISTRY LIMITED',
      url: 'https://kaweesachildrensministry.org'
    },
    publisher: {
      '@type': 'Organization',
      name: 'KAWEESA CHILDREN\'S MINISTRY LIMITED',
      logo: {
        '@type': 'ImageObject',
        url: 'https://kaweesachildrensministry.org/lovable-uploads/526dc38a-25fa-40d4-b520-425b23ae0464.png',
        width: 512,
        height: 512
      },
      url: 'https://kaweesachildrensministry.org'
    },
    description: description,
    keywords: enhancedKeywords.join(', '),
    articleSection: category,
    inLanguage: 'en-US',
    isAccessibleForFree: true
  } : null;

  // Add FAQ structured data for Education Center post
  const educationCenterFAQData = location.pathname.includes('education-center-kampala') ? {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'What services does the new education center provide?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'The new education center in Kampala provides quality learning facilities, dedicated teachers, educational support programs, and serves over 200 children in the area with comprehensive educational services.'
        }
      },
      {
        '@type': 'Question',
        name: 'How can children enroll in KAWEESA CHILDREN\'S MINISTRY programs?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Families can contact KAWEESA CHILDREN\'S MINISTRY LIMITED directly through our website or visit our education center in Kampala. We work with families to ensure children have access to quality education regardless of their financial situation.'
        }
      },
      {
        '@type': 'Question',
        name: 'What makes this education center different?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Our education center focuses on holistic child development, combining quality academics with character building, health support, and community involvement. We provide not just education, but comprehensive care for each child.'
        }
      }
    ]
  } : null;

  // Add FAQ structured data for Health Screening post
  const healthScreeningFAQData = location.pathname.includes('health-screening-children') ? {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'What does the health screening program include?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Our health screening program includes comprehensive medical checkups, vaccinations, health education, nutritional assessments, and referrals for specialized care when needed. We serve children across multiple communities in rural Uganda.'
        }
      },
      {
        '@type': 'Question',
        name: 'How often do you conduct health screenings?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'KAWEESA CHILDREN\'S MINISTRY conducts regular health screening programs throughout the year, reaching different communities on a rotating basis to ensure consistent healthcare access for children in need.'
        }
      },
      {
        '@type': 'Question',
        name: 'Is the health screening program free?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes, our health screening programs are provided free of charge to families and children in need. This is part of our mission to ensure every child has access to basic healthcare regardless of their family\'s financial situation.'
        }
      }
    ]
  } : null;

  // Combine keywords with any additional category terms
  const keywordString = category 
    ? [...enhancedKeywords, category.toLowerCase()].join(', ') 
    : enhancedKeywords.join(', ');

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={currentUrl} />
      <meta name="keywords" content={keywordString} />
      <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content={isBlogPost ? 'article' : type} />
      <meta property="og:url" content={currentUrl} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={absoluteImageUrl} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:site_name" content="KAWEESA CHILDREN'S MINISTRY LIMITED" />
      <meta property="og:locale" content="en_US" />
      {isBlogPost && category && <meta property="article:section" content={category} />}
      {isBlogPost && publishDate && <meta property="article:published_time" content={publishDate} />}
      {isBlogPost && modifiedDate && <meta property="article:modified_time" content={modifiedDate} />}
      {isBlogPost && <meta property="article:publisher" content="https://kaweesachildrensministry.org" />}
      
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={currentUrl} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={absoluteImageUrl} />
      
      {/* LinkedIn specific */}
      <meta property="og:image:secure_url" content={absoluteImageUrl} />
      <meta name="author" content={author || name} />
      
      {/* Pinterest specific */}
      <meta name="pinterest:description" content={description} />
      <meta name="pinterest:image" content={absoluteImageUrl} />
      
      {/* Additional SEO meta tags */}
      <meta name="theme-color" content="#ea580c" />
      <meta name="msapplication-TileColor" content="#ea580c" />
      
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
