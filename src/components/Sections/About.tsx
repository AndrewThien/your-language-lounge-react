import classNames from 'classnames';
import {Armchair, CircleDotDashed, MousePointerClick} from 'lucide-react';
import Image from 'next/image';
import {FC, memo} from 'react';

import {aboutData, SectionId} from '../../data/data';
import Section from '../Layout/Section';

const About: FC = memo(() => {
  const {profileImageSrc, description1, description2, description3} = aboutData;
  return (
    <Section className="bg-white" sectionId={SectionId.About}>
      <div className="grid grid-cols-1 gap-y-4 md:grid-cols-4 items-center">
        {/* Profile pic */}
        {!!profileImageSrc && (
          <div className="col-span-1 flex justify-center md:justify-end">
            {' '}
            {/* Updated */}
            <div className="relative h-40 w-40 md:h-48 md:w-48 overflow-hidden rounded-xl">
              <Image alt="about-me-image" className="h-full w-full" src={profileImageSrc} />
            </div>
          </div>
        )}

        {/* Why us column */}
        <div className={classNames('col-span-1 md:col-span-3', {'md:order-first': !!profileImageSrc})}>
          {' '}
          {/* Updated */}
          <div className="flex flex-col gap-y-6">
            <h2 className="text-3xl font-bold text-black text-center md:text-left">Why Us?</h2>

            {/* Why us items */}
            <div className="flex flex-col gap-y-2">
              <div className="flex items-center">
                <h2 className="text-2xl font-bold text-black">Your Lounge</h2>
                <Armchair className="ml-2 mt-1" />
              </div>
              <p className="prose prose-sm text-black sm:prose-base">{description1}</p>

              <div className="flex">
                <h2 className="text-2xl font-bold text-black">Our Care</h2>
                <CircleDotDashed className="ml-2 mt-1" />
              </div>
              <p className="prose prose-sm text-black sm:prose-base">{description2}</p>
              <div className="flex">
                <h2 className="text-2xl font-bold text-black">Your Choice</h2>
                <MousePointerClick className="ml-2 mt-1" />
              </div>
              <p className="prose prose-sm text-black sm:prose-base">{description3}</p>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
});

About.displayName = 'About';
export default About;
