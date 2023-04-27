import classNames from 'classnames';
import { FC } from 'react';

type Props = {
  title: string;
  variant?: 'primary' | 'secondary';
};
const SectionHeader: FC<Partial<HTMLSpanElement> & Props> = ({
  title,
  variant = 'primary',
  className,
}) => {
  return (
    <span
      className={classNames(
        {
          " relative ml-5 text-lg uppercase text-primary before:absolute before:-left-3 before:top-1/2  before:h-px before:w-4 before:-translate-x-1/2 before:-translate-y-1/2  before:rounded-full before:bg-primary before:content-['']":
            variant === 'primary',
        },
        {
          'pt-12 text-sm font-bold uppercase text-secondary-text sm:pt-28':
            variant === 'secondary',
        },
        className
      )}
    >
      {title}
    </span>
  );
};

export default SectionHeader;
