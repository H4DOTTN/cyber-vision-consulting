import Meeting from '@icons/meeting.svg';

const Hero = () => {
  return (
    <section className="relative mr-0 h-screen  w-full">
      <div className=" z-10 flex h-full w-full flex-col-reverse  md:flex-row md:items-center">
        <div className="flex basis-1/2 flex-col items-start">
          <h1 className="mb-6 text-4xl uppercase text-primary">
            <span className="font-bold ">Cyber Vision </span> Consulting
          </h1>
          <p className="w-3/5 text-sm text-secondary-text">
            Cyber Vision Consulting is a leading provider of technology
            solutions and services for business. We are a single-source provider
            of technology products, IT solutions and services. We offer
            competitive pricing.
          </p>
        </div>
        <div className="z-10  mb-8 flex basis-1/2 items-center justify-center">
          {/* <Meeting style={{ width: '100%', height: '100%' }} /> */}
          <div className="consult" />
        </div>
      </div>
      <div className="absolute bottom-[80px] right-0 top-0 z-0 w-full bg-hero-pattern bg-contain bg-right-top bg-no-repeat" />
    </section>
  );
};

export default Hero;
