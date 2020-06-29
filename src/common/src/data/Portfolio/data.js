import { socialTwitter } from 'react-icons-kit/ionicons/socialTwitter';
// import { socialFacebook } from 'react-icons-kit/ionicons/socialFacebook';
// import { socialDribbbleOutline } from 'react-icons-kit/ionicons/socialDribbbleOutline';
import { socialGithub } from 'react-icons-kit/ionicons/socialGithub';
// import { socialGoogleplusOutline } from 'react-icons-kit/ionicons/socialGoogleplusOutline';
import { socialLinkedin } from 'react-icons-kit/ionicons/socialLinkedin';

import Awardee1 from '../../assets/image/portfolio/awardee-1.png';
import Awardee2 from '../../assets/image/portfolio/awardee-2.png';
import Awardee3 from '../../assets/image/portfolio/awardee-3.png';
import Awardee4 from '../../assets/image/portfolio/awardee-4.png';
import AwardImage1 from '../../assets/image/portfolio/award-1.png';
import AwardImage2 from '../../assets/image/portfolio/award-2.png';
import AwardImage3 from '../../assets/image/portfolio/award-3.png';
import AwardImage4 from '../../assets/image/portfolio/award-4.png';

import PortfolioImage1 from '../../assets/image/portfolio/portfolio-1.jpg';
import PortfolioImage2 from '../../assets/image/portfolio/portfolio-2.jpg';

import Step1 from '../../assets/image/portfolio/step-1.png';
import Step2 from '../../assets/image/portfolio/step-2.png';
import Step3 from '../../assets/image/portfolio/step-3.png';

// import SkillIcon1 from '../../assets/image/portfolio/skill-1.svg';
// import SkillIcon2 from '../../assets/image/portfolio/skill-2.svg';
import SkillIcon3 from '../../assets/image/portfolio/skill-3.svg';
// import SkillIcon4 from '../../assets/image/portfolio/skill-4.svg';
import Chart from '../../assets/image/portfolio/bars-chart.svg';
import Development from '../../assets/image/portfolio/development.svg';
// import Ecommerce from '../../assets/image/portfolio/ecommerce.svg';

import Client1 from '../../assets/image/portfolio/client-1.png';
import Client2 from '../../assets/image/portfolio/client-2.png';
import Client3 from '../../assets/image/portfolio/client-3.png';
import Client4 from '../../assets/image/portfolio/client-4.png';
import Client5 from '../../assets/image/portfolio/client-5.png';
import Client6 from '../../assets/image/portfolio/client-6.png';

import Reviewer1 from '../../assets/image/portfolio/client-avatar-1.jpg';
import Reviewer2 from '../../assets/image/portfolio/client-avatar-2.jpg';
import Reviewer3 from '../../assets/image/portfolio/client-avatar-3.jpg';

export const SOCIAL_PROFILES = [
  {
    icon: socialTwitter,
    url: 'https://twitter.com/BennyTheDev',
  },
  {
    icon: socialGithub,
    url: 'https://github.com/BennyBzH',
  },
  {
    icon: socialLinkedin,
    url: 'https://www.linkedin.com/in/benjamin-piel-531774137/',
  },
];

export const MENU_ITEMS = [
  {
    label: false,
    path: '#banner_section',
    offset: '0',
  },
  {
    label: 'MES SERVICES',
    path: '#service_section',
    offset: '0',
  },
  {
    label: 'QUI SUIS-JE',
    path: '#process_section',
    offset: '0',
  },
  {
    label: 'CONTACTEZ-MOI',
    path: '#contact_section',
    offset: '0',
  },
];

export const AWARDS = [
  {
    awardLogo: AwardImage1,
    awardName: 'Free Software Advice',
    awardDetails: 'Top Rated App Development Companies USA',
    awardeeLogo: Awardee1,
    awardeeName: 'Awardee',
    date: 'The Jury 2018',
  },
  {
    awardLogo: AwardImage2,
    awardName: 'Free Software Advice',
    awardDetails: 'Top Rated App Development Companies USA',
    awardeeLogo: Awardee2,
    awardeeName: 'Awardee',
    date: 'The Jury 2018',
  },
  {
    awardLogo: AwardImage3,
    awardName: 'Free Software Advice',
    awardDetails: 'Top Rated App Development Companies USA',
    awardeeLogo: Awardee3,
    awardeeName: 'Awardee',
    date: 'The Jury 2018',
  },
  {
    awardLogo: AwardImage4,
    awardName: 'Free Software Advice',
    awardDetails: 'Top Rated App Development Companies USA',
    awardeeLogo: Awardee4,
    awardeeName: 'Awardee',
    date: 'The Jury 2018',
  },
];

