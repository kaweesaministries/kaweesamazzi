
export const createAbsoluteUrl = (path: string, baseUrl: string = 'https://kaweesachildrensministry.org'): string => {
  return path.startsWith('http') ? path : `${baseUrl}${path}`;
};

export const enhanceKeywords = (pathname: string, baseKeywords: string[]): string[] => {
  if (pathname.includes('education-center-kampala')) {
    return [
      ...baseKeywords,
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
    ];
  }
  
  if (pathname.includes('health-screening-children')) {
    return [
      ...baseKeywords,
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
    ];
  }
  
  return baseKeywords;
};

export const createKeywordString = (keywords: string[], category?: string): string => {
  return category 
    ? [...keywords, category.toLowerCase()].join(', ') 
    : keywords.join(', ');
};
