import {FC, memo} from 'react';

import {education, education1, experience, SectionId} from '../../../data/data';
import Section from '../../Layout/Section';
import ResumeSection from './ResumeSection';
import TimelineItem from './TimelineItem';

const Courses: FC = memo(() => {
  return (
    <Section className="bg-neutral-100" sectionId={SectionId.Courses}>
      <h2 className="text-3xl font-bold text-black text-center mt-2 mb-10 md:text-center">Our Current Courses</h2>
      <div className="flex flex-col divide-y-2 divide-neutral-300">
        <ResumeSection title="General English">
          {education.map((item, index) => (
            <TimelineItem item={item} key={`${item.title}-${index}`} />
          ))}
        </ResumeSection>
        <ResumeSection title="IELTS Preparation">
          {education1.map((item, index) => (
            <TimelineItem item={item} key={`${item.title}-${index}`} />
          ))}
        </ResumeSection>
        <ResumeSection title="Business English">
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
