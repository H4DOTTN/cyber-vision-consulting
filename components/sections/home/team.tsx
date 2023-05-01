import Button from '@common/button/Button';
import SectionHeader from '@common/section-header';
import hazem from '@images/hazem.png';
import Image, { StaticImageData } from 'next/image';
import Link from 'next/link';
import { BiLink } from 'react-icons/bi';
const Team = () => {
  return (
    <section className="flex w-full flex-col gap-4 sm:flex-row md:items-start md:gap-8 ">
      <div className="mb-8 flex flex-col items-center sm:items-start ">
        <SectionHeader
          title="Our Team"
          subtitle="We´re Ready For Your Services"
        />

        <Button className="mt-4">
          <span className="flex items-center gap-2">
            <span>View All</span>
            <BiLink />
          </span>
        </Button>
      </div>
      <div className="flex w-full flex-col  justify-around gap-4 sm:flex-row ">
        <TeamItem
          name="Safwen Ben Fredj"
          position="CEO, Founder"
          image={hazem}
          linkedin="https://www.linkedin.com/in/safwen-ben-fredj-777455162/"
        />
        <TeamItem
          name="Hazem Abdennadher"
          position="Co-Founder"
          image={hazem}
          linkedin="https://www.linkedin.com/in/hazem-abdennadher/"
        />
      </div>
    </section>
  );
};

const TeamItem = ({
  name,
  position,
  image,
  linkedin,
}: {
  name: string;
  position: string;
  image: StaticImageData;
  linkedin: string;
}) => {
  return (
    <div className="flex flex-col items-center gap-4 ">
      <Link
        target="_blank"
        rel="noopener noreferrer"
        href={linkedin}
        className="group relative h-48 w-48 overflow-hidden rounded-xl"
      >
        <div className="absolute left-0 top-0 z-10 flex h-full w-full cursor-pointer items-center justify-center bg-primary bg-opacity-0 transition-colors duration-300 ease-in-out will-change-auto group-hover:bg-opacity-30   ">
          <BiLink className="text-2xl text-white opacity-0 transition-opacity  duration-300 ease-in-out group-hover:opacity-100 " />
        </div>

        <Image
          src={image}
          alt={name}
          className="h-full w-full scale-100 rounded-xl object-cover transition-transform duration-300 ease-in-out group-hover:scale-110"
        />
      </Link>
      <div className="space-y-1 text-center">
        <h3 className="text-lg font-bold">{name}</h3>
        <p className="text-sm">{position}</p>
      </div>
    </div>
  );
};

export default Team;
