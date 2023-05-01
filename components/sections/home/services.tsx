import SectionHeader from '@common/section-header';
import Button from '@common/button/Button';
import { BiLink } from 'react-icons/bi';
import { IconType } from 'react-icons';
import { BsFileEarmarkCode } from 'react-icons/bs';

const Services = () => {
  return (
    <section className="flex h-full w-full flex-col gap-4 md:items-center md:gap-8 lg:flex-row">
      <div className="mb-8 flex basis-1/4 flex-col items-center  sm:items-start ">
        <SectionHeader
          title="Our Services"
          subtitle="   Services We´re Providing"
        />
        <p className="mt-1 text-sm">
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
      <div className="flex w-full basis-3/4 flex-col  items-center gap-8 md:flex-row md:items-center md:justify-end  ">
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
    <div className="group flex h-52 w-52 cursor-pointer flex-col items-center justify-center gap-4 rounded-xl text-primary shadow-lg transition-all duration-300 ease-in-out will-change-auto hover:bg-primary hover:text-white ">
      <div className="relative h-12 w-12">
        <Icon className="absolute left-1/2 top-1/2 h-full w-full -translate-x-1/2 -translate-y-1/2 transform  " />
      </div>
      <h3 className="text-center  text-sm">{title}</h3>
    </div>
  );
};

export default Services;
