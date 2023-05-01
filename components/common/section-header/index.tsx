import classNames from 'classnames';
import { FC } from 'react';

type Props = {
  title: string;
  subtitle?: string;
  variant?: 'primary' | 'secondary';
};
const SectionHeader: FC<Partial<HTMLSpanElement> & Props> = ({
  title,
  subtitle,
  variant = 'primary',
  className,
}) => {
  return (
    <div
      className={classNames('space-y-4', {
        'pt-12 sm:pt-28': variant === 'secondary',
      })}
    >
      <span
        className={classNames(
          {
            " relative ml-5 text-lg uppercase text-primary before:absolute before:-left-3 before:top-1/2  before:h-px before:w-4 before:-translate-x-1/2 before:-translate-y-1/2  before:rounded-full before:bg-primary before:content-['']":
              variant === 'primary',
          },
          {
            ' text-sm font-bold uppercase text-secondary-text ':
              variant === 'secondary',
          },
          className
        )}
      >
        {title}
      </span>
      <h1 className="text-2xl font-bold">{subtitle}</h1>
    </div>
  );
};

export default SectionHeader;
