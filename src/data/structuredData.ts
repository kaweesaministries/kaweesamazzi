
export const createOrganizationStructuredData = () => ({
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
});

export const createBlogPostStructuredData = (
  currentUrl: string,
  title: string,
  absoluteImageUrl: string,
  publishDate: string,
  modifiedDate: string,
  author: string,
  description: string,
  keywords: string[],
  category?: string
) => ({
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
  keywords: keywords.join(', '),
  articleSection: category,
  inLanguage: 'en-US',
  isAccessibleForFree: true
});

export const createEducationCenterFAQData = () => ({
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
});

export const createHealthScreeningFAQData = () => ({
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
});
