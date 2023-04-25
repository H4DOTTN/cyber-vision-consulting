import classNames from 'classnames';
import { FC } from 'react';

type Props = {
  width?: 'sm' | 'lg';
};
const PulsePlus: FC<Props> = ({ width }) => {
  return (
    <div
      className={classNames(
        ' w-7 aspect-square relative',
        {
          'w-8': width === 'lg',
          'w-6': width === 'sm',
        },
        'before:absolute before:top-1/2 before:-translate-y-1/2 before:left-1/2 before:-translate-x-1/2 before:w-3 before:h-3 before:bg-primary before:rounded-full before:animate-pulse before:animate-slow before:animate-infinite',
        { 'before:w-4 before:h-4': width === 'lg' },
        { 'before:w-2 before:h-2': width === 'sm' },
        'after:absolute after:top-1/2 after:-translate-y-1/2 after:left-1/2 after:-translate-x-1/2 after:w-3 after:h-3 after:bg-primary after:rounded-full after:animate-pulse after:animate-slow after:animate-infinite',
        { 'after:w-4 after:h-4': width === 'lg' },
        { 'after:w-2 after:h-2': width === 'sm' }
      )}
    />
  );
};

export default PulsePlus;
