import classNames from 'classnames';
import {FC, memo} from 'react';

import {bussinessEnglish, generalEnglish, heroData, ieltsPrep, SectionId} from '../../../data/data';
import Section from '../../Layout/Section';
import ResumeSection from './ResumeSection';
import TimelineItem from './TimelineItem';

const Courses: FC = memo(() => {
  const {actionShort} = heroData;
  return (
    <Section className="bg-neutral-100" sectionId={SectionId.Courses}>
      <h2 className="text-3xl font-bold text-black text-center mb-10 md:text-center">Our Current Courses</h2>
      <div className="flex flex-col divide-y-2 divide-neutral-300">
        <ResumeSection title="General English">
          {generalEnglish.map((item, index) => (
            <TimelineItem item={item} key={`${item.title}-${index}`} />
          ))}
        </ResumeSection>
        <ResumeSection title="IELTS Preparation">
          {ieltsPrep.map((item, index) => (
            <TimelineItem item={item} key={`${item.title}-${index}`} />
          ))}
        </ResumeSection>
        <ResumeSection title="Business English">
          {bussinessEnglish.map((item, index) => (
            <TimelineItem item={item} key={`${item.title}-${index}`} />
          ))}
        </ResumeSection>
      </div>
      <div
        style={{
          border: '2px solid #4CAF50',
          marginTop: '30px',
          borderRadius: '10px',
          backgroundColor: '#f2f2f2',
          padding: '10px',
          boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2)',
        }}>
        <h3
          className="text-sm font-semibold text-black text-center md:text-lg md:text-center"
          style={{lineHeight: '1.7'}}>
          <u>Notice:</u> <br />
          If you can't find the course that suits you, please contact us. <br />
          We will try our best to accommodate your needs.
        </h3>
        <div className="flex mt-2 w-full justify-center gap-x-4">
          {actionShort.map(({href, text, primary, Icon}) => (
            <a
              className={classNames(
                'flex gap-x-2 rounded-full border-2 bg-none px-4 py-2 text-sm font-medium text-black ring-offset-gray-700/80 hover:bg-gray-700/80 focus:outline-none focus:ring-2 focus:ring-offset-2 sm:text-base',
                primary ? 'border-orange-500 ring-orange-500' : 'border-white ring-white',
              )}
              href={href}
              key={text}>
              {text}
              {Icon && <Icon className="h-5 w-5 text-black sm:h-6 sm:w-6" />}
            </a>
          ))}
        </div>
      </div>
    </Section>
  );
});

Courses.displayName = 'Courses';
export default Courses;
