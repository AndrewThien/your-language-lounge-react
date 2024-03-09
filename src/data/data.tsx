import {
  AcademicCapIcon,
  BookOpenIcon,
  BuildingOffice2Icon,
  CalendarIcon,
  EnvelopeIcon,
  FlagIcon,
  MapIcon,
  SparklesIcon,
} from '@heroicons/react/24/outline';

import FacebookIcon from '../components/Icon/FacebookIcon';
import InstagramIcon from '../components/Icon/InstagramIcon';
import LinkedInIcon from '../components/Icon/LinkedInIcon';
import TwitterIcon from '../components/Icon/TwitterIcon';
import heroImage from '../images/background.jpg';
import porfolioImage1 from '../images/portfolio/affordable.jpg';
import porfolioImage8 from '../images/portfolio/assessment.jpg';
import porfolioImage7 from '../images/portfolio/CELTA.jpg';
import porfolioImage5 from '../images/portfolio/communicative.jpg';
import porfolioImage2 from '../images/portfolio/confidence.jpg';
import porfolioImage9 from '../images/portfolio/faceClass.webp';
import porfolioImage3 from '../images/portfolio/facetoface.jpg';
import porfolioImage10 from '../images/portfolio/freeDemo.png';
import porfolioImage11 from '../images/portfolio/master.jpeg';
import porfolioImage6 from '../images/portfolio/onlineClass.jpg';
import profilepic from '../images/profilepicGif.gif';
import testimonialImage from '../images/testimonial.webp';
import {
  About,
  ContactSection,
  ContactType,
  Hero,
  HomepageMeta,
  PortfolioItem,
  SkillGroup,
  Social,
  TestimonialSection,
  TimelineItem,
} from './dataDef';

/**
 * Page meta data
 */
export const homePageMeta: HomepageMeta = {
  title: 'Your Language Lounge',
  description: 'Relax - Sit back - Learn English with us',
};

/**
 * Section definition
 */
export const SectionId = {
  Hero: 'hero',
  About: 'about',
  Contact: 'contact',
  Portfolio: 'portfolio',
  Courses: 'courses',
  Skills: 'skills',
  Stats: 'stats',
  Testimonials: 'testimonials',
} as const;

export type SectionId = (typeof SectionId)[keyof typeof SectionId];

/**
 * Hero section
 */
export const heroData: Hero = {
  imageSrc: heroImage,
  name: `Welcome to`,
  nameSub: `Your Language Lounge`,
  description: (
    <>
      <p className="mt-5 prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        We focus on real, <strong className="text-stone-100">student-centered</strong> communication in a{' '}
        <strong className="text-stone-100">relaxed atmosphere</strong>, fostering{' '}
        <strong className="text-stone-100">confidence</strong> and <strong className="text-stone-100">fluency</strong>.
      </p>
      <p className="mb-5 prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        Join our community and experience <strong className="text-stone-100">the joy of learning English</strong> with
        ease at Your Language Lounge!
      </p>
    </>
  ),
  actions: [
    {
      href: `#${SectionId.Courses}`,
      text: 'Our Courses',
      primary: false,
      Icon: BookOpenIcon,
    },
    {
      href: `#${SectionId.Contact}`,
      text: 'Contact Us',
      primary: true,
      Icon: EnvelopeIcon,
    },
  ],
};

/**
 * About section
 */
export const aboutData: About = {
  profileImageSrc: profilepic,
  description1: `A lounge is a place you can sit down and relax before flights or important trips. You can do the same in Your Language Lounge. Here, a safe, enjoyable and friendly atmosphere where everyone can speak comfortably is one of our main goals while teaching.`,
  description2: `Because we truly care about your progress, we apply a unique tracking system to our teaching program. A Two-Sided Report (TSR), which is proven as an effective way to enhance learning, will be provided every two months.`,
  description3: `Our teachers also care about your needs, so your Language Lounge offers many course options for a reasonable fee. Especially, in the Customised course, you can tell us about the length of the course, or the number of sessions, or choose who to study with.`,
  aboutItems: [
    {label: 'Location', text: 'Victoria, BC', Icon: MapIcon},
    {label: 'Age', text: '29', Icon: CalendarIcon},
    {label: 'Nationality', text: 'Canadian / Irish', Icon: FlagIcon},
    {label: 'Interests', text: 'Motorcycles, Muay Thai, Banjos', Icon: SparklesIcon},
    {label: 'Study', text: 'University of Victoria', Icon: AcademicCapIcon},
    {label: 'Employment', text: 'Instant Domains, inc.', Icon: BuildingOffice2Icon},
  ],
};

/**
 * Skills section
 */
export const skills: SkillGroup[] = [
  {
    name: 'Spoken languages',
    skills: [
      {
        name: 'English',
        level: 10,
      },
      {
        name: 'French',
        level: 4,
      },
      {
        name: 'Spanish',
        level: 3,
      },
    ],
  },
  {
    name: 'Frontend development',
    skills: [
      {
        name: 'React',
        level: 9,
      },
      {
        name: 'Typescript',
        level: 7,
      },
      {
        name: 'GraphQL',
        level: 6,
      },
    ],
  },
  {
    name: 'Backend development',
    skills: [
      {
        name: 'Node.js',
        level: 8,
      },
      {
        name: 'Rust',
        level: 5,
      },
      {
        name: 'Golang',
        level: 4,
      },
    ],
  },
  {
    name: 'Mobile development',
    skills: [
      {
        name: 'React Native',
        level: 9,
      },
      {
        name: 'Flutter',
        level: 4,
      },
      {
        name: 'Swift',
        level: 3,
      },
    ],
  },
];

