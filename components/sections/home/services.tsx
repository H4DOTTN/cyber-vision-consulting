import SectionHeader from '@common/section-header';
import Button from '@common/button/Button';
import { BiLink } from 'react-icons/bi';
import { IconType } from 'react-icons';
import { BsFileEarmarkCode } from 'react-icons/bs';

const Services = () => {
  return (
    <section className="w-full h-full flex flex-col gap-4 lg:flex-row md:gap-8 md:items-center">
      <div className="flex flex-col items-center sm:items-start mb-8  basis-1/4 ">
        <SectionHeader title="Our Services" />
        <h2 className="text-2xl font-bold text-primary ">
          Services We´re Providing
        </h2>
        <p className="text-sm mt-1">
          Cyber Vision provides state of the art solutions to independent
          community. We strive to build strong relationships with our customers,
          business partners, and employees and to provide them with unsurpassed
          support.
        </p>
        <Button className="mt-4">
          <span className="flex items-center gap-2">
            <span>View More</span>
            <BiLink />
          </span>
        </Button>
      </div>
      <div className="w-full flex flex-col items-center  md:flex-row md:items-center md:justify-end gap-8 basis-3/4  ">
        <div>
          <ServiceItem title="Web Development" Icon={BsFileEarmarkCode} />
        </div>
        <div className="flex flex-col gap-8">
          <ServiceItem title="Web Development" Icon={BsFileEarmarkCode} />
          <ServiceItem title="Web Development" Icon={BsFileEarmarkCode} />
        </div>
        <div>
          <ServiceItem title="Web Development" Icon={BsFileEarmarkCode} />
        </div>
      </div>
    </section>
  );
};

const ServiceItem = ({
  title,
  Icon,
}: {
  title: string;

  Icon: IconType;
}) => {
  return (
    <div className="w-52 h-52 flex flex-col items-center will-change-auto transition-all duration-300 ease-in-out justify-center rounded-xl gap-4 shadow-lg cursor-pointer group hover:bg-primary hover:text-white text-primary ">
      <div className="w-12 h-12 relative">
        <Icon className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full  " />
      </div>
      <h3 className="text-sm  text-center">{title}</h3>
    </div>
  );
};

export default Services;
