import Button from "./Button";

const Hero = () => {
  return (
    <section id="hero">
      <div className=" flex justify-center flex-col-reverse gap-y-12 items-center px-6 mt-10 md:flex-row">
        <div className="flex flex-col mb-16 md:mb-32 space-y-12 md:w-1/2">
          {/*  */}
          <h1
            className="max-w-md text-3xl md:text-5xl  font-bold text-center  md:text-left
          md:leading-[65px]"
          >
            Bring everyone together to build better products
          </h1>
          <p className=" text-center text-darkGrayishBlue md:text-left max-w-sm leading-7">
            Summit makes it simple for software teams to plan day-to-day tasks
            while keeping the larger team goals in view.
          </p>
          <div className="flex gap-2 justify-center md:justify-start items-center">
            <Button>Get Started</Button>
            {/* <Button outlined>Add It</Button> */}
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
