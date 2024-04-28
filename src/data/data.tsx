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
import porfolioImage7 from '../images/portfolio/CELTA.png';
import porfolioImage5 from '../images/portfolio/communicative.jpg';
import porfolioImage2 from '../images/portfolio/confidence.jpg';
import porfolioImage9 from '../images/portfolio/faceClass.webp';
import porfolioImage3 from '../images/portfolio/facetoface.jpg';
import porfolioImage10 from '../images/portfolio/freeDemo.png';
import porfolioImage11 from '../images/portfolio/master.jpg';
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
  Portfolio: 'Our Teaching',
  Courses: 'courses',
  Skills: 'skills',
  Stats: 'stats',
  Testimonials: 'reviews',
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
  actionShort: [
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
    title: 'Knowledge',
    description:
      'Teachers in Your Language Lounge obtained a Master Degree in Teaching English to Speakers of other languages.',
    image: porfolioImage11,
  },
  {
    title: 'Cambridge certified',
    description: 'All of our teachers are CELTA certified and have hands-on experience in teaching English',
    image: porfolioImage7,
  },
  {
    title: 'You',
    description: 'You and improving your English skills are our focus in the class. Nothing else!',
    image: porfolioImage3,
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
    title: 'Confidence Boosted',
    description: 'Ours students have their confience in speaking English boosted. You can have it too.',
    image: porfolioImage2,
  },
  {
    title: 'Communicative',
    description: 'You are guaranteed to have many opportunities to practice speaking in our classes.',
    image: porfolioImage5,
  },

  {
    title: 'Free Demo Class',
    description: 'Before committing to our courses, one free demo class is always offered.',
    image: porfolioImage10,
  },
  {
    title: 'Affordable',
    description: 'Our lessons are affordable so everyone can learn English in their ways.',
    image: porfolioImage1,
  },
  {
    title: 'Free Pre-assessment and Reports',
    description: 'Your English is assessed and monitored by our experienced teachers.',
    image: porfolioImage8,
  },
];

/**
 * Resume section -- TODO: Standardize resume contact format or offer MDX
 */
export const generalEnglish: TimelineItem[] = [
  {
    mode: 'Online Classes (Subject to availability)',
    price: '£7/hour',
    title: 'Small Group',
    content: (
      <p>
        Experience a comfortable and relaxed atmosphere while learning ESOL in our Small Group online classes. Benefit
        from the collective knowledge of experienced and qualified teachers, and engage in stimulating discussions with
        fellow learners.
      </p>
    ),
  },
  {
    mode: 'Online classes',
    price: '£17.5/hour',
    title: 'One to One',
    content: (
      <p>
        Boost your English communication skills with our One to One class. Get personalized attention in a relaxed
        setting, and learn at your own pace with our experienced teachers at Your Language Lounge.
      </p>
    ),
  },
];

export const ieltsPrep: TimelineItem[] = [
  {
    mode: 'Online Classes (Subject to availability)',
    price: '£8/hour',
    title: 'Small Group',
    content: (
      <p>
        Get ready for your IELTS with our Small Group class. In a relaxed and supportive environment, our experienced
        teachers will guide you through key strategies and skills needed for the test. Join us and let's ace IELTS
        together!
      </p>
    ),
  },
  {
    mode: 'Online classes',
    price: '£18.5/hour',
    title: 'One to One',
    content: (
      <p>
        Prepare for your IELTS in a focused, one-to-one setting. Our experienced teachers will provide personalized
        strategies and feedback to help you excel. Enjoy the relaxed atmosphere of Your Language Lounge while you gear
        up for success!
      </p>
    ),
  },
];

export const bussinessEnglish: TimelineItem[] = [
  {
    mode: 'Online Classes (Subject to availability)',
    price: '£7/hour',
    title: 'Small Group',
    content: (
      <p>
        Cultivate effective communication skills in a relaxed and supportive atmosphere, where you'll thrive in a
        dynamic learning environment tailored to your professional needs.
      </p>
    ),
  },
  {
    mode: 'Online classes',
    price: '£17.5/hour',
    title: 'One to One',
    content: (
      <p>
        Dive into a comfortable online atmosphere where personalized attention meets effective communication skills
        development. Elevate your professional language proficiency in an environment designed just for you.
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
      name: 'Thuy - Vietnamese',
      text: 'I absolutely loved the General Communicative English course at Your Language Lounge! The interactive sessions and supportive atmosphere helped me improve my English skills effortlessly. The instructors were amazing, making each lesson enjoyable and effective.',
    },
    {
      name: 'Amina - Moroccan',
      text: 'The IELTS prep course at Your Language Lounge was fantastic! The instructors were dedicated and provided invaluable insights into the exam format. With their help, I felt well-prepared and confident on exam day. Thanks to them, I achieved the score I needed!',
    },
    {
      name: 'Cora - Greek',
      text: 'The Business English course at Your Language Lounge exceeded my expectations! The personalized attention in the one-to-one setting was invaluable.',
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
      type: ContactType.Location,
      text: 'Nottingham, UK',
      href: 'https://www.google.com/maps/place/Nottingham/@52.9540974,-1.2524624,12z/data=!3m1!4b1!4m6!3m5!1s0x487832d2390779cd:0x108063201919db15!8m2!3d52.9540223!4d-1.1549892!16zL20vMDl0bGg?entry=ttu',
    },
    {
      type: ContactType.Email,
      text: 'hello@langlounge.uk',
      href: 'mailto:hello@langlounge.uk',
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
    {
      type: ContactType.Whatsapp,
      text: 'Tap to chat on Whatsapp',
      href: "https://wa.me/447514288028?text=Hi.%20I'm%20inquiring%20about%20Your%20Language%20Lounge",
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
