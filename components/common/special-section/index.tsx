import { mapValuesInRange } from '@/utils/animations';
import classNames from 'classnames';
import { MouseEvent, useRef } from 'react';

const SpecialSection = ({ children }: { children: React.ReactNode }) => {
  const bubbleContainerRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!bubbleContainerRef.current) return;
    const { width, height, top, bottom } =
      bubbleContainerRef.current.getBoundingClientRect();
    const { clientX, clientY } = e;
    const x = clientX - width / 2;
    const y = mapValuesInRange(clientY, top, bottom, -height / 2, height / 2);
    const topLeft = {
      x: mapValuesInRange(x, -width / 2, width / 2, -12, 12),
      y: mapValuesInRange(y, -height / 2, height / 2, -12, 12),
    };
    const keyframes: Keyframe[] = [
      {
        transform: `translate(${topLeft.x}%, ${topLeft.y}%)`,
      },
    ];
    const options: KeyframeAnimationOptions = {
      duration: 800,
      easing: 'ease-in-out',
      fill: 'forwards',
    };

    //select the divs inside the bubbleContainerRef and animate them

    const bubbles = bubbleContainerRef.current.querySelectorAll('div');
    bubbles.forEach((bubble) => {
      bubble.animate(keyframes, options);
    });
  };
  return (
    <section
      onMouseMove={handleMouseMove}
      className="solutions relative mx-0 grid h-max w-full max-w-none place-content-center  overflow-hidden px-2 py-20  text-white lg:px-10 lg:pb-32  lg:pt-10"
    >
      <div
        ref={bubbleContainerRef}
        className="absolute  left-0 top-0 -z-0 h-full w-full opacity-[0.18]"
      >
        <Bubble
          size="xl"
          className="bottom-[28vh] left-[50%] right-[0] top-[0]"
        />
        <Bubble
          size="lg"
          className="bottom-[27vh] left-[0] right-[72%] top-[0]"
        />
        <Bubble
          size="md"
          className="bottom-[59vh] left-[0] right-[26%] top-[0]"
        />
        <Bubble
          size="xs"
          className="bottom-[6vh] left-[0] right-[7%] top-[50%]"
        />
        <Bubble
          size="md"
          className="bottom-[-43vh] left-[71%] right-[0] top-[80%]"
        />
        <Bubble
          size="sm"
          className="bottom-[-43vh] left-[5%] right-[0] top-[80%]"
        />
      </div>
      <div className="relative z-10">{children}</div>
    </section>
  );
};

export default SpecialSection;

const Bubble = ({
  size,
  className,
}: {
  size: 'xl' | 'lg' | 'md' | 'sm' | 'xs';
  className?: string;
}) => {
  return (
    <div
      className={classNames(
        `absolute aspect-square rounded-full bg-white blur-md `,
        { [`w-[36vh]`]: size === 'xl' },
        { [`w-[20vh]`]: size === 'lg' },
        { [`w-[15vh]`]: size === 'md' },
        { [`w-[12vh]`]: size === 'sm' },
        { [`w-[8vh]`]: size === 'xs' },
        className
      )}
    ></div>
  );
};
