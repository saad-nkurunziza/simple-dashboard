import Button from "./Button";

const Hero = () => {
  return (
    <section id="hero">
      <div className="flex flex-col-reverse items-center justify-center px-6 mt-10  gap-y-12 md:flex-row">
        <div className="flex flex-col mb-16 space-y-12 md:mb-32 md:w-1/2">
          {/*  */}
          <h1
            className="max-w-md text-3xl md:text-5xl  font-bold text-center  md:text-left
          md:leading-[65px]"
          >
            Bring everyone together to build better products
          </h1>
          <p className="max-w-sm leading-7 text-center  text-darkGrayishBlue md:text-left">
            Summit makes it simple for software teams to plan day-to-day tasks
            while keeping the larger team goals in view.
          </p>
          <div className="flex items-center justify-center gap-2 md:justify-start">
            <Button>Get Started</Button>
          </div>
        </div>
        <div className="md:w-1/2">
          <img src="/illustration-intro.svg" alt="" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
