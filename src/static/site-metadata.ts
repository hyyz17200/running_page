interface ISiteMetadataResult {
  siteTitle: string;
  siteUrl: string;
  description: string;
  logo: string;
  navLinks: {
    name: string;
    url: string;
  }[];
}

const data: ISiteMetadataResult = {
  siteTitle: 'Run CJ Run',
  siteUrl: 'https://run.chongnuoji.com',
  logo: 'https://chongnuoji.com/wp-content/uploads/2021/03/NEW_CJ_200px.webp',
  description: 'Personal site and blog',
  navLinks: [
    {
      name: 'CJ Blog',
      url: 'https://chongnuoji.com',
    },
    {
      name: 'About',
      url: 'https://chongnuoji.com/about/',
    },
  ],
};

export default data;
