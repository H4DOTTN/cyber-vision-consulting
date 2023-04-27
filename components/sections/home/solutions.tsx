import SectionHeader from '@/components/common/section-header';
import SpecialSection from '@/components/common/special-section';
import { mapValuesInRange } from '@utils/animations';
import classNames from 'classnames';
import { MouseEvent, useEffect, useLayoutEffect, useRef } from 'react';

const Solutions = () => {
  return (
    <SpecialSection>
      <div className="max-w-6xl">
        <div className="mb-14 flex flex-col items-center gap-4 text-center ">
          <SectionHeader
            className="text-white"
            title="THE COMPLETE PLATFORM"
            variant="secondary"
          />
          <h1 className="text-4xl font-bold">Solutions For Everyone</h1>
          <p className="max-w-[80%] text-white text-opacity-70 ">
            Cyber Vision Consulting offers a complete platform for consumers and
            businesses to enter the world.
          </p>
        </div>
        <div className="flex flex-col gap-8 ">
          <div className="flex flex-col  gap-8 md:flex-row md:items-center md:justify-between">
            <SolutionItem title="Consumer" />
            <SolutionItem title="Business" />
          </div>
          <div className="flex flex-col  gap-8 md:flex-row  md:items-center md:justify-between">
            <SolutionItem title="Enterprise" />
            <SolutionItem title="Enterprise" />
          </div>
          <div className="flex">
            <SolutionItem title="Enterprise" />
          </div>
        </div>
      </div>
    </SpecialSection>
  );
};

const SolutionItem = ({ title }: { title: string }) => {
  return (
    <div className="bubble  flex-grow basis-[40%] cursor-pointer rounded-lg border-[1px] border-white border-opacity-[0.22] bg-white bg-opacity-[0.22] p-6 text-center text-white transition-all duration-300 ease-in-out will-change-auto hover:bg-opacity-100 hover:text-primary ">
      <h1 className="text-lg  font-bold">{title}</h1>
    </div>
  );
};

export default Solutions;
