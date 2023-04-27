import Button from '@/components/common/button/Button';
import SectionHeader from '@/components/common/section-header';
import SpecialSection from '@/components/common/special-section';

const GetStarted = () => {
  return (
    <SpecialSection>
      <div className="max-w-6xl">
        <div className="flex flex-col items-center gap-4 text-center ">
          <SectionHeader className="text-white" title="" variant="secondary" />
          <h1 className="text-4xl font-bold">
            Get Started With Cyber Vision Today!
          </h1>
          <p className=" text-white text-opacity-70 ">
            Cyber Vision Consulting offers a complete platform for consumers and
            businesses to enter the world.
          </p>
          <Button variant="secondary">Start Now</Button>
        </div>
      </div>
    </SpecialSection>
  );
};

export default GetStarted;