export const PORTFOLIO_SHOWCASE = [
  {
    title: 'DESIGN',
    portfolioItem: [
      {
        title: 'Canada Media Site',
        description:
          "An effective and immersive user experience is what catches the attention and spreads a clear message. That's why we attach great importance to the fact that ergonomics serves the design, and that this design is innovative and neat.",
        image: PortfolioImage1,
        link: '#',
        featuredIn: 'AWWWARDS',
        featuredLink: '#',
        view: '4.5K',
        love: '1.5K',
        feedback: '1.2K',
        buildWith: [
          {
            content: 'React JS',
          },
          {
            content: 'Next JS',
          },
          {
            content: 'Styled Component',
          },
        ],
      },
      {
        title: 'RedQ, Inc. mobile app',
        description:
          "An effective and immersive user experience is what catches the attention and spreads a clear message. That's why we attach great importance to the fact that ergonomics serves the design, and that this design is innovative and neat.",
        image: PortfolioImage2,
        link: '#',
        featuredIn: 'AppStore',
        featuredLink: '#',
        view: '8.5K',
        love: '5.5K',
        feedback: '3.2K',
        buildWith: [
          {
            content: 'React Native',
          },
          {
            content: 'Firebase',
          },
          {
            content: 'Styled Component',
          },
        ],
      },
    ],
  },
  {
    title: 'DEVELOPMENT',
    portfolioItem: [
      {
        title: 'Canada Media Site',
        description:
          "An effective and immersive user experience is what catches the attention and spreads a clear message. That's why we attach great importance to the fact that ergonomics serves the design, and that this design is innovative and neat.",
        image: PortfolioImage1,
        link: '#',
        featuredIn: 'AWWWARDS',
        featuredLink: '#',
        view: '4.5K',
        love: '1.5K',
        feedback: '1.2K',
        buildWith: [
          {
            content: 'React JS',
          },
          {
            content: 'Next JS',
          },
          {
            content: 'Styled Component',
          },
        ],
      },
      {
        title: 'RedQ, Inc. mobile app',
        description:
          "An effective and immersive user experience is what catches the attention and spreads a clear message. That's why we attach great importance to the fact that ergonomics serves the design, and that this design is innovative and neat.",
        image: PortfolioImage2,
        link: '#',
        featuredIn: 'AppStore',
        featuredLink: '#',
        view: '8.5K',
        love: '5.5K',
        feedback: '3.2K',
        buildWith: [
          {
            content: 'React Native',
          },
          {
            content: 'Firebase',
          },
          {
            content: 'Styled Component',
          },
        ],
      },
    ],
  },
  {
    title: 'ANIMATION',
    portfolioItem: [
      {
        title: 'Canada Media Site',
        description:
          "An effective and immersive user experience is what catches the attention and spreads a clear message. That's why we attach great importance to the fact that ergonomics serves the design, and that this design is innovative and neat.",
        image: PortfolioImage1,
        link: '#',
        featuredIn: 'AWWWARDS',
        featuredLink: '#',
        view: '4.5K',
        love: '1.5K',
        feedback: '1.2K',
        buildWith: [
          {
            content: 'React JS',
          },
          {
            content: 'Next JS',
          },
          {
            content: 'Styled Component',
          },
        ],
      },
      {
        title: 'RedQ, Inc. mobile app',
        description:
          "An effective and immersive user experience is what catches the attention and spreads a clear message. That's why we attach great importance to the fact that ergonomics serves the design, and that this design is innovative and neat.",
        image: PortfolioImage2,
        link: '#',
        featuredIn: 'AppStore',
        featuredLink: '#',
        view: '8.5K',
        love: '5.5K',
        feedback: '3.2K',
        buildWith: [
          {
            content: 'React Native',
          },
          {
            content: 'Firebase',
          },
          {
            content: 'Styled Component',
          },
        ],
      },
    ],
  },
  {
    title: 'TV ADVERTISEMENT',
    portfolioItem: [
      {
        title: 'Canada Media Site',
        description:
          "An effective and immersive user experience is what catches the attention and spreads a clear message. That's why we attach great importance to the fact that ergonomics serves the design, and that this design is innovative and neat.",
        image: PortfolioImage1,
        link: '#',
        featuredIn: 'AWWWARDS',
        featuredLink: '#',
        view: '4.5K',
        love: '1.5K',
        feedback: '1.2K',
        buildWith: [
          {
            content: 'React JS',
          },
          {
            content: 'Next JS',
          },
          {
            content: 'Styled Component',
          },
        ],
      },
      {
        title: 'RedQ, Inc. mobile app',
        description:
          "An effective and immersive user experience is what catches the attention and spreads a clear message. That's why we attach great importance to the fact that ergonomics serves the design, and that this design is innovative and neat.",
        image: PortfolioImage2,
        link: '#',
        featuredIn: 'AppStore',
        featuredLink: '#',
        view: '8.5K',
        love: '5.5K',
        feedback: '3.2K',
        buildWith: [
          {
            content: 'React Native',
          },
          {
            content: 'Firebase',
          },
          {
            content: 'Styled Component',
          },
        ],
      },
    ],
  },
  {
    title: 'MARKETING',
    portfolioItem: [
      {
        title: 'Canada Media Site',
        description:
          "An effective and immersive user experience is what catches the attention and spreads a clear message. That's why we attach great importance to the fact that ergonomics serves the design, and that this design is innovative and neat.",
        image: PortfolioImage1,
        link: '#',
        featuredIn: 'AWWWARDS',
        featuredLink: '#',
        view: '4.5K',
        love: '1.5K',
        feedback: '1.2K',
        buildWith: [
          {
            content: 'React JS',
          },
          {
            content: 'Next JS',
          },
          {
            content: 'Styled Component',
          },
        ],
      },
      {
        title: 'RedQ, Inc. mobile app',
        description:
          "An effective and immersive user experience is what catches the attention and spreads a clear message. That's why we attach great importance to the fact that ergonomics serves the design, and that this design is innovative and neat.",
        image: PortfolioImage2,
        link: '#',
        featuredIn: 'AppStore',
        featuredLink: '#',
        view: '8.5K',
        love: '5.5K',
        feedback: '3.2K',
        buildWith: [
          {
            content: 'React Native',
          },
          {
            content: 'Firebase',
          },
          {
            content: 'Styled Component',
          },
        ],
      },
    ],
  },
];