/**
 * Portfolio section
 */
export const portfolioItems: PortfolioItem[] = [
  {
    title: 'Project title 11',
    description:
      'All of our teachers have Master Degree in Teaching English to Speakers of other languages. We offer you the best teaching quality',
    image: porfolioImage11,
  },
  {
    title: 'CELTA',
    description: 'All of our teachers are CELTA certified. Quality guaranteed!',
    image: porfolioImage7,
  },
  {
    title: 'You',
    description: 'You and improving your English skills are our focus in the class. Nothing else!',
    image: porfolioImage3,
  },
  {
    title: 'Confidence Boosted',
    description: 'Ours students have their confience in speaking English boosted. You can have it too.',
    image: porfolioImage2,
  },
  {
    title: 'Communicative',
    description:
      'All of our lessons are communicative so many opportunities to speak and practice your English are always on the way',
    image: porfolioImage5,
  },
  {
    title: 'Online classes',
    description: 'We offer online classes to fit your busy schedule',
    image: porfolioImage6,
  },
  {
    title: 'Offine classes',
    description: 'We also offer offline classes with many sizes so you have more real-life interactions',
    image: porfolioImage9,
  },
  {
    title: 'Free Pre-assessment and Reports',
    description: 'Your English is assessed and monitored by our experienced teachers.',
    image: porfolioImage8,
  },
  {
    title: 'Free Demo Class',
    description: 'Before committing to our courses, one free demo class is offered.',
    image: porfolioImage10,
  },
  {
    title: 'Affordable',
    description: 'Our lessons are affordable so everyone can learn English in their ways',
    image: porfolioImage1,
  },
];

/**
 * Resume section -- TODO: Standardize resume contact format or offer MDX
 */
export const education: TimelineItem[] = [
  {
    date: 'April 2007',
    location: 'Clown college',
    title: 'Masters in Beer tasting',
    content: <p>Describe your experience at school, what you learned, what useful skills you have acquired etc.</p>,
  },
  {
    date: 'March 2003',
    location: 'School of Business',
    title: 'What did you study 101',
    content: <p>Describe your experience at school, what you learned, what useful skills you have acquired etc.</p>,
  },
];

export const experience: TimelineItem[] = [
  {
    date: 'March 2010 - Present',
    location: 'Awesome Development Company',
    title: 'Senior UX Engineer',
    content: (
      <p>
        Describe work, special projects, notable achievements, what technologies you have been working with, and
        anything else that would be useful for an employer to know.
      </p>
    ),
  },
  {
    date: 'March 2007 - February 2010',
    location: 'Garage Startup Studio',
    title: 'Junior bug fixer',
    content: (
      <p>
        Describe work, special projects, notable achievements, what technologies you have been working with, and
        anything else that would be useful for an employer to know.
      </p>
    ),
  },
];

/**
 * Testimonial section
 */
export const testimonial: TestimonialSection = {
  imageSrc: testimonialImage,
  testimonials: [
    {
      name: 'John Doe',
      text: 'Use this as an opportunity to promote what it is like to work with you. High value testimonials include ones from current or past co-workers, managers, or from happy clients.',
      image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/169.jpg',
    },
    {
      name: 'Jane Doe',
      text: 'Here you should write some nice things that someone has said about you. Encourage them to be specific and include important details (notes about a project you were on together, impressive quality produced, etc).',
      image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/14.jpg',
    },
    {
      name: 'Someone else',
      text: 'Add several of these, and keep them as fresh as possible, but be sure to focus on quality testimonials with strong highlights of your skills/work ethic.',
      image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/69.jpg',
    },
  ],
};

/**
 * Contact section
 */

export const contact: ContactSection = {
  headerText: 'Contact us today',
  description: 'Ask us anything and we will get back to you as soon as we can.',
  items: [
    {
      type: ContactType.Email,
      text: 'hello@langlounge.uk',
      href: 'mailto:hello@langlounge.uk',
    },
    {
      type: ContactType.Location,
      text: 'Nottingham, UK',
      href: 'https://www.google.com/maps/place/Nottingham/@52.9540974,-1.2524624,12z/data=!3m1!4b1!4m6!3m5!1s0x487832d2390779cd:0x108063201919db15!8m2!3d52.9540223!4d-1.1549892!16zL20vMDl0bGg?entry=ttu',
    },
    {
      type: ContactType.Facebook,
      text: 'Your Language Lounge',
      href: 'https://www.facebook.com/YourLanguageLoungeFB',
    },
    {
      type: ContactType.Instagram,
      text: '@your_language_lounge',
      href: 'https://www.instagram.com/your_language_lounge/',
    },
    {
      type: ContactType.Phone,
      text: '+44 7565085822',
    },
  ],
};

/**
 * Social items
 */
export const socialLinks: Social[] = [
  {label: 'Facebook', Icon: FacebookIcon, href: 'https://www.facebook.com/YourLanguageLoungeFB'},
  {label: 'Instagram', Icon: InstagramIcon, href: 'https://www.instagram.com/your_language_lounge/'},
  {label: 'LinkedIn', Icon: LinkedInIcon, href: 'https://www.linkedin.com/company/your-language-lounge/'},
  {label: 'Twitter', Icon: TwitterIcon, href: 'https://twitter.com/YourLangLounge'},
];
