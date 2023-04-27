import SectionHeader from '@/components/common/section-header';
import classNames from 'classnames';
import { IconType } from 'react-icons';
import { TbPencilPlus } from 'react-icons/tb';
import { MdOutlineContactSupport } from 'react-icons/md';
import { IoPricetagsOutline } from 'react-icons/io5';
import { CiDesktopMouse2 } from 'react-icons/ci';
import { BsShieldCheck } from 'react-icons/bs';
import { SiCountingworkspro } from 'react-icons/si';
const UniqueItemData = [
  {
    title: 'Customized Solutions',
    description:
      'We offer customized solutions to fit your needs. We understand that every business is different and we will work with you to find the best solution for your business.',
    Icon: TbPencilPlus,
    color: '#7286D3',
  },
  {
    title: 'Dedicated Support',
    description:
      'We offer dedicated support to all of our clients. We are here to help you with any questions or concerns you may have. Our team is available 24/7 to answer your questions and provide assistance.',
    Icon: MdOutlineContactSupport,
    color: '#FD8A8A',
  },
  {
    title: 'Affordable Pricing',
    description:
      'We offer affordable pricing for all of our services. We understand that every business is different and we will work with you to find the best solution for your budget.',
    Icon: IoPricetagsOutline,
    color: '#B2A4FF',
  },
  {
    title: 'Easy To Use',
    description:
      'We offer easy to use software that is designed for all skill levels. Our software is designed to be user friendly and easy to use.',
    Icon: CiDesktopMouse2,
    color: '#394867',
  },
  {
    title: 'Secure',
    description:
      'We offer secure software that is designed to protect your data. Our software is designed to be secure and protect your data from hackers, viruses, and other threats.',
    Icon: BsShieldCheck,
    color: '#87CBB9',
  },
  {
    title: 'Reliable',
    description:
      'We offer reliable software that is designed to be reliable and work when you need it. Our software is designed to be reliable and work when you need it.',
    Icon: SiCountingworkspro,
    color: '#05BFDB',
  },
];

const Unique = () => {
  return (
    <section className="h-full w-full">
      <div className="mb-14 flex flex-col items-center gap-4 text-center sm:mb-20 ">
        <SectionHeader title="What Makes Us Unique?" variant="secondary" />
        <h1 className="text-4xl font-bold">Developed With The User In Mind</h1>
      </div>
      <div className=" grid w-full  grid-cols-1 gap-x-12 gap-y-8 md:grid-cols-2 lg:grid-cols-3">
        {UniqueItemData.map((item, index) => (
          <UniqueItem
            key={index}
            title={item.title}
            description={item.description}
            Icon={item.Icon}
            color={item.color}
          />
        ))}
      </div>
    </section>
  );
};

const UniqueItem = ({
  title,
  description,
  Icon,
  color,
}: {
  title: string;
  description: string;
  Icon: IconType;
  color: string;
}) => {
  return (
    <div className="flex flex-row items-start gap-4 ">
      <div
        className={classNames(
          `flex aspect-square w-14 shrink-0 items-center justify-center rounded-xl  bg-inherit bg-opacity-20 p-4`
        )}
        style={{ backgroundColor: `${color}33` }}
      >
        <Icon color={color} className="h-full w-full" />
      </div>
      <div className="flex flex-col items-start gap-2">
        <h1 className="text-base font-bold">{title}</h1>
        <p className="text-sm text-secondary-text">{description}</p>
      </div>
    </div>
  );
};

export default Unique;
