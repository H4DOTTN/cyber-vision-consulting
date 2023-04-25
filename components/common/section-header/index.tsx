import { FC } from 'react';

type Props = {
  title: string;
};
const SectionHeader: FC<Props> = ({ title }) => {
  return (
    <span className=" uppercase text-lg relative before:absolute before:content-[''] before:top-1/2 before:-translate-y-1/2 before:-translate-x-1/2  before:-left-3 before:w-4 before:h-px before:bg-primary  before:rounded-full text-primary ml-5">
      {title}
    </span>
  );
};

export default SectionHeader;
