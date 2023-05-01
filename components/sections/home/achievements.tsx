import Image, { StaticImageData } from 'next/image';
import { IconType } from 'react-icons';
import { HiOutlineCalendarDays } from 'react-icons/hi2';
import { RiTeamLine } from 'react-icons/ri';
import { BiCoffeeTogo } from 'react-icons/bi';
import { BsAward } from 'react-icons/bs';
import SpecialSection from '@/components/common/special-section';
import SectionHeader from '@/components/common/section-header';
const Achievements = () => {
  return (
    <SpecialSection>
      <div className="mx-auto mb-8 flex max-w-lg flex-col items-center  justify-center text-center  ">
        <SectionHeader
          title="What makes us proud"
          variant="secondary"
          className="text-white"
          subtitle="Our Achievements"
        />
        <p className="mt-1 text-sm">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
          voluptates, quod, quia, voluptate quae voluptatem quibusdam
          necessitatibus voluptas dolorum quas quidem. Quisquam, quae. Quisquam
        </p>
      </div>
      <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-around ">
        <AchievementItem
          title="3900+"
          description="Days Worked"
          Icon={HiOutlineCalendarDays}
        />

        <AchievementItem
          title="50+"
          description="Project Finished"
          Icon={BsAward}
        />

        <AchievementItem
          title="2+"
          description="Team Members"
          Icon={RiTeamLine}
        />

        <AchievementItem
          title="10+"
          description="Happy Clients"
          Icon={BiCoffeeTogo}
        />
      </div>
    </SpecialSection>
  );
};

const AchievementItem = ({
  title,
  description,
  Icon,
}: {
  title: string;
  description: string;
  Icon: IconType;
}) => {
  return (
    <div className="flex h-52 w-52 cursor-pointer flex-col items-center justify-center gap-4 rounded-xl transition-shadow duration-300 ease-out hover:shadow-lg  ">
      <div className="relative h-12 w-12">
        <Icon className="absolute left-1/2 top-1/2 h-full w-full -translate-x-1/2 -translate-y-1/2 transform " />
      </div>
      <div className="space-y-1 text-center">
        <h3 className="text-lg font-bold">{title}</h3>
        <p className="text-sm">{description}</p>
      </div>
    </div>
  );
};

export default Achievements;
