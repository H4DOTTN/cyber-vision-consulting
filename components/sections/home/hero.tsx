const Hero = () => {
  return (
    <section className="w-full h-screen flex flex-col md:flex-row  md:items-center">
      <div className="basis-1/2 flex flex-col items-center justify-center">
        <h1 className="text-primary uppercase text-2xl">
          <span className="font-bold ">Cyber Vision </span> Consulting
        </h1>
        <p>Cyber Vision provides state of the art solutions to independent</p>
      </div>
      <div className="basis-1/2 flex items-center justify-center">
        <h1>Logo Here</h1>
      </div>
    </section>
  );
};

export default Hero;
