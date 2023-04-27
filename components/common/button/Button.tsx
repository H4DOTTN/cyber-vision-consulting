import classNames from 'classnames';
import { FC } from 'react';
type Props = {
  children: React.ReactNode;
  className?: string;
  shape?: 'default' | 'rounded';
  variant?: 'primary' | 'secondary';
};
const Button: FC<Props> = ({
  children,
  shape = 'default',
  variant = 'primary',
  className,
}) => {
  return (
    <button
      className={classNames(
        className,
        'flex flex-row items-center justify-center gap-2  px-4 py-2 ',
        {
          'rounded-full': shape === 'rounded',
          'rounded-lg': shape === 'default',
        },
        {
          'bg-primary text-white': variant === 'primary',
          'border-[1px] border-primary bg-white text-primary':
            variant === 'secondary',
        }
      )}
    >
      {children}
    </button>
  );
};

export default Button;
