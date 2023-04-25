import Image, { StaticImageData } from 'next/image';
import { IconType } from 'react-icons';
import { HiOutlineCalendarDays } from 'react-icons/hi2';
import { RiTeamLine } from 'react-icons/ri';
import { BiCoffeeTogo } from 'react-icons/bi';
import { BsAward } from 'react-icons/bs';
const Achievements = () => {
  return (
    <section className="w-full ">
      <div className="flex flex-col items-center justify-center mx-auto mb-8  max-w-lg text-center  ">
        <h2 className="text-2xl font-bold text-primary ">Our Achievements</h2>
        <p className="text-sm mt-1">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
          voluptates, quod, quia, voluptate quae voluptatem quibusdam
          necessitatibus voluptas dolorum quas quidem. Quisquam, quae. Quisquam
        </p>
      </div>
      <div className="flex flex-col gap-4 items-center sm:flex-row sm:justify-around ">
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
    </section>
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
    <div className="w-52 h-52 flex flex-col items-center justify-center rounded-xl gap-4 hover:shadow-lg transition-shadow duration-300 ease-out cursor-pointer ">
      <div className="w-12 h-12 relative">
        <Icon className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full text-primary" />
      </div>
      <div className="space-y-1 text-center">
        <h3 className="text-lg font-bold">{title}</h3>
        <p className="text-sm">{description}</p>
      </div>
    </div>
  );
};

export default Achievements;
