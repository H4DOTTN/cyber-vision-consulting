import Button from '@common/button/Button';
import SectionHeader from '@common/section-header';
import hazem from '@images/hazem.png';
import Image, { StaticImageData } from 'next/image';
import Link from 'next/link';
import { BiLink } from 'react-icons/bi';
const Team = () => {
  return (
    <section className="w-full flex flex-col gap-4 sm:flex-row md:gap-8 md:items-start ">
      <div className="flex flex-col items-center sm:items-start mb-8 ">
        <SectionHeader title="Our Team" />

        <h2 className="text-2xl font-bold text-primary ">
          We´re Ready For Your Services
        </h2>
        <Button className="mt-4">
          <span className="flex items-center gap-2">
            <span>View All</span>
            <BiLink />
          </span>
        </Button>
      </div>
      <div className="flex flex-col gap-4  sm:flex-row justify-around w-full ">
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
        className="w-48 h-48 relative group rounded-xl overflow-hidden"
      >
        <div className="cursor-pointer z-10 absolute will-change-auto transition-colors duration-300 ease-in-out bg-primary top-0 left-0 w-full h-full flex items-center justify-center bg-opacity-0 group-hover:bg-opacity-30   ">
          <BiLink className="text-2xl opacity-0 group-hover:opacity-100 transition-opacity  duration-300 ease-in-out text-white " />
        </div>

        <Image
          src={image}
          alt={name}
          className="w-full h-full object-cover rounded-xl scale-100 group-hover:scale-110 transition-transform duration-300 ease-in-out"
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
