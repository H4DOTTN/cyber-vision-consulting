import classNames from 'classnames';
import { FC } from 'react';
type Props = {
  children: React.ReactNode;
  className?: string;
  shape?: 'default' | 'rounded';
};
const Button: FC<Props> = ({ children, shape = 'default', className }) => {
  return (
    <button
      className={classNames(
        className,
        'flex items-center flex-row justify-center gap-2 bg-primary  text-white px-4 py-2',
        {
          'rounded-full': shape === 'rounded',
          'rounded-lg': shape === 'default',
        }
      )}
    >
      {children}
    </button>
  );
};

export default Button;
