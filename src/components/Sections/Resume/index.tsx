import {FC, memo} from 'react';

import {education, experience, SectionId} from '../../../data/data';
import Section from '../../Layout/Section';
import ResumeSection from './ResumeSection';
import TimelineItem from './TimelineItem';

const Courses: FC = memo(() => {
  return (
    <Section className="bg-neutral-100" sectionId={SectionId.Courses}>
      <h2 className="text-3xl font-bold text-black text-center my-5 md:text-left">Our Current Courses</h2>
      <div className="flex flex-col divide-y-2 divide-neutral-300">
        <ResumeSection title="General English">
          {education.map((item, index) => (
            <TimelineItem item={item} key={`${item.title}-${index}`} />
          ))}
        </ResumeSection>
        <ResumeSection title="IELTS Preparation">
          {experience.map((item, index) => (
            <TimelineItem item={item} key={`${item.title}-${index}`} />
          ))}
        </ResumeSection>
      </div>
    </Section>
  );
});

Courses.displayName = 'Courses';
export default Courses;