export const PROCESS_STEPS = [
  {
    image: Step1,
    title: '1. Research',
    description:
      'We work with you to understand user’s stories and validate your idea with real users using lean design sprints.',
  },
  {
    image: Step2,
    title: '2. Design',
    description:
      'Expanding on the insights gained, you’ll work closely with our design team to create an elegant design',
  },
  {
    image: Step3,
    title: '3. Build',
    description:
      'With our scrum-based agile methodology, you’ll receive iterative builds every two weeks, which gives you ',
  },
];

export const SERVICE_LIST = [
  {
    title: 'Développement Web',
    listItems: [
      {
        content: 'ReactJS',
      },
      {
        content: 'Redux',
      },
      {
        content: 'NodeJS',
      },
      {
        content: 'Express',
      },
      {
        content: 'Socket.io',
      },
      {
        content: 'MongoDB',
      },
      {
        content: 'API CRUD',
      },
      {
        content: 'HTML & CSS',
      },
      {
        content: 'PHP & MySQL',
      },
      {
        content: 'JavaScript / jQuery',
      },
      {
        content: 'WordPress',
      },
    ],
  },
  {
    title: 'Outils / Logiciels',
    listItems: [
      {
        content: 'Visual Studio Code',
      },
      {
        content: 'PhotoShop',
      },
      {
        content: 'Illustrator',
      },
      {
        content: 'Google API',
      },
      {
        content: 'Git + GitHub',
      },
      {
        content: 'CLI Linux',
      },
    ],
  },
];

export const SKILLS = [
  {
    title: 'Site Web avec WordPress',
    description:
      "Que se soit une création ou une refonte d'un site web, je vous propose les solutions afin d'obtenir le site dont vous avez besoin",
    icon: SkillIcon3,
    successRate: '80',
  },
  {
    title: 'Maintenance et évolution',
    description:
      "Je vous propose de prendre en charge la maintenance et l'évolution de votre site internet: mise à jour, correctif de bugs, migrations de domaine et performance",
    icon: Chart,
    successRate: '90',
  },
  {
    title: 'Développement Web',
    description:
    "Un besoin spécifique pour la création d'un site web ou d'une appli web ? Je met a disposition mes compétences en PHP et ReactJS afin de convenir à vos demandes",
    icon: Development,
    successRate: '70',
  },
  // {
  //   title: 'E-commerce avec Prestashop',
  //   description:
  //     'Aristotle maintained the sharp distinction between science and the practical',
  //   icon: Ecommerce,
  //   successRate: '90',
  // },
];

export const CLIENTS = [
  {
    image: Client1,
    title: 'Microsoft',
  },
  {
    image: Client2,
    title: 'Airbnb',
  },
  {
    image: Client3,
    title: 'Adidas',
  },
  {
    image: Client4,
    title: 'IBM',
  },
  {
    image: Client5,
    title: 'Amazon',
  },
  {
    image: Client6,
    title: 'Google',
  },
];

export const TESTIMONIAL = [
  {
    image: Reviewer1,
    review:
      'Another quality React-based product from RedQ Team. Manage to turn highly complex tech into simple components.',
    name: 'Thomas Cruz',
    designation: 'Founder & CEO',
    twitterProfile: 'https://twitter.com/redqinc',
    organization: '@Tonquin',
    organizationURL: 'https://redq.io/',
  },
  {
    image: Reviewer2,
    review:
      'Another quality React-based product from RedQ Team. Manage to turn highly complex tech into simple components.',
    name: 'Marhta Robson',
    designation: 'Co-Founder & CTO',
    twitterProfile: 'https://twitter.com/redqinc',
    organization: '@Tonquin',
    organizationURL: 'https://redq.io/',
  },
  {
    image: Reviewer3,
    review:
      'Another quality React-based product from RedQ Team. Manage to turn highly complex tech into simple components.',
    name: 'Dexter Patterson',
    designation: 'Co-Founder & COO',
    twitterProfile: 'https://twitter.com/redqinc',
    organization: '@Tonquin',
    organizationURL: 'https://redq.io/',
  },
];

export const FOOTER_MENU = [
  {
    label: 'Contact',
    path: '#',
  },
  {
    label: 'Privacy',
    path: '#',
  },
  {
    label: 'Cookie Policy',
    path: '#',
  },
];
